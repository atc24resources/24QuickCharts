const airportDatabase = {
  "IBAR": "Barra Airport",
  "IHEN": "Henstridge Airfield",
  "ILAR": "Larnaca International Airport",
  "IIAB": "McConnell Air Force Base",
  "IPAP": "Paphos International Airport",
  "IGRV": "Grindavik Airport",
  "IJAF": "Al Najaf Airport",
  "IZOL": "Izolirani International Airport",
  "ISCM": "RAF Scampton",
  "IDCS": "Saba Airport",
  "ITKO": "Tokyo-Orenji International Airport",
  "ILKL": "Lukla Airport",
  "IPPH": "Perth International Airport",
  "IGAR": "Air Base Garry",
  "IBLT": "Boltic Airfield",
  "IRFD": "Greator Rockford International Airport",
  "IMLR": "Mellor International Airport",
  "ITRC": "Training Center",
  "IBTH": "Saint Barthélemy Airport",
  "IUFO": "UFO Base",
  "ISAU": "Sauthamptona Airport",
  "ISKP": "Skopelos Airfield"
};

function init() {
  // Initialize UI elements
  document.getElementById("image-viewer").style.display = "none";
  document.getElementById("search-results").style.display = "none";
  
  // Initialize pinned sidebar
  initPinnedSidebar();
  
  // Search functionality
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", liveSearch);
  }

  // Enter key handler
  document.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
      if (document.querySelector('.header').classList.contains('search-hidden')) {
        openSearch();
        e.preventDefault();
      } else {
        loadCharts();
        e.preventDefault();
      }
    }
    
    // F key to recenter chart
    if (e.key.toLowerCase() === 'f' && document.getElementById("image-viewer").style.display === "flex") {
      recenterImage();
      e.preventDefault();
    }
  });

  // Search button click handler
  const searchButton = document.getElementById("search-button");
  if (searchButton) {
    searchButton.addEventListener("click", loadCharts);
  }
  
  // Image viewer setup
  setupImageViewer();

  // Theme toggle button
  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
  }

  // Credits toggle button
  const creditsToggle = document.getElementById("credits-toggle");
  if (creditsToggle) {
    creditsToggle.addEventListener("click", function() {
      toggleCredits(true);
    });
  }

  // Search toggle button
  const searchToggle = document.getElementById("toggle-search");
  if (searchToggle) {
    searchToggle.addEventListener("click", openSearch);
  }

  // Pinned charts button
  const pinnedButton = document.getElementById("show-pinned");
  if (pinnedButton) {
    pinnedButton.addEventListener("click", togglePinnedSidebar);
  }

  // Make recenterImage globally available
  window.recenterImage = recenterImage;

  // Initialize pin notification element
  const pinNotification = document.createElement('div');
  pinNotification.className = 'pin-notification';
  document.body.appendChild(pinNotification);
}

function togglePinnedSidebar() {
  const sidebar = document.getElementById('pinned-sidebar');
  sidebar.classList.toggle('open');
  updatePinnedSidebar();
}

function updatePinnedSidebar() {
  const list = document.getElementById('pinned-charts-list');
  list.innerHTML = '';

  let pinnedCharts = {};
  try {
    const storedCharts = localStorage.getItem('pinnedCharts');
    if (storedCharts) {
      pinnedCharts = JSON.parse(storedCharts);
    }
  } catch (e) {
    console.error("Error parsing pinned charts:", e);
  }

  if (Object.keys(pinnedCharts).length === 0) {
    list.innerHTML = '<div class="no-pinned-charts">No pinned charts yet</div>';
    return;
  }

  // Group by airport
  for (const [airportCode, charts] of Object.entries(pinnedCharts)) {
    const airportName = airportDatabase[airportCode] || airportCode;

    // Create airport group container
    const airportGroup = document.createElement('div');
    airportGroup.className = 'pinned-airport-group';

    // Create airport header
    const airportHeader = document.createElement('div');
    airportHeader.className = 'pinned-airport-header';
    airportHeader.innerHTML = `
      <span>${airportCode} - ${airportName}</span>
      <span>${charts.length} chart${charts.length !== 1 ? 's' : ''}</span>
    `;
    airportGroup.appendChild(airportHeader);

    // Add charts for this airport
    charts.forEach(chart => {
      const chartItem = document.createElement('div');
      chartItem.className = 'pinned-chart-item';
      chartItem.innerHTML = `
        <span>${chart.name}</span>
        <button class="remove-pin" onclick="removePinnedChart(event, '${airportCode}', '${chart.url}')">
          <i class="fas fa-times"></i>
        </button>
      `;
      chartItem.onclick = (e) => {
        if (!e.target.classList.contains('remove-pin') && !e.target.closest('.remove-pin')) {
          openImage(chart.url);
        }
      };
      airportGroup.appendChild(chartItem);
    });

    list.appendChild(airportGroup);
  }
}

function removePinnedChart(event, airportCode, chartUrl) {
  event.stopPropagation();
  
  let pinnedCharts = JSON.parse(localStorage.getItem('pinnedCharts') || '{}');
  
  if (pinnedCharts[airportCode]) {
    pinnedCharts[airportCode] = pinnedCharts[airportCode].filter(chart => chart.url !== chartUrl);
    
    if (pinnedCharts[airportCode].length === 0) {
      delete pinnedCharts[airportCode];
    }
    
    localStorage.setItem('pinnedCharts', JSON.stringify(pinnedCharts));
    updatePinnedSidebar();
    showPinNotification('Chart unpinned!');
    
    // Also update the pin status in the main view
    const chartButtons = document.querySelectorAll('.chart-button[data-pdf="' + chartUrl + '"]');
    chartButtons.forEach(button => {
      button.classList.remove('pinned');
    });
  }
}

function showPinNotification(message) {
  const pinNotification = document.querySelector('.pin-notification');
  pinNotification.textContent = message;
  pinNotification.style.display = 'block';
  
  setTimeout(() => {
    pinNotification.style.display = 'none';
  }, 2500);
}

// Add the liveSearch function
function liveSearch() {
  const searchTerm = document.getElementById("search-input").value.toUpperCase();
  const searchResults = document.getElementById("search-results");
  
  if (searchTerm.length < 2) {
    searchResults.innerHTML = "";
    searchResults.style.display = "none";
    return;
  }
  
  const results = [];
  
  // Search through airport database
  for (const [code, name] of Object.entries(airportDatabase)) {
    if (code.includes(searchTerm) || name.toUpperCase().includes(searchTerm)) {
      results.push({ code, name });
    }
  }
  
  if (results.length > 0) {
    searchResults.innerHTML = results.map(result => 
      `<div class="search-result" onclick="selectSearchResult('${result.code}')">
        <strong>${result.code}</strong> - ${result.name}
      </div>`
    ).join("");
    searchResults.style.display = "block";
  } else {
    searchResults.innerHTML = "<div class='no-results'>No airports found</div>";
    searchResults.style.display = "block";
  }
}

// Add the selectSearchResult function
function selectSearchResult(airportCode) {
  document.getElementById("search-input").value = airportCode;
  document.getElementById("search-results").style.display = "none";
  loadCharts();
}

