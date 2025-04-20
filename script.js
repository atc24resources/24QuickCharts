// Simplified chart data structure
const chartData = {
  ISAU: {
    GEN: [
      { name: "General Information by <b>AeroNav</b>", pdf: "charts/ISAU/GEN/AeroNav/General Information.pdf" },
      { name: "De-Icing Procedures by <b>AeroNav</b>", pdf: "charts/ISAU/GEN/AeroNav/De-Icing Prodecuders.pdf" },
      { name: "Suggested Departures and Arrivals by <b>AeroNav</b>", pdf: "charts/ISAU/GEN/AeroNav/Suggested STAR and SID.pdf" },
      { name: "General Information by <b>AeroNav</b>", pdf: "charts/ISAU/GEN/AeroNav/General Information.pdf" },

      { name: "Airport Procedures by <b>PlutonFordo</b>", pdf: "charts/ISAU/GEN/PlutonFordo/Airports Procedures.pdf" },
      { name: "Airport Procedures CONT by <b>PlutonFordo</b>", pdf: "charts/ISAU/GEN/PlutonFordo/Airports Procedures CONT.pdf" },
      { name: "VFR Sectional Chart by <b>PlutonFordo</b>", pdf: "charts/ISAU/GEN/PlutonFordo/VFR Chart.pdf" },

      { name: "Airport Briefing by <b>userwastaken, Nikita39Gamer</b>", pdf: "charts/ISAU/GEN/userwastaken, Nikita39Gamer/Airport Briefing.pdf" },
      { name: "Airport Briefing CONT by <b>userwastaken, Nikita39Gamer</b>", pdf: "charts/ISAU/GEN/userwastaken, Nikita39Gamer/Airport Briefing CONT.pdf" },
      { name: "Airport Briefing CONT II by <b>userwastaken, Nikita39Gamer</b>", pdf: "charts/ISAU/GEN/userwastaken, Nikita39Gamer/Airport Briefing CONT II.pdf" },
      { name: "AirSpace Chart by <b>userwastaken, Nikita39Gamer</b>", pdf: "charts/ISAU/GEN/userwastaken, Nikita39Gamer/AIRSPACE CHART.pdf" },
      { name: "CRIB Sheet by <b>userwastaken, Nikita39Gamer</b>", pdf: "charts/ISAU/GEN/userwastaken, Nikita39Gamer/CRIB SHEET.pdf" }

    ],
    GND: [
      { name: "Airport Diagram from <b>PTFS.xyz/chart</b>", pdf: "charts/ISAU/GND/ISAU Ground Chart.pdf" }
    ],
    SID: {
      authors: {
        "AeroNav": [
          { name: "BORDER1 - (BRDR1) ", pdf: "charts/ISAU/SID/AeroNav/BORDER1 (BRDR1).pdf" },
          { name: "ECHHO1 - (ECCHO1)", pdf: "charts/ISAU/SID/AeroNav/ECHHO1 (ECCHO1).pdf" },
          { name: "SAUTHEMPTONA1 - (SAU1)", pdf: "charts/ISAU/SID/AeroNav/SAUTHEMPTONA 1 (SAU1).pdf" },
          { name: "SAYOW1 RNAV", pdf: "charts/ISAU/SID/AeroNav/SAYOW1 RNAV.pdf" },
          { name: "ZZOOO1 RNAV", pdf: "charts/ISAU/SID/AeroNav/ZZOOO1 RNAV.pdf" }
        ],
        "PlutonFordo": [
          { name: "ALDER1D RNAV RWY 08", pdf: "charts/ISAU/SID/PlutonFordo/ALDER1D RNAV RWY 08.pdf" },
          { name: "ALDER1L RNAV RWY 26", pdf: "charts/ISAU/SID/PlutonFordo/ALDER1L RNAV RWY 26.pdf" },
          { name: "ROBUX1D RNAV RWY 08", pdf: "charts/ISAU/SID/PlutonFordo/ROBUX1D RNAV RWY 08.pdf" },
          { name: "ROBUX1L RNAV RWY 26", pdf: "charts/ISAU/SID/PlutonFordo/ROBUX1L RNAV RWY 26.pdf" },
          { name: "SHREK1D RNAV RWY 08", pdf: "charts/ISAU/SID/PlutonFordo/SHREK1D RNAV RWY 08.pdf" },
          { name: "SHREK1L RNAV RWY 26", pdf: "charts/ISAU/SID/PlutonFordo/SHREK1L RNAV RWY 26.pdf" },
          { name: "SPACE1D RNAV RWY 08", pdf: "charts/ISAU/SID/PlutonFordo/SPACE1D RNAV RWY 08.pdf" },
          { name: "SPACE1L RNAV RWY 26", pdf: "charts/ISAU/SID/PlutonFordo/SPACE1L RNAV RWY 26.pdf" }
        ],
        "userwastaken, Nikita39Gamer": [
          { name: "ALDER1J RNAV RWY 08", pdf: "charts/ISAU/SID/userwastaken, Nikita39Gamer/ALDER1J RNAV RWY 08.pdf" },
          { name: "ALDER1K RWY 08", pdf: "charts/ISAU/SID/userwastaken, Nikita39Gamer/ALDER1K RWY 08.pdf" },
          { name: "ALDER1L RNAV RWY 26", pdf: "charts/ISAU/SID/userwastaken, Nikita39Gamer/ALDER1L RNAV RWY 26.pdf" },
          { name: "ALDER1M RWY 26", pdf: "charts/ISAU/SID/userwastaken, Nikita39Gamer/ALDER1M RWY 26.pdf" },
          { name: "BEANS1J RNAV RWY 08", pdf: "charts/ISAU/SID/userwastaken, Nikita39Gamer/BEANS1J RNAV RWY 08.pdf" },
          { name: "BEANS1K RWY 08", pdf: "charts/ISAU/SID/userwastaken, Nikita39Gamer/BEANS1K RWY 08.pdf" },
          { name: "BEANS1L RNAV RWY 26", pdf: "charts/ISAU/SID/userwastaken, Nikita39Gamer/BEANS1L RNAV RWY 26.pdf" },
          { name: "BEANS1M RWY 26", pdf: "charts/ISAU/SID/userwastaken, Nikita39Gamer/BEANS1M RWY 26.pdf" },
          { name: "SHREK1J RNAV RWY 08", pdf: "charts/ISAU/SID/userwastaken, Nikita39Gamer/SHREK1J RNAV RWY 08.pdf" },
          { name: "SHREK1K RWY 08", pdf: "charts/ISAU/SID/userwastaken, Nikita39Gamer/SHREK1K RWY 08.pdf" },
          { name: "SHREK1L RNAV RWY 26", pdf: "charts/ISAU/SID/userwastaken, Nikita39Gamer/SHREK1L RNAV RWY 26.pdf" },
          { name: "SHREK1M RWY 26", pdf: "charts/ISAU/SID/userwastaken, Nikita39Gamer/SHREK1M RWY 26.pdf" },
          { name: "SPACE1J RNAV RWY 08", pdf: "charts/ISAU/SID/userwastaken, Nikita39Gamer/SPACE1J RNAV RWY 08.pdf" },
          { name: "SPACE1K RWY 08", pdf: "charts/ISAU/SID/userwastaken, Nikita39Gamer/SPACE1K RWY 08.pdf" },
          { name: "SPACE1L RNAV RWY 26", pdf: "charts/ISAU/SID/userwastaken, Nikita39Gamer/SPACE1L RNAV RWY 26.pdf" },
          { name: "SPACE1M RWY 26", pdf: "charts/ISAU/SID/userwastaken, Nikita39Gamer/SPACE1M RWY 26.pdf" }
        ]
      }
    },
    STAR: {
      authors: {
        "AeroNav": [
          { name: "ALDER1 RNAV", pdf: "charts/ISAU/STAR/AeroNav/ALDER 1 RNAV.pdf" },
          { name: "BORDER1 (BRDR1)", pdf: "charts/ISAU/STAR/AeroNav/BORDER1 (BRDR1).pdf" },
          { name: "ECHHO1", pdf: "charts/ISAU/STAR/AeroNav/ECHHO1 (ECCHO1).pdf" },
          { name: "GEORG1 RNAV", pdf: "charts/ISAU/STAR/AeroNav/GEORG1 RNAV.pdf" },
          { name: "SAUTHEMPTONA1 (SAU1)", pdf: "charts/ISAU/STAR/AeroNav/SAUTHEMPTONA 1 (SAU1).pdff" },
          { name: "SAYOW1 RNAV", pdf: "charts/ISAU/STAR/AeroNav/SAYOW1 RNAV.pdf" },
          { name: "VYDDA1 RNAV", pdf: "charts/ISAU/STAR/AeroNav/VYDDA1 RNAV.pdf" },
          { name: "ZZOOO1 RNAV", pdf: "charts/ISAU/STAR/AeroNav/ZZOOO1 RNAV.pdf" }
        ],
        "PlutonFordo": [
          { name: "ALDER1B RNAV RWY 08", pdf: "charts/ISAU/STAR/PlutonFordo/ALDER1B RNAV RWY 08.pdf" },
          { name: "ALDER1N RNAV RWY 26", pdf: "charts/ISAU/STAR/PlutonFordo/ALDER1N RNAV RWY 26.pdf" },
          { name: "ROBUX1B RNAV RWY 08", pdf: "charts/ISAU/STAR/PlutonFordo/ROBUX1B RNAV RWY08.pdf" },
          { name: "ROBUX1N RNAV RWY 26", pdf: "charts/ISAU/STAR/PlutonFordo/ROBUX1N RNAV RWY 26.pdf" },
          { name: "SHREK1B RNAV RWY 08", pdf: "charts/ISAU/STAR/PlutonFordo/SHREK1B RNAV RWY 08.pdf" },
          { name: "SHREK1N RNAV RWY 26", pdf: "charts/ISAU/STAR/PlutonFordo/SHREK1N RNAV RWY 26.pdf" },
          { name: "SPACE1B RNAV RWY 08", pdf: "charts/ISAU/STAR/PlutonFordo/SPACE1B RNAV RWY 08.pdf" },
          { name: "SPACE1N RNAV RWY 26", pdf: "charts/ISAU/STAR/PlutonFordo/SPACE1N RNAV RWY 26.pdf" }
        ],
        "userwastaken, Nikita39Gamer": [
          { name: "ALDER1R RNAV", pdf: "charts/ISAU/STAR/userwastaken, Nikita39Gamer/ALDER1R RNAV.pdf" },
          { name: "ALDER1S RNAV RWY 08", pdf: "charts/ISAU/STAR/userwastaken, Nikita39Gamer/ALDER1S RNAV RWY 08.pdf" },
          { name: "ALDER1T RNAV RWY 26", pdf: "charts/ISAU/STAR/userwastaken, Nikita39Gamer/ALDER1T RNAV RWY 26.pdf" },
          { name: "BEANS1R RNAV", pdf: "charts/ISAU/STAR/userwastaken, Nikita39Gamer/BEANS1R RNAV.pdf" },
          { name: "BEANS1S RNAV RWY 08", pdf: "charts/ISAU/STAR/userwastaken, Nikita39Gamer/BEANS1S RNAV RWY 08.pdf" },
          { name: "BEANS1T RNAV RWY 26", pdf: "charts/ISAU/STAR/userwastaken, Nikita39Gamer/BEANS1T RNAV RWY 26.pdf" },
          { name: "SHREK1R RNAV", pdf: "charts/ISAU/STAR/userwastaken, Nikita39Gamer/SHREK1R RNAV.pdf" },
          { name: "SHREK1S RNAV RWY 08", pdf: "charts/ISAU/STAR/userwastaken, Nikita39Gamer/SHREK1S RNAV RWY 08.pdf" },
          { name: "SHREK1T RNAV RWY 26", pdf: "charts/ISAU/STAR/userwastaken, Nikita39Gamer/SHREK1T RNAV RWY 26.pdf" },
          { name: "SPACE1R RNAV", pdf: "charts/ISAU/STAR/userwastaken, Nikita39Gamer/SPACE1R RNAV.pdf" },
          { name: "SPACE1S RNAV RWY 08", pdf: "charts/ISAU/STAR/userwastaken, Nikita39Gamer/SPACE1S RNAV RWY 08.pdf" },
          { name: "SPACE1T RNAV RWY 26", pdf: "charts/ISAU/STAR/userwastaken, Nikita39Gamer/SPACE1T RNAV RWY 26.pdf" }
        ]
      }
    },
    APP: {
      authors: {
        "AeroNav": [
          { name: "ILS or LOC RWY 8", pdf: "charts/ISAU/APP/AeroNav/ILS 8.pdf" },
          { name: "ILS or LOC RWY 26", pdf: "charts/ISAU/APP/AeroNav/ILS 26.pdf" },
          { name: "RNAV (GPS) RWY 8", pdf: "charts/ISAU/APP/AeroNav/RNAV (GPS) 8.pdf" },
          { name: "RNAV (GPS) RWY 26", pdf: "charts/ISAU/APP/AeroNav/RNAV (GPS) 26.pdf" }
        ],
        "PlutonFordo": [
          { name: "IILS/DME RWY 08", pdf: "charts/ISAU/APP/PlutonFordo/ILS_DME RWY 08.pdf" },
          { name: "ILS/DME RWY 26", pdf: "charts/ISAU/APP/PlutonFordo/ILS_DME RWY 26.pdf" }
        ],
        "userwastaken, Nikita39Gamer": [
          { name: "ILS or LOC RWY 26", pdf: "charts/ISAU/APP/userwastaken, Nikita39Gamer/ILS or LOC RWY 26.pdf" },
          { name: "LOC RWY 08", pdf: "charts/ISAU/APP/userwastaken, Nikita39Gamer/LOC RWY 08.pdf" },
          { name: "RNAV (GPS) RWY 8", pdf: "charts/ISAU/APP/userwastaken, Nikita39Gamer/RNAV (RNP) RWY 08.pdf" },
          { name: "RNAV (GPS) RWY 26", pdf: "charts/ISAU/APP/userwastaken, Nikita39Gamer/RNAV (RNP) RWY 26.pdf" },
          { name: "VOR DME RWY 8", pdf: "charts/ISAU/APP/userwastaken, Nikita39Gamer/VOR DME RWY 08.pdf" },
          { name: "VOR DME RWY 26", pdf: "charts/ISAU/APP/userwastaken, Nikita39Gamer/VOR DME RWY 26.pdf" }
        ] 
      }
    }
  },
  TVO: {
    GEN: [
      { name: "Airport Diagram", pdf: "gen1.pdf" },
      { name: "General Information", pdf: "gen2.pdf" }
    ],
    GND: [
      { name: "Ground Movement Chart", pdf: "gnd1.pdf" },
      { name: "Apron Chart", pdf: "gnd2.pdf" }
    ],
    SID: {
      authors: {
        "Author 1": [
          { name: "SID Chart 1", pdf: "charts/irfd_sid1.pdf" },
          { name: "SID Chart 2", pdf: "charts/irfd_sid2.pdf" },
          { name: "SID Chart 3", pdf: "charts/irfd_sid3.pdf" },
          { name: "SID Chart 4", pdf: "charts/irfd_sid4.pdf" },
          { name: "SID Chart 5", pdf: "charts/irfd_sid5.pdf" },
          { name: "SID Chart 6", pdf: "charts/irfd_sid6.pdf" },
          { name: "SID Chart 7", pdf: "charts/irfd_sid7.pdf" }
        ]
      }
    },
    STAR: {
      authors: {
        "Author 1": [
          { name: "STAR Chart 1", pdf: "charts/irfd_sid1.pdf" },
          { name: "STAR Chart 2", pdf: "charts/irfd_sid2.pdf" },
          { name: "STAR Chart 3", pdf: "charts/irfd_sid3.pdf" },
          { name: "STAR Chart 4", pdf: "charts/irfd_sid4.pdf" },
          { name: "STAR Chart 5", pdf: "charts/irfd_sid5.pdf" },
          { name: "STAR Chart 6", pdf: "charts/irfd_sid6.pdf" },
          { name: "STAR Chart 7", pdf: "charts/irfd_sid7.pdf" }
        ]
      }
    },
    APP: {
      authors: {
        "Author 1": [
          { name: "ILS RWY 08L", pdf: "app1.pdf" },
          { name: "RNAV RWY 08L", pdf: "app2.pdf" }
        ],
        "Author 2": [
          { name: "VOR RWY 26R", pdf: "app3.pdf" },
          { name: "LOC RWY 26R", pdf: "app4.pdf" }
        ]
      }
    }
  },
  IGRV: {
    GEN: [
      { name: "General Information by <b>AeroNav</b>", pdf: "charts/IGRV/GEN/GENERAL INFOR.pdf" },
      { name: "Control Zone Chart by <b>FormicAcid</b>", pdf: "charts/IGRV/GEN/FORMIC/CONTROLLZONE CHART.pdf" }
    ],
    GND: [
      { name: "Airport Diagram from <b>PFTS.xyz/chart</b>", pdf: "charts/IGRV/GND/IGRV Ground Chart.pdf" }
    ],
    SID: {
      authors: {
        "AeroNav": [
          { name: "GRINDAVIK1 (GVK1) RWY 24", pdf: "charts/IGRV/SID/GRINDAVIK 1 (GVK1).pdf" },
          { name: "HAWKN1 RNAV RWY 06", pdf: "charts/IGRV/SID/HAWKN1 RNAV.pdf" },
          { name: "THENR3 RNAV RWY 24", pdf: "charts/IGRV/SID/THENR3 RNAV.pdf" },
          { name: "YOUTH4 RNAV RWY 06", pdf: "charts/IGRV/SID/YOUTH4 RNAV.pdf" },
          { name: "CLEAR4 RNAV RWY 24", pdf: "charts/IGRV/SID/CLEAR4 RNAV.pdf" }
        ],
        "FormicAcid": [
          { name: "BLANK1K RNAV ", pdf: "charts/IGRV/SID/FORMIC/BLANK1K.pdf" },
          { name: "BLANK1L RNAV", pdf: "charts/IGRV/SID/FORMIC/BLANK1L.pdf" },
          { name: "THACC1K RNAV", pdf: "charts/IGRV/SID/FORMIC/THACC1K.pdf" }
          
        ]
      }
    },
    STAR: {
      authors: {
        "AeroNav": [

          { name: "GOLDN1 RNAV", pdf: "charts/IGRV/STAR/GOLDN1 RNAV.pdf" },
          { name: "SPACE1 RNAV", pdf: "charts/IGRV/STAR/SPACE1 RNAV.pdf" }
        ],
        "FormicAcid": [
          { name: "BLANK1T RNAV ", pdf: "charts/IGRV/STAR/FORMIC/BLANK1T.pdf" },
          { name: "SPACE1Z RNAV", pdf: "charts/IGRV/STAR/FORMIC/SPACE1Z.pdf" }
        ]
      }
    },
    APP: {
      authors: {
        "AeroNav": [
          { name: "RNP RWY 06", pdf: "charts/IGRV/APP/RNP RWY 06.pdf" },
          { name: "RNP RWY 24", pdf: "charts/IGRV/APP/RNP RWY 24.pdf" }
        ],
        "FormicAcid": [
          { name: "ILS or LOC RWY 06 ", pdf: "charts/IGRV/APP/FORMIC/ILS_LOC RWY06.pdf" },
          { name: "MLS RWY 24", pdf: "charts/IGRV/APP/FORMIC/MLS RWY 24.pdf" },
          { name: "RNP RWY 24", pdf: "charts/IGRV/APP/FORMIC/RNP RWY24.pdf" },
          { name: "RNP Y RWY 06", pdf: "charts/IGRV/APP/FORMIC/RNP Y RWY06.pdf" },
          { name: "RNP Z RWY 06 ", pdf: "charts/IGRV/APP/FORMIC/RNP Z RWY 06.pdf" }
        ]
      }
    }
  },
  ITKO: {
    GEN: [
      { name: "VRF Sectional Chart by <b>AeroNav</b>", pdf: "charts/ITKO/GEN/AeroNav/VFR SECTIONAL.pdf" },
      { name: "De-Icing Procedures by <b>AeroNav</b>", pdf: "charts/ITKO/GEN/AeroNav/De-Icing Pro.pdf" },

      { name: "Airport Briefing by <b>userwastaken, nikita39gamer</b>", pdf: "charts/ITKO/GEN/userwastaken, nikita39gamer/Airport Briefing.pdf" },
      { name: "Airport Briefing CONT by <b>userwastaken, nikita39gamer</b>", pdf: "charts/ITKO/GEN/userwastaken, nikita39gamer/Airport Briefing CONT.pdf" },
      { name: "Airport Briefing CONT II by <b>userwastaken, nikita39gamer</b>", pdf: "charts/ITKO/GEN/userwastaken, nikita39gamer/Airport Briefing CONT II.pdf" },
      { name: "Control Area by <b>userwastaken, nikita39gamer</b>", pdf: "charts/ITKO/GEN/userwastaken, nikita39gamer/Control Area.pdf" },
      { name: "General Information by <b>userwastaken, nikita39gamer</b>", pdf: "charts/ITKO/GEN/userwastaken, nikita39gamer/General Information.pdf" },
      { name: "Orenji Terrain Chart by <b>userwastaken, nikita39gamer</b>", pdf: "charts/ITKO/GEN/userwastaken, nikita39gamer/Orenji Terrain Chart.pdf" }
    ],
    GND: [
      { name: "Airport Diagram by <b>PTFS.xyz</b>", pdf: "charts/ITKO/GND/ITKO Ground Chart.pdf" }
    ],
    SID: {
      authors: {
        "AeroNav": [
          { name: "ASTRO1 RNAV", pdf: "charts/ITKO/SID/AeroNav/ASTRO1 RNAV.pdf" },
          { name: "HONDA1 RNAV", pdf: "charts/ITKO/SID/AeroNav/HONDA1 RNAV.pdf" },
          { name: "LETSE1 RNAV", pdf: "charts/ITKO/SID/AeroNav/LETSE1 RNAV.pdf" },
          { name: "ONDER1 RNAV", pdf: "charts/ITKO/SID/AeroNav/ONDER1 RNAV.pdf" },
          { name: "TOKYO1", pdf: "charts/ITKO/SID/AeroNav/TOKYO1.pdf" }
        ],
        "userwastaken, nikita39gamer": [
          { name: "BLANK1W RWY 02", pdf: "charts/ITKO/SID/userwastaken, nikita39gamer/BLANK1W RWY 02.pdf" },
          { name: "BLANK1X RWY 13", pdf: "charts/ITKO/SID/userwastaken, nikita39gamer/BLANK1X RWY 13.pdf" },
          { name: "BLANK1X RWY 13", pdf: "charts/ITKO/SID/userwastaken, nikita39gamer/BLANK1Y RWY 20.pdf" },
          { name: "BLSNK1Z RWY 31", pdf: "charts/ITKO/SID/userwastaken, nikita39gamer/BLANK1Z RWY 31.pdf" },
          { name: "BLANK2A RNAV RWY 02", pdf: "charts/ITKO/SID/userwastaken, nikita39gamer/BLANK2A RNAV RWY 02.pdf" },
          { name: "BLANK2B RNAV RWY 13", pdf: "charts/ITKO/SID/userwastaken, nikita39gamer/BLANK2B RNAV RWY 13.pdf" },
          { name: "BLANK2C RNAV RWY 20", pdf: "charts/ITKO/SID/userwastaken, nikita39gamer/BLANK2C RNAV RWY 20.pdf" },
          { name: "BLANK2D RNAV RWY 31", pdf: "charts/ITKO/SID/userwastaken, nikita39gamer/BLANK2D RNAV RWY 31.pdf" },
          { name: "EURAD1W RWY 02", pdf: "charts/ITKO/SID/userwastaken, nikita39gamer/EURAD1W RWY 02.pdf" },
          { name: "EURAD1X RWY 13", pdf: "charts/ITKO/SID/userwastaken, nikita39gamer/EURAD1X RWY 13.pdf" },
          { name: "EURAD1Y RWY 20", pdf: "charts/ITKO/SID/userwastaken, nikita39gamer/EURAD1Y RWY 20.pdf" },
          { name: "EURAD1Z RWY 31", pdf: "charts/ITKO/SID/userwastaken, nikita39gamer/EURAD1Z RWY 31.pdf" },
          { name: "EURAD2A RNAV RWY 02", pdf: "charts/ITKO/SID/userwastaken, nikita39gamer/EURAD2A RNAV RWY 02.pdf" },
          { name: "EURAD2B RNAV RWY 13", pdf: "charts/ITKO/SID/userwastaken, nikita39gamer/EURAD2B RNAV RWY 13.pdf" },
          { name: "EURAD2C RNAV RWY 20", pdf: "charts/ITKO/SID/userwastaken, nikita39gamer/EURAD2C RNAV RWY 20.pdf" },
          { name: "EURAD2D RNAV RWY 31", pdf: "charts/ITKO/SID/userwastaken, nikita39gamer/EURAD2D RNAV RWY 31.pdf" },
          { name: "HONDA1W RWY 02", pdf: "charts/ITKO/SID/userwastaken, nikita39gamer/HONDA1W RWY 02.pdf" },
          { name: "HONDA1X RWY 13", pdf: "charts/ITKO/SID/userwastaken, nikita39gamer/HONDA1X RWY 13.pdf" },
          { name: "HONDA1Y RWY 20", pdf: "charts/ITKO/SID/userwastaken, nikita39gamer/HONDA1Y RWY 20.pdf" },
          { name: "HONDA1Z RWY 31", pdf: "charts/ITKO/SID/userwastaken, nikita39gamer/HONDA1Z RWY 31.pdf" },
          { name: "HONDA2A RNAV", pdf: "charts/ITKO/SID/userwastaken, nikita39gamer/HONDA2A RNAV.pdf" },
          { name: "HONDA2B RNAV", pdf: "charts/ITKO/SID/userwastaken, nikita39gamer/HONDA2B RNAV.pdf" },
          { name: "HONDA2C RNAV", pdf: "charts/ITKO/SID/userwastaken, nikita39gamer/HONDA2C RNAV.pdf" },
          { name: "HONDA2D RNAV", pdf: "charts/ITKO/SID/userwastaken, nikita39gamer/HONDA2D RNAV.pdf" },
          { name: "ONDER1W RWY 02", pdf: "charts/ITKO/SID/userwastaken, nikita39gamer/ONDER1W RWY 02.pdf" },
          { name: "ONDER1X RWY 13", pdf: "charts/ITKO/SID/userwastaken, nikita39gamer/ONDER1X RWY 13.pdf" },
          { name: "ONDER1Y RWY 20", pdf: "charts/ITKO/SID/userwastaken, nikita39gamer/ONDER1Y RWY 20.pdf" },
          { name: "ONDER1Z RWY 31", pdf: "charts/ITKO/SID/userwastaken, nikita39gamer/ONDER1Z RWY 31.pdf" },
          { name: "ONDER2A RNAV RWY 02", pdf: "charts/ITKO/SID/userwastaken, nikita39gamer/ONDER2A RNAV RWY 02.pdf" },
          { name: "ONDER2B RNAV RWY 13", pdf: "charts/ITKO/SID/userwastaken, nikita39gamer/ONDER2B RNAV RWY 13.pdf" },
          { name: "ONDER2C RNAV RWY 20", pdf: "charts/ITKO/SID/userwastaken, nikita39gamer/ONDER2C RNAV RWY 20.pdf" },
          { name: "ONDER2D RNAV RWY 31", pdf: "charts/ITKO/SID/userwastaken, nikita39gamer/ONDER2D RNAV RWY 31.pdf" },
          { name: "RENDR1W RWY 02", pdf: "charts/ITKO/SID/userwastaken, nikita39gamer/RENDR1W RWY 02.pdf" },
          { name: "RENDR1X RWY 13", pdf: "charts/ITKO/SID/userwastaken, nikita39gamer/RENDR1X RWY 13.pdf" },
          { name: "RENDR1Y RWY 20", pdf: "charts/ITKO/SID/userwastaken, nikita39gamer/RENDR1Y RWY 20.pdf" },
          { name: "RENDR1Z RWY 31", pdf: "charts/ITKO/SID/userwastaken, nikita39gamer/RENDR1Z RWY 31.pdf" },
          { name: "RENDR2A RNAV RWY 02", pdf: "charts/ITKO/SID/userwastaken, nikita39gamer/RENDR2A RNAV RWY 02.pdf" },
          { name: "RENDR2B RNAV RWY 13", pdf: "charts/ITKO/SID/userwastaken, nikita39gamer/RENDR2B RNAV RWY 13.pdf" },
          { name: "RENDR2C RNAV RWY 20", pdf: "charts/ITKO/SID/userwastaken, nikita39gamer/RENDR2C RNAV RWY 20.pdf" },
          { name: "RENDR2D RNAV RWY 31", pdf: "charts/ITKO/SID/userwastaken, nikita39gamer/RENDR2D RNAV RWY 31.pdf" }
        ]
      }
    },
    STAR: {
      authors: {
        "AeroNav": [
          { name: "GULEG1 RNAV", pdf: "charts/ITKO/STAR/AeroNav/GULEG1 RNAV.pdf" },
          { name: "ISLAND1 RNAV", pdf: "charts/ITKO/STAR/AeroNav/ISLAND1 RNAV.pdf" },
          { name: "KNFIRE1 RNAV", pdf: "charts/ITKO/STAR/AeroNav/KNIFE1 RNAV.pdf" },
          { name: "PIPER1 RNAV", pdf: "charts/ITKO/STAR/AeroNav/PIPER1 RNAV.pdf" }
        ],
        "userwastaken, nikita39gamer": [
          { name: "BLANK1E RNAV RWY 20", pdf: "charts/ITKO/STAR/userwastaken, nikita39gamer/BLANK1E RNAV RWY 20.pdf" },
          { name: "BLANK1H RNAV RWY 13", pdf: "charts/ITKO/STAR/userwastaken, nikita39gamer/BLANK1H RNAV RWY 13.pdf" },
          { name: "BLANK1K RNAV RWY 31", pdf: "charts/ITKO/STAR/userwastaken, nikita39gamer/BLANK1K RNAV RWY 31.pdf" },
          { name: "BLANK1L RNAV RWY 31", pdf: "charts/ITKO/STAR/userwastaken, nikita39gamer/BLANK1L RNAV RWY 31.pdf" },
          { name: "BLANK1N RNAV RWY 20", pdf: "charts/ITKO/STAR/userwastaken, nikita39gamer/BLANK1N RNAV RWY 20.pdf" },
          { name: "BLANK1S RNAV RWY 20", pdf: "charts/ITKO/STAR/userwastaken, nikita39gamer/BLANK1S RNAV RWY 20.pdf" },

          { name: "BLANK10", pdf: "charts/ITKO/STAR/userwastaken, nikita39gamer/BLANK10.pdf" },

          { name: "EURAD1E RNAV RWY 20", pdf: "charts/ITKO/STAR/userwastaken, nikita39gamer/EURAD1E RNAV RWY 20.pdf" },
          { name: "EURAD1H RNAV RWY 13", pdf: "charts/ITKO/STAR/userwastaken, nikita39gamer/EURAD1H RNAV RWY 13.pdf" },
          { name: "EURAD1K RNAV RWY 31", pdf: "charts/ITKO/STAR/userwastaken, nikita39gamer/EURAD1K RNAV RWY 31.pdf" },
          { name: "EURAD1L RNAV RWY 31", pdf: "charts/ITKO/STAR/userwastaken, nikita39gamer/EURAD1L RNAV RWY 31.pdf" },
          { name: "EURAD1N RNAV RWY 20", pdf: "charts/ITKO/STAR/userwastaken, nikita39gamer/EURAD1N RNAV RWY 20.pdf" },
          { name: "EURAD1S RNAV RWY 20", pdf: "charts/ITKO/STAR/userwastaken, nikita39gamer/EURAD1S RNAV RWY 20.pdf" },

          { name: "EURAD10", pdf: "charts/ITKO/STAR/userwastaken, nikita39gamer/EURAD10.pdf" },

          { name: "HONDA1E RNAV RWY 20", pdf: "charts/ITKO/STAR/userwastaken, nikita39gamer/HONDA1E RNAV RWY 20.pdf" },
          { name: "HONDA1H RNAV RWY 13", pdf: "charts/ITKO/STAR/userwastaken, nikita39gamer/HONDA1H RNAV RWY 13.pdf" },
          { name: "HONDA1K RNAV RWY 31", pdf: "charts/ITKO/STAR/userwastaken, nikita39gamer/HONDA1K RNAV RWY 31.pdf" },
          { name: "HONDA1L RNAV RWY 31", pdf: "charts/ITKO/STAR/userwastaken, nikita39gamer/HONDA1L RNAV RWY 31.pdf" },
          { name: "HONDA1P RNAV RWY 13", pdf: "charts/ITKO/STAR/userwastaken, nikita39gamer/HONDA1P RNAV RWY 13.pdf" },
          { name: "HONDA2H RNAV RWY 13", pdf: "charts/ITKO/STAR/userwastaken, nikita39gamer/HONDA2H RNAV RWY 13.pdf" },

          { name: "HONDA10", pdf: "charts/ITKO/STAR/userwastaken, nikita39gamer/HONDA10.pdf" },

          { name: "ONDER1E RNAV RWY 20", pdf: "charts/ITKO/STAR/userwastaken, nikita39gamer/ONDER1E RNAV RWY 20.pdf" },
          { name: "ONDER1H RNAV RWY 13", pdf: "charts/ITKO/STAR/userwastaken, nikita39gamer/ONDER1H RNAV RWY 13.pdf" },
          { name: "ONDER1K RNAV RWY 31", pdf: "charts/ITKO/STAR/userwastaken, nikita39gamer/ONDER1K RNAV RWY 31.pdf" },
          { name: "ONDER1P RNAV RWY 13", pdf: "charts/ITKO/STAR/userwastaken, nikita39gamer/ONDER1P RNAV RWY 13.pdf" },

          { name: "ONDER10", pdf: "charts/ITKO/STAR/userwastaken, nikita39gamer/ONDER10.pdf" },

          { name: "RENDER1K RNAV RWY 31", pdf: "charts/ITKO/STAR/userwastaken, nikita39gamer/RENDER1K RNAV RWY 31.pdf" },
          { name: "RENDR1E RNAV RWY 20", pdf: "charts/ITKO/STAR/userwastaken, nikita39gamer/RENDR1E RNAV RWY 20.pdf" },
          { name: "RENDR1H RNAV RWY 13", pdf: "charts/ITKO/STAR/userwastaken, nikita39gamer/RENDR1H RNAV RWY 13.pdf" },

          { name: "RENDR10", pdf: "charts/ITKO/STAR/userwastaken, nikita39gamer/RENDR10.pdf" }
        ]
      }
    },
    APP: {
      authors: {
        "AeroNav": [
          { name: "ILS or LOC RWY 13", pdf: "charts/ITKO/APP/AeroNav/ILS OR LOC RWY13.pdf" },
          { name: "ILS or LOC RWY 20", pdf: "charts/ITKO/APP/AeroNav/ILS OR LOC RWY20.pdf" },
          { name: "ILS or LOC RWY 31", pdf: "charts/ITKO/APP/AeroNav/ILS OR LOC RWY31.pdf" },
          { name: "RNAV (RNP) RWY 13", pdf: "charts/ITKO/APP/AeroNav/RNAV RNP RWY13.pdf" },
          { name: "RNAV (RNP) RWY 20", pdf: "charts/ITKO/APP/AeroNav/RNAV RNP RWY20.pdf" },
          { name: "GLS RWY 31", pdf: "charts/ITKO/APP/AeroNav/GLS RWY31.pdf" }
        ],
        "userwastaken, nikita39gamer": [
          { name: "ILS or LOC RWY 13", pdf: "charts/ITKO/APP/userwastaken, nikita39gamer/ILS or LOC RWY 13.pdf" },
          { name: "ILS Y or LOC Y RWY 20", pdf: "charts/ITKO/APP/userwastaken, nikita39gamer/ILS Y or LOC Y RWY 20.pdf" },
          { name: "ILS Z or LOC Z RWY 20", pdf: "charts/ITKO/APP/userwastaken, nikita39gamer/ILS Z or LOC Z RWY 20.pdf" },
          { name: "ILS DME Y or LOC DME Y RWY 31", pdf: "charts/ITKO/APP/userwastaken, nikita39gamer/ILS DME Y or LOC DME Y RWY 31.pdf" },
          { name: "ILS DME Z or LOC DME Z RWY 31", pdf: "charts/ITKO/APP/userwastaken, nikita39gamer/ILS DME Z or LOC DME Z RWY 31.pdf" },
          { name: "LDA RWY 13", pdf: "charts/ITKO/APP/userwastaken, nikita39gamer/LDA RWY 13.pdf" },
          { name: "RNP RWY 13", pdf: "charts/ITKO/APP/userwastaken, nikita39gamer/RNP RWY 13.pdf" },
          { name: "RNP RWY 20", pdf: "charts/ITKO/APP/userwastaken, nikita39gamer/RNP RWY 20.pdf" },
          { name: "RNP RWY 31", pdf: "charts/ITKO/APP/userwastaken, nikita39gamer/RNP RWY 31.pdf" },
          { name: "HIGHWAY VISUAL RWY 20", pdf: "charts/ITKO/APP/userwastaken, nikita39gamer/HIGHWAY VISUAL RWY 20.pdf" }
        ]
      }
    }
  },
  IDCS: {
    GEN: [
      { name: "General Information by <b>MR.GEARZ</b>", pdf: "charts/IDCS/GEN/General Info by MR.GEARZ.pdf" }

    ],
    GND: [
      { name: "Airport Diagram by <b>PTFS.xyz</b>", pdf: "charts/IDCS/GND/IDCS Ground Chart.pdf" }
    ],
    SID: {
      authors: {
        "MR.GEARZ": [
          { name: "BULLY1A RNAV", pdf: "charts/IDCS/SID/MR.GEARZ/BULLY1A.pdf" },
          { name: "PIPER1A RNAV", pdf: "charts/IDCS/SID/MR.GEARZ/PIPER1A.pdf" },
          { name: "PIPER1B RNAV", pdf: "charts/IDCS/SID/MR.GEARZ/PIPER1B.pdf" }
        ]
      }
    },
    STAR: {
      authors: {
        "MR.GEARZ": [
          { name: "BULLY1B RNAV", pdf: "charts/IDCS/STAR/MR.GEARZ/BULLY1B.pdf" },
          { name: "GULEG1A RNAV", pdf: "charts/IDCS/STAR/MR.GEARZ/GULEG1A.pdf" },
          { name: "KNIFRE1A RNAV", pdf: "charts/IDCS/STAR/MR.GEARZ/KNIFE1A.pdf" },
          { name: "TINDER1A RNAV", pdf: "charts/IDCS/STAR/MR.GEARZ/TINDER1A.pdf" }
        ]
      }
    },
    //No APPR
  },
  IPPH: {
    GEN: [
      { name: "General Information by <b>AeroNav</b>", pdf: "charts/IPPH/GEN/GENERAL INFORMATION.pdf" },
      { name: "Runway Information by <b>AeroNav</b>", pdf: "charts/IPPH/GEN/RUNWAY INFORMATION.pdf" },

      { name: "Airport Briefing by <b>Natto, userwastaken, Nikita39Gamer</b>", pdf: "charts/IPPH/GEN/Natto, userwastaken, Nikita39Gamer/Airport Briefing.pdf" },
      { name: "Airport Briefing CONT by <b>Natto, userwastaken, Nikita39Gamer</b>", pdf: "charts/IPPH/GEN/Natto, userwastaken, Nikita39Gamer/Airport Briefing CONT.pdf" },
      { name: "Airport Briefing CONT II by <b>Natto, userwastaken, Nikita39Gamer</b>", pdf: "charts/IPPH/GEN/Natto, userwastaken, Nikita39Gamer/Airport Briefing CONT II.pdf" },
      { name: "Airport Information by <b>Natto, userwastaken, Nikita39Gamer</b>", pdf: "charts/IPPH/GEN/Natto, userwastaken, Nikita39Gamer/Airport Information.pdf" },
      { name: "Airspace Map by <b>Natto, userwastaken, Nikita39Gamer</b>", pdf: "charts/IPPH/GEN/Natto, userwastaken, Nikita39Gamer/Airspace Map.pdf" },
      { name: "CRIB SHEET by <b>Natto, userwastaken, Nikita39Gamer</b>", pdf: "charts/IPPH/GEN/Natto, userwastaken, Nikita39Gamer/CRIB SHEET.pdf" },
      { name: "CRIB SHEET CONT by <b>Natto, userwastaken, Nikita39Gamer</b>", pdf: "charts/IPPH/GEN/Natto, userwastaken, Nikita39Gamer/CRIB SHEET CONT.pdf" }

    ],
    GND: [
      { name: "Airport Diagram by <b>PTFS.xyz</b>", pdf: "charts/IPPH/GND/IPPH Ground Chart.pdf" }
    ],
    SID: {
      authors: {
        "AeroNav": [
          { name: "CAMEL1 RNAV", pdf: "charts/IPPH/SID/AeroNav/CAMEL1 RNAV.pdf" },
          { name: "DINER1 RNAV", pdf: "charts/IPPH/SID/AeroNav/CAMEL1 RNAV.pdf" },
          { name: "PERTH1 - (PER1)", pdf: "charts/IPPH/SID/AeroNav/PERTH1 (PER1).pdf" }
        ],
        "Natto, userwastaken, Nikita39Gamer": [
          { name: "CAMEL1A RNAV RWY 11", pdf: "charts/IPPH/SID/Natto, userwastaken, Nikita39Gamer/CAMEL1A RNAV RWY 11.pdf" },
          { name: "CAMEL1B RNAV RWY 15", pdf: "charts/IPPH/SID/Natto, userwastaken, Nikita39Gamer/CAMEL1B RNAV RWY 15.pdf" },
          { name: "CAMEL1C RNAV RWY 29", pdf: "charts/IPPH/SID/Natto, userwastaken, Nikita39Gamer/CAMEL1C RNAV RWY 29.pdf" },
          { name: "CAMEL1D RNAV RWY 33", pdf: "charts/IPPH/SID/Natto, userwastaken, Nikita39Gamer/CAMEL1D RNAV RWY 33.pdf" },
          
          { name: "KNIFE1A RNAV RWY 11", pdf: "charts/IPPH/SID/Natto, userwastaken, Nikita39Gamer/KNIFE1A RNAV RWY 11.pdf" },
          { name: "KNIFE1B RNAV RWY 15", pdf: "charts/IPPH/SID/Natto, userwastaken, Nikita39Gamer/KNIFE1B RNAV RWY 15.pdf" },
          { name: "KNIFE1C RNAV RWY 29", pdf: "charts/IPPH/SID/Natto, userwastaken, Nikita39Gamer/KNIFE1C RNAV RWY 29.pdf" },
          { name: "KNIFE1D RNAV RWY 33", pdf: "charts/IPPH/SID/Natto, userwastaken, Nikita39Gamer/KNIFE1D RNAV RWY 33.pdf" },

          { name: "ROMENS1A RNAV RWY 11", pdf: "charts/IPPH/SID/Natto, userwastaken, Nikita39Gamer/ROMENS1A RNAV RWY 11.pdf" },
          { name: "ROMENS1B RNAV RWY 15V", pdf: "charts/IPPH/SID/Natto, userwastaken, Nikita39Gamer/ROMENS1B RNAV RWY 15.pdf" },
          { name: "ROMENS1C RNAV RWY 29", pdf: "charts/IPPH/SID/Natto, userwastaken, Nikita39Gamer/ROMENS1C RNAV RWY 29.pdf" },
          { name: "ROMENS1D RNAV RWY 33", pdf: "charts/IPPH/SID/Natto, userwastaken, Nikita39Gamer/ROMENS1D RNAV RWY 33.pdf" }
        ]
      }
    },
    STAR: {
      authors: {
        "AeroNav": [
          { name: "HONDA1 RNAV", pdf: "charts/IPPH/STAR/AeroNav/HONDA1 RNAV.pdf" },
          { name: "SISTA1 RNAV", pdf: "charts/IPPH/STAR/AeroNav/SISTA1 RNAV.pdf" },
          { name: "TALIS1 RNAV", pdf: "charts/IPPH/STAR/AeroNav/TALIS1 RNAV.pdf" }
        ],
        "Natto, userwastaken, Nikita39Gamer": [
          { name: "ATC24A RNAV RWY 29", pdf: "charts/IPPH/STAR/Natto, userwastaken, Nikita39Gamer/ATC24A RNAV RWY 29.pdf" },
          { name: "CAMEL1E RNAV RWY 15", pdf: "charts/IPPH/STAR/Natto, userwastaken, Nikita39Gamer/CAMEL1E RNAV RWY 15.pdf" },
          { name: "CAMEL1X RNAV RWY 11", pdf: "charts/IPPH/STAR/Natto, userwastaken, Nikita39Gamer/CAMEL1X RNAV RWY 11.pdf" },
          { name: "CAMEL1Y RNAV RWY 29", pdf: "charts/IPPH/STAR/Natto, userwastaken, Nikita39Gamer/CAMEL1Y RNAV RWY 29.pdf" },
          { name: "CAMEL1Z RNAV RWY 33", pdf: "charts/IPPH/STAR/Natto, userwastaken, Nikita39Gamer/CAMEL1Z RNAV RWY 33.pdf" },

          { name: "KNIFE1W RNAV RWY 15", pdf: "charts/IPPH/STAR/Natto, userwastaken, Nikita39Gamer/KNIFE1W RNAV RWY 15.pdf" },
          { name: "KNIFE1X RNAV RWY 11", pdf: "charts/IPPH/STAR/Natto, userwastaken, Nikita39Gamer/KNIFE1X RNAV RWY 11.pdf" },
          { name: "KNIFE1Y RNAV RWY 29", pdf: "charts/IPPH/STAR/Natto, userwastaken, Nikita39Gamer/KNIFE1Y RNAV RWY 29.pdf" },
          { name: "KNIFE1Z RNAV RWY 33", pdf: "charts/IPPH/STAR/Natto, userwastaken, Nikita39Gamer/KNIFE1Z RNAV RWY 33.pdf" },

          { name: "ROMENS1W RNAV RWY 15", pdf: "charts/IPPH/STAR/Natto, userwastaken, Nikita39Gamer/ROMENS1W RNAV RWY 15.pdf" },
          { name: "ROMENS1X RNAV RWY 11", pdf: "charts/IPPH/STAR/Natto, userwastaken, Nikita39Gamer/ROMENS1X RNAV RWY 11.pdf" },
          { name: "ROMENS1Y RNAV RWY 29", pdf: "charts/IPPH/STAR/Natto, userwastaken, Nikita39Gamer/ROMENS1Y RNAV RWY 29.pdf" },
          { name: "ROMENS1Z RNAV RWY 33", pdf: "charts/IPPH/STAR/Natto, userwastaken, Nikita39Gamer/ROMENS1Z RNAV RWY 33.pdf" }
        ]
      }
    },
    APP: {
      authors: {
        "AeroNav": [
          { name: "ILS or LOC RWY 11", pdf: "charts/IPPH/APP/ILS OR LOC RWY11.pdf" },
          { name: "GLS RWY 33", pdf: "charts/IPPH/APP/AeroNav/GLS RWY33.pdf" },
          { name: "LDA-Y RWY 29", pdf: "charts/IPPH/APP/AeroNav/LDA-Y RWY29.pdf" },
          { name: "LDA-Z RWY 29", pdf: "charts/IPPH/APP/AeroNav/LDA-Z RWY29.pdf" },
          { name: "RNP Y RWY 29", pdf: "charts/IPPH/APP/AeroNav/RNP Z RWY29.pdf" },
          { name: "HAVEN STACKS VISUAL 29/33", pdf: "charts/IPPH/APP/AeroNav/HAVEN STACKS VISUAL RWY29_33.pdf" },
          { name: "HAVEN ISLAND VISUAL 29/33", pdf: "charts/IPPH/APP/AeroNav/HAVEN ISLAND VISUAL RWY29_33.pdf" }
        ],
        "Natto, userwastaken, Nikita39Gamer": [
          { name: "ILS or LOC X RWY 11", pdf: "charts/IPPH/APP/Natto, userwastaken, Nikita39Gamer/ILS or LOC X RWY 11.pdf" },
          { name: "ILS or LOC Y RWY 11", pdf: "charts/IPPH/APP/Natto, userwastaken, Nikita39Gamer/ILS or LOC Y RWY 11.pdf" },
          { name: "ILS or LOC Y RWY 15", pdf: "charts/IPPH/APP/Natto, userwastaken, Nikita39Gamer/ILS or LOC Y RWY 15.pdf" },
          { name: "ILS or LOC Z RWY 11", pdf: "charts/IPPH/APP/Natto, userwastaken, Nikita39Gamer/ILS or LOC Z RWY 11.pdf" },
          { name: "ILS or LOC Z RWY 15", pdf: "charts/IPPH/APP/Natto, userwastaken, Nikita39Gamer/ILS or LOC Z RWY 15.pdf" },
          { name: "LOC DME RWY 29", pdf: "charts/IPPH/APP/Natto, userwastaken, Nikita39Gamer/LOC DME RWY 29.pdf" },
          { name: "RNAV (RNP) RWY 29", pdf: "charts/IPPH/APP/Natto, userwastaken, Nikita39Gamer/RNAV (RNP) RWY 29.pdf" },
          { name: "RNAV (RNP) RWY 33", pdf: "charts/IPPH/APP/Natto, userwastaken, Nikita39Gamer/RNAV (RNP) RWY 33.pdf" },
          { name: "CIRCLING RWY 29", pdf: "charts/IPPH/APP/Natto, userwastaken, Nikita39Gamer/CIRCLING RWY 29.pdf" },
          { name: "CIRCLING RWY 33", pdf: "charts/IPPH/APP/Natto, userwastaken, Nikita39Gamer/CIRCLING RWY 33.pdf" }
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
      { name: "Airport Diagram by <b>PTFS.xyz</b>", pdf: "charts/ILKL/GND/ILKL Ground Chart.pdf" }
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
      { name: "Airport Diagram by <b>PTFS.xyz</b>", pdf: "charts/ISCM/GND/ISCM Ground Chart.pdf" }
    ],
      //NO SID
      //NO STAR
      //NO APP
  },
  IJAF: {
    GEN: [
      { name: "General Information by <b>Midwest Avgeek</b>", pdf: "charts/IJAF/GEN/General Information by Midwest Avgeek.pdf" },
      { name: "General Information CONT by <b>Midwest Avgeek</b>", pdf: "charts/IJAF/GEN/General Information CONT by Midwest Avgeek.pdf" },
      { name: "MSA Diagram by <b>Midwest Avgeek</b>", pdf: "charts/IJAF/GEN/MSA Diagram by Midwest Avgeek.pdf" }
    ],
    GND: [
      { name: "Airport Diagram by <b>PTFS.xyz</b>", pdf: "charts/IJAF/GND/IJAF Ground Chart.pdf" }
    ],
    SID: {
      authors: {
        "Midwest Avgeek": [
          { name: "DUNKS2K", pdf: "charts/IJAF/SID/MIDWESTAVGEEK/DUNKS2K.pdf" },
          { name: "SISTA2K", pdf: "charts/IJAF/SID/MIDWESTAVGEEK/SISTA2K.pdf" }
        ]
      }
    },
    STAR: {
      authors: {
        "Midwest Avgeek": [
          { name: "ANYMS2B", pdf: "charts/IJAF/STAR/MIDWESTAVGEEK/ANYMS2B.pdf" },
          { name: "CAMEL1A", pdf: "charts/IJAF/STAR/MIDWESTAVGEEK/CAMEL1A.pdf" },
          { name: "CAMEL3C", pdf: "charts/IJAF/STAR/MIDWESTAVGEEK/CAMEL3C.pdf" },
          { name: "CYRIL3C", pdf: "charts/IJAF/STAR/MIDWESTAVGEEK/CYRIL3C.pdf" },
          { name: "DETOX2B", pdf: "charts/IJAF/STAR/MIDWESTAVGEEK/DETOX2B.pdf" },
          { name: "NOONU1A", pdf: "charts/IJAF/STAR/MIDWESTAVGEEK/NOONU1A.pdf" },
          { name: "NOONU3C", pdf: "charts/IJAF/STAR/MIDWESTAVGEEK/NOONU3C.pdf" },
          { name: "SILVA1A", pdf: "charts/IJAF/STAR/MIDWESTAVGEEK/SILVA1A.pdf" }
        ],
      }
    },
    APP: {
      authors: {
        "Midwest Avgeek": [
          { name: "ILS or LOC RWY 25", pdf: "charts/IJAF/APP/MIDWESTAVGEEK/ILS or LOC RWY 25.pdf" },
          { name: "RNAV (RNP) Y RWY 07", pdf: "charts/IJAF/APP/MIDWESTAVGEEK/RNAV (RNP) Y RWY 07.pdf" },
          { name: "RNAV (RNP) Z RWY 07", pdf: "charts/IJAF/APP/MIDWESTAVGEEK/RNAV (RNP) Z RWY 07.pdf" },
          { name: "VOR:DME RWY 25", pdf: "charts/IJAF/APP/MIDWESTAVGEEK/VOR_DME RWY 25.pdf" }
        ]
      }
    }
  },
  IZOL: {
    GEN: [
      { name: "Airport Information by <b>Midwest Avmaps</b>", pdf: "charts/IZOL/GEN/Midwest Avmaps/Airport INFO.pdf" },
      { name: "/Minimum Altitudes by <b>Midwest Avmaps</b>", pdf: "charts/IZOL/GEN/Midwest Avmaps/Minimum Altitudes.pdf" },

      { name: "AeroDrome Information by <b>SANDERLI25</b>", pdf: "charts/IZOL/GEN/SANDERLI25/AeroDrome Information.pdf" },
      { name: "AeroDrome Information CONT by <b>SANDERLI25</b>", pdf: "charts/IZOL/GEN/SANDERLI25/AeroDrome inforamtion CONT.pdf" },
      { name: "AeroDrome Information CONT II by <b>SANDERLI25</b>", pdf: "charts/IZOL/GEN/SANDERLI25/AeroDrome Information CONT II.pdf" },

      { name: "Airport Briefing by <b>userwastaken</b>", pdf: "charts/IZOL/GEN/userwastaken/Airport Briefing.pdf" },
      { name: "AIRSPACE Chart by <b>userwastaken</b>", pdf: "charts/IZOL/GEN/userwastaken/AIRSPACE Chart.pdf" },
      { name: "CRIB Sheet by <b>userwastaken</b>", pdf: "charts/IZOL/GEN/userwastaken/CRIB SHEET.pdf" }

    ],
    GND: [
      { name: "Airport Diagram by <b>PTFS.xyz</b>", pdf: "charts/IJAF/GND/IJAF Ground Chart.pdf" }
    ],
    SID: {
      authors: {
        "Midwest Avmaps": [
          { name: "BELRA2 RNAV (ALL RWYS)", pdf: "charts/IZOL/SID/Midwest Avmaps/BELRA2 RNAV (ALL RWYS).pdf" },
          { name: "BONZA2 (ALL RWYS)", pdf: "charts/IZOL/SID/Midwest Avmaps/BONZA2 (ALL RWYS).pdf" },
          { name: "CAMEL3 RNAV (ALL RWYS)", pdf: "charts/IZOL/SID/Midwest Avmaps/CAMEL3 RNAV (ALL RWYS).pdf" },
          { name: "KELLA3 RNAV (ALL RWYS)", pdf: "charts/IZOL/SID/Midwest Avmaps/KELLA3 RNAV (ALL RWYS).pdf" },
          { name: "RAXIN3 RNAV (ALL RWYS)", pdf: "charts/IZOL/SID/Midwest Avmaps/RAXIN3 RNAV (ALL RWYS).pdf" },
          { name: "TIKKI2 (ALL RWYS)", pdf: "charts/IZOL/SID/Midwest Avmaps/TIKKI2 (ALL RWYS).pdf" }
        ],
        "SANDERLI25": [
          { name: "ANYMS5B RNAV RWY 28", pdf: "charts/IZOL/SID/SANDERLI25/ANYMS5B RNAV RWY 28.pdf" },
          { name: "CHAIN5A RNAV RWY 10", pdf: "charts/IZOL/SID/SANDERLI25/CHAIN5A RNAV RWY 10.pdf" },
          { name: "CYRIL5B RNAV RWY 28", pdf: "charts/IZOL/SID/SANDERLI25/CYRIL5B RNAV RWY 28.pdf" },
          { name: "DUNKS5A RNAV RWY 10", pdf: "charts/IZOL/SID/SANDERLI25/DUNKS5A RNAV RWY 10.pdf" },
          { name: "DUNKS5B RNAV RWY 28", pdf: "charts/IZOL/SID/SANDERLI25/DUNKS5B RNAV RWY 28.pdf" },
          { name: "JUSTY5A RNAV RWY 10", pdf: "charts/IZOL/SID/SANDERLI25/JUSTY5A RNAV RWY 10.pdf" },
          { name: "UDMUG5A RNAV RWY 10", pdf: "charts/IZOL/SID/SANDERLI25/UDMUG5A RNAV RWY 10.pdf" },
          { name: "DEPARTURE ROUTES", pdf: "charts/IZOL/SID/SANDERLI25/DEPARTURE ROUTES.pdf" },
          { name: "DEPARTURE ROUTES CONT", pdf: "charts/IZOL/SID/SANDERLI25/DEPARTURE ROUTES CONT II.pdf" }
        ],
        "userwastaken": [
          { name: "DELIVERY1J RNAV RWY 28", pdf: "charts/IZOL/SID/userwastaken/DELIVERY1J RNAV RWY 28.pdf" },
          { name: "DELIVERY1L RNAV RWY 10", pdf: "charts/IZOL/SID/userwastaken/DELIVERY1L RNAV RWY 10.pdf" },
          { name: "DUNKS1J RNAV RWY 28", pdf: "charts/IZOL/SID/userwastaken/DUNKS1J RNAV RWY 28.pdf" },
          { name: "DUNKS1L RNAV RWY 10", pdf: "charts/IZOL/SID/userwastaken/DUNKS1L RNAV RWY 10.pdf" },
          { name: "SILVA1J RNAV RWY 28", pdf: "charts/IZOL/SID/userwastaken/SILVA1J RNAV RWY 28.pdf" },
          { name: "SILVA1L RNAV RWY 10", pdf: "charts/IZOL/SID/userwastaken/SILVA1L RNAV RWY 10.pdf" }
        ]
      }
    },
    STAR: {
      authors: {
        "Midwest Avmaps": [
          { name: "BANKY1 (ALL RWYS)", pdf: "charts/IZOL/STAR/Midwest Avmaps/BANKY1 (ALL RWYS).pdf" },
          { name: "MAKOS3 (ALL RWYS)", pdf: "charts/IZOL/STAR/Midwest Avmaps/MAKOS3 (ALL RWYS).pdf" },
          { name: "ORANGE1 (ALL RWYS)", pdf: "charts/IZOL/STAR/Midwest Avmaps/ORANGE1 (ALL RWYS).pdf" }
        ],
        "SANDERLI25": [
          { name: "CAMEL1D RNAV RWY 28", pdf: "charts/IZOL/STAR/SANDERLI25/CAMEL1D RNAV RWY 28.pdf" },
          { name: "CHAIN2D RNAV RWY 28", pdf: "charts/IZOL/STAR/SANDERLI25/CHAIN2D RNAV RWY 28.pdf" },
          { name: "DOGGO2D RNAV RWY 28", pdf: "charts/IZOL/STAR/SANDERLI25/DOGGO2D RNAV RWY 28.pdf" },
          { name: "JUSTY2D RNAV RWY 28", pdf: "charts/IZOL/STAR/SANDERLI25/JUSTY2D RNAV RWY 28.pdf" },
          { name: "UDMUG RNAV RWY 28", pdf: "charts/IZOL/STAR/SANDERLI25/UDMUG RNAV RWY 28.pdf" },
          { name: "ARRIVAL ROUTING", pdf: "charts/IZOL/STAR/SANDERLI25/ARRIVAL ROUTING.pdf" },
          { name: "ARRIVAL ROUTING CONT", pdf: "charts/IZOL/STAR/SANDERLI25/ARRIVAL ROUTING CONT .pdf" }
        ],
        "userwastaken": [
          { name: "DELIVERY1H RNAV RWY 10", pdf: "charts/IZOL/STAR/userwastaken/DELIVERY1H RNAV RWY 10.pdf" },
          { name: "DELIVERY1K RNAV RWY 28", pdf: "charts/IZOL/STAR/userwastaken/DELIVERY1K RNAV RWY 28.pdf" },
          { name: "DUNKS1H RNAV RWY 10", pdf: "charts/IZOL/STAR/userwastaken/DUNKS1H RNAV RWY 10.pdf" },
          { name: "DUNKS1K RNAV RWY 28", pdf: "charts/IZOL/STAR/userwastaken/DUNKS1K RNAV RWY 28.pdf" },
          { name: "SILVA1H RNAV RWY 10", pdf: "charts/IZOL/STAR/userwastaken/SILVA1H RNAV RWY 10.pdf" },
          { name: "SILVA1K RNAV RWY 28", pdf: "charts/IZOL/STAR/userwastaken/SILVA1K RNAV RWY 28.pdf" }
        ]
      }
    },
    APP: {
      authors: {
        "Midwest Avmaps": [
          { name: "ILS or LOC RWY 28", pdf: "charts/IZOL/APP/Midwest Avmaps/ILS or LOC RWY 28.pdf" },
          { name: "LDA RWY 10", pdf: "charts/IZOL/APP/Midwest Avmaps/LDA RWY 10.pdf" },
          { name: "LOC (BACK CRS) RWY 10", pdf: "charts/IZOL/APP/Midwest Avmaps/LOC (BACK CRS) RWY 10.pdf" },
          { name: "RNAV (GPS) RWY 28", pdf: "charts/IZOL/APP/Midwest Avmaps/RNAV (GPS) RWY 28.pdf" },
          { name: "RNAV (RNP) Y RWY 10", pdf: "charts/IZOL/APP/Midwest Avmaps/RNAV (RNP) Y RWY 10.pdf" },
          { name: "RNAV (RNP) Z RWP 10", pdf: "charts/IZOL/APP/Midwest Avmaps/RNAV (RNP) Z RWP 10.pdf" }
        ],
        "SANDERLI25": [
          { name: "RNP X RWY 10 (AR)", pdf: "charts/IZOL/APP/SANDERLI25/RNP X RWY 10 (AR).pdf" },
          { name: "VISUAL APPROACH CHART", pdf: "charts/IZOL/APP/SANDERLI25/VISUAL APPROACH CHART.pdf" }
        ],
        "userwastaken": [
          { name: "ILS or LOC RWY 10", pdf: "charts/IZOL/APP/userwastaken/ILS or LOC RWY 10.pdf" },
          { name: "ILS or LOC RWY 28", pdf: "charts/IZOL/APP/userwastaken/ILS or LOC RWY 28.pdf" }
        ]
      }
    }
  },
  ISKP: {
    GEN: [
      { name: "Airport Information by <b>Alisoe</b>", pdf: "charts/ISKP/GEN/Alisoe/Airport Information.pdf" },
      { name: "AirSpace Chart by <b>Alisoe</b>", pdf: "charts/ISKP/GEN/Alisoe/Airspace Chart.pdf" },
      { name: "Elevation Chart by <b>Alisoe</b>", pdf: "charts/ISKP/GEN/Alisoe/Elevation Chart.pdf" },

      { name: "Airport Information by <b>JTV13</b>", pdf: "charts/ISKP/GEN/JTV13/Airport Information.pdf" }
    ],
    GND: [
      { name: "Airport Diagram by <b>PTFS.xyz</b>", pdf: "charts/IIAB/GND/IIAB Ground Chart.pdf" }
    ],
    SID: {
      authors: {
        "Alisoe": [
          { name: "ANYMS1L RNAV RWY 23", pdf: "charts/ISKP/SID/Alisoe/ANYMS1L RNAV RWY 23.pdf" },
          { name: "ANYMS1V RNAV RWY 05", pdf: "charts/ISKP/SID/Alisoe/ANYMS1V RNAV RWY 05.pdf" },
          { name: "CAWZE1L RNAV RWY 23", pdf: "charts/ISKP/SID/Alisoe/CAWZE1L RNAV RWY 23.pdf" },
          { name: "CAWZE1V RNAV RWY 05", pdf: "charts/ISKP/SID/Alisoe/CAWZE1V RNAV RWY 05.pdf" },
          { name: "CLR1L RNAV RWY 23", pdf: "charts/ISKP/SID/Alisoe/CLR1L RNAV RWY 23.pdf" },
          { name: "CLR1V RNAV RWY 05", pdf: "charts/ISKP/SID/Alisoe/CLR1V RNAV RWY 05.pdf" },
          { name: "DEL1L RNAV RWY 23", pdf: "charts/ISKP/SID/Alisoe/DEL1L RNAV RWY 23.pdf" },
          { name: "DEL1V RNAV RWY 05", pdf: "charts/ISKP/SID/Alisoe/DEL1V RNAV RWY 05.pdf" },
          { name: "OCEEN1L RNAV RWY 23", pdf: "charts/ISKP/SID/Alisoe/OCEEN1L RNAV RWY 23.pdf" },
          { name: "OCEEN1V RNAV RWY 05", pdf: "charts/ISKP/SID/Alisoe/OCEEN1V RNAV RWY 05.pdf" }
        ],
        "GalaxyON_1, Tiaguinho_2009": [
          { name: "ANYMS2B VISUAL RNAV", pdf: "charts/ISKP/SID/GalaxyON_1, Tiaguinho_2009/ANYMS2B VISUAL RNAV.pdf" },
          { name: "ANYMS2C VISUAL RNAV", pdf: "charts/ISKP/SID/GalaxyON_1, Tiaguinho_2009/ANYMS2C VISUAL RNAV.pdf" },
          { name: "CAWZE5E VISUAL RNAV", pdf: "charts/ISKP/SID/GalaxyON_1, Tiaguinho_2009/CAWZE5E VISUAL RNAV.pdf" },
          { name: "CAWZE5V VISUAL RNAV", pdf: "charts/ISKP/SID/GalaxyON_1, Tiaguinho_2009/CAWZE5V VISUAL RNAV.pdf" }
        ],
        "JTV13": [
          { name: "SKOPELOS1 DEP (SKP1)", pdf: "charts/ISKP/SID/JTV13/SKOPELOS1 DEP (SKP1).pdf" }
        ]
      }
    },
    STAR: {
      authors: {
        "Alisoe": [
          { name: "ANYMS2E RNAV RWY 23", pdf: "charts/ISKP/STAR/Alisoe/ANYMS2E RNAV RWY 23.pdf" },
          { name: "ANYMS2T RNAV RWY 05", pdf: "charts/ISKP/STAR/Alisoe/ANYMS2T RNAV RWY 05.pdf" },
          { name: "CAWZE2E RNAV RWY 23", pdf: "charts/ISKP/STAR/Alisoe/CAWZE2E RNAV RWY 23.pdf" },
          { name: "CAWZE2T RNAV RWY 05", pdf: "charts/ISKP/STAR/Alisoe/CAWZE2T RNAV RWY 05.pdf" },
          { name: "CLR2E RNAV RWY 23", pdf: "charts/ISKP/STAR/Alisoe/CLR2E RNAV RWY 23.pdf" },
          { name: "DEL2T RNAV RWY 05", pdf: "charts/ISKP/STAR/Alisoe/DEL2T RNAV RWY 05.pdf" },
          { name: "OCEEN2E RNAV RWY 23", pdf: "charts/ISKP/STAR/Alisoe/OCEEN2E RNAV RWY 23.pdf" },
          { name: "OCEEN2T RNAV RWY 05", pdf: "charts/ISKP/STAR/Alisoe/OCEEN2T RNAV RWY 05.pdf" }
        ],
        "GalaxyON_1, Tiaguinho_2009": [
          { name: "ANYMS3B RNAV RWY 23", pdf: "charts/ISKP/STAR/GalaxyON_1, Tiaguinho_2009/ANYMS3B RNAV RWY 23.pdf" },
          { name: "ANYMS3C RNAV RWY 23", pdf: "charts/ISKP/STAR/GalaxyON_1, Tiaguinho_2009/ANYMS3C RNAV RWY 23.pdf" },
          { name: "ANYMS3D RNAV RWY 23", pdf: "charts/ISKP/STAR/GalaxyON_1, Tiaguinho_2009/ANYMS3D RNAV RWY 23.pdf" },
          { name: "ANYMS3E RNAV RWY 05", pdf: "charts/ISKP/STAR/GalaxyON_1, Tiaguinho_2009/ANYMS3E RNAV RWY 05.pdf" },
          { name: "CAWZE3A RNAV RWY 23", pdf: "charts/ISKP/STAR/GalaxyON_1, Tiaguinho_2009/CAWZE3A RNAV RWY 23.pdf" },
          { name: "CAWZE3B RNAV RWY 23", pdf: "charts/ISKP/STAR/GalaxyON_1, Tiaguinho_2009/CAWZE3B RNAV RWY 23.pdf" },
          { name: "CAWZE3C RNAV RWY 23", pdf: "charts/ISKP/STAR/GalaxyON_1, Tiaguinho_2009/CAWZE3C RNAV RWY 23.pdf" },
          { name: "CAWZE3D RNAV RWY 05", pdf: "charts/ISKP/STAR/GalaxyON_1, Tiaguinho_2009/CAWZE3D RNAV RWY 05.pdf" },
        ]
      }
    },
    APP: {
      authors: {
        "GalaxyON_1, Tiaguinho_2009": [
          { name: "RNP RWY 05", pdf: "charts/ISKP/APP/GalaxyON_1, Tiaguinho_2009/RNP RWY 05.pdf" },
          { name: "RNP VISUAL RWY 23", pdf: "charts/ISKP/APP/GalaxyON_1, Tiaguinho_2009/RNP VISUAL RWY 23.pdf" }
        ]
      }
    }
  },
  IHEN: {
      //NO GEN
    GND: [
      { name: "Airport Diagram by <b>PTFS.xyz</b>", pdf: "charts/IHEN/GND/IHEN Ground Chart.pdf" }
    ],
      //NO SID
      //NO STAR
      //NO APP
  },
  IIAB: {
    GEN: [
      { name: "General Information by <b>AeroNav</b>", pdf: "charts/IIAB/GEN/GENERALINFO.pdf" }
    ],
    GND: [
      { name: "Airport Diagram by <b>PTFS.xyz</b>", pdf: "charts/IIAB/GND/IIAB Ground Chart.pdf" }
    ],
    SID: {
      authors: {
        "AeroNav": [
          { name: "AIRBASE1 (IAB1)", pdf: "charts/IIAB/SID/AIRBASE1 (IAB1).pdf" }
        ],
        "p1anes/p1anez": [
          { name: "CANDLE1 RNAV", pdf: "charts/IIAB/SID/p1anes_p1anez/CANDLE1.pdf" },
          { name: "CANDLE2 RNAV", pdf: "charts/IIAB/SID/p1anes_p1anez/CANDLE2.pdf" }
        ]
      }
    },
    STAR: {
      authors: {
        "AeroNav": [
          { name: "LARNACA1 (LCK1)", pdf: "charts/IIAB/STAR/LARNACA1 (LCK1).pdf" }
        ],
        "p1anes/p1anez": [
          { name: "ASPENER3A", pdf: "charts/IIAB/STAR/p1anes_p1anez/ASPENER3A.pdf" },
          { name: "ASPENER4A", pdf: "charts/IIAB/STAR/p1anes_p1anez/ASPENER4A.pdf" },
          { name: "DEBUG4A", pdf: "charts/IIAB/STAR/p1anes_p1anez/DEBUG4A.pdf" },
          { name: "RENTS3A", pdf: "charts/IIAB/STAR/p1anes_p1anez/RENTS3A.pdf" },
          { name: "RENTS4A", pdf: "charts/IIAB/STAR/p1anes_p1anez/RENTS4A.pdf" }
        ]
      }
    },
    APP: {
      authors: {
        "AeroNav": [
          { name: "ILS or LOC RWY 09L", pdf: "charts/IIAB/APP/ILS OR LOC RWY09L.pdf" },
          { name: "ILS or LOC RWY 09R", pdf: "charts/IIAB/APP/ILS OR LOC RWY09R.pdf" }
        ],
        "p1anes/p1anez": [
          { name: "ILS or LOC RWY 09L", pdf: "charts/IIAB/APP/p1anes_p1anez/ILS RWY 09L.pdf" },
          { name: "ILS or LOC RWY 09R", pdf: "charts/IIAB/APP/p1anes_p1anez/ILS RWY 09R.pdf" },
          { name: "LDA RWY 27L", pdf: "charts/IIAB/APP/p1anes_p1anez/LDA RWY 27L.pdf" },
          { name: "LDA RWY 27R", pdf: "charts/IIAB/APP/p1anes_p1anez/LDA RWY 27R.pdf" }
        ]
      }
    }
  },
  IBAR: {
    GEN: [
      { name: "General Information by userwastaken, din0_nuggies21", pdf: "charts/IBAR/GEN/GENERALINFO - USERWASTAKEN, DIN0_NUGGIES21.pdf" }
    ],
    GND: [
      { name: "Airport Diagram by <b>PTFS.xyz</b>", pdf: "charts/IBAR/GND/IBAR Ground Chart.pdf" }
    ],
    SID: {
      authors: {
        "userwastaken, din0_nuggies21": [
          { name: "GRASS1C", pdf: "charts/IBAR/SID/GRASS1C - USERWASTAKEN, DIN0_NUGGIES21.pdf" },
          { name: "JACKI1A", pdf: "charts/IBAR/SID/JACKI1A - USERWASTAKEN, DIN0_NUGGIES21.pdf" },
          { name: "LAZER1B", pdf: "charts/IBAR/SID/LAZER1B - USERWASTAKEN, DIN0_NUGGIES21.pdf" }
        ]
      }
    },
    STAR: {
      authors: {
        "userwastaken, din0_nuggies21": [
          { name: "AQWRT2C", pdf: "charts/IBAR/STAR/AQWRT2C - USERWASTAKEN, DIN0_NUGGIES21.pdf" },
          { name: "BOBUX2A", pdf: "charts/IBAR/STAR/BOBUX2A - USERWASTAKEN, DIN0_NUGGIES21.pdf" },
          { name: "RENTS2B", pdf: "charts/IBAR/STAR/RENTS2B USERWASTAKEN, DIN0_NUGGIES21.pdf" }
        ]
      }
    },
    APP: {
      authors: {
        "userwastaken, din0_nuggies21 1": [
          { name: "ILS or LOC RWY SAND", pdf: "charts/IBAR/APP/ILS or LOC RWY Sand.pdf" }
        ]
      }
    }
  },
  IPAP: {
    GEN: [
      { name: "General Information by <b>AeroNav</b>", pdf: "charts/IPAP/GEN/AeroNav/GeneralInfo.pdf" },
      { name: "TakeOff Minimums by <b>AeroNav</b>", pdf: "charts/IPAP/GEN/AeroNav/Takeoff Minimums.pdf" },

      { name: "Airport Briefing by <b>GalaxyON_1</b>", pdf: "charts/IPAP/GEN/GalaxyON_1/Airport Briefing.pdf" },
      { name: "Airport Briefing CONT by <b>GalaxyON_1</b>", pdf: "charts/IPAP/GEN/GalaxyON_1/Airport Briefing CONT.pdf" },
      { name: "General Information by <b>GalaxyON_1</b>", pdf: "charts/IPAP/GEN/GalaxyON_1/General Information.pdf" },
      { name: "STAR and SID Recommendations by <b>GalaxyON_1</b>", pdf: "charts/IPAP/GEN/GalaxyON_1/STAR_SID Recommendations.pdf" },

      { name: "AeroDrome Information by <b>SANDERLI25</b>", pdf: "charts/IPAP/GEN/SANDERLI25/Aerodrome Information.pdf" },
      { name: "AeroDrome Infromation CONT by <b>SANDERLI25</b>", pdf: "charts/IPAP/GEN/SANDERLI25/Aerodrome Information CONT.pdf" }
    ],
    GND: [
      { name: "Airport Diagram by <b>PTFS.xyz</b>", pdf: "charts/IPAP/GND/IPAP Ground Chart.pdf" }
    ],
    SID: {
      authors: {
        "AeroNav": [
          { name: "KINDLE1 RNAV", pdf: "charts/IPAP/SID/AeroNav/KINDLE1 RNAV.pdf" },
          { name: "PAPHOS1 (PFO1)", pdf: "charts/IPAP/SID/AeroNav/PAPHOS1 (PFO1).pdf" }
        ],
        "GalaxyON_1": [
          { name: "RENTS1A RNAV", pdf: "charts/IPAP/SID/GalaxyON_1/RENTS1A RNAV.pdf" },
          { name: "RENTS2A", pdf: "charts/IPAP/SID/GalaxyON_1/RENTS2A.pdf" }
        ],
        "PLAYEVATOR": [
          { name: "RENTS1A RNAV RWY 35", pdf: "charts/IPAP/SID/PLAYEVATOR/RENTS1A RNAV RWY 35.pdf" },
          { name: "RENTS2A RNAV RWY 17", pdf: "charts/IPAP/SID/PLAYEVATOR/RENTS2A RNAV RWY 17.pdf" }
        ],
        "SANDERLI25": [
          { name: "RENTS1A RNAV", pdf: "charts/IPAP/SID/SANDERLI25/RENTS1A RNAV.pdf" },
          { name: "RENTS1B RNAV", pdf: "charts/IPAP/SID/SANDERLI25/RENTS1B RNAV copy.pdf" }
        ]
      }
    },
    STAR: {
      authors: {
        "AeroNav": [
          { name: "JAMSI1", pdf: "charts/IPAP/STAR/AeroNav/JAMSI1.pdf" },
          { name: "JUSTY1", pdf: "charts/IPAP/STAR/AeroNav/JUSTY1.pdf" }
        ],
        "GalaxyON_1": [
          { name: "DOGGO1B RNAV", pdf: "charts/IPAP/STAR/GalaxyON_1/DOGGO1B RNAV.pdf" },
          { name: "DOGGO2B RNAV", pdf: "charts/IPAP/STAR/GalaxyON_1/DOGGO2B RNAV.pdf" },
          { name: "JAMSI1B RNAV", pdf: "charts/IPAP/STAR/GalaxyON_1/JAMSI1B RNAV.pdf" },
          { name: "JAMSI2B RNAV", pdf: "charts/IPAP/STAR/GalaxyON_1/JAMSI2B RNAV.pdf" },
          { name: "RENTS1B RNAV", pdf: "charts/IPAP/STAR/GalaxyON_1/RENTS1B RNAV.pdf" },
          { name: "RENTS2B RNAV", pdf: "charts/IPAP/STAR/GalaxyON_1/RENTS2B RNAV.pdf" }

        ],
        "PLAYEVATOR": [
          { name: "RENTS1B RNAV RWY 17", pdf: "charts/IPAP/STAR/PLAYEVATOR/RENTS1B RNAV RWY 17.pdf" },
          { name: "RENTS2B RNAV RWY 35", pdf: "charts/IPAP/STAR/PLAYEVATOR/RENTS2B RNAV RWY 35.pdf" }
        ]
      }
    },
    APP: {
      authors: {
        "AeroNav": [
          { name: "ILS or LOC RWY 17", pdf: "charts/IPAP/APP/AeroNav/ILS OR LOC RWY17.pdf" },
          { name: "ILS or LOC RWY 35", pdf: "charts/IPAP/APP/AeroNav/ILS OR LOC RWY35.pdf" }
        ],
        "GalaxyON_1": [
          { name: "ILS or LOC RWY 17", pdf: "charts/IPAP/APP/GalaxyON_1/ILS or LOC RWY 17.pdf" },
          { name: "ILS or LOC RWY 35", pdf: "charts/IPAP/APP/GalaxyON_1/ILS or LOC RWY 35.pdf" }
        ],
        "SANDERLI25": [
          { name: "ILS or LOC RWY 17", pdf: "charts/IPAP/APP/SANDERLI25/ILS or LOC RWY 17.pdf" },
          { name: "ILS or LOC RWY 35", pdf: "charts/IPAP/APP/SANDERLI25/ILS or LOC RWY 35.pdf" }
        ]
      }
    }
  },
  ILAR: {
    GEN: [
      { name: "General Information by <b>VilleTheDude, Willek10</b>", pdf: "charts/ILAR/GEN/Villethedude/GENERALINFO.pdf" },
      { name: "General Information CONT by <b>VilleTheDude, Willek10</b>", pdf: "charts/ILAR/GEN/Villethedude/GENERALINFOCONT..pdf" },
      { name: "Crib Sheet by <b>VilleTheDude, Willek10</b>", pdf: "charts/ILAR/GEN/Villethedude/Crib sheet.pdf" },

      { name: "General Information by <b>Aloha516</b>", pdf: "charts/ILAR/GEN/Aloha516/GENERAL INFORMATION .pdf" },
      { name: "General Operations by <b>Aloha516</b>", pdf: "charts/ILAR/GEN/Aloha516/GENERAL OPERATIONS.pdf" },

      { name: "Airport Briefing by <b>galaxyON_1, Tiaguinho_2009</b>", pdf: "charts/ILAR/GEN/galaxyON_1, Tiaguinho_2009/Airport Briefing.pdf" },
      { name: "Airport Briefing CONT by <b>galaxyON_1, Tiaguinho_2009</b>", pdf: "charts/ILAR/GEN/galaxyON_1, Tiaguinho_2009/Airport Briefing CONT.pdf" },

      { name: "AirSpace Chart Larnaca by <b>userwastaken, & Nikita39Gamer</b>", pdf: "charts/ILAR/GEN/userwastaken, & Nikita39Gamer/AIRSPACE CHART LARNACA.pdf" },
      { name: "Controller Briefing by <b>userwastaken, & Nikita39Gamer</b>", pdf: "charts/ILAR/GEN/userwastaken, & Nikita39Gamer/SHORTCONTROLLER BRIEFING.pdf" },

    ],
    GND: [
      { name: "Airport Diagram by <b>PTFS.xyz</b>", pdf: "charts/ILAR/GND/ILAR Ground Chart.pdf" }
    ],
    SID: {
      authors: {
        "VilleTheDude, Willek10": [
          { name: "LAZER1P RNAV", pdf: "charts/ILAR/SID/Villethedude/LAZER1P RNAV.pdf" },
          { name: "LAZER1R RNAV", pdf: "charts/ILAR/SID/Villethedude/LAZER1R RNAV.pdf" },
          { name: "OCEEN2L RNAV", pdf: "charts/ILAR/SID/Villethedude/OCEEN2L RNAV.pdf" },
          { name: "OCEEN2R RNAV", pdf: "charts/ILAR/SID/Villethedude/OCEEN2R RNAV.pdf" },
          { name: "OCEEN3P RNAV", pdf: "charts/ILAR/SID/Villethedude/OCEEN3P RNAV.pdf" },
          { name: "ODUKO1P RNAV", pdf: "charts/ILAR/SID/Villethedude/ODUKO1P RNAV.pdf" },
          { name: "ODUKO1R RNAV", pdf: "charts/ILAR/SID/Villethedude/ODUKO1R RNAV.pdf" },
          { name: "QUEEN1P RNAV", pdf: "charts/ILAR/SID/Villethedude/QUEEN1P RNAV.pdf" },
          { name: "QUEEN3R RNAV", pdf: "charts/ILAR/SID/Villethedude/QUEEN3R RNAV.pdf" },
          { name: "RENTS1R RNAV", pdf: "charts/ILAR/SID/Villethedude/RENTS1R RNAV.pdf" },
          { name: "RENTS1R RNAV", pdf: "charts/ILAR/SID/Villethedude/RENTS2P RNAV.pdf" }
        ],
        "Aloha516": [
          { name: "LAMBO2S RWY 06", pdf: "charts/ILAR/SID/Aloha516/LAMBO2S RWY 06.pdf" },
          { name: "LAMBO2Y RYW24", pdf: "charts/ILAR/SID/Aloha516/LAMBO2Y RYW24.pdf" },
          { name: "LARNACA1Q (ILAR1Q)", pdf: "charts/ILAR/SID/Aloha516/LARNACA1Q ILAR1Q.pdf" },
          { name: "LARNACA2M (ILAR2M)", pdf: "charts/ILAR/SID/Aloha516/LARNACA2M [ILAR2M].pdf" },
          { name: "LAZER2S RWY 06", pdf: "charts/ILAR/SID/Aloha516/LAZER2S RWY 06.pdf" },
          { name: "LAZER2Y RYW 24", pdf: "charts/ILAR/SID/Aloha516/LAZER2Y RYW24.pdf" },
          { name: "MONTY2S RWY 06", pdf: "charts/ILAR/SID/Aloha516/MONTY2S RWY 06.pdf" },
          { name: "MONTY2Y RYW 24", pdf: "charts/ILAR/SID/Aloha516/MONTY2Y RYW24.pdf" }
        ],
        "galaxyON_1, Tiaguinho_2009": [
          { name: "ASPEN2A RNAV RWY 24", pdf: "charts/ILAR/SID/galaxyON_1, Tiaguinho_2009/ASPEN2A RNAV RWY 24.pdf" },
          { name: "GRASS2A RNAV RWY 24", pdf: "charts/ILAR/SID/galaxyON_1, Tiaguinho_2009/GRASS2A RNAV RWY 24.pdf" },
          { name: "GRASS2B RNAV RWY 06", pdf: "charts/ILAR/SID/galaxyON_1, Tiaguinho_2009/GRASS2B RNAV RWY 06.pdf" },
          { name: "JAMSI2B RNAV RWY 06", pdf: "charts/ILAR/SID/galaxyON_1, Tiaguinho_2009/JAMSI2B RNAV RWY 06.pdf" },
          { name: "JUSTY2B RNAV RWY 06", pdf: "charts/ILAR/SID/galaxyON_1, Tiaguinho_2009/JUSTY2B RNAV RWY 06.pdf" },
          { name: "LAZER2A RNAV RWY 24", pdf: "charts/ILAR/SID/galaxyON_1, Tiaguinho_2009/LAZER2A RNAV RWY 24.pdf" },
          { name: "LAZER2B RNAV RWY 06", pdf: "charts/ILAR/SID/galaxyON_1, Tiaguinho_2009/LAZER2B RNAV RWY 06.pdf" },
          { name: "REAPR2A RNAV RWY 24", pdf: "charts/ILAR/SID/galaxyON_1, Tiaguinho_2009/REAPR2A RNAV RWY 24.pdf" },
          { name: "RENTS2A RNAV RWY 24", pdf: "charts/ILAR/SID/galaxyON_1, Tiaguinho_2009/RENTS2A RNAV RWY 24.pdf" },
          { name: "RENTS2B RNAV RWY 06", pdf: "charts/ILAR/SID/galaxyON_1, Tiaguinho_2009/RENTS2B RNAV RWY 06 .pdf" }
        ],
        "greek_dutchman": [
          { name: "ANYMS2G (RWY 06)", pdf: "charts/ILAR/SID/greek_dutchman/ANYMS2G (RWY 06).pdf" },
          { name: "JAMSI2G (RWY 06)", pdf: "charts/ILAR/SID/greek_dutchman/JAMSI2G (RWY 06).pdf" },
          { name: "JAMSI2H (RWY 24)", pdf: "charts/ILAR/SID/greek_dutchman/JAMSI2H (RWY 24).pdf" },
          { name: "JUSTY2G (RWY 06)", pdf: "charts/ILAR/SID/greek_dutchman/JUSTY2G (RWY 06).pdf" },
          { name: "JUSTY2H (RWY 24)", pdf: "charts/ILAR/SID/greek_dutchman/JUSTY2H (RWY 24)).pdf" },
          { name: "LAZER2G (RWY 06)", pdf: "charts/ILAR/SID/greek_dutchman/LAZER2G (RWY 06).pdf" },
          { name: "LAZER2H (RWY 24)", pdf: "charts/ILAR/SID/greek_dutchman/LAZER2H (RWY 24).pdf" },
          { name: "REAPR2H (RWY 24)", pdf: "charts/ILAR/SID/greek_dutchman/REAPR2H (RWY 24).pdf" }
        ],
        "userwastaken, & Nikita39Gamer": [
          { name: "ANYMS1J (RWY 06)", pdf: "charts/ILAR/SID/userwastaken, & Nikita39Gamer/ANYMS1J (RWY 06).pdf" },
          { name: "ANYMS1L (RWY 24)", pdf: "charts/ILAR/SID/userwastaken, & Nikita39Gamer/ANYMS1L (RWY 24).pdf" },
          { name: "JAMSI1J (RWY 06)", pdf: "charts/ILAR/SID/userwastaken, & Nikita39Gamer/JAMSI1J (RWY 06).pdf" },
          { name: "JAMSI1L (RWY 24)", pdf: "charts/ILAR/SID/userwastaken, & Nikita39Gamer/JAMSI1L (RWY 24).pdf" },
          { name: "JUSTY1J (RWY 06)", pdf: "charts/ILAR/SID/userwastaken, & Nikita39Gamer/JUSTY1J (RWY 06).pdf" },
          { name: "JUSTY1L (RWY 24)", pdf: "charts/ILAR/SID/userwastaken, & Nikita39Gamer/JUSTY1L (RWY 24).pdf" },
          { name: "REAPR1J (RWY 06)", pdf: "charts/ILAR/SID/userwastaken, & Nikita39Gamer/REAPR1J (RWY 06).pdf" },
          { name: "REAPR1L (RWY 24)", pdf: "charts/ILAR/SID/userwastaken, & Nikita39Gamer/REAPR1L (RWY 24).pdf" }
        ]
      }
    },
    STAR: {
      authors: {
        "VilleTheDude, Willek10": [
          { name: "CLR1W RNAV", pdf: "charts/ILAR/STAR/Villethedude/CLR1W RNAV.pdf" },
          { name: "CLR2V RNAV", pdf: "charts/ILAR/STAR/Villethedude/CLR2V RNAV.pdf" },
          { name: "JAMSI1V RNAV", pdf: "charts/ILAR/STAR/Villethedude/JAMSI1V RNAV.pdf" },
          { name: "JAMSI3W RNAV", pdf: "charts/ILAR/STAR/Villethedude/JAMSI3W RNAV.pdf" },
          { name: "JUSTY1W RNAV", pdf: "charts/ILAR/STAR/Villethedude/JUSTY1W RNAV.pdf" },
          { name: "JUSTY2V RNAV", pdf: "charts/ILAR/STAR/Villethedude/JUSTY2V RNAV.pdf" },
          { name: "ODUKO2W RNAV", pdf: "charts/ILAR/STAR/Villethedude/ODUKO2W RNAV.pdf" },
          { name: "ODUKO3V RNAV", pdf: "charts/ILAR/STAR/Villethedude/ODUKO3V RNAV.pdf" }
        ],
        "Aloha516": [
          { name: "ELSAS2G RNAV RWY24", pdf: "charts/ILAR/STAR/Aloha516/ELSAS2G RNAV RWY24.pdf" },
          { name: "ELSAS2H RNAV RWY06", pdf: "charts/ILAR/STAR/Aloha516/ELSAS2H RNAV RWY06.pdf" },
          { name: "GRASS2G RNAV RWY24", pdf: "charts/ILAR/STAR/Aloha516/GRASS2G RNAV RWY24.pdf" },
          { name: "GRASS2H RNAV RWY06", pdf: "charts/ILAR/STAR/Aloha516/GRASS2H RNAV RWY06.pdf" },
          { name: "RENTS2G RNAV RWY24", pdf: "charts/ILAR/STAR/Aloha516/RENTS2G RNAV RWY24.pdf" },
          { name: "RENTS2H RNAV RWY06", pdf: "charts/ILAR/STAR/Aloha516/RENTS2H RNAV RWY06.pdf" }

        ],
        "galaxyON_1, Tiaguinho_2009": [
          { name: "ASPEN1A RNAV RWY 06", pdf: "charts/ILAR/STAR/galaxyON_1, Tiaguinho_2009/ASPEN1A RNAV RWY 06.pdf" },
          { name: "GRASS1A RNAV RWY 06", pdf: "charts/ILAR/STAR/galaxyON_1, Tiaguinho_2009/GRASS1A RNAV RWY 06.pdf" },
          { name: "GRASS1B RNAV RWY 24", pdf: "charts/ILAR/STAR/galaxyON_1, Tiaguinho_2009/GRASS1B RNAV RWY 24.pdf" },
          { name: "JAMSI1B RNAV RWY 24", pdf: "charts/ILAR/STAR/galaxyON_1, Tiaguinho_2009/JAMSI1B RNAV RWY 24.pdf" },
          { name: "JUSTY1B RNAV RWY 24", pdf: "charts/ILAR/STAR/galaxyON_1, Tiaguinho_2009/JUSTY1B RNAV RWY 24.pdf" },
          { name: "LAZER1A RNAV RWY 06", pdf: "charts/ILAR/STAR/galaxyON_1, Tiaguinho_2009/LAZER1A RNAV RWY 06.pdf" },
          { name: "LAZER1B RNAV RWY 24", pdf: "charts/ILAR/STAR/galaxyON_1, Tiaguinho_2009/LAZER1B RNAV RWY 24.pdf" },
          { name: "REAPR1A RNAV RWY 06", pdf: "charts/ILAR/STAR/galaxyON_1, Tiaguinho_2009/REAPR1A RNAV RWY 06.pdf" },
          { name: "RENTS1B RNAV RWY 24", pdf: "charts/ILAR/STAR/galaxyON_1, Tiaguinho_2009/RENTS1B RNAV RWY 24.pdf" },
          { name: "RENTS1S RNAV RWY 06", pdf: "charts/ILAR/STAR/galaxyON_1, Tiaguinho_2009/RENTS1S RNAV RWY 06.pdf" }

        ],
        "greek_dutchman": [
          { name: "ANYMS2C (RWY 06)", pdf: "charts/ILAR/STAR/greek_dutchman/ANYMS2C (RWY 06).pdf" },
          { name: "ANYMS2D (RWY 24)", pdf: "charts/ILAR/STAR/greek_dutchman/ANYMS2D (RWY 24).pdf" },
          { name: "JAMSI2C (RWY 06)", pdf: "charts/ILAR/STAR/greek_dutchman/JAMSI2C (RWY 06).pdf" },
          { name: "JAMSI2D (RWY 24)", pdf: "charts/ILAR/STAR/greek_dutchman/JAMSI2D (RWY 24).pdf" },
          { name: "JUSTY2C (RWY 06)", pdf: "charts/ILAR/STAR/greek_dutchman/JUSTY2C (RWY 06).pdf" },
          { name: "JUSTY2D (RWY 24)", pdf: "charts/ILAR/STAR/greek_dutchman/JUSTY2D (RWY 24).pdf" },
          { name: "LAZER2C (RWY 06)", pdf: "charts/ILAR/STAR/greek_dutchman/LAZER2C (RWY 06).pdf" },
          { name: "REAPR2C (RWY 06)", pdf: "charts/ILAR/STAR/greek_dutchman/REAPR2C (RWY 06).pdf" },
          { name: "SAVES2C (RWY 06)", pdf: "charts/ILAR/STAR/greek_dutchman/SAVES2C (RWY 06).pdf" },
          { name: "SAVES2D (RWY 24)", pdf: "charts/ILAR/STAR/greek_dutchman/SAVES2D (RWY 24).pdf" }

        ],
        "userwastaken, & Nikita39Gamer": [
          { name: "ANYMS1K", pdf: "charts/ILAR/STAR/userwastaken, & Nikita39Gamer/ANYMS1K.pdf" },
          { name: "ANYMS1M (RWY 24)", pdf: "charts/ILAR/STAR/userwastaken, & Nikita39Gamer/ANYMS1M (RWY 24).pdf" },
          { name: "JAMSI1K", pdf: "charts/ILAR/STAR/userwastaken, & Nikita39Gamer/JAMSI1K.pdf" },
          { name: "JAMSI1M (RWY 24)", pdf: "charts/ILAR/STAR/userwastaken, & Nikita39Gamer/JAMSI1M (RWY 24).pdf" },
          { name: "JUSTY1K", pdf: "charts/ILAR/STAR/userwastaken, & Nikita39Gamer/JUSTY1K.pdf" },
          { name: "JUSTY1M (RWY 24)", pdf: "charts/ILAR/STAR/userwastaken, & Nikita39Gamer/JUSTY1M (RWY 24).pdf" },
          { name: "REAPR1K", pdf: "charts/ILAR/STAR/userwastaken, & Nikita39Gamer/REAPR1K.pdf" },
          { name: "REAPR1M (RWY 24)", pdf: "charts/ILAR/STAR/userwastaken, & Nikita39Gamer/REAPR1M (RWY 24).pdf" }
        ]
      }
    },
    APP: {
      authors: {
        "VilleTheDude, Willek10": [
          { name: "ILS or LOC RWY 06", pdf: "charts/ILAR/APP/Villethedude/ILS OR LOC RWY06.pdf" },
          { name: "VOR RWY 24", pdf: "charts/ILAR/APP/Villethedude/VOR RWY24.pdf" },
          { name: "MOUNTAIN VISUAL RWY 24", pdf: "charts/ILAR/APP/Villethedude/MOUNTAIN VISUAL RWY24.pdf" }
        ],
        "galaxyON_1, Tiaguinho_2009": [
          { name: "ILS or LOC RWY 06", pdf: "charts/ILAR/APP/galaxyON_1, Tiaguinho_2009/ILS or LOC RWY 06.pdf" },
          { name: "ILS or LOC RWY 24", pdf: "charts/ILAR/APP/galaxyON_1, Tiaguinho_2009/ILS or LOC RWY 24.pdf" }
        ],
        "Aloha516": [
          { name: "ILS or LOC RWY 06", pdf: "charts/ILAR/APP/Aloha516/ILS or LOC RWY 06.pdf" },
          { name: "CIRCLING VOR/DME RWY 24", pdf: "charts/ILAR/APP/Aloha516/CIRCLING VOR_DME RWY 24.pdf" },
          { name: "CIRCLING VOR/DME RWY 24", pdf: "charts/ILAR/APP/Aloha516/CIRCLING VOR_DME RWY24.pdf" },
          { name: "MISSED APPROACH PRODCEDURE RWY 24", pdf: "charts/ILAR/APP/Aloha516/MISSED APPROACH PRODCEDURE RWY 24.pdf" }
        ],
        "userwastaken, & Nikita39Gamer": [
          { name: "ILS or LOC RWY 06", pdf: "charts/ILAR/APP/userwastaken, & Nikita39Gamer/ILS or LOC RWY 06.pdf" },
          { name: "VOR/DME RWY 24", pdf: "charts/ILAR/APP/userwastaken, & Nikita39Gamer/VOR_DME RWY 24.pdf" },
          { name: "CIRCLING PROCEDURES RWY 24", pdf: "charts/ILAR/APP/userwastaken, & Nikita39Gamer/CIRCLING PROCEDURES RWY 24.pdf" },
          { name: "Special Circling Procedures", pdf: "charts/ILAR/APP/userwastaken, & Nikita39Gamer/Special Circling Procedures.pdf" }
        ]
      }
    }
  },
  IBTH: {
    GEN: [
      { name: "General Information by <b>Alisoe</b>", pdf: "charts/IBTH/GEN/GENERAL INFO.pdf" },
      { name: "AeroDrome Obstacle Chart by <b>Alisoe</b>", pdf: "charts/IBTH/GEN/AERODROME obstical Chart.pdf" }

    ],
    GND: [
      { name: "Airport Diagram by <b>PTFS.xyz</b>", pdf: "charts/IBTH/GND/IBTH Ground Chart.pdf" }
    ],
    SID: {
      authors: {
        "AeroNav": [
          { name: "BARTHELEMY1 (SBH1)", pdf: "charts/IBTH/SID/BARTHELEMY1 (SBH1).pdf" },
          { name: "MOUNTAIN1 RNAV (MONTN1)", pdf: "charts/IBTH/SID/MOUNTAIN1 RNAV (MONTN1).pdf" },
          { name: "OCEAN1 RNAV", pdf: "charts/IBTH/SID/OCEAN1 RNAV.pdf" },
          { name: "RESURGE1 RNAV (RES1)", pdf: "charts/IBTH/SID/RESURGE1 RNAV RES1.pdf" },
          { name: "VONARX RNAV (VOX1)", pdf: "charts/IBTH/SID/VONARX RNAV (VOX1).pdf" }
        ],
        "Alisoe": [
          { name: "INDEX1P RNAV", pdf: "charts/IBTH/SID/Alisoe/INDEX1P.pdf" },
          { name: "INDEX1Q RNAV", pdf: "charts/IBTH/SID/Alisoe/INDEX1Q.pdf" },
          { name: "INDEX2J RNAV", pdf: "charts/IBTH/SID/Alisoe/INDEX2J.pdf" },
          { name: "OCEEN1P RNAV", pdf: "charts/IBTH/SID/Alisoe/OCEEN1P.pdf" },
          { name: "OCEEN2J RNAV", pdf: "charts/IBTH/SID/Alisoe/OCEEN2J.pdf" },
          { name: "ROM1P RNAV", pdf: "charts/IBTH/SID/Alisoe/ROM1P.pdf" },
          { name: "ROM2J RNAV", pdf: "charts/IBTH/SID/Alisoe/ROM2J.pdf" },
          { name: "SILVA1P RNAV", pdf: "charts/IBTH/SID/Alisoe/SILVA1P.pdf" },
          { name: "SILVA2J RNAV", pdf: "charts/IBTH/SID/Alisoe/SILVA2J.pdf" },
          { name: "VOX2J RNAV", pdf: "charts/IBTH/SID/Alisoe/VOX2J.pdf" }
        ],
        "SANDERLI25": [
          { name: "CAMEL1F RNAV", pdf: "charts/IBTH/SID/SANDERLI25/CAMEL1F.pdf" },
          { name: "INDEX1G RNAV", pdf: "charts/IBTH/SID/SANDERLI25/INDEX1G.pdf" },
          { name: "OCEEN1G RNAV", pdf: "charts/IBTH/SID/SANDERLI25/OCEEN1G.pdf" },
          { name: "PROBE1F RNAV", pdf: "charts/IBTH/SID/SANDERLI25/PROBE1F.pdf" },
          { name: "PROBE1H RNAV", pdf: "charts/IBTH/SID/SANDERLI25/PROBE1H.pdf" },
          { name: "ROMENS1F RNAV", pdf: "charts/IBTH/SID/SANDERLI25/ROMENS1F.pdf" },
          { name: "SILVA1H", pdf: "charts/IBTH/SID/SANDERLI25/SAILVA1H.pdf" },
          { name: "WELSH1H", pdf: "charts/IBTH/SID/SANDERLI25/WELSH1H.pdf" }
        ]
      }
    },
    STAR: {
      authors: {
        "AeroNav": [
          { name: "CAMEL1 RNAV", pdf: "charts/IBTH/STAR/CAMEL1 RNAV.pdf" },
          { name: "DINER1 RNAV", pdf: "charts/IBTH/STAR/DINER1 RNAV.pdf" },
          { name: "GAVIN1 RNAV", pdf: "charts/IBTH/STAR/GAVIN1 RNAV.pdf" },
          { name: "ROMENS1 RNAV", pdf: "charts/IBTH/STAR/ROMENS1 RNAV.pdf" },
          { name: "SILVA1 RNAV", pdf: "charts/IBTH/STAR/SILVA1 RNAV.pdf" },
          { name: "WELSH1 RNAV", pdf: "charts/IBTH/STAR/WELSH1 RNAV.pdf" }
        ],
        "Alisoe": [
          { name: "INDEX2M RNAV", pdf: "charts/IBTH/STAR/Alisoe/INDEX2M - Alisoe.pdf" },
          { name: "INDEX2V RNAV", pdf: "charts/IBTH/STAR/Alisoe/INDEX2V.pdf" },
          { name: "INDEX2X RNAV", pdf: "charts/IBTH/STAR/Alisoe/INDEX2X.pdf" },
          { name: "OCEEN2M RNAV", pdf: "charts/IBTH/STAR/Alisoe/OCEEN2M - Alisoe.pdf" },
          { name: "OCEEN2V RNAV", pdf: "charts/IBTH/STAR/Alisoe/OCEEN2V.pdf" },
          { name: "RES2X RNAV", pdf: "charts/IBTH/STAR/Alisoe/RES2X.pdf" },
          { name: "ROM2M RNAV", pdf: "charts/IBTH/STAR/Alisoe/ROM2M - Alisoe.pdf" },
          { name: "ROM2V RNAV", pdf: "charts/IBTH/STAR/Alisoe/ROM2V.pdf" },
          { name: "SILVA2M RNAV", pdf: "charts/IBTH/STAR/Alisoe/SILVA2M - Alisoe .pdf" },
          { name: "SILVA2V RNAV", pdf: "charts/IBTH/STAR/Alisoe/SILVA2V.pdf" },
          { name: "VOX2M RNAV", pdf: "charts/IBTH/STAR/Alisoe/VOX2M - Alisoe.pdf" }
        ],
        "SANDERLI25": [
          { name: "CAMEL1J RNAV", pdf: "charts/IBTH/STAR/SANDERLI25/CAMEL1J.pdf" },
          { name: "PROBE1J RNAV", pdf: "charts/IBTH/STAR/SANDERLI25/PROBE1J.pdf" },
          { name: "SILVA1J RNAV", pdf: "charts/IBTH/STAR/SANDERLI25/SILVA1J.pdf" }
        ]
      }
    },
    APP: {
      authors: {
        "AeroNav": [
          { name: "ILS or LOC RWY 09", pdf: "charts/IBTH/APP/ILS OR LOC RWY09.pdf" },
          { name: "ILS or LOC RWY 27", pdf: "charts/IBTH/APP/ILS OR LOC RWY27.pdf" }
        ]
      }
    }
  },
  IRFD: {
    GEN: [
      { name: "General Information by <b>AeroNav</b>", pdf: "charts/IRFD/GEN/IRFD General Info.pdf" },
      { name: "Obstacale Notes - Noise Abatement by <b>AeroNav</b>", pdf: "charts/IRFD/GEN/Obstacale Notes - Noise Abatement.pdf" },
      { name: "Departure and Arrival Suggestions by <b>AeroNav</b>", pdf: "charts/IRFD/GEN/STARSIDSuggestion.pdf" },
      { name: "VFR Sectional Chart by <b>AeroNav</b>", pdf: "charts/IRFD/GEN/VFR Sectional Chart.pdf" }
    ],
    GND: [
      { name: "Airport Diagram by <b>PTFS.xyz</b>", pdf: "charts/IRFD/GND/IRFD Ground Chart.pdf" }
    ],
    SID: {
      authors: {
        "AeroNav": [
          { name: "DARRK3 RNAV", pdf: "charts/IRFD/SID/AeroNav/DARRK3 RNAV.pdf" },
          { name: "KENED2 RNAV", pdf: "charts/IRFD/SID/AeroNav/KENED2 RNAV.pdf" },
          { name: "LOGAN4 RNAV", pdf: "charts/IRFD/SID/AeroNav/LOGAN4 RNAV.pdf" },
          { name: "OSHNN1 RNAV", pdf: "charts/IRFD/SID/AeroNav/OSHNN1 RNAV.pdf" },
          { name: "ROCKFORD 6 - (RFD6)", pdf: "charts/IRFD/SID/AeroNav/ROCKFORD6 (RFD6).pdf" },
          { name: "TRAINING 1 RNAV - (TRN1)", pdf: "charts/IRFD/SID/AeroNav/TRAINING1 RNAV (TRN1).pdf" },
          { name: "WNNDY3 RNAV", pdf: "charts/IRFD/SID/AeroNav/WNNDY3 RNAV.pdf" }
        ],
        "p1anez_planes": [
          { name: "ANYMS1A", pdf: "charts/IRFD/SID/p1anez_planes/ANYMS1A.pdf" },
          { name: "ANYMS2A", pdf: "charts/IRFD/SID/p1anez_planes/ANYMS2A.pdf" },
          { name: "BEANS1A", pdf: "charts/IRFD/SID/p1anez_planes/BEANS1A.pdf" },
          { name: "BEANS2A", pdf: "charts/IRFD/SID/p1anez_planes/BEANS2A.pdf" },
          { name: "KENED1A", pdf: "charts/IRFD/SID/p1anez_planes/KENED1A.pdf" },
          { name: "KENED2A", pdf: "charts/IRFD/SID/p1anez_planes/KENED2A.pdf" },
          { name: "LAZER1A", pdf: "charts/IRFD/SID/p1anez_planes/LAZER1A.pdf" },
          { name: "LAZER2A", pdf: "charts/IRFD/SID/p1anez_planes/LAZER2A.pdf" }
        ]
      }
    },
    STAR: {
      authors: {
        "AeroNav": [
          { name: "BEANS1 RNAV", pdf: "charts/IRFD/STAR/AeroNav/BEANS1 RNAV.pdf" },
          { name: "GORDO1", pdf: "charts/IRFD/STAR/AeroNav/GORDO1.pdf" },
          { name: "JAMSI1 RNAV", pdf: "charts/IRFD/STAR/AeroNav/JAMSI1 RNAV.pdf" },
          { name: "KUNAV2 RNAV", pdf: "charts/IRFD/STAR/AeroNav/KUNAV2 RNAV.pdf" },
          { name: "MATRX1", pdf: "charts/IRFD/STAR/AeroNav/MATRX1 .pdf" },
          { name: "MELLOR1", pdf: "charts/IRFD/STAR/AeroNav/MELLOR1.pdf" },
          { name: "POPPY3 RNAV", pdf: "charts/IRFD/STAR/AeroNav/POPPY3 RNAV.pdf" },
          { name: "SUNST3 RNAV", pdf: "charts/IRFD/STAR/AeroNav/SUNST3 RNAV.pdf" },
          { name: "WILEK1", pdf: "charts/IRFD/STAR/AeroNav/WILEK1.pdf" }
        ],
        "p1anez_planes": [
          { name: "CLEARANCE1 - (CLR1)", pdf: "charts/IRFD/STAR/p1anez_planes/CLEARANCE1(CLR1).pdf" },
          { name: "INDEX4A", pdf: "charts/IRFD/STAR/p1anez_planes/INDEX4A.pdf" }
        ]
      }
    },
    APP: {
      authors: {
        "AeroNav": [
          { name: "ILS or LOC RWY 25L", pdf: "charts/IRFD/APP/AeroNav/ILS25L.pdf" },
          { name: "ILS or LOC RWY 25C", pdf: "charts/IRFD/APP/AeroNav/ILS25C.pdf" },
          { name: "ILS or LOC RWY 25R", pdf: "charts/IRFD/APP/AeroNav/ILS25R.pdf" },
          { name: "ILS PRM 25C", pdf: "charts/IRFD/APP/AeroNav/ILSPRM25C.pdf" },
          { name: "RNAV (RNP) 7L", pdf: "charts/IRFD/APP/AeroNav/RNAVRNP7L.pdf" },
          { name: "RNAV (RNP) 7C", pdf: "charts/IRFD/APP/AeroNav/RNAVRNP7C.pdf" },
          { name: "RNAV (RNP) 7R", pdf: "charts/IRFD/APP/AeroNav/RNAVRNP7R.pdf" },
          { name: "VOR or GPS 7L/C/R", pdf: "charts/IRFD/APP/AeroNav/VORRWY7L_C.pdf" },
          { name: "RIVER PASS VISUAL 7L/C/R", pdf: "charts/IRFD/APP/AeroNav/RIVERPASSVISUALRWY7S.pdf" },
          { name: "DYNAMIX VALLEY VISUAL 7L/C/R", pdf: "charts/IRFD/APP/AeroNav/DYNAMIXVALLEYVISUAL7S.pdf" }
        ],
        "p1anez_planes": [
          { name: "ILS or LOC RWY 07C", pdf: "charts/IRFD/APP/p1anez_planes/ILS07C.pdf" },
          { name: "ILS or LOC RWY 07L", pdf: "charts/IRFD/APP/p1anez_planes/ILS07L.pdf" },
          { name: "ILS or LOC RWY 07R", pdf: "charts/IRFD/APP/p1anez_planes/ILS07R.pdf" },
          { name: "ILS or LOC RWY 25C", pdf: "charts/IRFD/APP/p1anez_planes/ILS25C.pdf" },
          { name: "ILS or LOC RWY 25L", pdf: "charts/IRFD/APP/p1anez_planes/ILS25L.pdf" },
          { name: "ILS or LOC RWY 25R", pdf: "charts/IRFD/APP/p1anez_planes/ILS25R.pdf" },
        ]
      }
    }
  },
  ITRN: {
      //NO GEN
    GND: [
      { name: "Airport Diagram by <b>PTFS.xyz</b>", pdf: "charts/ITRN/GND/ITRC Ground Chart.pdf" }
    ]
    //No SID 
    //No STAR 
    //No APP
  },
  IGAR: {
    //No Gen
    GND: [
      { name: "Airport Diagram by <b>PTFS.xyz</b>", pdf: "charts/IGAR/GND/IGAR Ground Chart.pdf" }
    ]
    //No SID
    //No STAR 
    //No APP
  },
  IBLT: {
      //No GEN
    GND: [
      { name: "Airport Diagram by <b>PTFS.xyz</b>", pdf: "charts/IBLT/GND/IBLT Ground Chart.pdf" }
    ],
      //NO SID
      //No STAR
      //NO APP
  },
  IMLR: {
    GEN: [
      { name: "General Information by <b>AeroNav</b>", pdf: "charts/IMLR/GEN/AeroNav/GENERAL INFORMATION.pdf" },
      { name: "VFR Sectional Chart by <b>AeroNav</b>", pdf: "charts/IMLR/GEN/AeroNav/VFR SECTIONAL CHART.pdf" },
      { name: "Crib Sheet by <b>VilleTheDude, Willek10</b>", pdf: "charts/IMLR/GEN/VilleTheDude, Willek10/CRIB SHEET.pdf" },
      { name: "Crib Sheet CONT by <b>VilleTheDude, Willek10</b>", pdf: "charts/IMLR/GEN/VilleTheDude, Willek10/CRIB SHEET CONT.pdf" }
    ],
    GND: [
      { name: "Airport Diagram by <b>PTFS.xyz</b>t", pdf: "charts/IMLR/GND/IMLR Ground Chart.pdf" }
    ],
    SID: {
      authors: {
        "AeroNav": [
          { name: "BEANS3 RNAV", pdf: "charts/IMLR/SID/AeroNav/BEANS3 RNAV .pdf" },
          { name: "HAWFA1 RNAV", pdf: "charts/IMLR/SID/AeroNav/HAWFA1 RNAV.pdf" },
          { name: "KENED2 RNAV", pdf: "charts/IMLR/SID/AeroNav/KENED2 RNAV.pdf" },
          { name: "SAWPE1 RNAV", pdf: "charts/IMLR/SID/AeroNav/MELLOR1 (MLR1).pdf" },
          { name: "MELLOR1 (MLR1)", pdf: "charts/IMLR/SID/AeroNav/SAWPE1 RNAV.pdf" }
        ],
        "VilleTheDude, Willek10": [
          { name: "KENED2T RNAV RWY 07", pdf: "charts/IMLR/SID/VilleTheDude, Willek10/KENED2T RNAV RWY 07.pdf" },
          { name: "KENED4R RNAV RWY25", pdf: "charts/IMLR/SID/VilleTheDude, Willek10/KENED4R RNAV RWY25.pdf" },
          { name: "MOGTA1R RNAV RWY 25", pdf: "charts/IMLR/SID/VilleTheDude, Willek10/MOGTA1R RNAV RWY 25.pdf" },
          { name: "MOGTA3T RNAV RWY 07", pdf: "charts/IMLR/SID/VilleTheDude, Willek10/MOGTA3T RNAV RWY 07.pdf" },
          { name: "SETHR1T RNAV RWY 07", pdf: "charts/IMLR/SID/VilleTheDude, Willek10/SETHR1T RNAV RWY 07.pdf" },
          { name: "SETHR2R RNAV RWY 25", pdf: "charts/IMLR/SID/VilleTheDude, Willek10/SETHR2R RNAV RWY 25.pdf" },
          { name: "SPACE1T RNAV RWY 07", pdf: "charts/IMLR/SID/VilleTheDude, Willek10/SPACE1T RNAV RWY 07.pdf" },
          { name: "SPACE2R RNAV RWY 25", pdf: "charts/IMLR/SID/VilleTheDude, Willek10/SPACE2R RNAV RWY 25.pdf" },
          { name: "SUNST2R RNAV RWY 25", pdf: "charts/IMLR/SID/VilleTheDude, Willek10/SUNST2R RNAV RWY 25.pdf" },
          { name: "SUNST3T RNAV RWY 07", pdf: "charts/IMLR/SID/VilleTheDude, Willek10/SUNST3T RNAV RWY 07.pdf" }
        ]
      }
    },
    STAR: {
      authors: {
        "AeroNav": [
          { name: "BIGDY1 RNAV", pdf: "charts/IMLR/STAR/AeroNav/BIGDY1 RNAV.pdf" },
          { name: "BUCFA1 RNAV", pdf: "charts/IMLR/STAR/AeroNav/BUCFA1 RNAV.pdf" },
          { name: "NORTHERN1 RNAV (NRTHN1)", pdf: "charts/IMLR/STAR/AeroNav/NORTHERN1 RNAV (NRTHN1).pdf" },
          { name: "URMOM1 RNAV", pdf: "charts/IMLR/STAR/AeroNav/URMOM1 RNAV.pdf" }
        ],
        "VilleTheDude, Willek10": [
          { name: "ENDER1K RNAV RWY 25", pdf: "charts/IMLR/STAR/VilleTheDude, Willek10/ENDER1K RNAV RWY 25.pdf" },
          { name: "ENDER3D RNAV RWY 07", pdf: "charts/IMLR/STAR/VilleTheDude, Willek10/ENDER3D RNAV RWY 07.pdf" },
          { name: "INDEX1D RNAV RWY 07", pdf: "charts/IMLR/STAR/VilleTheDude, Willek10/INDEX1D RNAV RWY 07.pdf" },
          { name: "INDEX3K RNAV RWY25", pdf: "charts/IMLR/STAR/VilleTheDude, Willek10/INDEX3K RNAV RWY25.pdf" },
          { name: "QUEEN1D RNAV RWY 07", pdf: "charts/IMLR/STAR/VilleTheDude, Willek10/QUEEN1D RNAV RWY 07.pdf" },
          { name: "QUEEN2K RNAV RWY 25", pdf: "charts/IMLR/STAR/VilleTheDude, Willek10/QUEEN2K RNAV RWY 25.pdf" },
          { name: "SETHR1D RNAV RWY 07", pdf: "charts/IMLR/STAR/VilleTheDude, Willek10/SETHR1D RNAV RWY 07.pdf" },
          { name: "SETHR1K RNAV RWY 25", pdf: "charts/IMLR/STAR/VilleTheDude, Willek10/SETHR1K RNAV RWY 25.pdf" },
          { name: "SPACE2D RNAV RWY 07", pdf: "charts/IMLR/STAR/VilleTheDude, Willek10/SPACE2D RNAV RWY 07.pdf" },
          { name: "SPACE2K RNAV RWY 25", pdf: "charts/IMLR/STAR/VilleTheDude, Willek10/SPACE2K RNAV RWY 25.pdf" }
        ]
      }
    },
    APP: {
      authors: {
        "AeroNav": [
          { name: "ILS or LOC RWY 7", pdf: "charts/IMLR/APP/AeroNav/ILS OR LOC RWY7.pdf" },
          { name: "ILS or LOC RWY 25", pdf: "charts/IMLR/APP/AeroNav/ILS OR LOC RWY25.pdf" },
          { name: "RNAV (GPS) RWY 7", pdf: "charts/IMLR/APP/AeroNav/RNAV (GPS) RWY7.pdf" },
          { name: "RNAV (GPS) RWY 25", pdf: "charts/IMLR/APP/AeroNav/RNAV (GPS) RWY25.pdf" },
          { name: "MELLOR BRIDGE VISUAL RWY 25", pdf: "charts/IMLR/APP/AeroNav/MELLOR BRIDGE VISUAL RWY25.pdf" }
        ],
        "VilleTheDude, Willek10": [
          { name: "ILS Y RWY 25", pdf: "charts/IMLR/APP/VilleTheDude, Willek10/ILS Y RWY 25.pdf" },
          { name: "ILS Z RWY 25", pdf: "charts/IMLR/APP/VilleTheDude, Willek10/ILS Z RWY 25.pdf" },
          { name: "ILS RWY 07", pdf: "charts/IMLR/APP/VilleTheDude, Willek10/ILS RWY 07.pdf" },
          { name: "BRIDGE VISUAL RWY 25", pdf: "charts/IMLR/APP/VilleTheDude, Willek10/BRIDGE VISUAL RWY 25.pdf" },

        ]
      }
    }
  }
};

let currentAirport = '';
let currentChartType = '';
let currentAuthor = '';

function loadCharts() {
  currentAirport = document.getElementById("search-input").value.toUpperCase();

  if (chartData[currentAirport]) {
    document.getElementById("sidebar").style.display = "flex";
    
    // Reset chart display areas
    document.getElementById("chart-display-default").innerHTML = "";
    document.getElementById("chart-display-gen-gnd").innerHTML = "";

    document.getElementById("author-dropdown-container").style.display = "none";

    // Disable/enable nav buttons based on available data for this airport
    const types = ['GEN', 'GND', 'SID', 'STAR', 'APP'];
    types.forEach(type => {
      const btn = document.querySelector(`.nav-button[onclick="selectButton('${type}')"]`);
      const data = chartData[currentAirport][type];

      if (!data || (data.authors && Object.keys(data.authors).length === 0)) {
        btn.classList.add('disabled');
        btn.disabled = true;
      } else {
        btn.classList.remove('disabled');
        btn.disabled = false;
      }
    });

    minimizeSearch();
    document.getElementById("current-airport-display").innerText = currentAirport;
  } else {
    alert("Invalid airport code. Please try again.");
  }
}

function selectButton(buttonType) {
  currentChartType = buttonType;
  currentAuthor = '';

  // Reset chart containers
  document.getElementById("chart-display-default").style.display = "none";
  document.getElementById("chart-display-gen-gnd").style.display = "none";

  // Update nav button styles
  const allButtons = document.querySelectorAll('.nav-button');
  allButtons.forEach(button => {
    button.classList.remove('selected');
    button.style.backgroundColor = '#34495e';
  });

  const selectedButton = document.querySelector(`[onclick="selectButton('${buttonType}')"]`);
  const selectedColor = selectedButton.getAttribute('data-color');
  selectedButton.classList.add('selected');
  selectedButton.style.backgroundColor = selectedColor;

  // Show/hide dropdown
  const authorContainer = document.getElementById("author-dropdown-container");

  if (['SID', 'STAR', 'APP'].includes(buttonType)) {
    authorContainer.style.display = "block";
    populateAuthorDropdown();
  } else {
    authorContainer.style.display = "none";
    displayGenGndCharts();
  }
}

function populateAuthorDropdown() {
  const airportData = chartData[currentAirport][currentChartType];
  const authorDropdown = document.getElementById("author-dropdown");
  
  authorDropdown.innerHTML = '<option value="">Select Author</option>';
  
  const authors = Object.keys(airportData.authors);
  authors.forEach(author => {
    authorDropdown.innerHTML += `<option value="${author}">${author}</option>`;
  });
  
  document.getElementById("chart-display").innerHTML = "";
}

function selectAuthor() {
  const authorDropdown = document.getElementById("author-dropdown");
  currentAuthor = authorDropdown.value;

  if (currentAuthor) {
    displayAuthorCharts();
  }
}

function displayGenGndCharts() {
  const chartDisplay = document.getElementById("chart-display-gen-gnd");
  const defaultDisplay = document.getElementById("chart-display-default");

  chartDisplay.style.display = "block";
  defaultDisplay.style.display = "none";

  const charts = chartData[currentAirport][currentChartType];

  chartDisplay.innerHTML = charts.map(chart => {
    return `<button class="chart-button" onclick="openPdf('${chart.pdf}')">
      ${chart.name}
    </button>`;
  }).join("");
  
  chartDisplay.scrollTop = 0;
}

function displayAuthorCharts() {
  const chartDisplay = document.getElementById("chart-display-default");
  const genGndDisplay = document.getElementById("chart-display-gen-gnd");

  chartDisplay.style.display = "block";
  genGndDisplay.style.display = "none";

  // Get the charts for the selected author
  const charts = chartData[currentAirport][currentChartType].authors[currentAuthor];

  // Generate chart buttons
  chartDisplay.innerHTML = charts.map(chart => `
    <button class="chart-button" onclick="openPdf('${chart.pdf}')">
      ${chart.name}
    </button>
  `).join("");

  // Scroll to top
  chartDisplay.scrollTop = 0;
}

function openPdf(pdfUrl) {
  if (!pdfUrl) return;
  const pdfViewer = document.getElementById("pdf-viewer");
  const pdfIframe = document.getElementById("pdf-iframe");
  pdfIframe.src = pdfUrl;
  pdfViewer.style.display = "block";
}

function closePdfViewer() {
  document.getElementById("pdf-viewer").style.display = "none";
}

function minimizeSearch() {
  document.querySelector('.header').classList.add('search-hidden');
}

function openSearch() {
  document.querySelector('.header').classList.remove('search-hidden');
  document.getElementById("search-input").focus();
}

function toggleCredits(show) {
  const overlay = document.getElementById("credits-overlay");
  overlay.style.display = show ? "block" : "none";
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("credits-toggle").addEventListener("click", () => {
    toggleCredits(true);
  });

  document.getElementById("theme-toggle").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });

  document.getElementById("toggle-search").addEventListener("click", openSearch);

});