const chartData = {
  ISAU: {
    GEN: [
      { name: "General Information by <b>AeroNav</b>", pdf: "charts/ISAU/GEN/AeroNav/General Information.jpg" },
      { name: "De-Icing Procedures by <b>AeroNav</b>", pdf: "charts/ISAU/GEN/AeroNav/De-Icing Prodecuders.jpg" },
      { name: "Suggested Departures and Arrivals by <b>AeroNav</b>", pdf: "charts/ISAU/GEN/AeroNav/Suggested STAR and SID.jpg" },
      { name: "General Information by <b>AeroNav</b>", pdf: "charts/ISAU/GEN/AeroNav/General Information.jpg" },

      { name: "Airport Procedures by <b>PlutonFordo</b>", pdf: "charts/ISAU/GEN/PlutonFordo/Airports Procedures.jpg" },
      { name: "Airport Procedures CONT by <b>PlutonFordo</b>", pdf: "charts/ISAU/GEN/PlutonFordo/Airports Procedures CONT.jpg" },
      { name: "VFR Sectional Chart by <b>PlutonFordo</b>", pdf: "charts/ISAU/GEN/PlutonFordo/VFR Chart.jpg" },

      { name: "Airport Briefing by <b>userwastaken, Nikita39Gamer</b>", pdf: "charts/ISAU/GEN/userwastaken, Nikita39Gamer/Airport Briefing.jpg" },
      { name: "Airport Briefing CONT by <b>userwastaken, Nikita39Gamer</b>", pdf: "charts/ISAU/GEN/userwastaken, Nikita39Gamer/Airport Briefing CONT.jpg" },
      { name: "Airport Briefing CONT II by <b>userwastaken, Nikita39Gamer</b>", pdf: "charts/ISAU/GEN/userwastaken, Nikita39Gamer/Airport Briefing CONT II.jpg" },
      { name: "AirSpace Chart by <b>userwastaken, Nikita39Gamer</b>", pdf: "charts/ISAU/GEN/userwastaken, Nikita39Gamer/AIRSPACE CHART.jpg" },
      { name: "CRIB Sheet by <b>userwastaken, Nikita39Gamer</b>", pdf: "charts/ISAU/GEN/userwastaken, Nikita39Gamer/CRIB SHEET.jpg" }

    ],
    GND: [
      { name: "Airport Diagram from <b>PTFS.xyz/chart</b>", pdf: "charts/ISAU/GND/ISAU Ground Chart.jpg" }
    ],
    SID: {
      authors: {
        "AeroNav": [
          { name: "BORDER1 - (BRDR1) ", pdf: "charts/ISAU/SID/AeroNav/BORDER1 (BRDR1).jpg" },
          { name: "ECHHO1 - (ECCHO1)", pdf: "charts/ISAU/SID/AeroNav/ECHHO1 (ECCHO1).jpg" },
          { name: "SAUTHEMPTONA1 - (SAU1)", pdf: "charts/ISAU/SID/AeroNav/SAUTHEMPTONA 1 (SAU1).jpg" },
          { name: "SAYOW1 RNAV", pdf: "charts/ISAU/SID/AeroNav/SAYOW1 RNAV.jpg" },
          { name: "ZZOOO1 RNAV", pdf: "charts/ISAU/SID/AeroNav/ZZOOO1 RNAV.jpg" }
        ],
        "PlutonFordo": [
          { name: "ALDER1D RNAV RWY 08", pdf: "charts/ISAU/SID/PlutonFordo/ALDER1D RNAV RWY 08.jpg" },
          { name: "ALDER1L RNAV RWY 26", pdf: "charts/ISAU/SID/PlutonFordo/ALDER1L RNAV RWY 26.jpg" },
          { name: "ROBUX1D RNAV RWY 08", pdf: "charts/ISAU/SID/PlutonFordo/ROBUX1D RNAV RWY 08.jpg" },
          { name: "ROBUX1L RNAV RWY 26", pdf: "charts/ISAU/SID/PlutonFordo/ROBUX1L RNAV RWY 26.jpg" },
          { name: "SHREK1D RNAV RWY 08", pdf: "charts/ISAU/SID/PlutonFordo/SHREK1D RNAV RWY 08.jpg" },
          { name: "SHREK1L RNAV RWY 26", pdf: "charts/ISAU/SID/PlutonFordo/SHREK1L RNAV RWY 26.jpg" },
          { name: "SPACE1D RNAV RWY 08", pdf: "charts/ISAU/SID/PlutonFordo/SPACE1D RNAV RWY 08.jpg" },
          { name: "SPACE1L RNAV RWY 26", pdf: "charts/ISAU/SID/PlutonFordo/SPACE1L RNAV RWY 26.jpg" }
        ],
        "userwastaken, Nikita39Gamer": [
          { name: "ALDER1J RNAV RWY 08", pdf: "charts/ISAU/SID/userwastaken, Nikita39Gamer/ALDER1J RNAV RWY 08.jpg" },
          { name: "ALDER1K RWY 08", pdf: "charts/ISAU/SID/userwastaken, Nikita39Gamer/ALDER1K RWY 08.jpg" },
          { name: "ALDER1L RNAV RWY 26", pdf: "charts/ISAU/SID/userwastaken, Nikita39Gamer/ALDER1L RNAV RWY 26.jpg" },
          { name: "ALDER1M RWY 26", pdf: "charts/ISAU/SID/userwastaken, Nikita39Gamer/ALDER1M RWY 26.jpg" },
          { name: "BEANS1J RNAV RWY 08", pdf: "charts/ISAU/SID/userwastaken, Nikita39Gamer/BEANS1J RNAV RWY 08.jpg" },
          { name: "BEANS1K RWY 08", pdf: "charts/ISAU/SID/userwastaken, Nikita39Gamer/BEANS1K RWY 08.jpg" },
          { name: "BEANS1L RNAV RWY 26", pdf: "charts/ISAU/SID/userwastaken, Nikita39Gamer/BEANS1L RNAV RWY 26.jpg" },
          { name: "BEANS1M RWY 26", pdf: "charts/ISAU/SID/userwastaken, Nikita39Gamer/BEANS1M RWY 26.jpg" },
          { name: "SHREK1J RNAV RWY 08", pdf: "charts/ISAU/SID/userwastaken, Nikita39Gamer/SHREK1J RNAV RWY 08.jpg" },
          { name: "SHREK1K RWY 08", pdf: "charts/ISAU/SID/userwastaken, Nikita39Gamer/SHREK1K RWY 08.jpg" },
          { name: "SHREK1L RNAV RWY 26", pdf: "charts/ISAU/SID/userwastaken, Nikita39Gamer/SHREK1L RNAV RWY 26.jpg" },
          { name: "SHREK1M RWY 26", pdf: "charts/ISAU/SID/userwastaken, Nikita39Gamer/SHREK1M RWY 26.jpg" },
          { name: "SPACE1J RNAV RWY 08", pdf: "charts/ISAU/SID/userwastaken, Nikita39Gamer/SPACE1J RNAV RWY 08.jpg" },
          { name: "SPACE1K RWY 08", pdf: "charts/ISAU/SID/userwastaken, Nikita39Gamer/SPACE1K RWY 08.jpg" },
          { name: "SPACE1L RNAV RWY 26", pdf: "charts/ISAU/SID/userwastaken, Nikita39Gamer/SPACE1L RNAV RWY 26.jpg" },
          { name: "SPACE1M RWY 26", pdf: "charts/ISAU/SID/userwastaken, Nikita39Gamer/SPACE1M RWY 26.jpg" }
        ]
      }
    },
    STAR: {
      authors: {
        "AeroNav": [
          { name: "ALDER1 RNAV", pdf: "charts/ISAU/STAR/AeroNav/ALDER 1 RNAV.jpg" },
          { name: "BORDER1 (BRDR1)", pdf: "charts/ISAU/STAR/AeroNav/BORDER1 (BRDR1).jpg" },
          { name: "ECHHO1", pdf: "charts/ISAU/STAR/AeroNav/ECHHO1 (ECCHO1).jpg" },
          { name: "GEORG1 RNAV", pdf: "charts/ISAU/STAR/AeroNav/GEORG1 RNAV.jpg" },
          { name: "SAUTHEMPTONA1 (SAU1)", pdf: "charts/ISAU/STAR/AeroNav/SAUTHEMPTONA 1 (SAU1).jpgf" },
          { name: "SAYOW1 RNAV", pdf: "charts/ISAU/STAR/AeroNav/SAYOW1 RNAV.jpg" },
          { name: "VYDDA1 RNAV", pdf: "charts/ISAU/STAR/AeroNav/VYDDA1 RNAV.jpg" },
          { name: "ZZOOO1 RNAV", pdf: "charts/ISAU/STAR/AeroNav/ZZOOO1 RNAV.jpg" }
        ],
        "PlutonFordo": [
          { name: "ALDER1B RNAV RWY 08", pdf: "charts/ISAU/STAR/PlutonFordo/ALDER1B RNAV RWY 08.jpg" },
          { name: "ALDER1N RNAV RWY 26", pdf: "charts/ISAU/STAR/PlutonFordo/ALDER1N RNAV RWY 26.jpg" },
          { name: "ROBUX1B RNAV RWY 08", pdf: "charts/ISAU/STAR/PlutonFordo/ROBUX1B RNAV RWY08.jpg" },
          { name: "ROBUX1N RNAV RWY 26", pdf: "charts/ISAU/STAR/PlutonFordo/ROBUX1N RNAV RWY 26.jpg" },
          { name: "SHREK1B RNAV RWY 08", pdf: "charts/ISAU/STAR/PlutonFordo/SHREK1B RNAV RWY 08.jpg" },
          { name: "SHREK1N RNAV RWY 26", pdf: "charts/ISAU/STAR/PlutonFordo/SHREK1N RNAV RWY 26.jpg" },
          { name: "SPACE1B RNAV RWY 08", pdf: "charts/ISAU/STAR/PlutonFordo/SPACE1B RNAV RWY 08.jpg" },
          { name: "SPACE1N RNAV RWY 26", pdf: "charts/ISAU/STAR/PlutonFordo/SPACE1N RNAV RWY 26.jpg" }
        ],
        "userwastaken, Nikita39Gamer": [
          { name: "ALDER1R RNAV", pdf: "charts/ISAU/STAR/userwastaken, Nikita39Gamer/ALDER1R RNAV.jpg" },
          { name: "ALDER1S RNAV RWY 08", pdf: "charts/ISAU/STAR/userwastaken, Nikita39Gamer/ALDER1S RNAV RWY 08.jpg" },
          { name: "ALDER1T RNAV RWY 26", pdf: "charts/ISAU/STAR/userwastaken, Nikita39Gamer/ALDER1T RNAV RWY 26.jpg" },
          { name: "BEANS1R RNAV", pdf: "charts/ISAU/STAR/userwastaken, Nikita39Gamer/BEANS1R RNAV.jpg" },
          { name: "BEANS1S RNAV RWY 08", pdf: "charts/ISAU/STAR/userwastaken, Nikita39Gamer/BEANS1S RNAV RWY 08.jpg" },
          { name: "BEANS1T RNAV RWY 26", pdf: "charts/ISAU/STAR/userwastaken, Nikita39Gamer/BEANS1T RNAV RWY 26.jpg" },
          { name: "SHREK1R RNAV", pdf: "charts/ISAU/STAR/userwastaken, Nikita39Gamer/SHREK1R RNAV.jpg" },
          { name: "SHREK1S RNAV RWY 08", pdf: "charts/ISAU/STAR/userwastaken, Nikita39Gamer/SHREK1S RNAV RWY 08.jpg" },
          { name: "SHREK1T RNAV RWY 26", pdf: "charts/ISAU/STAR/userwastaken, Nikita39Gamer/SHREK1T RNAV RWY 26.jpg" },
          { name: "SPACE1R RNAV", pdf: "charts/ISAU/STAR/userwastaken, Nikita39Gamer/SPACE1R RNAV.jpg" },
          { name: "SPACE1S RNAV RWY 08", pdf: "charts/ISAU/STAR/userwastaken, Nikita39Gamer/SPACE1S RNAV RWY 08.jpg" },
          { name: "SPACE1T RNAV RWY 26", pdf: "charts/ISAU/STAR/userwastaken, Nikita39Gamer/SPACE1T RNAV RWY 26.jpg" }
        ]
      }
    },
    APP: {
      authors: {
        "AeroNav": [
          { name: "ILS or LOC RWY 8", pdf: "charts/ISAU/APP/AeroNav/ILS 8.jpg" },
          { name: "ILS or LOC RWY 26", pdf: "charts/ISAU/APP/AeroNav/ILS 26.jpg" },
          { name: "RNAV (GPS) RWY 8", pdf: "charts/ISAU/APP/AeroNav/RNAV (GPS) 8.jpg" },
          { name: "RNAV (GPS) RWY 26", pdf: "charts/ISAU/APP/AeroNav/RNAV (GPS) 26.jpg" }
        ],
        "PlutonFordo": [
          { name: "IILS/DME RWY 08", pdf: "charts/ISAU/APP/PlutonFordo/ILS_DME RWY 08.jpg" },
          { name: "ILS/DME RWY 26", pdf: "charts/ISAU/APP/PlutonFordo/ILS_DME RWY 26.jpg" }
        ],
        "userwastaken, Nikita39Gamer": [
          { name: "ILS or LOC RWY 26", pdf: "charts/ISAU/APP/userwastaken, Nikita39Gamer/ILS or LOC RWY 26.jpg" },
          { name: "LOC RWY 08", pdf: "charts/ISAU/APP/userwastaken, Nikita39Gamer/LOC RWY 08.jpg" },
          { name: "RNAV (GPS) RWY 8", pdf: "charts/ISAU/APP/userwastaken, Nikita39Gamer/RNAV (RNP) RWY 08.jpg" },
          { name: "RNAV (GPS) RWY 26", pdf: "charts/ISAU/APP/userwastaken, Nikita39Gamer/RNAV (RNP) RWY 26.jpg" },
          { name: "VOR DME RWY 8", pdf: "charts/ISAU/APP/userwastaken, Nikita39Gamer/VOR DME RWY 08.jpg" },
          { name: "VOR DME RWY 26", pdf: "charts/ISAU/APP/userwastaken, Nikita39Gamer/VOR DME RWY 26.jpg" }
        ] 
      }
    }
  },
  IGRV: {
    GEN: [
      { name: "General Information by <b>AeroNav</b>", pdf: "charts/IGRV/GEN/GENERAL INFOR.jpg" },
      { name: "Control Zone Chart by <b>FormicAcid</b>", pdf: "charts/IGRV/GEN/FORMIC/CONTROLLZONE CHART.jpg" }
    ],
    GND: [
      { name: "Airport Diagram from <b>PFTS.xyz/chart</b>", pdf: "charts/IGRV/GND/IGRV Ground Chart.jpg" }
    ],
    SID: {
      authors: {
        "AeroNav": [
          { name: "GRINDAVIK1 (GVK1) RWY 24", pdf: "charts/IGRV/SID/GRINDAVIK 1 (GVK1).jpg" },
          { name: "HAWKN1 RNAV RWY 06", pdf: "charts/IGRV/SID/HAWKN1 RNAV.jpg" },
          { name: "THENR3 RNAV RWY 24", pdf: "charts/IGRV/SID/THENR3 RNAV.jpg" },
          { name: "YOUTH4 RNAV RWY 06", pdf: "charts/IGRV/SID/YOUTH4 RNAV.jpg" },
          { name: "CLEAR4 RNAV RWY 24", pdf: "charts/IGRV/SID/CLEAR4 RNAV.jpg" }
        ],
        "FormicAcid": [
          { name: "BLANK1K RNAV ", pdf: "charts/IGRV/SID/FORMIC/BLANK1K.jpg" },
          { name: "BLANK1L RNAV", pdf: "charts/IGRV/SID/FORMIC/BLANK1L.jpg" },
          { name: "THACC1K RNAV", pdf: "charts/IGRV/SID/FORMIC/THACC1K.jpg" }
          
        ]
      }
    },
    STAR: {
      authors: {
        "AeroNav": [

          { name: "GOLDN1 RNAV", pdf: "charts/IGRV/STAR/GOLDN1 RNAV.jpg" },
          { name: "SPACE1 RNAV", pdf: "charts/IGRV/STAR/SPACE1 RNAV.jpg" }
        ],
        "FormicAcid": [
          { name: "BLANK1T RNAV ", pdf: "charts/IGRV/STAR/FORMIC/BLANK1T.jpg" },
          { name: "SPACE1Z RNAV", pdf: "charts/IGRV/STAR/FORMIC/SPACE1Z.jpg" }
        ]
      }
    },
    APP: {
      authors: {
        "AeroNav": [
          { name: "RNP RWY 06", pdf: "charts/IGRV/APP/RNP RWY 06.jpg" },
          { name: "RNP RWY 24", pdf: "charts/IGRV/APP/RNP RWY 24.jpg" }
        ],
        "FormicAcid": [
          { name: "ILS or LOC RWY 06 ", pdf: "charts/IGRV/APP/FORMIC/ILS_LOC RWY06.jpg" },
          { name: "MLS RWY 24", pdf: "charts/IGRV/APP/FORMIC/MLS RWY 24.jpg" },
          { name: "RNP RWY 24", pdf: "charts/IGRV/APP/FORMIC/RNP RWY24.jpg" },
          { name: "RNP Y RWY 06", pdf: "charts/IGRV/APP/FORMIC/RNP Y RWY06.jpg" },
          { name: "RNP Z RWY 06 ", pdf: "charts/IGRV/APP/FORMIC/RNP Z RWY 06.jpg" }
        ]
      }
    }
  },
  ITKO: {
    GEN: [
      { name: "VRF Sectional Chart by <b>AeroNav</b>", pdf: "charts/ITKO/GEN/AeroNav/VFR SECTIONAL.jpg" },
      { name: "De-Icing Procedures by <b>AeroNav</b>", pdf: "charts/ITKO/GEN/AeroNav/De-Icing Pro.jpg" },

      { name: "Airport Briefing by <b>userwastaken, nikita39gamer</b>", pdf: "charts/ITKO/GEN/userwastaken, nikita39gamer/Airport Briefing.jpg" },
      { name: "Airport Briefing CONT by <b>userwastaken, nikita39gamer</b>", pdf: "charts/ITKO/GEN/userwastaken, nikita39gamer/Airport Briefing CONT.jpg" },
      { name: "Airport Briefing CONT II by <b>userwastaken, nikita39gamer</b>", pdf: "charts/ITKO/GEN/userwastaken, nikita39gamer/Airport Briefing CONT II.jpg" },
      { name: "Control Area by <b>userwastaken, nikita39gamer</b>", pdf: "charts/ITKO/GEN/userwastaken, nikita39gamer/Control Area.jpg" },
      { name: "General Information by <b>userwastaken, nikita39gamer</b>", pdf: "charts/ITKO/GEN/userwastaken, nikita39gamer/General Information.jpg" },
      { name: "Orenji Terrain Chart by <b>userwastaken, nikita39gamer</b>", pdf: "charts/ITKO/GEN/userwastaken, nikita39gamer/Orenji Terrain Chart.jpg" }
    ],
    GND: [
      { name: "Airport Diagram by <b>PTFS.xyz</b>", pdf: "charts/ITKO/GND/ITKO Ground Chart.jpg" }
    ],
    SID: {
      authors: {
        "AeroNav": [
          { name: "ASTRO1 RNAV", pdf: "charts/ITKO/SID/AeroNav/ASTRO1 RNAV.jpg" },
          { name: "HONDA1 RNAV", pdf: "charts/ITKO/SID/AeroNav/ITKOHONDA1RNAV.jpg" },
          { name: "LETSE1 RNAV", pdf: "charts/ITKO/SID/AeroNav/ITKOLETSE1RNAV.jpg" },
          { name: "ONDER1 RNAV", pdf: "charts/ITKO/SID/AeroNav/ONDER1 RNAV.jpg" },
          { name: "TOKYO1", pdf: "charts/ITKO/SID/AeroNav/TOKYO1.jpg" }
        ],
        "userwastaken, nikita39gamer": [
          { name: "BLANK1W RWY 02", pdf: "charts/ITKO/SID/userwastaken, nikita39gamer/BLANK1W RWY 02.jpg" },
          { name: "BLANK1X RWY 13", pdf: "charts/ITKO/SID/userwastaken, nikita39gamer/BLANK1X RWY 13.jpg" },
          { name: "BLANK1X RWY 13", pdf: "charts/ITKO/SID/userwastaken, nikita39gamer/BLANK1Y RWY 20.jpg" },
          { name: "BLSNK1Z RWY 31", pdf: "charts/ITKO/SID/userwastaken, nikita39gamer/BLANK1Z RWY 31.jpg" },
          { name: "BLANK2A RNAV RWY 02", pdf: "charts/ITKO/SID/userwastaken, nikita39gamer/BLANK2A RNAV RWY 02.jpg" },
          { name: "BLANK2B RNAV RWY 13", pdf: "charts/ITKO/SID/userwastaken, nikita39gamer/BLANK2B RNAV RWY 13.jpg" },
          { name: "BLANK2C RNAV RWY 20", pdf: "charts/ITKO/SID/userwastaken, nikita39gamer/BLANK2C RNAV RWY 20.jpg" },
          { name: "BLANK2D RNAV RWY 31", pdf: "charts/ITKO/SID/userwastaken, nikita39gamer/BLANK2D RNAV RWY 31.jpg" },
          { name: "EURAD1W RWY 02", pdf: "charts/ITKO/SID/userwastaken, nikita39gamer/EURAD1W RWY 02.jpg" },
          { name: "EURAD1X RWY 13", pdf: "charts/ITKO/SID/userwastaken, nikita39gamer/EURAD1X RWY 13.jpg" },
          { name: "EURAD1Y RWY 20", pdf: "charts/ITKO/SID/userwastaken, nikita39gamer/EURAD1Y RWY 20.jpg" },
          { name: "EURAD1Z RWY 31", pdf: "charts/ITKO/SID/userwastaken, nikita39gamer/EURAD1Z RWY 31.jpg" },
          { name: "EURAD2A RNAV RWY 02", pdf: "charts/ITKO/SID/userwastaken, nikita39gamer/EURAD2A RNAV RWY 02.jpg" },
          { name: "EURAD2B RNAV RWY 13", pdf: "charts/ITKO/SID/userwastaken, nikita39gamer/EURAD2B RNAV RWY 13.jpg" },
          { name: "EURAD2C RNAV RWY 20", pdf: "charts/ITKO/SID/userwastaken, nikita39gamer/EURAD2C RNAV RWY 20.jpg" },
          { name: "EURAD2D RNAV RWY 31", pdf: "charts/ITKO/SID/userwastaken, nikita39gamer/EURAD2D RNAV RWY 31.jpg" },
          { name: "HONDA1W RWY 02", pdf: "charts/ITKO/SID/userwastaken, nikita39gamer/HONDA1W RWY 02.jpg" },
          { name: "HONDA1X RWY 13", pdf: "charts/ITKO/SID/userwastaken, nikita39gamer/HONDA1X RWY 13.jpg" },
          { name: "HONDA1Y RWY 20", pdf: "charts/ITKO/SID/userwastaken, nikita39gamer/HONDA1Y RWY 20.jpg" },
          { name: "HONDA1Z RWY 31", pdf: "charts/ITKO/SID/userwastaken, nikita39gamer/HONDA1Z RWY 31.jpg" },
          { name: "HONDA2A RNAV", pdf: "charts/ITKO/SID/userwastaken, nikita39gamer/HONDA2A RNAV.jpg" },
          { name: "HONDA2B RNAV", pdf: "charts/ITKO/SID/userwastaken, nikita39gamer/HONDA2B RNAV.jpg" },
          { name: "HONDA2C RNAV", pdf: "charts/ITKO/SID/userwastaken, nikita39gamer/HONDA2C RNAV.jpg" },
          { name: "HONDA2D RNAV", pdf: "charts/ITKO/SID/userwastaken, nikita39gamer/HONDA2D RNAV.jpg" },
          { name: "ONDER1W RWY 02", pdf: "charts/ITKO/SID/userwastaken, nikita39gamer/ONDER1W RWY 02.jpg" },
          { name: "ONDER1X RWY 13", pdf: "charts/ITKO/SID/userwastaken, nikita39gamer/ONDER1X RWY 13.jpg" },
          { name: "ONDER1Y RWY 20", pdf: "charts/ITKO/SID/userwastaken, nikita39gamer/ONDER1Y RWY 20.jpg" },
          { name: "ONDER1Z RWY 31", pdf: "charts/ITKO/SID/userwastaken, nikita39gamer/ONDER1Z RWY 31.jpg" },
          { name: "ONDER2A RNAV RWY 02", pdf: "charts/ITKO/SID/userwastaken, nikita39gamer/ONDER2A RNAV RWY 02.jpg" },
          { name: "ONDER2B RNAV RWY 13", pdf: "charts/ITKO/SID/userwastaken, nikita39gamer/ONDER2B RNAV RWY 13.jpg" },
          { name: "ONDER2C RNAV RWY 20", pdf: "charts/ITKO/SID/userwastaken, nikita39gamer/ONDER2C RNAV RWY 20.jpg" },
          { name: "ONDER2D RNAV RWY 31", pdf: "charts/ITKO/SID/userwastaken, nikita39gamer/ONDER2D RNAV RWY 31.jpg" },
          { name: "RENDR1W RWY 02", pdf: "charts/ITKO/SID/userwastaken, nikita39gamer/RENDR1W RWY 02.jpg" },
          { name: "RENDR1X RWY 13", pdf: "charts/ITKO/SID/userwastaken, nikita39gamer/RENDR1X RWY 13.jpg" },
          { name: "RENDR1Y RWY 20", pdf: "charts/ITKO/SID/userwastaken, nikita39gamer/RENDR1Y RWY 20.jpg" },
          { name: "RENDR1Z RWY 31", pdf: "charts/ITKO/SID/userwastaken, nikita39gamer/RENDR1Z RWY 31.jpg" },
          { name: "RENDR2A RNAV RWY 02", pdf: "charts/ITKO/SID/userwastaken, nikita39gamer/RENDR2A RNAV RWY 02.jpg" },
          { name: "RENDR2B RNAV RWY 13", pdf: "charts/ITKO/SID/userwastaken, nikita39gamer/RENDR2B RNAV RWY 13.jpg" },
          { name: "RENDR2C RNAV RWY 20", pdf: "charts/ITKO/SID/userwastaken, nikita39gamer/RENDR2C RNAV RWY 20.jpg" },
          { name: "RENDR2D RNAV RWY 31", pdf: "charts/ITKO/SID/userwastaken, nikita39gamer/RENDR2D RNAV RWY 31.jpg" }
        ]
      }
    },
    STAR: {
      authors: {
        "AeroNav": [
          { name: "GULEG1 RNAV", pdf: "charts/ITKO/STAR/AeroNav/ITKOGULEG1RNAV.jpg" },
          { name: "ISLAND1 RNAV", pdf: "charts/ITKO/STAR/AeroNav/ISLAND1 RNAV.jpg" },
          { name: "KNIFE2 RNAV", pdf: "charts/ITKO/STAR/AeroNav/ITKOKNIFE2RNAV.jpg" },
          { name: "PIPER1 RNAV", pdf: "charts/ITKO/STAR/AeroNav/PIPER1 RNAV.jpg" }
        ],
        "userwastaken, nikita39gamer": [
          { name: "BLANK1E RNAV RWY 20", pdf: "charts/ITKO/STAR/userwastaken, nikita39gamer/BLANK1E RNAV RWY 20.jpg" },
          { name: "BLANK1H RNAV RWY 13", pdf: "charts/ITKO/STAR/userwastaken, nikita39gamer/BLANK1H RNAV RWY 13.jpg" },
          { name: "BLANK1K RNAV RWY 31", pdf: "charts/ITKO/STAR/userwastaken, nikita39gamer/BLANK1K RNAV RWY 31.jpg" },
          { name: "BLANK1L RNAV RWY 31", pdf: "charts/ITKO/STAR/userwastaken, nikita39gamer/BLANK1L RNAV RWY 31.jpg" },
          { name: "BLANK1N RNAV RWY 20", pdf: "charts/ITKO/STAR/userwastaken, nikita39gamer/BLANK1N RNAV RWY 20.jpg" },
          { name: "BLANK1S RNAV RWY 20", pdf: "charts/ITKO/STAR/userwastaken, nikita39gamer/BLANK1S RNAV RWY 20.jpg" },

          { name: "BLANK10", pdf: "charts/ITKO/STAR/userwastaken, nikita39gamer/BLANK10.jpg" },

          { name: "EURAD1E RNAV RWY 20", pdf: "charts/ITKO/STAR/userwastaken, nikita39gamer/EURAD1E RNAV RWY 20.jpg" },
          { name: "EURAD1H RNAV RWY 13", pdf: "charts/ITKO/STAR/userwastaken, nikita39gamer/EURAD1H RNAV RWY 13.jpg" },
          { name: "EURAD1K RNAV RWY 31", pdf: "charts/ITKO/STAR/userwastaken, nikita39gamer/EURAD1K RNAV RWY 31.jpg" },
          { name: "EURAD1L RNAV RWY 31", pdf: "charts/ITKO/STAR/userwastaken, nikita39gamer/EURAD1L RNAV RWY 31.jpg" },
          { name: "EURAD1N RNAV RWY 20", pdf: "charts/ITKO/STAR/userwastaken, nikita39gamer/EURAD1N RNAV RWY 20.jpg" },
          { name: "EURAD1S RNAV RWY 20", pdf: "charts/ITKO/STAR/userwastaken, nikita39gamer/EURAD1S RNAV RWY 20.jpg" },

          { name: "EURAD10", pdf: "charts/ITKO/STAR/userwastaken, nikita39gamer/EURAD10.jpg" },

          { name: "HONDA1E RNAV RWY 20", pdf: "charts/ITKO/STAR/userwastaken, nikita39gamer/HONDA1E RNAV RWY 20.jpg" },
          { name: "HONDA1H RNAV RWY 13", pdf: "charts/ITKO/STAR/userwastaken, nikita39gamer/HONDA1H RNAV RWY 13.jpg" },
          { name: "HONDA1K RNAV RWY 31", pdf: "charts/ITKO/STAR/userwastaken, nikita39gamer/HONDA1K RNAV RWY 31.jpg" },
          { name: "HONDA1L RNAV RWY 31", pdf: "charts/ITKO/STAR/userwastaken, nikita39gamer/HONDA1L RNAV RWY 31.jpg" },
          { name: "HONDA1P RNAV RWY 13", pdf: "charts/ITKO/STAR/userwastaken, nikita39gamer/HONDA1P RNAV RWY 13.jpg" },
          { name: "HONDA2H RNAV RWY 13", pdf: "charts/ITKO/STAR/userwastaken, nikita39gamer/HONDA2H RNAV RWY 13.jpg" },

          { name: "HONDA10", pdf: "charts/ITKO/STAR/userwastaken, nikita39gamer/HONDA10.jpg" },

          { name: "ONDER1E RNAV RWY 20", pdf: "charts/ITKO/STAR/userwastaken, nikita39gamer/ONDER1E RNAV RWY 20.jpg" },
          { name: "ONDER1H RNAV RWY 13", pdf: "charts/ITKO/STAR/userwastaken, nikita39gamer/ONDER1H RNAV RWY 13.jpg" },
          { name: "ONDER1K RNAV RWY 31", pdf: "charts/ITKO/STAR/userwastaken, nikita39gamer/ONDER1K RNAV RWY 31.jpg" },
          { name: "ONDER1P RNAV RWY 13", pdf: "charts/ITKO/STAR/userwastaken, nikita39gamer/ONDER1P RNAV RWY 13.jpg" },

          { name: "ONDER10", pdf: "charts/ITKO/STAR/userwastaken, nikita39gamer/ONDER10.jpg" },

          { name: "RENDER1K RNAV RWY 31", pdf: "charts/ITKO/STAR/userwastaken, nikita39gamer/RENDER1K RNAV RWY 31.jpg" },
          { name: "RENDR1E RNAV RWY 20", pdf: "charts/ITKO/STAR/userwastaken, nikita39gamer/RENDR1E RNAV RWY 20.jpg" },
          { name: "RENDR1H RNAV RWY 13", pdf: "charts/ITKO/STAR/userwastaken, nikita39gamer/RENDR1H RNAV RWY 13.jpg" },

          { name: "RENDR10", pdf: "charts/ITKO/STAR/userwastaken, nikita39gamer/RENDR10.jpg" }
        ]
      }
    },
    APP: {
      authors: {
        "AeroNav": [
          { name: "ILS or LOC RWY 13", pdf: "charts/ITKO/APP/AeroNav/ILS OR LOC RWY13.jpg" },
          { name: "ILS or LOC RWY 20", pdf: "charts/ITKO/APP/AeroNav/ILS OR LOC RWY20.jpg" },
          { name: "ILS or LOC RWY 31", pdf: "charts/ITKO/APP/AeroNav/ITKOILSORLOC31.jpg" },
          { name: "RNAV (RNP) RWY 13", pdf: "charts/ITKO/APP/AeroNav/RNAV RNP RWY13.jpg" },
          { name: "RNAV (RNP) RWY 20", pdf: "charts/ITKO/APP/AeroNav/RNAV RNP RWY20.jpg" },
          { name: "GLS RWY 31", pdf: "charts/ITKO/APP/AeroNav/ITKOGLS31.jpg" }
        ],
        "userwastaken, nikita39gamer": [
          { name: "ILS or LOC RWY 13", pdf: "charts/ITKO/APP/userwastaken, nikita39gamer/ILS or LOC RWY 13.jpg" },
          { name: "ILS Y or LOC Y RWY 20", pdf: "charts/ITKO/APP/userwastaken, nikita39gamer/ILS Y or LOC Y RWY 20.jpg" },
          { name: "ILS Z or LOC Z RWY 20", pdf: "charts/ITKO/APP/userwastaken, nikita39gamer/ILS Z or LOC Z RWY 20.jpg" },
          { name: "ILS DME Y or LOC DME Y RWY 31", pdf: "charts/ITKO/APP/userwastaken, nikita39gamer/ILS DME Y or LOC DME Y RWY 31.jpg" },
          { name: "ILS DME Z or LOC DME Z RWY 31", pdf: "charts/ITKO/APP/userwastaken, nikita39gamer/ILS DME Z or LOC DME Z RWY 31.jpg" },
          { name: "LDA RWY 13", pdf: "charts/ITKO/APP/userwastaken, nikita39gamer/LDA RWY 13.jpg" },
          { name: "RNP RWY 13", pdf: "charts/ITKO/APP/userwastaken, nikita39gamer/RNP RWY 13.jpg" },
          { name: "RNP RWY 20", pdf: "charts/ITKO/APP/userwastaken, nikita39gamer/RNP RWY 20.jpg" },
          { name: "RNP RWY 31", pdf: "charts/ITKO/APP/userwastaken, nikita39gamer/RNP RWY 31.jpg" },
          { name: "HIGHWAY VISUAL RWY 20", pdf: "charts/ITKO/APP/userwastaken, nikita39gamer/HIGHWAY VISUAL RWY 20.jpg" }
        ]
      }
    }
  },
  IDCS: {
    GEN: [
      { name: "General Information by <b>MR.GEARZ</b>", pdf: "charts/IDCS/GEN/General Info by MR.GEARZ.jpg" }

    ],
    GND: [
      { name: "Airport Diagram by <b>PTFS.xyz</b>", pdf: "charts/IDCS/GND/IDCS Ground Chart.jpg" }
    ],
    SID: {
      authors: {
        "MR.GEARZ": [
          { name: "BULLY1A RNAV", pdf: "charts/IDCS/SID/MR.GEARZ/BULLY1A.jpg" },
          { name: "PIPER1A RNAV", pdf: "charts/IDCS/SID/MR.GEARZ/PIPER1A.jpg" },
          { name: "PIPER1B RNAV", pdf: "charts/IDCS/SID/MR.GEARZ/PIPER1B.jpg" }
        ]
      }
    },
    STAR: {
      authors: {
        "MR.GEARZ": [
          { name: "BULLY1B RNAV", pdf: "charts/IDCS/STAR/MR.GEARZ/BULLY1B.jpg" },
          { name: "GULEG1A RNAV", pdf: "charts/IDCS/STAR/MR.GEARZ/GULEG1A.jpg" },
          { name: "KNIFRE1A RNAV", pdf: "charts/IDCS/STAR/MR.GEARZ/KNIFE1A.jpg" },
          { name: "TINDER1A RNAV", pdf: "charts/IDCS/STAR/MR.GEARZ/TINDER1A.jpg" }
        ]
      }
    },
    //No APPR
  },
  IPPH: {
    GEN: [
      { name: "General Information by <b>AeroNav</b>", pdf: "charts/IPPH/GEN/GENERAL INFORMATION.jpg" },
      { name: "Runway Information by <b>AeroNav</b>", pdf: "charts/IPPH/GEN/RUNWAY INFORMATION.jpg" },

      { name: "Airport Briefing by <b>Natto, userwastaken, Nikita39Gamer</b>", pdf: "charts/IPPH/GEN/Natto, userwastaken, Nikita39Gamer/Airport Briefing.jpg" },
      { name: "Airport Briefing CONT by <b>Natto, userwastaken, Nikita39Gamer</b>", pdf: "charts/IPPH/GEN/Natto, userwastaken, Nikita39Gamer/Airport Briefing CONT.jpg" },
      { name: "Airport Briefing CONT II by <b>Natto, userwastaken, Nikita39Gamer</b>", pdf: "charts/IPPH/GEN/Natto, userwastaken, Nikita39Gamer/Airport Briefing CONT II.jpg" },
      { name: "Airport Information by <b>Natto, userwastaken, Nikita39Gamer</b>", pdf: "charts/IPPH/GEN/Natto, userwastaken, Nikita39Gamer/Airport Information.jpg" },
      { name: "Airspace Map by <b>Natto, userwastaken, Nikita39Gamer</b>", pdf: "charts/IPPH/GEN/Natto, userwastaken, Nikita39Gamer/Airspace Map.jpg" },
      { name: "CRIB SHEET by <b>Natto, userwastaken, Nikita39Gamer</b>", pdf: "charts/IPPH/GEN/Natto, userwastaken, Nikita39Gamer/CRIB SHEET.jpg" },
      { name: "CRIB SHEET CONT by <b>Natto, userwastaken, Nikita39Gamer</b>", pdf: "charts/IPPH/GEN/Natto, userwastaken, Nikita39Gamer/CRIB SHEET CONT.jpg" }

    ],
    GND: [
      { name: "Airport Diagram by <b>PTFS.xyz</b>", pdf: "charts/IPPH/GND/IPPH Ground Chart.jpg" }
    ],
    SID: {
      authors: {
        "AeroNav": [
          { name: "CAMEL1 RNAV", pdf: "charts/IPPH/SID/AeroNav/CAMEL1 RNAV.jpg" },
          { name: "DINER1 RNAV", pdf: "charts/IPPH/SID/AeroNav/DINER1 RNAV.jpg" },
          { name: "PERTH1 - (PER1)", pdf: "charts/IPPH/SID/AeroNav/PERTH1 (PER1).jpg" }
        ],
        "Natto, userwastaken, Nikita39Gamer": [
          { name: "CAMEL1A RNAV RWY 11", pdf: "charts/IPPH/SID/Natto, userwastaken, Nikita39Gamer/CAMEL1A RNAV RWY 11.jpg" },
          { name: "CAMEL1B RNAV RWY 15", pdf: "charts/IPPH/SID/Natto, userwastaken, Nikita39Gamer/CAMEL1B RNAV RWY 15.jpg" },
          { name: "CAMEL1C RNAV RWY 29", pdf: "charts/IPPH/SID/Natto, userwastaken, Nikita39Gamer/CAMEL1C RNAV RWY 29.jpg" },
          { name: "CAMEL1D RNAV RWY 33", pdf: "charts/IPPH/SID/Natto, userwastaken, Nikita39Gamer/CAMEL1D RNAV RWY 33.jpg" },
          
          { name: "KNIFE1A RNAV RWY 11", pdf: "charts/IPPH/SID/Natto, userwastaken, Nikita39Gamer/KNIFE1A RNAV RWY 11.jpg" },
          { name: "KNIFE1B RNAV RWY 15", pdf: "charts/IPPH/SID/Natto, userwastaken, Nikita39Gamer/KNIFE1B RNAV RWY 15.jpg" },
          { name: "KNIFE1C RNAV RWY 29", pdf: "charts/IPPH/SID/Natto, userwastaken, Nikita39Gamer/KNIFE1C RNAV RWY 29.jpg" },
          { name: "KNIFE1D RNAV RWY 33", pdf: "charts/IPPH/SID/Natto, userwastaken, Nikita39Gamer/KNIFE1D RNAV RWY 33.jpg" },

          { name: "ROMENS1A RNAV RWY 11", pdf: "charts/IPPH/SID/Natto, userwastaken, Nikita39Gamer/ROMENS1A RNAV RWY 11.jpg" },
          { name: "ROMENS1B RNAV RWY 15V", pdf: "charts/IPPH/SID/Natto, userwastaken, Nikita39Gamer/ROMENS1B RNAV RWY 15.jpg" },
          { name: "ROMENS1C RNAV RWY 29", pdf: "charts/IPPH/SID/Natto, userwastaken, Nikita39Gamer/ROMENS1C RNAV RWY 29.jpg" },
          { name: "ROMENS1D RNAV RWY 33", pdf: "charts/IPPH/SID/Natto, userwastaken, Nikita39Gamer/ROMENS1D RNAV RWY 33.jpg" }
        ]
      }
    },
    STAR: {
      authors: {
        "AeroNav": [
          { name: "HONDA1 RNAV", pdf: "charts/IPPH/STAR/AeroNav/HONDA1 RNAV.jpg" },
          { name: "SISTA1 RNAV", pdf: "charts/IPPH/STAR/AeroNav/SISTA1 RNAV.jpg" },
          { name: "TALIS1 RNAV", pdf: "charts/IPPH/STAR/AeroNav/TALIS1 RNAV.jpg" }
        ],
        "Natto, userwastaken, Nikita39Gamer": [
          { name: "ATC24A RNAV RWY 29", pdf: "charts/IPPH/STAR/Natto, userwastaken, Nikita39Gamer/ATC24A RNAV RWY 29.jpg" },
          { name: "CAMEL1E RNAV RWY 15", pdf: "charts/IPPH/STAR/Natto, userwastaken, Nikita39Gamer/CAMEL1E RNAV RWY 15.jpg" },
          { name: "CAMEL1X RNAV RWY 11", pdf: "charts/IPPH/STAR/Natto, userwastaken, Nikita39Gamer/CAMEL1X RNAV RWY 11.jpg" },
          { name: "CAMEL1Y RNAV RWY 29", pdf: "charts/IPPH/STAR/Natto, userwastaken, Nikita39Gamer/CAMEL1Y RNAV RWY 29.jpg" },
          { name: "CAMEL1Z RNAV RWY 33", pdf: "charts/IPPH/STAR/Natto, userwastaken, Nikita39Gamer/CAMEL1Z RNAV RWY 33.jpg" },

          { name: "KNIFE1W RNAV RWY 15", pdf: "charts/IPPH/STAR/Natto, userwastaken, Nikita39Gamer/KNIFE1W RNAV RWY 15.jpg" },
          { name: "KNIFE1X RNAV RWY 11", pdf: "charts/IPPH/STAR/Natto, userwastaken, Nikita39Gamer/KNIFE1X RNAV RWY 11.jpg" },
          { name: "KNIFE1Y RNAV RWY 29", pdf: "charts/IPPH/STAR/Natto, userwastaken, Nikita39Gamer/KNIFE1Y RNAV RWY 29.jpg" },
          { name: "KNIFE1Z RNAV RWY 33", pdf: "charts/IPPH/STAR/Natto, userwastaken, Nikita39Gamer/KNIFE1Z RNAV RWY 33.jpg" },

          { name: "ROMENS1W RNAV RWY 15", pdf: "charts/IPPH/STAR/Natto, userwastaken, Nikita39Gamer/ROMENS1W RNAV RWY 15.jpg" },
          { name: "ROMENS1X RNAV RWY 11", pdf: "charts/IPPH/STAR/Natto, userwastaken, Nikita39Gamer/ROMENS1X RNAV RWY 11.jpg" },
          { name: "ROMENS1Y RNAV RWY 29", pdf: "charts/IPPH/STAR/Natto, userwastaken, Nikita39Gamer/ROMENS1Y RNAV RWY 29.jpg" },
          { name: "ROMENS1Z RNAV RWY 33", pdf: "charts/IPPH/STAR/Natto, userwastaken, Nikita39Gamer/ROMENS1Z RNAV RWY 33.jpg" }
        ]
      }
    },
    APP: {
      authors: {
        "AeroNav": [
          { name: "ILS or LOC RWY 11", pdf: "charts/IPPH/APP/ILS OR LOC RWY11.jpg" },
          { name: "GLS RWY 33", pdf: "charts/IPPH/APP/AeroNav/GLS RWY33.jpg" },
          { name: "LDA-Y RWY 29", pdf: "charts/IPPH/APP/AeroNav/LDA-Y RWY29.jpg" },
          { name: "LDA-Z RWY 29", pdf: "charts/IPPH/APP/AeroNav/LDA-Z RWY29.jpg" },
          { name: "RNP Y RWY 29", pdf: "charts/IPPH/APP/AeroNav/RNP Z RWY29.jpg" },
          { name: "HAVEN STACKS VISUAL 29/33", pdf: "charts/IPPH/APP/AeroNav/HAVEN STACKS VISUAL RWY29_33.jpg" },
          { name: "HAVEN ISLAND VISUAL 29/33", pdf: "charts/IPPH/APP/AeroNav/HAVEN ISLAND VISUAL RWY29_33.jpg" }
        ],
        "Natto, userwastaken, Nikita39Gamer": [
          { name: "ILS or LOC X RWY 11", pdf: "charts/IPPH/APP/Natto, userwastaken, Nikita39Gamer/ILS or LOC X RWY 11.jpg" },
          { name: "ILS or LOC Y RWY 11", pdf: "charts/IPPH/APP/Natto, userwastaken, Nikita39Gamer/ILS or LOC Y RWY 11.jpg" },
          { name: "ILS or LOC Y RWY 15", pdf: "charts/IPPH/APP/Natto, userwastaken, Nikita39Gamer/ILS or LOC Y RWY 15.jpg" },
          { name: "ILS or LOC Z RWY 11", pdf: "charts/IPPH/APP/Natto, userwastaken, Nikita39Gamer/ILS or LOC Z RWY 11.jpg" },
          { name: "ILS or LOC Z RWY 15", pdf: "charts/IPPH/APP/Natto, userwastaken, Nikita39Gamer/ILS or LOC Z RWY 15.jpg" },
          { name: "LOC DME RWY 29", pdf: "charts/IPPH/APP/Natto, userwastaken, Nikita39Gamer/LOC DME RWY 29.jpg" },
          { name: "RNAV (RNP) RWY 29", pdf: "charts/IPPH/APP/Natto, userwastaken, Nikita39Gamer/RNAV (RNP) RWY 29.jpg" },
          { name: "RNAV (RNP) RWY 33", pdf: "charts/IPPH/APP/Natto, userwastaken, Nikita39Gamer/RNAV (RNP) RWY 33.jpg" },
          { name: "CIRCLING RWY 29", pdf: "charts/IPPH/APP/Natto, userwastaken, Nikita39Gamer/CIRCLING RWY 29.jpg" },
          { name: "CIRCLING RWY 33", pdf: "charts/IPPH/APP/Natto, userwastaken, Nikita39Gamer/CIRCLING RWY 33.jpg" }
        ]
      }
    }
  },
  SHV: {
      //NO GND
    GND: [
      { name: "TBA", pdf: "" }
    ],
      //NO SID
      //NO STAR
      //NO APP
  },
  ILKL: {
      //NO GND
    GND: [
      { name: "Airport Diagram by <b>PTFS.xyz</b>", pdf: "charts/ILKL/GND/ILKL Ground Chart.jpg" }
    ],
      //NO SID
      //NO STAR
      //NO APP
  },
  ISCM: {
    GEN: [
      { name: "Scampton Control Zone and Control Area Chart by <b>EzyDubbs</b>", pdf: "charts/ISCM/GEN/Scampton Control Zone and Control Area Chart by EzyDubbs.png" }
    ],
    GND: [
      { name: "Airport Diagram by <b>PTFS.xyz</b>", pdf: "charts/ISCM/GND/ISCM Ground Chart.jpg" }
    ],
      //NO SID
      //NO STAR
      //NO APP
  },
  IJAF: {
    GEN: [
      { name: "General Information by <b>Midwest Avgeek</b>", pdf: "charts/IJAF/GEN/General Information by Midwest Avgeek.jpg" },
      { name: "General Information CONT by <b>Midwest Avgeek</b>", pdf: "charts/IJAF/GEN/General Information CONT by Midwest Avgeek.jpg" },
      { name: "MSA Diagram by <b>Midwest Avgeek</b>", pdf: "charts/IJAF/GEN/MSA Diagram by Midwest Avgeek.jpg" }
    ],
    GND: [
      { name: "Airport Diagram by <b>PTFS.xyz</b>", pdf: "charts/IJAF/GND/IJAF Ground Chart.jpg" }
    ],
    SID: {
      authors: {
        "Midwest Avgeek": [
          { name: "DUNKS2K", pdf: "charts/IJAF/SID/MIDWESTAVGEEK/DUNKS2K.jpg" },
          { name: "SISTA2K", pdf: "charts/IJAF/SID/MIDWESTAVGEEK/SISTA2K.jpg" }
        ]
      }
    },
    STAR: {
      authors: {
        "Midwest Avgeek": [
          { name: "ANYMS2B", pdf: "charts/IJAF/STAR/MIDWESTAVGEEK/ANYMS2B.jpg" },
          { name: "CAMEL1A", pdf: "charts/IJAF/STAR/MIDWESTAVGEEK/CAMEL1A.jpg" },
          { name: "CAMEL3C", pdf: "charts/IJAF/STAR/MIDWESTAVGEEK/CAMEL3C.jpg" },
          { name: "CYRIL3C", pdf: "charts/IJAF/STAR/MIDWESTAVGEEK/CYRIL3C.jpg" },
          { name: "DETOX2B", pdf: "charts/IJAF/STAR/MIDWESTAVGEEK/DETOX2B.jpg" },
          { name: "NOONU1A", pdf: "charts/IJAF/STAR/MIDWESTAVGEEK/NOONU1A.jpg" },
          { name: "NOONU3C", pdf: "charts/IJAF/STAR/MIDWESTAVGEEK/NOONU3C.jpg" },
          { name: "SILVA1A", pdf: "charts/IJAF/STAR/MIDWESTAVGEEK/SILVA1A.jpg" }
        ],
      }
    },
    APP: {
      authors: {
        "Midwest Avgeek": [
          { name: "ILS or LOC RWY 25", pdf: "charts/IJAF/APP/MIDWESTAVGEEK/ILS or LOC RWY 25.jpg" },
          { name: "RNAV (RNP) Y RWY 07", pdf: "charts/IJAF/APP/MIDWESTAVGEEK/RNAV (RNP) Y RWY 07.jpg" },
          { name: "RNAV (RNP) Z RWY 07", pdf: "charts/IJAF/APP/MIDWESTAVGEEK/RNAV (RNP) Z RWY 07.jpg" },
          { name: "VOR:DME RWY 25", pdf: "charts/IJAF/APP/MIDWESTAVGEEK/VOR_DME RWY 25.jpg" }
        ]
      }
    }
  },
  IZOL: {
    GEN: [
      { name: "Airport Information by <b>Midwest Avmaps</b>", pdf: "charts/IZOL/GEN/Midwest Avmaps/Airport INFO.jpg" },
      { name: "/Minimum Altitudes by <b>Midwest Avmaps</b>", pdf: "charts/IZOL/GEN/Midwest Avmaps/Minimum Altitudes.jpg" },

      { name: "AeroDrome Information by <b>SANDERLI25</b>", pdf: "charts/IZOL/GEN/SANDERLI25/AeroDrome Information.jpg" },
      { name: "AeroDrome Information CONT by <b>SANDERLI25</b>", pdf: "charts/IZOL/GEN/SANDERLI25/AeroDrome inforamtion CONT.jpg" },
      { name: "AeroDrome Information CONT II by <b>SANDERLI25</b>", pdf: "charts/IZOL/GEN/SANDERLI25/AeroDrome Information CONT II.jpg" },

      { name: "Airport Briefing by <b>userwastaken</b>", pdf: "charts/IZOL/GEN/userwastaken/Airport Briefing.jpg" },
      { name: "AIRSPACE Chart by <b>userwastaken</b>", pdf: "charts/IZOL/GEN/userwastaken/AIRSPACE Chart.jpg" },
      { name: "CRIB Sheet by <b>userwastaken</b>", pdf: "charts/IZOL/GEN/userwastaken/CRIB SHEET.jpg" },

      { name: "General Information by <b>Majuki</b>", pdf: "charts/IZOL/GEN/Majuki/GeneralInfo.jpg" }

    ],
    GND: [
      { name: "Airport Diagram by <b>PTFS.xyz</b>", pdf: "charts/IZOL/GND/IZOL Ground Chart.jpg" }
    ],
    SID: {
      authors: {
        "Midwest Avmaps": [
          { name: "BELRA2 RNAV (ALL RWYS)", pdf: "charts/IZOL/SID/Midwest Avmaps/BELRA2 RNAV (ALL RWYS).jpg" },
          { name: "BONZA2 (ALL RWYS)", pdf: "charts/IZOL/SID/Midwest Avmaps/BONZA2 (ALL RWYS).jpg" },
          { name: "CAMEL3 RNAV (ALL RWYS)", pdf: "charts/IZOL/SID/Midwest Avmaps/CAMEL3 RNAV (ALL RWYS).jpg" },
          { name: "KELLA3 RNAV (ALL RWYS)", pdf: "charts/IZOL/SID/Midwest Avmaps/KELLA3 RNAV (ALL RWYS).jpg" },
          { name: "RAXIN3 RNAV (ALL RWYS)", pdf: "charts/IZOL/SID/Midwest Avmaps/RAXIN3 RNAV (ALL RWYS).jpg" },
          { name: "TIKKI2 (ALL RWYS)", pdf: "charts/IZOL/SID/Midwest Avmaps/TIKKI2 (ALL RWYS).jpg" }
        ],
        "SANDERLI25": [
          { name: "ANYMS5B RNAV RWY 28", pdf: "charts/IZOL/SID/SANDERLI25/ANYMS5B RNAV RWY 28.jpg" },
          { name: "CHAIN5A RNAV RWY 10", pdf: "charts/IZOL/SID/SANDERLI25/CHAIN5A RNAV RWY 10.jpg" },
          { name: "CYRIL5B RNAV RWY 28", pdf: "charts/IZOL/SID/SANDERLI25/CYRIL5B RNAV RWY 28.jpg" },
          { name: "DUNKS5A RNAV RWY 10", pdf: "charts/IZOL/SID/SANDERLI25/DUNKS5A RNAV RWY 10.jpg" },
          { name: "DUNKS5B RNAV RWY 28", pdf: "charts/IZOL/SID/SANDERLI25/DUNKS5B RNAV RWY 28.jpg" },
          { name: "JUSTY5A RNAV RWY 10", pdf: "charts/IZOL/SID/SANDERLI25/JUSTY5A RNAV RWY 10.jpg" },
          { name: "UDMUG5A RNAV RWY 10", pdf: "charts/IZOL/SID/SANDERLI25/UDMUG5A RNAV RWY 10.jpg" },
          { name: "DEPARTURE ROUTES", pdf: "charts/IZOL/SID/SANDERLI25/DEPARTURE ROUTES.jpg" },
          { name: "DEPARTURE ROUTES CONT", pdf: "charts/IZOL/SID/SANDERLI25/DEPARTURE ROUTES CONT II.jpg" }
        ],
        "userwastaken": [
          { name: "DELIVERY1J RNAV RWY 28", pdf: "charts/IZOL/SID/userwastaken/DELIVERY1J RNAV RWY 28.jpg" },
          { name: "DELIVERY1L RNAV RWY 10", pdf: "charts/IZOL/SID/userwastaken/DELIVERY1L RNAV RWY 10.jpg" },
          { name: "DUNKS1J RNAV RWY 28", pdf: "charts/IZOL/SID/userwastaken/DUNKS1J RNAV RWY 28.jpg" },
          { name: "DUNKS1L RNAV RWY 10", pdf: "charts/IZOL/SID/userwastaken/DUNKS1L RNAV RWY 10.jpg" },
          { name: "SILVA1J RNAV RWY 28", pdf: "charts/IZOL/SID/userwastaken/SILVA1J RNAV RWY 28.jpg" },
          { name: "SILVA1L RNAV RWY 10", pdf: "charts/IZOL/SID/userwastaken/SILVA1L RNAV RWY 10.jpg" },
        ],
        "Majuki": [
          { name: "RNAV SID RWY 28", pdf: "charts/IZOL/SID/Majuki/RNAVRWY28.jpg" },
          { name: "RNAV SID RWY 10", pdf: "charts/IZOL/SID/Majuki/RNAVSIDRWY10.jpg" },
          { name: "RNAV SID ROUTES", pdf: "charts/IZOL/SID/Majuki/RNAVSIDRoutes.jpg" }
        ]
      }
    },
    STAR: {
      authors: {
        "Midwest Avmaps": [
          { name: "BANKY1 (ALL RWYS)", pdf: "charts/IZOL/STAR/Midwest Avmaps/BANKY1 (ALL RWYS).jpg" },
          { name: "MAKOS3 (ALL RWYS)", pdf: "charts/IZOL/STAR/Midwest Avmaps/MAKOS3 (ALL RWYS).jpg" },
          { name: "ORANGE1 (ALL RWYS)", pdf: "charts/IZOL/STAR/Midwest Avmaps/ORANGE1 (ALL RWYS).jpg" }
        ],
        "Majuki": [
          { name: "RNAV STAR RWY 10", pdf: "charts/IZOL/STAR/Majuki/RNAVSTARRWY10.jpg" },
          { name: "RNAV STAR RWY 28", pdf: "charts/IZOL/STAR/Majuki/RNAVSTARRWY28.jpg" },
          { name: "RNAV STAR ROUTES", pdf: "charts/IZOL/STAR/Majuki/RNAVSTARRoutes.jpg" }
        ],
        "SANDERLI25": [
          { name: "CAMEL1D RNAV RWY 28", pdf: "charts/IZOL/STAR/SANDERLI25/CAMEL1D RNAV RWY 28.jpg" },
          { name: "CHAIN2D RNAV RWY 28", pdf: "charts/IZOL/STAR/SANDERLI25/CHAIN2D RNAV RWY 28.jpg" },
          { name: "DOGGO2D RNAV RWY 28", pdf: "charts/IZOL/STAR/SANDERLI25/DOGGO2D RNAV RWY 28.jpg" },
          { name: "JUSTY2D RNAV RWY 28", pdf: "charts/IZOL/STAR/SANDERLI25/JUSTY2D RNAV RWY 28.jpg" },
          { name: "UDMUG RNAV RWY 28", pdf: "charts/IZOL/STAR/SANDERLI25/UDMUG RNAV RWY 28.jpg" },
          { name: "ARRIVAL ROUTING", pdf: "charts/IZOL/STAR/SANDERLI25/ARRIVAL ROUTING.jpg" },
          { name: "ARRIVAL ROUTING CONT", pdf: "charts/IZOL/STAR/SANDERLI25/ARRIVAL ROUTING CONT .jpg" }
        ],
        "userwastaken": [
          { name: "DELIVERY1H RNAV RWY 10", pdf: "charts/IZOL/STAR/userwastaken/DELIVERY1H RNAV RWY 10.jpg" },
          { name: "DELIVERY1K RNAV RWY 28", pdf: "charts/IZOL/STAR/userwastaken/DELIVERY1K RNAV RWY 28.jpg" },
          { name: "DUNKS1H RNAV RWY 10", pdf: "charts/IZOL/STAR/userwastaken/DUNKS1H RNAV RWY 10.jpg" },
          { name: "DUNKS1K RNAV RWY 28", pdf: "charts/IZOL/STAR/userwastaken/DUNKS1K RNAV RWY 28.jpg" },
          { name: "SILVA1H RNAV RWY 10", pdf: "charts/IZOL/STAR/userwastaken/SILVA1H RNAV RWY 10.jpg" },
          { name: "SILVA1K RNAV RWY 28", pdf: "charts/IZOL/STAR/userwastaken/SILVA1K RNAV RWY 28.jpg" }
        ]
      }
    },
    APP: {
      authors: {
        "Midwest Avmaps": [
          { name: "ILS or LOC RWY 28", pdf: "charts/IZOL/APP/Midwest Avmaps/ILS or LOC RWY 28.jpg" },
          { name: "LDA RWY 10", pdf: "charts/IZOL/APP/Midwest Avmaps/LDA RWY 10.jpg" },
          { name: "LOC (BACK CRS) RWY 10", pdf: "charts/IZOL/APP/Midwest Avmaps/LOC (BACK CRS) RWY 10.jpg" },
          { name: "RNAV (GPS) RWY 28", pdf: "charts/IZOL/APP/Midwest Avmaps/RNAV (GPS) RWY 28.jpg" },
          { name: "RNAV (RNP) Y RWY 10", pdf: "charts/IZOL/APP/Midwest Avmaps/RNAV (RNP) Y RWY 10.jpg" },
          { name: "RNAV (RNP) Z RWP 10", pdf: "charts/IZOL/APP/Midwest Avmaps/RNAV (RNP) Z RWP 10.jpg" }
        ],
        "SANDERLI25": [
          { name: "RNP X RWY 10 (AR)", pdf: "charts/IZOL/APP/SANDERLI25/RNP X RWY 10 (AR).jpg" },
          { name: "VISUAL APPROACH CHART", pdf: "charts/IZOL/APP/SANDERLI25/VISUAL APPROACH CHART.jpg" }
        ],
        "Majuki": [
          { name: "ILS RWY 28", pdf: "charts/IZOL/APP/Majuki/ILSRWY28.jpg" },
          { name: "RNP RWY 10", pdf: "charts/IZOL/APP/Majuki/RNPRWY10.jpg" }
        ],
        "userwastaken": [
          { name: "ILS or LOC RWY 10", pdf: "charts/IZOL/APP/userwastaken/ILS or LOC RWY 10.jpg" },
          { name: "ILS or LOC RWY 28", pdf: "charts/IZOL/APP/userwastaken/ILS or LOC RWY 28.jpg" }
        ]
      }
    }
  },
  ISKP: {
    GEN: [
      { name: "Airport Information by <b>Alisoe</b>", pdf: "charts/ISKP/GEN/Alisoe/Airport Information.jpg" },
      { name: "AirSpace Chart by <b>Alisoe</b>", pdf: "charts/ISKP/GEN/Alisoe/Airspace Chart.jpg" },
      { name: "Elevation Chart by <b>Alisoe</b>", pdf: "charts/ISKP/GEN/Alisoe/Elevation Chart.jpg" },

      { name: "Airport Information by <b>JTV13</b>", pdf: "charts/ISKP/GEN/JTV13/Airport Information.jpg" }
    ],
    GND: [
      { name: "Airport Diagram by <b>PTFS.xyz</b>", pdf: "charts/IIAB/GND/IIAB Ground Chart.jpg" }
    ],
    SID: {
      authors: {
        "Alisoe": [
          { name: "ANYMS1L RNAV RWY 23", pdf: "charts/ISKP/SID/Alisoe/ANYMS1L RNAV RWY 23.jpg" },
          { name: "ANYMS1V RNAV RWY 05", pdf: "charts/ISKP/SID/Alisoe/ANYMS1V RNAV RWY 05.jpg" },
          { name: "CAWZE1L RNAV RWY 23", pdf: "charts/ISKP/SID/Alisoe/CAWZE1L RNAV RWY 23.jpg" },
          { name: "CAWZE1V RNAV RWY 05", pdf: "charts/ISKP/SID/Alisoe/CAWZE1V RNAV RWY 05.jpg" },
          { name: "CLR1L RNAV RWY 23", pdf: "charts/ISKP/SID/Alisoe/CLR1L RNAV RWY 23.jpg" },
          { name: "CLR1V RNAV RWY 05", pdf: "charts/ISKP/SID/Alisoe/CLR1V RNAV RWY 05.jpg" },
          { name: "DEL1L RNAV RWY 23", pdf: "charts/ISKP/SID/Alisoe/DEL1L RNAV RWY 23.jpg" },
          { name: "DEL1V RNAV RWY 05", pdf: "charts/ISKP/SID/Alisoe/DEL1V RNAV RWY 05.jpg" },
          { name: "OCEEN1L RNAV RWY 23", pdf: "charts/ISKP/SID/Alisoe/OCEEN1L RNAV RWY 23.jpg" },
          { name: "OCEEN1V RNAV RWY 05", pdf: "charts/ISKP/SID/Alisoe/OCEEN1V RNAV RWY 05.jpg" }
        ],
        "GalaxyON_1, Tiaguinho_2009": [
          { name: "ANYMS2B VISUAL RNAV", pdf: "charts/ISKP/SID/GalaxyON_1, Tiaguinho_2009/ANYMS2B VISUAL RNAV.jpg" },
          { name: "ANYMS2C VISUAL RNAV", pdf: "charts/ISKP/SID/GalaxyON_1, Tiaguinho_2009/ANYMS2C VISUAL RNAV.jpg" },
          { name: "CAWZE5E VISUAL RNAV", pdf: "charts/ISKP/SID/GalaxyON_1, Tiaguinho_2009/CAWZE5E VISUAL RNAV.jpg" },
          { name: "CAWZE5V VISUAL RNAV", pdf: "charts/ISKP/SID/GalaxyON_1, Tiaguinho_2009/CAWZE5V VISUAL RNAV.jpg" }
        ],
        "JTV13": [
          { name: "SKOPELOS1 DEP (SKP1)", pdf: "charts/ISKP/SID/JTV13/SKOPELOS1 DEP (SKP1).jpg" }
        ]
      }
    },
    STAR: {
      authors: {
        "Alisoe": [
          { name: "ANYMS2E RNAV RWY 23", pdf: "charts/ISKP/STAR/Alisoe/ANYMS2E RNAV RWY 23.jpg" },
          { name: "ANYMS2T RNAV RWY 05", pdf: "charts/ISKP/STAR/Alisoe/ANYMS2T RNAV RWY 05.jpg" },
          { name: "CAWZE2E RNAV RWY 23", pdf: "charts/ISKP/STAR/Alisoe/CAWZE2E RNAV RWY 23.jpg" },
          { name: "CAWZE2T RNAV RWY 05", pdf: "charts/ISKP/STAR/Alisoe/CAWZE2T RNAV RWY 05.jpg" },
          { name: "CLR2E RNAV RWY 23", pdf: "charts/ISKP/STAR/Alisoe/CLR2E RNAV RWY 23.jpg" },
          { name: "DEL2T RNAV RWY 05", pdf: "charts/ISKP/STAR/Alisoe/DEL2T RNAV RWY 05.jpg" },
          { name: "OCEEN2E RNAV RWY 23", pdf: "charts/ISKP/STAR/Alisoe/OCEEN2E RNAV RWY 23.jpg" },
          { name: "OCEEN2T RNAV RWY 05", pdf: "charts/ISKP/STAR/Alisoe/OCEEN2T RNAV RWY 05.jpg" }
        ],
        "GalaxyON_1, Tiaguinho_2009": [
          { name: "ANYMS3B RNAV RWY 23", pdf: "charts/ISKP/STAR/GalaxyON_1, Tiaguinho_2009/ANYMS3B RNAV RWY 23.jpg" },
          { name: "ANYMS3C RNAV RWY 23", pdf: "charts/ISKP/STAR/GalaxyON_1, Tiaguinho_2009/ANYMS3C RNAV RWY 23.jpg" },
          { name: "ANYMS3D RNAV RWY 23", pdf: "charts/ISKP/STAR/GalaxyON_1, Tiaguinho_2009/ANYMS3D RNAV RWY 23.jpg" },
          { name: "ANYMS3E RNAV RWY 05", pdf: "charts/ISKP/STAR/GalaxyON_1, Tiaguinho_2009/ANYMS3E RNAV RWY 05.jpg" },
          { name: "CAWZE3A RNAV RWY 23", pdf: "charts/ISKP/STAR/GalaxyON_1, Tiaguinho_2009/CAWZE3A RNAV RWY 23.jpg" },
          { name: "CAWZE3B RNAV RWY 23", pdf: "charts/ISKP/STAR/GalaxyON_1, Tiaguinho_2009/CAWZE3B RNAV RWY 23.jpg" },
          { name: "CAWZE3C RNAV RWY 23", pdf: "charts/ISKP/STAR/GalaxyON_1, Tiaguinho_2009/CAWZE3C RNAV RWY 23.jpg" },
          { name: "CAWZE3D RNAV RWY 05", pdf: "charts/ISKP/STAR/GalaxyON_1, Tiaguinho_2009/CAWZE3D RNAV RWY 05.jpg" },
        ]
      }
    },
    APP: {
      authors: {
        "GalaxyON_1, Tiaguinho_2009": [
          { name: "RNP RWY 05", pdf: "charts/ISKP/APP/GalaxyON_1, Tiaguinho_2009/RNP RWY 05.jpg" },
          { name: "RNP VISUAL RWY 23", pdf: "charts/ISKP/APP/GalaxyON_1, Tiaguinho_2009/RNP VISUAL RWY 23.jpg" }
        ]
      }
    }
  },
  IHEN: {
      //NO GEN
    GND: [
      { name: "Airport Diagram by <b>PTFS.xyz</b>", pdf: "charts/IHEN/GND/IHEN Ground Chart.jpg" }
    ],
      //NO SID
      //NO STAR
      //NO APP
  },
  IIAB: {
    GEN: [
      { name: "General Information by <b>AeroNav</b>", pdf: "charts/IIAB/GEN/GENERALINFO.jpg" }
    ],
    GND: [
      { name: "Airport Diagram by <b>PTFS.xyz</b>", pdf: "charts/IIAB/GND/IIAB Ground Chart.jpg" }
    ],
    SID: {
      authors: {
        "AeroNav": [
          { name: "AIRBASE1 (IAB1)", pdf: "charts/IIAB/SID/AIRBASE1 (IAB1).jpg" }
        ],
        "p1anes/p1anez": [
          { name: "CANDLE1 RNAV", pdf: "charts/IIAB/SID/p1anes_p1anez/CANDLE1.jpg" },
          { name: "CANDLE2 RNAV", pdf: "charts/IIAB/SID/p1anes_p1anez/CANDLE2.jpg" }
        ]
      }
    },
    STAR: {
      authors: {
        "AeroNav": [
          { name: "LARNACA1 (LCK1)", pdf: "charts/IIAB/STAR/LARNACA1 (LCK1).jpg" }
        ],
        "p1anes/p1anez": [
          { name: "ASPENER3A", pdf: "charts/IIAB/STAR/p1anes_p1anez/ASPENER3A.jpg" },
          { name: "ASPENER4A", pdf: "charts/IIAB/STAR/p1anes_p1anez/ASPENER4A.jpg" },
          { name: "DEBUG4A", pdf: "charts/IIAB/STAR/p1anes_p1anez/DEBUG4A.jpg" },
          { name: "RENTS3A", pdf: "charts/IIAB/STAR/p1anes_p1anez/RENTS3A.jpg" },
          { name: "RENTS4A", pdf: "charts/IIAB/STAR/p1anes_p1anez/RENTS4A.jpg" }
        ]
      }
    },
    APP: {
      authors: {
        "AeroNav": [
          { name: "ILS or LOC RWY 09L", pdf: "charts/IIAB/APP/ILS OR LOC RWY09L.jpg" },
          { name: "ILS or LOC RWY 09R", pdf: "charts/IIAB/APP/ILS OR LOC RWY09R.jpg" }
        ],
        "p1anes/p1anez": [
          { name: "ILS or LOC RWY 09L", pdf: "charts/IIAB/APP/p1anes_p1anez/ILS RWY 09L.jpg" },
          { name: "ILS or LOC RWY 09R", pdf: "charts/IIAB/APP/p1anes_p1anez/ILS RWY 09R.jpg" },
          { name: "LDA RWY 27L", pdf: "charts/IIAB/APP/p1anes_p1anez/LDA RWY 27L.jpg" },
          { name: "LDA RWY 27R", pdf: "charts/IIAB/APP/p1anes_p1anez/LDA RWY 27R.jpg" }
        ]
      }
    }
  },
  IBAR: {
    GEN: [
      { name: "General Information by userwastaken, din0_nuggies21", pdf: "charts/IBAR/GEN/GENERALINFO - USERWASTAKEN, DIN0_NUGGIES21.jpg" }
    ],
    GND: [
      { name: "Airport Diagram by <b>PTFS.xyz</b>", pdf: "charts/IBAR/GND/IBAR Ground Chart.jpg" }
    ],
    SID: {
      authors: {
        "userwastaken, din0_nuggies21": [
          { name: "GRASS1C", pdf: "charts/IBAR/SID/GRASS1C - USERWASTAKEN, DIN0_NUGGIES21.jpg" },
          { name: "JACKI1A", pdf: "charts/IBAR/SID/JACKI1A - USERWASTAKEN, DIN0_NUGGIES21.jpg" },
          { name: "LAZER1B", pdf: "charts/IBAR/SID/LAZER1B - USERWASTAKEN, DIN0_NUGGIES21.jpg" }
        ]
      }
    },
    STAR: {
      authors: {
        "userwastaken, din0_nuggies21": [
          { name: "AQWRT2C", pdf: "charts/IBAR/STAR/AQWRT2C - USERWASTAKEN, DIN0_NUGGIES21.jpg" },
          { name: "BOBUX2A", pdf: "charts/IBAR/STAR/BOBUX2A - USERWASTAKEN, DIN0_NUGGIES21.jpg" },
          { name: "RENTS2B", pdf: "charts/IBAR/STAR/RENTS2B USERWASTAKEN, DIN0_NUGGIES21.jpg" }
        ]
      }
    },
    APP: {
      authors: {
        "userwastaken, din0_nuggies21 1": [
          { name: "ILS or LOC RWY SAND", pdf: "charts/IBAR/APP/ILS or LOC RWY Sand.jpg" }
        ]
      }
    }
  },
  IPAP: {
    GEN: [
      { name: "General Information by <b>AeroNav</b>", pdf: "charts/IPAP/GEN/AeroNav/GeneralInfo.jpg" },
      { name: "TakeOff Minimums by <b>AeroNav</b>", pdf: "charts/IPAP/GEN/AeroNav/Takeoff Minimums.jpg" },

      { name: "Airport Briefing by <b>GalaxyON_1</b>", pdf: "charts/IPAP/GEN/GalaxyON_1/Airport Briefing.jpg" },
      { name: "Airport Briefing CONT by <b>GalaxyON_1</b>", pdf: "charts/IPAP/GEN/GalaxyON_1/Airport Briefing CONT.jpg" },
      { name: "General Information by <b>GalaxyON_1</b>", pdf: "charts/IPAP/GEN/GalaxyON_1/General Information.jpg" },
      { name: "STAR and SID Recommendations by <b>GalaxyON_1</b>", pdf: "charts/IPAP/GEN/GalaxyON_1/STAR_SID Recommendations.jpg" },

      { name: "AeroDrome Information by <b>SANDERLI25</b>", pdf: "charts/IPAP/GEN/SANDERLI25/Aerodrome Information.jpg" },
      { name: "AeroDrome Infromation CONT by <b>SANDERLI25</b>", pdf: "charts/IPAP/GEN/SANDERLI25/Aerodrome Information CONT.jpg" }
    ],
    GND: [
      { name: "Airport Diagram by <b>PTFS.xyz</b>", pdf: "charts/IPAP/GND/IPAP Ground Chart.jpg" }
    ],
    SID: {
      authors: {
        "AeroNav": [
          { name: "KINDLE1 RNAV", pdf: "charts/IPAP/SID/AeroNav/KINDLE1 RNAV.jpg" },
          { name: "PAPHOS1 (PFO1)", pdf: "charts/IPAP/SID/AeroNav/PAPHOS1 (PFO1).jpg" }
        ],
        "GalaxyON_1": [
          { name: "RENTS1A RNAV", pdf: "charts/IPAP/SID/GalaxyON_1/RENTS1A RNAV.jpg" },
          { name: "RENTS2A", pdf: "charts/IPAP/SID/GalaxyON_1/RENTS2A.jpg" }
        ],
        "PLAYEVATOR": [
          { name: "RENTS1A RNAV RWY 35", pdf: "charts/IPAP/SID/PLAYEVATOR/RENTS1A RNAV RWY 35.jpg" },
          { name: "RENTS2A RNAV RWY 17", pdf: "charts/IPAP/SID/PLAYEVATOR/RENTS2A RNAV RWY 17.jpg" }
        ],
        "SANDERLI25": [
          { name: "RENTS1A RNAV", pdf: "charts/IPAP/SID/SANDERLI25/RENTS1A RNAV.jpg" },
          { name: "RENTS1B RNAV", pdf: "charts/IPAP/SID/SANDERLI25/RENTS1B RNAV copy.jpg" }
        ]
      }
    },
    STAR: {
      authors: {
        "AeroNav": [
          { name: "JAMSI1", pdf: "charts/IPAP/STAR/AeroNav/JAMSI1.jpg" },
          { name: "JUSTY1", pdf: "charts/IPAP/STAR/AeroNav/JUSTY1.jpg" }
        ],
        "GalaxyON_1": [
          { name: "DOGGO1B RNAV", pdf: "charts/IPAP/STAR/GalaxyON_1/DOGGO1B RNAV.jpg" },
          { name: "DOGGO2B RNAV", pdf: "charts/IPAP/STAR/GalaxyON_1/DOGGO2B RNAV.jpg" },
          { name: "JAMSI1B RNAV", pdf: "charts/IPAP/STAR/GalaxyON_1/JAMSI1B RNAV.jpg" },
          { name: "JAMSI2B RNAV", pdf: "charts/IPAP/STAR/GalaxyON_1/JAMSI2B RNAV.jpg" },
          { name: "RENTS1B RNAV", pdf: "charts/IPAP/STAR/GalaxyON_1/RENTS1B RNAV.jpg" },
          { name: "RENTS2B RNAV", pdf: "charts/IPAP/STAR/GalaxyON_1/RENTS2B RNAV.jpg" }

        ],
        "PLAYEVATOR": [
          { name: "RENTS1B RNAV RWY 17", pdf: "charts/IPAP/STAR/PLAYEVATOR/RENTS1B RNAV RWY 17.jpg" },
          { name: "RENTS2B RNAV RWY 35", pdf: "charts/IPAP/STAR/PLAYEVATOR/RENTS2B RNAV RWY 35.jpg" }
        ]
      }
    },
    APP: {
      authors: {
        "AeroNav": [
          { name: "ILS or LOC RWY 17", pdf: "charts/IPAP/APP/AeroNav/ILS OR LOC RWY17.jpg" },
          { name: "ILS or LOC RWY 35", pdf: "charts/IPAP/APP/AeroNav/ILS OR LOC RWY35.jpg" }
        ],
        "GalaxyON_1": [
          { name: "ILS or LOC RWY 17", pdf: "charts/IPAP/APP/GalaxyON_1/ILS or LOC RWY 17.jpg" },
          { name: "ILS or LOC RWY 35", pdf: "charts/IPAP/APP/GalaxyON_1/ILS or LOC RWY 35.jpg" }
        ],
        "SANDERLI25": [
          { name: "ILS or LOC RWY 17", pdf: "charts/IPAP/APP/SANDERLI25/ILS or LOC RWY 17.jpg" },
          { name: "ILS or LOC RWY 35", pdf: "charts/IPAP/APP/SANDERLI25/ILS or LOC RWY 35.jpg" }
        ]
      }
    }
  },
  ILAR: {
    GEN: [
      { name: "General Information by <b>VilleTheDude, Willek10</b>", pdf: "charts/ILAR/GEN/Villethedude/GENERALINFO.jpg" },
      { name: "General Information CONT by <b>VilleTheDude, Willek10</b>", pdf: "charts/ILAR/GEN/Villethedude/GENERALINFOCONT..jpg" },
      { name: "Crib Sheet by <b>VilleTheDude, Willek10</b>", pdf: "charts/ILAR/GEN/Villethedude/Crib sheet.jpg" },

      { name: "General Information by <b>Aloha516</b>", pdf: "charts/ILAR/GEN/Aloha516/GENERAL INFORMATION .jpg" },
      { name: "General Operations by <b>Aloha516</b>", pdf: "charts/ILAR/GEN/Aloha516/GENERAL OPERATIONS.jpg" },

      { name: "Airport Briefing by <b>galaxyON_1, Tiaguinho_2009</b>", pdf: "charts/ILAR/GEN/galaxyON_1, Tiaguinho_2009/Airport Briefing.jpg" },
      { name: "Airport Briefing CONT by <b>galaxyON_1, Tiaguinho_2009</b>", pdf: "charts/ILAR/GEN/galaxyON_1, Tiaguinho_2009/Airport Briefing CONT.jpg" },

      { name: "AirSpace Chart Larnaca by <b>userwastaken, & Nikita39Gamer</b>", pdf: "charts/ILAR/GEN/userwastaken, & Nikita39Gamer/AIRSPACE CHART LARNACA.jpg" },
      { name: "Controller Briefing by <b>userwastaken, & Nikita39Gamer</b>", pdf: "charts/ILAR/GEN/userwastaken, & Nikita39Gamer/SHORTCONTROLLER BRIEFING.jpg" },

      { name: "General Information by <b>Aeronav</b>", pdf: "charts/ILAR/GEN/Aeronav/GeneralInfo.jpg" },
      { name: "Sectional VFR by <b>Aeronav</b>", pdf: "charts/ILAR/GEN/Aeronav/SectionalVFR.jpg" },

    ],
    GND: [
      { name: "Airport Diagram by <b>PTFS.xyz</b>", pdf: "charts/ILAR/GND/ILAR Ground Chart.jpg" }
    ],
    SID: {
      authors: {
        "VilleTheDude, Willek10": [
          { name: "LAZER1P RNAV", pdf: "charts/ILAR/SID/Villethedude/LAZER1P RNAV.jpg" },
          { name: "LAZER1R RNAV", pdf: "charts/ILAR/SID/Villethedude/LAZER1R RNAV.jpg" },
          { name: "OCEEN2L RNAV", pdf: "charts/ILAR/SID/Villethedude/OCEEN2L RNAV.jpg" },
          { name: "OCEEN2R RNAV", pdf: "charts/ILAR/SID/Villethedude/OCEEN2R RNAV.jpg" },
          { name: "OCEEN3P RNAV", pdf: "charts/ILAR/SID/Villethedude/OCEEN3P RNAV.jpg" },
          { name: "ODUKO1P RNAV", pdf: "charts/ILAR/SID/Villethedude/ODUKO1P RNAV.jpg" },
          { name: "ODUKO1R RNAV", pdf: "charts/ILAR/SID/Villethedude/ODUKO1R RNAV.jpg" },
          { name: "QUEEN1P RNAV", pdf: "charts/ILAR/SID/Villethedude/QUEEN1P RNAV.jpg" },
          { name: "QUEEN3R RNAV", pdf: "charts/ILAR/SID/Villethedude/QUEEN3R RNAV.jpg" },
          { name: "RENTS1R RNAV", pdf: "charts/ILAR/SID/Villethedude/RENTS1R RNAV.jpg" },
          { name: "RENTS1R RNAV", pdf: "charts/ILAR/SID/Villethedude/RENTS2P RNAV.jpg" }
        ],
        "Aloha516": [
          { name: "LAMBO2S RWY 06", pdf: "charts/ILAR/SID/Aloha516/LAMBO2S RWY 06.jpg" },
          { name: "LAMBO2Y RYW24", pdf: "charts/ILAR/SID/Aloha516/LAMBO2Y RYW24.jpg" },
          { name: "LARNACA1Q (ILAR1Q)", pdf: "charts/ILAR/SID/Aloha516/LARNACA1Q ILAR1Q.jpg" },
          { name: "LARNACA2M (ILAR2M)", pdf: "charts/ILAR/SID/Aloha516/LARNACA2M [ILAR2M].jpg" },
          { name: "LAZER2S RWY 06", pdf: "charts/ILAR/SID/Aloha516/LAZER2S RWY 06.jpg" },
          { name: "LAZER2Y RYW 24", pdf: "charts/ILAR/SID/Aloha516/LAZER2Y RYW24.jpg" },
          { name: "MONTY2S RWY 06", pdf: "charts/ILAR/SID/Aloha516/MONTY2S RWY 06.jpg" },
          { name: "MONTY2Y RYW 24", pdf: "charts/ILAR/SID/Aloha516/MONTY2Y RYW24.jpg" }
        ],
        "galaxyON_1, Tiaguinho_2009": [
          { name: "ASPEN2A RNAV RWY 24", pdf: "charts/ILAR/SID/galaxyON_1, Tiaguinho_2009/ASPEN2A RNAV RWY 24.jpg" },
          { name: "GRASS2A RNAV RWY 24", pdf: "charts/ILAR/SID/galaxyON_1, Tiaguinho_2009/GRASS2A RNAV RWY 24.jpg" },
          { name: "GRASS2B RNAV RWY 06", pdf: "charts/ILAR/SID/galaxyON_1, Tiaguinho_2009/GRASS2B RNAV RWY 06.jpg" },
          { name: "JAMSI2B RNAV RWY 06", pdf: "charts/ILAR/SID/galaxyON_1, Tiaguinho_2009/JAMSI2B RNAV RWY 06.jpg" },
          { name: "JUSTY2B RNAV RWY 06", pdf: "charts/ILAR/SID/galaxyON_1, Tiaguinho_2009/JUSTY2B RNAV RWY 06.jpg" },
          { name: "LAZER2A RNAV RWY 24", pdf: "charts/ILAR/SID/galaxyON_1, Tiaguinho_2009/LAZER2A RNAV RWY 24.jpg" },
          { name: "LAZER2B RNAV RWY 06", pdf: "charts/ILAR/SID/galaxyON_1, Tiaguinho_2009/LAZER2B RNAV RWY 06.jpg" },
          { name: "REAPR2A RNAV RWY 24", pdf: "charts/ILAR/SID/galaxyON_1, Tiaguinho_2009/REAPR2A RNAV RWY 24.jpg" },
          { name: "RENTS2A RNAV RWY 24", pdf: "charts/ILAR/SID/galaxyON_1, Tiaguinho_2009/RENTS2A RNAV RWY 24.jpg" },
          { name: "RENTS2B RNAV RWY 06", pdf: "charts/ILAR/SID/galaxyON_1, Tiaguinho_2009/RENTS2B RNAV RWY 06 .jpg" }
        ],
        "greek_dutchman": [
          { name: "ANYMS2G (RWY 06)", pdf: "charts/ILAR/SID/greek_dutchman/ANYMS2G (RWY 06).jpg" },
          { name: "JAMSI2G (RWY 06)", pdf: "charts/ILAR/SID/greek_dutchman/JAMSI2G (RWY 06).jpg" },
          { name: "JAMSI2H (RWY 24)", pdf: "charts/ILAR/SID/greek_dutchman/JAMSI2H (RWY 24).jpg" },
          { name: "JUSTY2G (RWY 06)", pdf: "charts/ILAR/SID/greek_dutchman/JUSTY2G (RWY 06).jpg" },
          { name: "JUSTY2H (RWY 24)", pdf: "charts/ILAR/SID/greek_dutchman/JUSTY2H (RWY 24)).jpg" },
          { name: "LAZER2G (RWY 06)", pdf: "charts/ILAR/SID/greek_dutchman/LAZER2G (RWY 06).jpg" },
          { name: "LAZER2H (RWY 24)", pdf: "charts/ILAR/SID/greek_dutchman/LAZER2H (RWY 24).jpg" },
          { name: "REAPR2H (RWY 24)", pdf: "charts/ILAR/SID/greek_dutchman/REAPR2H (RWY 24).jpg" }
        ],
        "userwastaken, & Nikita39Gamer": [
          { name: "ANYMS1J (RWY 06)", pdf: "charts/ILAR/SID/userwastaken, & Nikita39Gamer/ANYMS1J (RWY 06).jpg" },
          { name: "ANYMS1L (RWY 24)", pdf: "charts/ILAR/SID/userwastaken, & Nikita39Gamer/ANYMS1L (RWY 24).jpg" },
          { name: "JAMSI1J (RWY 06)", pdf: "charts/ILAR/SID/userwastaken, & Nikita39Gamer/JAMSI1J (RWY 06).jpg" },
          { name: "JAMSI1L (RWY 24)", pdf: "charts/ILAR/SID/userwastaken, & Nikita39Gamer/JAMSI1L (RWY 24).jpg" },
          { name: "JUSTY1J (RWY 06)", pdf: "charts/ILAR/SID/userwastaken, & Nikita39Gamer/JUSTY1J (RWY 06).jpg" },
          { name: "JUSTY1L (RWY 24)", pdf: "charts/ILAR/SID/userwastaken, & Nikita39Gamer/JUSTY1L (RWY 24).jpg" },
          { name: "REAPR1J (RWY 06)", pdf: "charts/ILAR/SID/userwastaken, & Nikita39Gamer/REAPR1J (RWY 06).jpg" },
          { name: "REAPR1L (RWY 24)", pdf: "charts/ILAR/SID/userwastaken, & Nikita39Gamer/REAPR1L (RWY 24).jpg" }
        ],
        "Aeronav": [
          { name: "GRASS1 (RWY 24) ", pdf: "charts/ILAR/SID/Aeronav/GRASS1RNAVSIDRWY24.jpg" },
          { name: "LARNACA1", pdf: "charts/ILAR/SID/Aeronav/ILARLARNACA1DEP.jpg" },
          { name: "ODOKU1", pdf: "charts/ILAR/SID/Aeronav/ODOKURNAVSID.jpg" },
          { name: "ODOKU1", pdf: "charts/ILAR/SID/Aeronav/RENTS1RNAVSIDRWY6.jpg" },
        ]
      }
    },
    STAR: {
      authors: {
        "VilleTheDude, Willek10": [
          { name: "CLR1W RNAV", pdf: "charts/ILAR/STAR/Villethedude/CLR1W RNAV.jpg" },
          { name: "CLR2V RNAV", pdf: "charts/ILAR/STAR/Villethedude/CLR2V RNAV.jpg" },
          { name: "JAMSI1V RNAV", pdf: "charts/ILAR/STAR/Villethedude/JAMSI1V RNAV.jpg" },
          { name: "JAMSI3W RNAV", pdf: "charts/ILAR/STAR/Villethedude/JAMSI3W RNAV.jpg" },
          { name: "JUSTY1W RNAV", pdf: "charts/ILAR/STAR/Villethedude/JUSTY1W RNAV.jpg" },
          { name: "JUSTY2V RNAV", pdf: "charts/ILAR/STAR/Villethedude/JUSTY2V RNAV.jpg" },
          { name: "ODUKO2W RNAV", pdf: "charts/ILAR/STAR/Villethedude/ODUKO2W RNAV.jpg" },
          { name: "ODUKO3V RNAV", pdf: "charts/ILAR/STAR/Villethedude/ODUKO3V RNAV.jpg" }
        ],
        "Aloha516": [
          { name: "ELSAS2G RNAV RWY24", pdf: "charts/ILAR/STAR/Aloha516/ELSAS2G RNAV RWY24.jpg" },
          { name: "ELSAS2H RNAV RWY06", pdf: "charts/ILAR/STAR/Aloha516/ELSAS2H RNAV RWY06.jpg" },
          { name: "GRASS2G RNAV RWY24", pdf: "charts/ILAR/STAR/Aloha516/GRASS2G RNAV RWY24.jpg" },
          { name: "GRASS2H RNAV RWY06", pdf: "charts/ILAR/STAR/Aloha516/GRASS2H RNAV RWY06.jpg" },
          { name: "RENTS2G RNAV RWY24", pdf: "charts/ILAR/STAR/Aloha516/RENTS2G RNAV RWY24.jpg" },
          { name: "RENTS2H RNAV RWY06", pdf: "charts/ILAR/STAR/Aloha516/RENTS2H RNAV RWY06.jpg" }

        ],
        "galaxyON_1, Tiaguinho_2009": [
          { name: "ASPEN1A RNAV RWY 06", pdf: "charts/ILAR/STAR/galaxyON_1, Tiaguinho_2009/ASPEN1A RNAV RWY 06.jpg" },
          { name: "GRASS1A RNAV RWY 06", pdf: "charts/ILAR/STAR/galaxyON_1, Tiaguinho_2009/GRASS1A RNAV RWY 06.jpg" },
          { name: "GRASS1B RNAV RWY 24", pdf: "charts/ILAR/STAR/galaxyON_1, Tiaguinho_2009/GRASS1B RNAV RWY 24.jpg" },
          { name: "JAMSI1B RNAV RWY 24", pdf: "charts/ILAR/STAR/galaxyON_1, Tiaguinho_2009/JAMSI1B RNAV RWY 24.jpg" },
          { name: "JUSTY1B RNAV RWY 24", pdf: "charts/ILAR/STAR/galaxyON_1, Tiaguinho_2009/JUSTY1B RNAV RWY 24.jpg" },
          { name: "LAZER1A RNAV RWY 06", pdf: "charts/ILAR/STAR/galaxyON_1, Tiaguinho_2009/LAZER1A RNAV RWY 06.jpg" },
          { name: "LAZER1B RNAV RWY 24", pdf: "charts/ILAR/STAR/galaxyON_1, Tiaguinho_2009/LAZER1B RNAV RWY 24.jpg" },
          { name: "REAPR1A RNAV RWY 06", pdf: "charts/ILAR/STAR/galaxyON_1, Tiaguinho_2009/REAPR1A RNAV RWY 06.jpg" },
          { name: "RENTS1B RNAV RWY 24", pdf: "charts/ILAR/STAR/galaxyON_1, Tiaguinho_2009/RENTS1B RNAV RWY 24.jpg" },
          { name: "RENTS1S RNAV RWY 06", pdf: "charts/ILAR/STAR/galaxyON_1, Tiaguinho_2009/RENTS1S RNAV RWY 06.jpg" }

        ],
        "Aeronav": [
          { name: "LUBAN1", pdf: "charts/ILAR/STAR/Aeronav/LUBAN1RNAVSTAR.jpg" },
          { name: "SOUTHERN1", pdf: "charts/ILAR/STAR/Aeronav/SOUTHERN1RNAV.jpg" },
          { name: "WESTERN1", pdf: "charts/ILAR/STAR/Aeronav/WESTRN1RNAVSTAR.jpg" },
        ],
        "greek_dutchman": [
          { name: "ANYMS2C (RWY 06)", pdf: "charts/ILAR/STAR/greek_dutchman/ANYMS2C (RWY 06).jpg" },
          { name: "ANYMS2D (RWY 24)", pdf: "charts/ILAR/STAR/greek_dutchman/ANYMS2D (RWY 24).jpg" },
          { name: "JAMSI2C (RWY 06)", pdf: "charts/ILAR/STAR/greek_dutchman/JAMSI2C (RWY 06).jpg" },
          { name: "JAMSI2D (RWY 24)", pdf: "charts/ILAR/STAR/greek_dutchman/JAMSI2D (RWY 24).jpg" },
          { name: "JUSTY2C (RWY 06)", pdf: "charts/ILAR/STAR/greek_dutchman/JUSTY2C (RWY 06).jpg" },
          { name: "JUSTY2D (RWY 24)", pdf: "charts/ILAR/STAR/greek_dutchman/JUSTY2D (RWY 24).jpg" },
          { name: "LAZER2C (RWY 06)", pdf: "charts/ILAR/STAR/greek_dutchman/LAZER2C (RWY 06).jpg" },
          { name: "REAPR2C (RWY 06)", pdf: "charts/ILAR/STAR/greek_dutchman/REAPR2C (RWY 06).jpg" },
          { name: "SAVES2C (RWY 06)", pdf: "charts/ILAR/STAR/greek_dutchman/SAVES2C (RWY 06).jpg" },
          { name: "SAVES2D (RWY 24)", pdf: "charts/ILAR/STAR/greek_dutchman/SAVES2D (RWY 24).jpg" }

        ],
        "userwastaken, & Nikita39Gamer": [
          { name: "ANYMS1K", pdf: "charts/ILAR/STAR/userwastaken, & Nikita39Gamer/ANYMS1K.jpg" },
          { name: "ANYMS1M (RWY 24)", pdf: "charts/ILAR/STAR/userwastaken, & Nikita39Gamer/ANYMS1M (RWY 24).jpg" },
          { name: "JAMSI1K", pdf: "charts/ILAR/STAR/userwastaken, & Nikita39Gamer/JAMSI1K.jpg" },
          { name: "JAMSI1M (RWY 24)", pdf: "charts/ILAR/STAR/userwastaken, & Nikita39Gamer/JAMSI1M (RWY 24).jpg" },
          { name: "JUSTY1K", pdf: "charts/ILAR/STAR/userwastaken, & Nikita39Gamer/JUSTY1K.jpg" },
          { name: "JUSTY1M (RWY 24)", pdf: "charts/ILAR/STAR/userwastaken, & Nikita39Gamer/JUSTY1M (RWY 24).jpg" },
          { name: "REAPR1K", pdf: "charts/ILAR/STAR/userwastaken, & Nikita39Gamer/REAPR1K.jpg" },
          { name: "REAPR1M (RWY 24)", pdf: "charts/ILAR/STAR/userwastaken, & Nikita39Gamer/REAPR1M (RWY 24).jpg" }
        ]
      }
    },
    APP: {
      authors: {
        "VilleTheDude, Willek10": [
          { name: "ILS or LOC RWY 06", pdf: "charts/ILAR/APP/Villethedude/ILS OR LOC RWY06.jpg" },
          { name: "VOR RWY 24", pdf: "charts/ILAR/APP/Villethedude/VOR RWY24.jpg" },
          { name: "MOUNTAIN VISUAL RWY 24", pdf: "charts/ILAR/APP/Villethedude/MOUNTAIN VISUAL RWY24.jpg" }
        ],
        "galaxyON_1, Tiaguinho_2009": [
          { name: "ILS or LOC RWY 06", pdf: "charts/ILAR/APP/galaxyON_1, Tiaguinho_2009/ILS or LOC RWY 06.jpg" },
          { name: "ILS or LOC RWY 24", pdf: "charts/ILAR/APP/galaxyON_1, Tiaguinho_2009/ILS or LOC RWY 24.jpg" }
        ],
        "Aloha516": [
          { name: "ILS or LOC RWY 06", pdf: "charts/ILAR/APP/Aloha516/ILS or LOC RWY 06.jpg" },
          { name: "CIRCLING VOR/DME RWY 24", pdf: "charts/ILAR/APP/Aloha516/CIRCLING VOR_DME RWY 24.jpg" },
          { name: "CIRCLING VOR/DME RWY 24", pdf: "charts/ILAR/APP/Aloha516/CIRCLING VOR_DME RWY24.jpg" },
          { name: "MISSED APPROACH PRODCEDURE RWY 24", pdf: "charts/ILAR/APP/Aloha516/MISSED APPROACH PRODCEDURE RWY 24.jpg" }
        ],
        "userwastaken, & Nikita39Gamer": [
          { name: "ILS or LOC RWY 06", pdf: "charts/ILAR/APP/userwastaken, & Nikita39Gamer/ILS or LOC RWY 06.jpg" },
          { name: "VOR/DME RWY 24", pdf: "charts/ILAR/APP/userwastaken, & Nikita39Gamer/VOR_DME RWY 24.jpg" },
          { name: "CIRCLING PROCEDURES RWY 24", pdf: "charts/ILAR/APP/userwastaken, & Nikita39Gamer/CIRCLING PROCEDURES RWY 24.jpg" },
          { name: "Special Circling Procedures", pdf: "charts/ILAR/APP/userwastaken, & Nikita39Gamer/Special Circling Procedures.jpg" }
        ]
      }
    }
  },
  IBTH: {
    GEN: [
      { name: "General Information by <b>Alisoe</b>", pdf: "charts/IBTH/GEN/GENERAL INFO.jpg" },
      { name: "AeroDrome Obstacle Chart by <b>Alisoe</b>", pdf: "charts/IBTH/GEN/AERODROME obstical Chart.jpg" }

    ],
    GND: [
      { name: "Airport Diagram by <b>PTFS.xyz</b>", pdf: "charts/IBTH/GND/IBTH Ground Chart.jpg" }
    ],
    SID: {
      authors: {
        "AeroNav": [
          { name: "BARTHELEMY1 (SBH1)", pdf: "charts/IBTH/SID/BARTHELEMY1 (SBH1).jpg" },
          { name: "MOUNTAIN1 RNAV (MONTN1)", pdf: "charts/IBTH/SID/MOUNTAIN1 RNAV (MONTN1).jpg" },
          { name: "OCEAN1 RNAV", pdf: "charts/IBTH/SID/OCEAN1 RNAV.jpg" },
          { name: "RESURGE1 RNAV (RES1)", pdf: "charts/IBTH/SID/RESURGE1 RNAV RES1.jpg" },
          { name: "VONARX RNAV (VOX1)", pdf: "charts/IBTH/SID/VONARX RNAV (VOX1).jpg" }
        ],
        "Alisoe": [
          { name: "INDEX1P RNAV", pdf: "charts/IBTH/SID/Alisoe/INDEX1P.jpg" },
          { name: "INDEX1Q RNAV", pdf: "charts/IBTH/SID/Alisoe/INDEX1Q.jpg" },
          { name: "INDEX2J RNAV", pdf: "charts/IBTH/SID/Alisoe/INDEX2J.jpg" },
          { name: "OCEEN1P RNAV", pdf: "charts/IBTH/SID/Alisoe/OCEEN1P.jpg" },
          { name: "OCEEN2J RNAV", pdf: "charts/IBTH/SID/Alisoe/OCEEN2J.jpg" },
          { name: "ROM1P RNAV", pdf: "charts/IBTH/SID/Alisoe/ROM1P.jpg" },
          { name: "ROM2J RNAV", pdf: "charts/IBTH/SID/Alisoe/ROM2J.jpg" },
          { name: "SILVA1P RNAV", pdf: "charts/IBTH/SID/Alisoe/SILVA1P.jpg" },
          { name: "SILVA2J RNAV", pdf: "charts/IBTH/SID/Alisoe/SILVA2J.jpg" },
          { name: "VOX2J RNAV", pdf: "charts/IBTH/SID/Alisoe/VOX2J.jpg" }
        ],
        "SANDERLI25": [
          { name: "CAMEL1F RNAV", pdf: "charts/IBTH/SID/SANDERLI25/CAMEL1F.jpg" },
          { name: "INDEX1G RNAV", pdf: "charts/IBTH/SID/SANDERLI25/INDEX1G.jpg" },
          { name: "OCEEN1G RNAV", pdf: "charts/IBTH/SID/SANDERLI25/OCEEN1G.jpg" },
          { name: "PROBE1F RNAV", pdf: "charts/IBTH/SID/SANDERLI25/PROBE1F.jpg" },
          { name: "PROBE1H RNAV", pdf: "charts/IBTH/SID/SANDERLI25/PROBE1H.jpg" },
          { name: "ROMENS1F RNAV", pdf: "charts/IBTH/SID/SANDERLI25/ROMENS1F.jpg" },
          { name: "SILVA1H", pdf: "charts/IBTH/SID/SANDERLI25/SAILVA1H.jpg" },
          { name: "WELSH1H", pdf: "charts/IBTH/SID/SANDERLI25/WELSH1H.jpg" }
        ]
      }
    },
    STAR: {
      authors: {
        "AeroNav": [
          { name: "CAMEL1 RNAV", pdf: "charts/IBTH/STAR/CAMEL1 RNAV.jpg" },
          { name: "DINER1 RNAV", pdf: "charts/IBTH/STAR/DINER1 RNAV.jpg" },
          { name: "GAVIN1 RNAV", pdf: "charts/IBTH/STAR/GAVIN1 RNAV.jpg" },
          { name: "ROMENS1 RNAV", pdf: "charts/IBTH/STAR/ROMENS1 RNAV.jpg" },
          { name: "SILVA1 RNAV", pdf: "charts/IBTH/STAR/SILVA1 RNAV.jpg" },
          { name: "WELSH1 RNAV", pdf: "charts/IBTH/STAR/WELSH1 RNAV.jpg" }
        ],
        "Alisoe": [
          { name: "INDEX2M RNAV", pdf: "charts/IBTH/STAR/Alisoe/INDEX2M - Alisoe.jpg" },
          { name: "INDEX2V RNAV", pdf: "charts/IBTH/STAR/Alisoe/INDEX2V.jpg" },
          { name: "INDEX2X RNAV", pdf: "charts/IBTH/STAR/Alisoe/INDEX2X.jpg" },
          { name: "OCEEN2M RNAV", pdf: "charts/IBTH/STAR/Alisoe/OCEEN2M - Alisoe.jpg" },
          { name: "OCEEN2V RNAV", pdf: "charts/IBTH/STAR/Alisoe/OCEEN2V.jpg" },
          { name: "RES2X RNAV", pdf: "charts/IBTH/STAR/Alisoe/RES2X.jpg" },
          { name: "ROM2M RNAV", pdf: "charts/IBTH/STAR/Alisoe/ROM2M - Alisoe.jpg" },
          { name: "ROM2V RNAV", pdf: "charts/IBTH/STAR/Alisoe/ROM2V.jpg" },
          { name: "SILVA2M RNAV", pdf: "charts/IBTH/STAR/Alisoe/SILVA2M - Alisoe .jpg" },
          { name: "SILVA2V RNAV", pdf: "charts/IBTH/STAR/Alisoe/SILVA2V.jpg" },
          { name: "VOX2M RNAV", pdf: "charts/IBTH/STAR/Alisoe/VOX2M - Alisoe.jpg" }
        ],
        "SANDERLI25": [
          { name: "CAMEL1J RNAV", pdf: "charts/IBTH/STAR/SANDERLI25/CAMEL1J.jpg" },
          { name: "PROBE1J RNAV", pdf: "charts/IBTH/STAR/SANDERLI25/PROBE1J.jpg" },
          { name: "SILVA1J RNAV", pdf: "charts/IBTH/STAR/SANDERLI25/SILVA1J.jpg" }
        ]
      }
    },
    APP: {
      authors: {
        "AeroNav": [
          { name: "ILS or LOC RWY 09", pdf: "charts/IBTH/APP/ILS OR LOC RWY09.jpg" },
          { name: "ILS or LOC RWY 27", pdf: "charts/IBTH/APP/ILS OR LOC RWY27.jpg" }
        ]
      }
    }
  },
  IRFD: {
    GEN: [
      { name: "General Information by <b>AeroNav</b>", pdf: "charts/IRFD/GEN/IRFD General Info.jpg" },
      { name: "Obstacale Notes - Noise Abatement by <b>AeroNav</b>", pdf: "charts/IRFD/GEN/Obstacale Notes - Noise Abatement.jpg" },
      { name: "Departure and Arrival Suggestions by <b>AeroNav</b>", pdf: "charts/IRFD/GEN/STARSIDSuggestion.jpg" },
      { name: "VFR Sectional Chart by <b>AeroNav</b>", pdf: "charts/IRFD/GEN/VFR Sectional Chart.jpg" }
    ],
    GND: [
      { name: "Airport Diagram by <b>PTFS.xyz</b>", pdf: "charts/IRFD/GND/IRFD Ground Chart.jpg" }
    ],
    SID: {
      authors: {
        "AeroNav": [
          { name: "DARRK3 RNAV", pdf: "charts/IRFD/SID/AeroNav/DARRK3 RNAV.jpg" },
          { name: "KENED2 RNAV", pdf: "charts/IRFD/SID/AeroNav/KENED2 RNAV.jpg" },
          { name: "LOGAN4 RNAV", pdf: "charts/IRFD/SID/AeroNav/LOGAN4 RNAV.jpg" },
          { name: "OSHNN1 RNAV", pdf: "charts/IRFD/SID/AeroNav/OSHNN1 RNAV.jpg" },
          { name: "ROCKFORD 6 - (RFD6)", pdf: "charts/IRFD/SID/AeroNav/ROCKFORD6 (RFD6).jpg" },
          { name: "TRAINING 1 RNAV - (TRN1)", pdf: "charts/IRFD/SID/AeroNav/TRAINING1 RNAV (TRN1).jpg" },
          { name: "WNNDY3 RNAV", pdf: "charts/IRFD/SID/AeroNav/WNNDY3 RNAV.jpg" }
        ],
        "p1anez_planes": [
          { name: "ANYMS1A", pdf: "charts/IRFD/SID/p1anez_planes/ANYMS1A.jpg" },
          { name: "ANYMS2A", pdf: "charts/IRFD/SID/p1anez_planes/ANYMS2A.jpg" },
          { name: "BEANS1A", pdf: "charts/IRFD/SID/p1anez_planes/BEANS1A.jpg" },
          { name: "BEANS2A", pdf: "charts/IRFD/SID/p1anez_planes/BEANS2A.jpg" },
          { name: "KENED1A", pdf: "charts/IRFD/SID/p1anez_planes/KENED1A.jpg" },
          { name: "KENED2A", pdf: "charts/IRFD/SID/p1anez_planes/KENED2A.jpg" },
          { name: "LAZER1A", pdf: "charts/IRFD/SID/p1anez_planes/LAZER1A.jpg" },
          { name: "LAZER2A", pdf: "charts/IRFD/SID/p1anez_planes/LAZER2A.jpg" }
        ]
      }
    },
    STAR: {
      authors: {
        "AeroNav": [
          { name: "BEANS1 RNAV", pdf: "charts/IRFD/STAR/AeroNav/BEANS1 RNAV.jpg" },
          { name: "GORDO1", pdf: "charts/IRFD/STAR/AeroNav/GORDO1.jpg" },
          { name: "JAMSI1 RNAV", pdf: "charts/IRFD/STAR/AeroNav/JAMSI1 RNAV.jpg" },
          { name: "KUNAV2 RNAV", pdf: "charts/IRFD/STAR/AeroNav/KUNAV2 RNAV.jpg" },
          { name: "MATRX1", pdf: "charts/IRFD/STAR/AeroNav/MATRX1 .jpg" },
          { name: "MELLOR1", pdf: "charts/IRFD/STAR/AeroNav/MELLOR1.jpg" },
          { name: "POPPY3 RNAV", pdf: "charts/IRFD/STAR/AeroNav/POPPY3 RNAV.jpg" },
          { name: "SUNST3 RNAV", pdf: "charts/IRFD/STAR/AeroNav/SUNST3 RNAV.jpg" },
          { name: "WILEK1", pdf: "charts/IRFD/STAR/AeroNav/WILEK1.jpg" }
        ],
        "p1anez_planes": [
          { name: "CLEARANCE1 - (CLR1)", pdf: "charts/IRFD/STAR/p1anez_planes/CLEARANCE1(CLR1).jpg" },
          { name: "INDEX4A", pdf: "charts/IRFD/STAR/p1anez_planes/INDEX4A.jpg" }
        ]
      }
    },
    APP: {
      authors: {
        "AeroNav": [
          { name: "ILS or LOC RWY 25L", pdf: "charts/IRFD/APP/AeroNav/ILS25L.jpg" },
          { name: "ILS or LOC RWY 25C", pdf: "charts/IRFD/APP/AeroNav/ILS25C.jpg" },
          { name: "ILS or LOC RWY 25R", pdf: "charts/IRFD/APP/AeroNav/ILS25R.jpg" },
          { name: "ILS PRM 25C", pdf: "charts/IRFD/APP/AeroNav/ILSPRM25C.jpg" },
          { name: "RNAV (RNP) 7L", pdf: "charts/IRFD/APP/AeroNav/RNAVRNP7L.jpg" },
          { name: "RNAV (RNP) 7C", pdf: "charts/IRFD/APP/AeroNav/RNAVRNP7C.jpg" },
          { name: "RNAV (RNP) 7R", pdf: "charts/IRFD/APP/AeroNav/RNAVRNP7R.jpg" },
          { name: "VOR or GPS 7L/C/R", pdf: "charts/IRFD/APP/AeroNav/VORRWY7L_C.jpg" },
          { name: "RIVER PASS VISUAL 7L/C/R", pdf: "charts/IRFD/APP/AeroNav/RIVERPASSVISUALRWY7S.jpg" },
          { name: "SHORELINE VISUAL 7L/C/R", pdf: "charts/IRFD/APP/AeroNav/irfdShorelinevisual7s.jpg" },
          { name: "DYNAMIX VALLEY VISUAL 7L/C/R", pdf: "charts/IRFD/APP/AeroNav/DYNAMIXVALLEYVISUAL7S.jpg" }
        ],
        "p1anez_planes": [
          { name: "ILS or LOC RWY 07C", pdf: "charts/IRFD/APP/p1anez_planes/ILS07C.jpg" },
          { name: "ILS or LOC RWY 07L", pdf: "charts/IRFD/APP/p1anez_planes/ILS07L.jpg" },
          { name: "ILS or LOC RWY 07R", pdf: "charts/IRFD/APP/p1anez_planes/ILS07R.jpg" },
          { name: "ILS or LOC RWY 25C", pdf: "charts/IRFD/APP/p1anez_planes/ILS25C.jpg" },
          { name: "ILS or LOC RWY 25L", pdf: "charts/IRFD/APP/p1anez_planes/ILS25L.jpg" },
          { name: "ILS or LOC RWY 25R", pdf: "charts/IRFD/APP/p1anez_planes/ILS25R.jpg" },
        ]
      }
    }
  },
  ITRC: {
      //NO GEN
    GND: [
      { name: "Airport Diagram by <b>PTFS.xyz</b>", pdf: "charts/ITRN/GND/ITRC Ground Chart.jpg" }
    ]
    //No SID 
    //No STAR 
    //No APP
  },
  IGAR: {
    //No Gen
    GND: [
      { name: "Airport Diagram by <b>PTFS.xyz</b>", pdf: "charts/IGAR/GND/IGAR Ground Chart.jpg" }
    ]
    //No SID
    //No STAR 
    //No APP
  },
  IBLT: {
      //No GEN
    GND: [
      { name: "Airport Diagram by <b>PTFS.xyz</b>", pdf: "charts/IBLT/GND/IBLT Ground Chart.jpg" }
    ],
      //NO SID
      //No STAR
      //NO APP
  },
  IMLR: {
    GEN: [
      { name: "General Information by <b>AeroNav</b>", pdf: "charts/IMLR/GEN/AeroNav/GENERAL INFORMATION.jpg" },
      { name: "VFR Sectional Chart by <b>AeroNav</b>", pdf: "charts/IMLR/GEN/AeroNav/VFR SECTIONAL CHART.jpg" },
      { name: "Crib Sheet by <b>VilleTheDude, Willek10</b>", pdf: "charts/IMLR/GEN/VilleTheDude, Willek10/CRIB SHEET.jpg" },
      { name: "Crib Sheet CONT by <b>VilleTheDude, Willek10</b>", pdf: "charts/IMLR/GEN/VilleTheDude, Willek10/CRIB SHEET CONT.jpg" }
    ],
    GND: [
      { name: "Airport Diagram by <b>PTFS.xyz</b>t", pdf: "charts/IMLR/GND/IMLR Ground Chart.jpg" }
    ],
    SID: {
      authors: {
        "AeroNav": [
          { name: "BEANS3 RNAV", pdf: "charts/IMLR/SID/AeroNav/BEANS3 RNAV .jpg" },
          { name: "HAWFA1 RNAV", pdf: "charts/IMLR/SID/AeroNav/HAWFA1 RNAV.jpg" },
          { name: "KENED2 RNAV", pdf: "charts/IMLR/SID/AeroNav/KENED2 RNAV.jpg" },
          { name: "SAWPE1 RNAV", pdf: "charts/IMLR/SID/AeroNav/MELLOR1 (MLR1).jpg" },
          { name: "MELLOR1 (MLR1)", pdf: "charts/IMLR/SID/AeroNav/SAWPE1 RNAV.jpg" }
        ],
        "VilleTheDude, Willek10": [
          { name: "KENED2T RNAV RWY 07", pdf: "charts/IMLR/SID/VilleTheDude, Willek10/KENED2T RNAV RWY 07.jpg" },
          { name: "KENED4R RNAV RWY25", pdf: "charts/IMLR/SID/VilleTheDude, Willek10/KENED4R RNAV RWY25.jpg" },
          { name: "MOGTA1R RNAV RWY 25", pdf: "charts/IMLR/SID/VilleTheDude, Willek10/MOGTA1R RNAV RWY 25.jpg" },
          { name: "MOGTA3T RNAV RWY 07", pdf: "charts/IMLR/SID/VilleTheDude, Willek10/MOGTA3T RNAV RWY 07.jpg" },
          { name: "SETHR1T RNAV RWY 07", pdf: "charts/IMLR/SID/VilleTheDude, Willek10/SETHR1T RNAV RWY 07.jpg" },
          { name: "SETHR2R RNAV RWY 25", pdf: "charts/IMLR/SID/VilleTheDude, Willek10/SETHR2R RNAV RWY 25.jpg" },
          { name: "SPACE1T RNAV RWY 07", pdf: "charts/IMLR/SID/VilleTheDude, Willek10/SPACE1T RNAV RWY 07.jpg" },
          { name: "SPACE2R RNAV RWY 25", pdf: "charts/IMLR/SID/VilleTheDude, Willek10/SPACE2R RNAV RWY 25.jpg" },
          { name: "SUNST2R RNAV RWY 25", pdf: "charts/IMLR/SID/VilleTheDude, Willek10/SUNST2R RNAV RWY 25.jpg" },
          { name: "SUNST3T RNAV RWY 07", pdf: "charts/IMLR/SID/VilleTheDude, Willek10/SUNST3T RNAV RWY 07.jpg" }
        ]
      }
    },
    STAR: {
      authors: {
        "AeroNav": [
          { name: "BIGDY1 RNAV", pdf: "charts/IMLR/STAR/AeroNav/BIGDY1 RNAV.jpg" },
          { name: "BUCFA1 RNAV", pdf: "charts/IMLR/STAR/AeroNav/BUCFA1 RNAV.jpg" },
          { name: "NORTHERN1 RNAV (NRTHN1)", pdf: "charts/IMLR/STAR/AeroNav/NORTHERN1 RNAV (NRTHN1).jpg" },
          { name: "URMOM1 RNAV", pdf: "charts/IMLR/STAR/AeroNav/URMOM1 RNAV.jpg" }
        ],
        "VilleTheDude, Willek10": [
          { name: "ENDER1K RNAV RWY 25", pdf: "charts/IMLR/STAR/VilleTheDude, Willek10/ENDER1K RNAV RWY 25.jpg" },
          { name: "ENDER3D RNAV RWY 07", pdf: "charts/IMLR/STAR/VilleTheDude, Willek10/ENDER3D RNAV RWY 07.jpg" },
          { name: "INDEX1D RNAV RWY 07", pdf: "charts/IMLR/STAR/VilleTheDude, Willek10/INDEX1D RNAV RWY 07.jpg" },
          { name: "INDEX3K RNAV RWY25", pdf: "charts/IMLR/STAR/VilleTheDude, Willek10/INDEX3K RNAV RWY25.jpg" },
          { name: "QUEEN1D RNAV RWY 07", pdf: "charts/IMLR/STAR/VilleTheDude, Willek10/QUEEN1D RNAV RWY 07.jpg" },
          { name: "QUEEN2K RNAV RWY 25", pdf: "charts/IMLR/STAR/VilleTheDude, Willek10/QUEEN2K RNAV RWY 25.jpg" },
          { name: "SETHR1D RNAV RWY 07", pdf: "charts/IMLR/STAR/VilleTheDude, Willek10/SETHR1D RNAV RWY 07.jpg" },
          { name: "SETHR1K RNAV RWY 25", pdf: "charts/IMLR/STAR/VilleTheDude, Willek10/SETHR1K RNAV RWY 25.jpg" },
          { name: "SPACE2D RNAV RWY 07", pdf: "charts/IMLR/STAR/VilleTheDude, Willek10/SPACE2D RNAV RWY 07.jpg" },
          { name: "SPACE2K RNAV RWY 25", pdf: "charts/IMLR/STAR/VilleTheDude, Willek10/SPACE2K RNAV RWY 25.jpg" }
        ]
      }
    },
    APP: {
      authors: {
        "AeroNav": [
          { name: "ILS or LOC RWY 7", pdf: "charts/IMLR/APP/AeroNav/ILS OR LOC RWY7.jpg" },
          { name: "ILS or LOC RWY 25", pdf: "charts/IMLR/APP/AeroNav/ILS OR LOC RWY25.jpg" },
          { name: "RNAV (GPS) RWY 7", pdf: "charts/IMLR/APP/AeroNav/RNAV (GPS) RWY7.jpg" },
          { name: "RNAV (GPS) RWY 25", pdf: "charts/IMLR/APP/AeroNav/RNAV (GPS) RWY25.jpg" },
          { name: "MELLOR BRIDGE VISUAL RWY 25", pdf: "charts/IMLR/APP/AeroNav/MELLOR BRIDGE VISUAL RWY25.jpg" }
        ],
        "VilleTheDude, Willek10": [
          { name: "ILS Y RWY 25", pdf: "charts/IMLR/APP/VilleTheDude, Willek10/ILS Y RWY 25.jpg" },
          { name: "ILS Z RWY 25", pdf: "charts/IMLR/APP/VilleTheDude, Willek10/ILS Z RWY 25.jpg" },
          { name: "ILS RWY 07", pdf: "charts/IMLR/APP/VilleTheDude, Willek10/ILS RWY 07.jpg" },
          { name: "BRIDGE VISUAL RWY 25", pdf: "charts/IMLR/APP/VilleTheDude, Willek10/BRIDGE VISUAL RWY 25.jpg" },

        ]
      }
    }
  }
};

// Pin notification element
const pinNotification = document.createElement('div');
pinNotification.className = 'pin-notification';
document.body.appendChild(pinNotification);

function showPinNotification(message) {
  pinNotification.textContent = message;
  pinNotification.style.display = 'block';
  
  setTimeout(() => {
    pinNotification.style.display = 'none';
  }, 2500);
}

let currentAirport = '';
let currentChartType = '';
let currentAuthor = '';
let scale = 1;

function liveSearch() {
  const searchTerm = document.getElementById("search-input").value.trim().toUpperCase();
  const searchResults = document.getElementById("search-results");
  
  if (searchTerm.length < 2) {
    searchResults.innerHTML = "";
    searchResults.style.display = "none";
    return;
  }
  
  const results = [];
  for (const [code, name] of Object.entries(airportDatabase)) {
    if (code.includes(searchTerm) || name.toUpperCase().includes(searchTerm)) {
      results.push({ code, name });
    }
  }
  
  if (results.length > 0) {
    searchResults.innerHTML = results.map(result => `
      <div class="search-result" onclick="selectSearchResult('${result.code}')">
        <strong>${result.code}</strong> - ${result.name}
      </div>
    `).join("");
    searchResults.style.display = "block";
  } else {
    searchResults.innerHTML = '<div class="no-results">No airports found</div>';
    searchResults.style.display = "block";
  }
}