// Add these functions to script.js

// Toggle pinned charts overlay
function togglePinned(show) {
  const overlay = document.getElementById("pinned-overlay");
  overlay.style.display = show ? "block" : "none";
  if (show) {
    displayPinnedCharts();
  }
}

function displayPinnedCharts(airportFilter = null) {
  const pinnedCharts = getPinnedCharts();
  const container = document.getElementById("pinned-charts-container");
  const tabsContainer = document.getElementById("pinned-tabs");
  
  container.innerHTML = "";
  tabsContainer.innerHTML = "";

  if (!pinnedCharts || pinnedCharts.length === 0) {
    container.innerHTML = "<p>No charts pinned yet</p>";
    return;
  }

  // Create airport tabs
  const airports = [...new Set(pinnedCharts.map(chart => chart.airport))];
  if (airports.length > 1) {
    // Add "All" tab
    const allTab = document.createElement('div');
    allTab.className = `pinned-tab ${!airportFilter ? 'active' : ''}`;
    allTab.textContent = "All";
    allTab.onclick = () => displayPinnedCharts();
    tabsContainer.appendChild(allTab);

    // Add airport tabs
    airports.forEach(airport => {
      const tab = document.createElement('div');
      tab.className = `pinned-tab ${airportFilter === airport ? 'active' : ''}`;
      tab.textContent = airport;
      tab.onclick = () => displayPinnedCharts(airport);
      tabsContainer.appendChild(tab);
    });
  }

  // Filter charts by airport if needed
  const filteredCharts = airportFilter 
    ? pinnedCharts.filter(chart => chart.airport === airportFilter)
    : pinnedCharts;

  if (filteredCharts.length === 0) {
    container.innerHTML = "<p>No charts pinned for this airport</p>";
    return;
  }

  // Group by author
  const groupedByAuthor = {};
  filteredCharts.forEach(chart => {
    if (!groupedByAuthor[chart.author]) {
      groupedByAuthor[chart.author] = [];
    }
    groupedByAuthor[chart.author].push(chart);
  });

  // Display charts
  for (const [author, charts] of Object.entries(groupedByAuthor)) {
    const authorGroup = document.createElement('div');
    authorGroup.className = 'pinned-author-group';
    
    const authorTitle = document.createElement('div');
    authorTitle.className = 'pinned-author-title';
    authorTitle.textContent = author;
    authorGroup.appendChild(authorTitle);

    charts.forEach(chart => {
      const chartItem = document.createElement('div');
      chartItem.className = 'pinned-chart-item';
      
      const chartName = document.createElement('span');
      chartName.innerHTML = `${chart.name} (${chart.type})`; // Use innerHTML to preserve formatting
      chartName.onclick = () => {
        openPdf(chart.pdf);
        togglePinned(false);
      };
      chartItem.appendChild(chartName);
      
      const unpinBtn = document.createElement('button');
      unpinBtn.className = 'unpin-btn';
      unpinBtn.innerHTML = '<i class="fas fa-times"></i>';
      unpinBtn.onclick = (e) => {
        e.stopPropagation();
        togglePinChart(chart);
        displayPinnedCharts(airportFilter);
      };
      chartItem.appendChild(unpinBtn);
      
      authorGroup.appendChild(chartItem);
    });
    
    container.appendChild(authorGroup);
  }
}
// Get pinned charts from localStorage
function getPinnedCharts() {
  const pinned = localStorage.getItem('pinnedCharts');
  return pinned ? JSON.parse(pinned) : [];
}