function selectSearchResult(airportCode) {
  document.getElementById("search-input").value = airportCode;
  document.getElementById("search-results").style.display = "none";
  loadCharts();
}

function loadCharts() {
  const searchInput = document.getElementById("search-input");
  currentAirport = searchInput.value.trim().toUpperCase();
  
  if (chartData[currentAirport]) {
    document.getElementById("sidebar").style.display = "flex";
    document.getElementById("current-airport-display").textContent = `${currentAirport} - ${airportDatabase[currentAirport] || currentAirport}`;
    resetChartDisplays();
    setupNavButtons();
    minimizeSearch();
  } else if (currentAirport) {
    alert(`No charts available for ${currentAirport}`);
  }
  
  document.getElementById("search-results").style.display = "none";
}

function resetChartDisplays() {
  document.getElementById("chart-display-default").innerHTML = "";
  document.getElementById("chart-display-gen-gnd").innerHTML = "";
  document.getElementById("author-dropdown-container").style.display = "none";
}

function setupNavButtons() {
  const types = ['GEN', 'GND', 'SID', 'STAR', 'APP'];
  types.forEach(type => {
    const btn = document.querySelector(`.nav-button[onclick="selectButton('${type}')"]`);
    const hasData = chartData[currentAirport][type] && 
                   (type === 'GEN' || type === 'GND' || 
                    (chartData[currentAirport][type].authors && 
                     Object.keys(chartData[currentAirport][type].authors).length > 0));
    btn.classList.toggle('disabled', !hasData);
    btn.disabled = !hasData;
  });
}

function selectButton(buttonType) {
  currentChartType = buttonType;
  currentAuthor = '';

  // Clear all chart displays
  document.getElementById("chart-display-default").style.display = "none";
  document.getElementById("chart-display-gen-gnd").style.display = "none";
  document.getElementById("chart-display-default").innerHTML = "";
  document.getElementById("chart-display-gen-gnd").innerHTML = "";

  // Update button styles
  document.querySelectorAll('.nav-button').forEach(btn => {
    btn.classList.remove('selected');
    btn.style.backgroundColor = '#34495e';
  });
  
  const selectedBtn = document.querySelector(`.nav-button[onclick="selectButton('${buttonType}')"]`);
  selectedBtn.classList.add('selected');
  selectedBtn.style.backgroundColor = selectedBtn.getAttribute('data-color');

  // Show appropriate content
  if (buttonType === 'GEN' || buttonType === 'GND') {
    document.getElementById("author-dropdown-container").style.display = "none";
    displayGenGndCharts();
  } else {
    document.getElementById("author-dropdown-container").style.display = "block";
    populateAuthorDropdown();
    // Reset dropdown selection
    document.getElementById("author-dropdown").value = "";
  }
}

function populateAuthorDropdown() {
  const dropdown = document.getElementById("author-dropdown");
  dropdown.innerHTML = '<option value="">Select Author</option>';
  
  const authors = Object.keys(chartData[currentAirport][currentChartType].authors);
  authors.forEach(author => {
    dropdown.innerHTML += `<option value="${author}">${author}</option>`;
  });
}