// Save pinned charts to localStorage
function savePinnedCharts(charts) {
  localStorage.setItem('pinnedCharts', JSON.stringify(charts));
}

function togglePinChart(chartData) {
  const pinnedCharts = getPinnedCharts();
  const index = pinnedCharts.findIndex(chart => 
    chart.pdf === chartData.pdf && 
    chart.airport === chartData.airport
  );

  if (index > -1) {
    pinnedCharts.splice(index, 1);
  } else {
    // Create a clean copy of the chart data without DOM references
    pinnedCharts.push({
      pdf: chartData.pdf,
      name: chartData.name,
      type: chartData.type,
      airport: chartData.airport,
      author: chartData.author
    });
  }

  savePinnedCharts(pinnedCharts);
  updatePinIcons();
  return index === -1;
}

// Update pin icons on chart buttons
function updatePinIcons() {
  const pinnedCharts = getPinnedCharts();
  document.querySelectorAll('.chart-button').forEach(button => {
    const pdf = button.getAttribute('data-pdf');
    const airport = button.getAttribute('data-airport');
    const pinIcon = button.querySelector('.pin-icon');
    
    const isPinned = pinnedCharts.some(chart => 
      chart.pdf === pdf && 
      chart.airport === airport
    );
    
    if (pinIcon) {
      pinIcon.classList.toggle('pinned', isPinned);
    }
  });
}