function selectAuthor() {
  currentAuthor = document.getElementById("author-dropdown").value;
  if (currentAuthor) {
    displayAuthorCharts();
  }
}

function initPinnedSidebar() {
  const pinnedSidebar = document.createElement('div');
  pinnedSidebar.className = 'pinned-sidebar';
  pinnedSidebar.id = 'pinned-sidebar';
  pinnedSidebar.innerHTML = `
    <div class="pinned-header">
      <h2>Pinned Charts</h2>
      <button class="close-pinned" onclick="togglePinnedSidebar()">
        <i class="fas fa-times"></i>
      </button>
    </div>
    <div id="pinned-charts-list" class="pinned-list"></div>
  `;
  document.body.appendChild(pinnedSidebar);
}


function generateChartButton(chart) {
  const pinnedCharts = JSON.parse(localStorage.getItem('pinnedCharts') || '{}');
  const isPinned = pinnedCharts[currentAirport]?.some(p => p.url === chart.pdf) || false;
  
  return `
    <button class="chart-button ${isPinned ? 'pinned' : ''}" 
            onclick="openImage('${chart.pdf}')" 
            data-pdf="${chart.pdf}">
      ${chart.name}
      <span class="chart-pin-container" onclick="event.stopPropagation(); togglePinChart(this, event)">
        <i class="fas fa-thumbtack chart-pin-button"></i>
      </span>
    </button>
  `;
}

function displayGenGndCharts() {
  const chartDisplay = document.getElementById("chart-display-gen-gnd");
  chartDisplay.innerHTML = chartData[currentAirport][currentChartType].map(chart => 
    generateChartButton(chart)
  ).join("");
  
  document.getElementById("chart-display-default").style.display = "none";
  chartDisplay.style.display = "block";
}

function displayAuthorCharts() {
  const chartDisplay = document.getElementById("chart-display-default");
  chartDisplay.innerHTML = chartData[currentAirport][currentChartType].authors[currentAuthor].map(chart => 
    generateChartButton(chart)
  ).join("");
  
  document.getElementById("chart-display-gen-gnd").style.display = "none";
  chartDisplay.style.display = "block";
}

function togglePinChart(button, event) {
  event.stopPropagation();
  const chartButton = button.closest('.chart-button');
  const wasPinned = chartButton.classList.contains('pinned');
  chartButton.classList.toggle('pinned');
  
  const chartName = chartButton.textContent.trim();
  const pdfUrl = chartButton.getAttribute('data-pdf');
  
  let pinnedCharts = JSON.parse(localStorage.getItem('pinnedCharts') || '{}');
  
  if (!pinnedCharts[currentAirport]) {
    pinnedCharts[currentAirport] = [];
  }
  
  if (!wasPinned) {
    if (!pinnedCharts[currentAirport].some(chart => chart.url === pdfUrl)) {
      pinnedCharts[currentAirport].push({ 
        name: chartName, 
        url: pdfUrl,
        airport: currentAirport,
        airportName: airportDatabase[currentAirport] || currentAirport
      });
      showPinNotification('Chart pinned!');
    }
  } else {
    pinnedCharts[currentAirport] = pinnedCharts[currentAirport].filter(chart => chart.url !== pdfUrl);
    showPinNotification('Chart unpinned!');
    
    if (pinnedCharts[currentAirport].length === 0) {
      delete pinnedCharts[currentAirport];
    }
  }
  
  localStorage.setItem('pinnedCharts', JSON.stringify(pinnedCharts));
}