function createChartButton(chart, type, airport) {
  const button = document.createElement('button');
  button.className = 'chart-button';
  button.setAttribute('data-pdf', chart.pdf);
  button.setAttribute('data-airport', airport);
  button.setAttribute('data-type', type);
  
  // Create container for the chart name
  const nameContainer = document.createElement('span');
  nameContainer.className = 'chart-name';
  nameContainer.innerHTML = chart.name; // Preserve HTML formatting
  
  // Create pin icon container
  const pinContainer = document.createElement('span');
  pinContainer.className = 'pin-icon-container';
  
  const pinIcon = document.createElement('i');
  pinIcon.className = 'far fa-thumbtack pin-icon';
  pinIcon.onclick = (e) => {
    e.stopPropagation();
    togglePinChart({
      pdf: chart.pdf,
      name: chart.name,
      type: type,
      airport: airport,
      author: currentAuthor || 'General'
    });
  };
  
  pinContainer.appendChild(pinIcon);
  
  // Append elements to button
  button.appendChild(nameContainer);
  button.appendChild(pinContainer);
  
  button.onclick = () => openPdf(chart.pdf);
  return button;
}

// Update display functions to use createChartButton
function displayGenGndCharts() {
  const chartDisplay = document.getElementById("chart-display-gen-gnd");
  const defaultDisplay = document.getElementById("chart-display-default");

  chartDisplay.style.display = "block";
  defaultDisplay.style.display = "none";
  chartDisplay.innerHTML = "";

  const charts = chartData[currentAirport][currentChartType];
  
  charts.forEach(chart => {
    chartDisplay.appendChild(createChartButton(chart, currentChartType, currentAirport));
  });
  
  updatePinIcons();
  chartDisplay.scrollTop = 0;
}

function displayAuthorCharts() {
  const chartDisplay = document.getElementById("chart-display-default");
  const genGndDisplay = document.getElementById("chart-display-gen-gnd");

  chartDisplay.style.display = "block";
  genGndDisplay.style.display = "none";
  chartDisplay.innerHTML = "";

  const charts = chartData[currentAirport][currentChartType].authors[currentAuthor];
  
  charts.forEach(chart => {
    chartDisplay.appendChild(createChartButton(chart, currentChartType, currentAirport));
  });
  
  updatePinIcons();
  chartDisplay.scrollTop = 0;
}

// Add event listener for pinned toggle button
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("pinned-toggle").addEventListener("click", () => {
    togglePinned(true);
  });
});