function showPinnedModal() {
  console.log("showPinnedModal: Function called."); // Debug: Confirm function entry

  const modal = document.getElementById('pinned-charts-modal');
  const list = document.getElementById('pinned-charts-list');

  if (!modal) {
    console.error("showPinnedModal: Error - 'pinned-charts-modal' element not found in the DOM."); // Debug: Modal element missing
    return; // Exit if modal element is missing
  }
  if (!list) {
    console.error("showPinnedModal: Error - 'pinned-charts-list' element not found in the DOM."); // Debug: List element missing
    return; // Exit if list element is missing
  }

  // Clear previous content
  list.innerHTML = '';
  console.log("showPinnedModal: Cleared previous modal content."); // Debug: Content cleared

  // Get pinned charts from localStorage
  let pinnedCharts = {};
  try {
    const storedCharts = localStorage.getItem('pinnedCharts');
    if (storedCharts) {
      pinnedCharts = JSON.parse(storedCharts);
      console.log("showPinnedModal: Successfully retrieved pinned charts from localStorage.", pinnedCharts); // Debug: Charts retrieved
    } else {
      console.log("showPinnedModal: No 'pinnedCharts' found in localStorage. Initializing as empty object."); // Debug: No charts found
    }
  } catch (e) {
    console.error("showPinnedModal: Error parsing 'pinnedCharts' from localStorage:", e); // Debug: JSON parsing error
    // Optionally, clear corrupted localStorage here: localStorage.removeItem('pinnedCharts');
  }

  // Check if there are any pinned charts
  if (Object.keys(pinnedCharts).length === 0) {
    list.innerHTML = '<div class="no-pinned-charts">No pinned charts yet</div>';
    console.log("showPinnedModal: No pinned charts to display."); // Debug: No charts to display
  } else {
    console.log("showPinnedModal: Populating modal with pinned charts."); // Debug: Starting population
    // Group by airport
    for (const [airportCode, charts] of Object.entries(pinnedCharts)) {
      const airportName = airportDatabase[airportCode] || airportCode;

      // Create airport header
      const airportHeader = document.createElement('div');
      airportHeader.className = 'pinned-airport-header';
      airportHeader.textContent = `${airportCode} - ${airportName}`;
      list.appendChild(airportHeader);
      console.log(`showPinnedModal: Added header for airport: ${airportCode}`); // Debug: Airport header added

      // Add charts for this airport
      charts.forEach(chart => {
        const chartItem = document.createElement('div');
        chartItem.className = 'pinned-chart-item';
        chartItem.textContent = chart.name;
        chartItem.onclick = (e) => {
          e.stopPropagation();
          console.log(`showPinnedModal: Opening chart: ${chart.name} (${chart.url})`); // Debug: Chart item clicked
          openImage(chart.url);
          closePinnedModal();
        };
        list.appendChild(chartItem);
        console.log(`showPinnedModal: Added chart item: ${chart.name}`); // Debug: Chart item added
      });
    }
    console.log("showPinnedModal: Finished populating modal content."); // Debug: Population complete
  }

  // Show the modal
  modal.style.display = 'flex';
  console.log("showPinnedModal: Modal display set to 'flex'. Modal should now be visible."); // Debug: Modal visibility
}


function closePinnedModal() {
  const modal = document.getElementById('pinned-charts-modal');
  if (modal) {
    modal.style.display = 'none';
  }
}

function openImage(imgUrl) {
  if (!imgUrl) return;
  
  const imageViewer = document.getElementById("image-viewer");
  const imageDisplay = document.getElementById("image-display");
  
  imageDisplay.onload = function() {
    scale = 1;
    const viewerWidth = imageViewer.clientWidth;
    const viewerHeight = imageViewer.clientHeight;
    const imgRatio = imageDisplay.naturalWidth / imageDisplay.naturalHeight;
    const viewerRatio = viewerWidth / viewerHeight;
    
    scale = imgRatio > viewerRatio 
      ? viewerWidth / imageDisplay.naturalWidth 
      : viewerHeight / imageDisplay.naturalHeight;
    
    scale = scale * 0.8;
    
    imageDisplay.style.transform = `scale(${scale})`;
    recenterImage();
  };
  
  imageDisplay.src = imgUrl;
  imageViewer.style.display = "flex";
}

function closeImageViewer() {
  const viewer = document.getElementById("image-viewer");
  if (viewer) {
    viewer.style.display = "none";
    viewer.style.zIndex = "1000"; // Reset to default
  }
}

function minimizeSearch() {
  document.querySelector('.header').classList.add('search-hidden');
}

function openSearch() {
  document.querySelector('.header').classList.remove('search-hidden');
  document.getElementById("search-input").focus();
}

function toggleCredits(show) {
  document.getElementById("credits-overlay").style.display = show ? "block" : "none";
}

function toggleTheme() {
  document.body.classList.toggle("light-mode");
}

function setupImageViewer() {
  const imageViewer = document.getElementById("image-viewer");
  const imageDisplay = document.getElementById("image-display");
  let isDragging = false;
  let startX, startY, scrollLeft, scrollTop;
  let scale = 1;
  let minScale = 0.5;
  let maxScale = 3;

  imageViewer.addEventListener("wheel", function(e) {
    e.preventDefault();
    const rect = imageViewer.getBoundingClientRect();
    const mouseX = e.clientX - rect.left + imageViewer.scrollLeft;
    const mouseY = e.clientY - rect.top + imageViewer.scrollTop;
    
    const delta = -e.deltaY * 0.001;
    const newScale = Math.max(minScale, Math.min(maxScale, scale * (1 + delta)));
    
    const scrollX = (mouseX * newScale / scale) - (mouseX - imageViewer.scrollLeft);
    const scrollY = (mouseY * newScale / scale) - (mouseY - imageViewer.scrollTop);
    
    scale = newScale;
    imageDisplay.style.transform = `scale(${scale})`;
    imageViewer.scrollLeft = scrollX;
    imageViewer.scrollTop = scrollY;
  }, { passive: false });

  imageViewer.addEventListener("mousedown", function(e) {
    if (scale > 1.05) {
      isDragging = true;
      startX = e.pageX - imageViewer.offsetLeft;
      startY = e.pageY - imageViewer.offsetTop;
      scrollLeft = imageViewer.scrollLeft;
      scrollTop = imageViewer.scrollTop;
    }
  });

  document.addEventListener("mouseup", function() {
    isDragging = false;
  });

  document.addEventListener("mousemove", function(e) {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - imageViewer.offsetLeft;
    const y = e.pageY - imageViewer.offsetTop;
    const walkX = (x - startX) * 2;
    const walkY = (y - startY) * 2;
    imageViewer.scrollLeft = scrollLeft - walkX;
    imageViewer.scrollTop = scrollTop - walkY;
  });
}

function recenterImage() {
  const imageViewer = document.getElementById("image-viewer");
  const imageDisplay = document.getElementById("image-display");
  
  if (imageDisplay.complete && imageDisplay.naturalWidth !== 0) {
    const viewerWidth = imageViewer.clientWidth;
    const viewerHeight = imageViewer.clientHeight;
    const imgWidth = imageDisplay.naturalWidth * scale;
    const imgHeight = imageDisplay.naturalHeight * scale;
    
    const targetX = Math.max(0, (imgWidth - viewerWidth) / 2);
    const targetY = Math.max(0, (imgHeight - viewerHeight) / 2);
    
    imageViewer.scrollTo({
      left: targetX,
      top: targetY,
      behavior: 'smooth'
    });
  }
}

// Initialize when DOM loads
document.addEventListener('DOMContentLoaded', init);



(function () {
  const UPDATE_KEY = 'lastSeenUpdateVersion';
  // bump this to force the modal to show for all users on next visit
  const CURRENT_UPDATE_VERSION = '0.1.1';

  function getLastSeen() {
    try { return localStorage.getItem(UPDATE_KEY); } catch (e) { return null; }
  }
  function setLastSeen() {
    try { localStorage.setItem(UPDATE_KEY, CURRENT_UPDATE_VERSION); } catch (e) { /* ignore */ }
  }

  function showUpdateModal() {
    const overlay = document.getElementById('update-modal-overlay');
    const versionEl = document.getElementById('update-version');
    if (!overlay || !versionEl) return;
    versionEl.textContent = 'Version: ' + CURRENT_UPDATE_VERSION;
    overlay.style.display = 'flex';
    overlay.setAttribute('aria-hidden', 'false');
  }

  function closeUpdateModal(save = true) {
    const overlay = document.getElementById('update-modal-overlay');
    if (!overlay) return;
    overlay.style.display = 'none';
    overlay.setAttribute('aria-hidden', 'true');
    if (save) setLastSeen();
  }

  document.addEventListener('DOMContentLoaded', function () {
    // safe-guard: ensure elements exist before wiring
    const overlay = document.getElementById('update-modal-overlay');
    const closeBtn = document.getElementById('update-close');
    const dismissBtn = document.getElementById('update-dismiss');

    if (!overlay) return;

    const lastSeen = getLastSeen();
    if (lastSeen !== CURRENT_UPDATE_VERSION) {
      // show modal
      showUpdateModal();
    }

    // overlay click outside closes modal and marks seen
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeUpdateModal(true);
    });

    if (closeBtn) closeBtn.addEventListener('click', () => closeUpdateModal(true));
    if (dismissBtn) dismissBtn.addEventListener('click', () => closeUpdateModal(true));
  });
})();