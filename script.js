// Simplified chart data structure
const chartData = {
  ISAU: {
    GEN: [
      { name: "General Information by <b>AeroNav</b>", pdf: "charts/ISAU/GEN/General Information.pdf" },
      { name: "De-Icing procedures by <b>AeroNav</b>", pdf: "charts/ISAU/GEN/De-Icing Prodecuders.pdf" },
      { name: "Suggested Departures and Arrival by <b>AeroNav</b>", pdf: "charts/ISAU/GEN/Suggested STAR and SID.pdf" }
    ],
    GND: [
      { name: "Airport Diagram from <b>PFTS.xyz/chart</b>", pdf: "charts/ISAU/GND/ISAU Ground Chart.pdf" }
    ],
    SID: {
      authors: {
        "AeroNav": [
          { name: "BORDER1 - (BRDR1) ", pdf: "charts/ISAU/SID/BORDER1 (BRDR1).pdf" },
          { name: "ECHHO1 - (ECCHO1)", pdf: "charts/ISAU/SID/ECHHO1 (ECCHO1).pdf" },
          { name: "SAUTHEMPTONA1 - (SAU1)", pdf: "charts/ISAU/SID/SAUTHEMPTONA 1 (SAU1).pdf" },
          { name: "SAYOW1 RNAV", pdf: "charts/ISAU/SID/SAYOW1 RNAV.pdf" },
          { name: "ZZOOO1 RNAV", pdf: "charts/ISAU/SID/ZZOOO1 RNAV.pdf" }
        ]
      }
    },
    STAR: {
      authors: {
        "AeroNav": [
          { name: "ALDER1 RNAV", pdf: "charts/ISAU/STAR/ALDER 1 RNAV.pdf" },
          { name: "GEORG1 RNAV", pdf: "charts/ISAU/STAR/GEORG1 RNAV.pdf" },
          { name: "VYDDA1 RNAV", pdf: "charts/ISAU/STAR/VYDDA1 RNAV.pdf" }
        ]
      }
    },
    APP: {
      authors: {
        "AeroNav": [
          { name: "ILS or LOC RWY8", pdf: "charts/ISAU/APP/ILS 8.pdf" },
          { name: "ILS or LOC RWY26", pdf: "charts/ISAU/APP/ILS 26.pdf" },
          { name: "RNAV (GPS) RWY8", pdf: "charts/ISAU/APP/RNAV (GPS) 8.pdf" },
          { name: "RNAV (GPS) RWY26", pdf: "charts/ISAU/APP/RNAV (GPS) 26.pdf" }
        ] 
      }
    }
  },
  TVO: {
    //NO GEN
    //NO GND
    //NO SID
    //NO STAR
    //NO APP
  },
  IGRV: {
    GEN: [
      { name: "General Information by <b>AeroNav</b>", pdf: "charts/IGRV/GEN/GENERAL INFOR.pdf" }
    ],
    GND: [
      { name: "Airport Diagram from <b>PFTS.xyz/chart</b>", pdf: "charts/IGRV/GND/IGRV Ground Chart.pdf" }
    ],
    SID: {
      authors: {
        "AeroNav": [
          { name: "GRINDAVIK1 (GVK1)", pdf: "charts/IGRV/SID/GRINDAVIK 1 (GVK1).pdf" },
          { name: "HAWKN1 RNAV", pdf: "charts/IGRV/SID/HAWKN1 RNAV.pdf" },
          { name: "THENR3 RNAV", pdf: "charts/IGRV/SID/THENR3 RNAV.pdf" },
          { name: "YOUTH4 RNAV", pdf: "charts/IGRV/SID/YOUTH4 RNAV.pdf" }
        ]
      }
    },
    STAR: {
      authors: {
        "AeroNav": [
          { name: "CLEAR4 RNAV", pdf: "charts/IGRV/STAR/CLEAR4 RNAV.pdf" },
          { name: "GOLDN1 RNAV", pdf: "charts/IGRV/STAR/GOLDN1 RNAV.pdf" },
          { name: "SPACE1 RNAV", pdf: "charts/IGRV/STAR/SPACE1 RNAV.pdf" }
        ]
      }
    },
    APP: {
      authors: {
        "AeroNav": [
          { name: "RNP RWY 06", pdf: "charts/IGRV/APP/RNP RWY 06.pdf" },
          { name: "RNP RWY 24", pdf: "app2.pdf" }
        ]
      }
    }
  },
  ITKO: {
    GEN: [
      { name: "VRF Sectional by <b>AeroNav</b>", pdf: "charts/ITKO/GEN/VFR SECTIONAL.pdf" },
      { name: "De-Icing Procedures <b>AeroNav</b>", pdf: "charts/ITKO/GEN/De-Icing Pro.pdf" }
    ],
    GND: [
      { name: "Airport Diagram from <b>PFTS.xyz/chart</b>", pdf: "charts/ITKO/GND/ITKO Ground Chart.pdf" }
    ],
    SID: {
      authors: {
        "AeroNav": [
          { name: "ASTRO1 RNAV", pdf: "charts/ITKO/SID/ASTRO1 RNAV.pdf" },
          { name: "HONDA1 RNAV", pdf: "charts/ITKO/SID/HONDA1 RNAV.pdf" },
          { name: "LETSE1 RNAV", pdf: "charts/ITKO/SID/LETSE1 RNAV.pdf" },
          { name: "ONDER1 RNAV", pdf: "charts/ITKO/SID/ONDER1 RNAV.pdf" },
          { name: "TOKYO1", pdf: "charts/ITKO/SID/TOKYO1.pdf" }
        ]
      }
    },
    STAR: {
      authors: {
        "AeroNav": [
          { name: "GULEG1 RNAV", pdf: "charts/ITKO/STAR/GULEG1 RNAV.pdf" },
          { name: "ISLAND1 RNAV", pdf: "charts/ITKO/STAR/ISLAND1 RNAV.pdf" },
          { name: "KNFIRE1 RNAV", pdf: "charts/ITKO/STAR/KNIFE1 RNAV.pdf" },
          { name: "PIPER1 RNAV", pdf: "charts/ITKO/STAR/PIPER1 RNAV.pdf" }
        ]
      }
    },
    APP: {
      authors: {
        "AeroNav": [
          { name: "ILS or LOC RWY 13", pdf: "charts/ITKO/APP/ILS OR LOC RWY13.pdf" },
          { name: "ILS or LOC RWY 20", pdf: "charts/ITKO/APP/ILS OR LOC RWY20.pdf" },
          { name: "ILS or LOC RWY 31", pdf: "charts/ITKO/APP/ILS OR LOC RWY31.pdf" },
          { name: "RNAV (RNP) RWY 13", pdf: "charts/ITKO/APP/RNAV RNP RWY13.pdf" },
          { name: "RNAV (RNP) RWY 20", pdf: "charts/ITKO/APP/RNAV RNP RWY20.pdf" },
          { name: "GLS RWY 31", pdf: "charts/ITKO/APP/GLS RWY31.pdf" }
        ]
      }
    }
  },
  IDCS: {
    GEN: [
      { name: "TBA", pdf: "" }

    ],
    GND: [
      { name: "Airport Diagram from <b>PFTS.xyz/chart</b>", pdf: "charts/IDCS/GND/IDCS Ground Chart.pdf" }
    ],
    //No SID
    //no STAR
    //No APPR
  },
  IPPH: {
    GEN: [
      { name: "General Airport Information by <b>AeroNav</b>", pdf: "charts/IPPH/GEN/GENERAL INFORMATION.pdf" },
      { name: "Runway Information by <b>AeroNav</b>", pdf: "charts/IPPH/GEN/RUNWAY INFORMATION.pdf" }
    ],
    GND: [
      { name: "Airport Diagram from <b>PFTS.xyz/chart</b>", pdf: "charts/IPPH/GND/IPPH Ground Chart.pdf" }
    ],
    SID: {
      authors: {
        "AeroNav": [
          { name: "CAMEL1 RNAV", pdf: "charts/IPPH/SID/CAMEL1 RNAV.pdf" },
          { name: "DINER1 RNAV", pdf: "charts/IPPH/SID/CAMEL1 RNAV.pdf" },
          { name: "PERTH1 - PER1", pdf: "charts/IPPH/SID/PERTH1 (PER1).pdf" }
        ]
      }
    },
    STAR: {
      authors: {
        "AeroNav": [
          { name: "HONDA1 RNAV", pdf: "charts/IPPH/STAR/HONDA1 RNAV.pdf" },
          { name: "SISTA1 RNAV", pdf: "charts/IPPH/STAR/SISTA1 RNAV.pdf" },
          { name: "TALIS1 RNAV", pdf: "charts/IPPH/STAR/TALIS1 RNAV.pdf" }
        ]
      }
    },
    APP: {
      authors: {
        "AeroNav": [
          { name: "ILS or LOC RWY 11", pdf: "charts/IPPH/APP/ILS OR LOC RWY11.pdf" },
          { name: "GLS RWY 33", pdf: "charts/IPPH/APP/GLS RWY33.pdf" },
          { name: "LDA-Y RWY 29", pdf: "charts/IPPH/APP/LDA-Y RWY29.pdf" },
          { name: "LDA-Z RWY 29", pdf: "charts/IPPH/APP/LDA-Z RWY29.pdf" },
          { name: "RNP Y RWY 29", pdf: "charts/IPPH/APP/RNP Z RWY29.pdf" },
          { name: "HAVEN STACKS VISUAL 29/33 ", pdf: "charts/IPPH/APP/HAVEN STACKS VISUAL RWY29:33.pdf" },
          { name: "HAVEN ISLAND VISUAL 29/33 ", pdf: "charts/IPPH/APP/HAVEN ISLAND VISUAL RWY29:33.pdf" }
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
      { name: "Airport Diagram from <b>PFTS.xyz/chart</b>", pdf: "charts/ILKL/GND/ILKL Ground Chart.pdf" }
    ],
      //NO SID
      //NO STAR
      //NO APP
  },
  ISCM: {
      //NO GEN
    GND: [
      { name: "Airport Diagram from <b>PFTS.xyz/chart</b>", pdf: "charts/ISCM/GND/ISCM Ground Chart.pdf" }
    ],
      //NO SID
      //NO STAR
      //NO APP
  },
  IJAF: {
      //NO GEN
    GND: [
      { name: "Airport Diagram from <b>PFTS.xyz/chart</b>", pdf: "charts/IJAF/GND/IJAF Ground Chart.pdf" }
    ],
      //NO SID
      //NO STAR
      //NO APP
  },
  IZOL: {
      //NO GEN
    GND: [
      { name: "Airport Diagram from <b>PFTS.xyz/chart</b>", pdf: "charts/IZOL/GND/IZOL Ground Chart.pdf" }
    ],
      //NO SID
      //NO STAR
      //NO APP
  },
  ISKP: {
      //NO GEN
    GND: [
      { name: "Airport Diagram from <b>PFTS.xyz/chart</b>", pdf: "charts/ISKP/GND/ISKP Ground Chart.pdf" }
    ],
      //NO SID
      //NO STAR
      //NO APP
  },
  IHEN: {
      //NO GEN
    GND: [
      { name: "Airport Diagram from <b>PFTS.xyz/chart</b>", pdf: "charts/IHEN/GND/IHEN Ground Chart.pdf" }
    ],
      //NO SID
      //NO STAR
      //NO APP
  },
  IIAB: {
    GEN: [
      { name: "General Information", pdf: "charts/IIAB/GEN/GENERALINFO.pdf" }
    ],
    GND: [
      { name: "Airport Diagram from <b>PFTS.xyz/chart</b>", pdf: "charts/IIAB/GND/IIAB Ground Chart.pdf" }
    ],
    SID: {
      authors: {
        "AeroNav": [
          { name: "AIRBASE1 (IAB1)", pdf: "charts/IIAB/SID/AIRBASE1 (IAB1).pdf" }
        ]
      }
    },
    STAR: {
      authors: {
        "AeroNav": [
          { name: "LARNACA1 (LCK1)", pdf: "charts/IIAB/STAR/LARNACA1 (LCK1).pdf" }
        ]
      }
    },
    APP: {
      authors: {
        "Author 1": [
          { name: "ILS or LOC RWY 09L", pdf: "charts/IIAB/APP/ILS OR LOC RWY09L.pdf" },
          { name: "ILS or LOC RWY 09R", pdf: "charts/IIAB/APP/ILS OR LOC RWY09R.pdf" }
        ]
      }
    }
  },
  IBAR: {
      //NO GEN
    GND: [
      { name: "Airport Diagram from <b>PFTS.xyz/chart</b>", pdf: "charts/IBAR/GND/IBAR Ground Chart.pdf" }
    ],
      //NO SID
      //NO STAR
      //NO APP
  },
  IPAP: {
    GEN: [
      { name: "General Information by <b>AeroNav</b>", pdf: "charts/IPAP/GEN/GeneralInfo.pdf" },
      { name: "TakeOff Minimums by <b>AeroNav</b>", pdf: "charts/IPAP/GEN/Takeoff Minimums.pdf" }
    ],
    GND: [
      { name: "Airport Diagram from <b>PFTS.xyz/chart</b>", pdf: "charts/IPAP/GND/IPAP Ground Chart.pdf" }
    ],
    SID: {
      authors: {
        "AeroNav": [
          { name: "KINDLE1 RNAV", pdf: "charts/IPAP/SID/KINDLE1 RNAV.pdf" },
          { name: "PAPHOS1 (PFO1)", pdf: "charts/IPAP/SID/PAPHOS1 (PFO1).pdf" }
        ]
      }
    },
    STAR: {
      authors: {
        "AeroNav": [
          { name: "JAMSI1", pdf: "charts/IPAP/STAR/JAMSI1.pdf" },
          { name: "JUSTY1", pdf: "charts/IPAP/STAR/JUSTY1.pdf" }
        ]
      }
    },
    APP: {
      authors: {
        "AeroNav": [
          { name: "ILS or LOC RWY 17", pdf: "charts/IPAP/APP/ILS OR LOC RWY17.pdf" },
          { name: "ILS or LOC RWY 35", pdf: "charts/IPAP/APP/ILS OR LOC RWY35.pdf" }
        ]
      }
    }
  },
  ILAR: {
    GEN: [
      { name: "General Information by <b>VilleTheDude, Willek10</b>", pdf: "charts/ILAR/GEN/GENERALINFO.pdf" },
      { name: "General Information CONT by <b>VilleTheDude, Willek10</b>", pdf: "charts/ILAR/GEN/GENERALINFOCONT..pdf" },
      { name: "Crib Sheet by <b>VilleTheDude, Willek10</b>", pdf: "charts/ILAR/GEN/Crib sheet.pdf" }
    ],
    GND: [
      { name: "Airport Diagram from <b>PFTS.xyz/chart</b>", pdf: "charts/ILAR/GND/ILAR Ground Chart.pdf" }
    ],
    SID: {
      authors: {
        "VilleTheDude, Willek10": [
          { name: "LAZER1P RNAV", pdf: "charts/ILAR/SID/LAZER1P RNAV.pdf" },
          { name: "LAZER1R RNAV", pdf: "charts/ILAR/SID/LAZER1R RNAV.pdf" },
          { name: "OCEEN2L RNAV", pdf: "charts/ILAR/SID/OCEEN2L RNAV.pdf" },
          { name: "OCEEN2R RNAV", pdf: "charts/ILAR/SID/OCEEN2R RNAV.pdf" },
          { name: "OCEEN3P RNAV", pdf: "charts/ILAR/SID/OCEEN3P RNAV.pdf" },
          { name: "ODUKO1P RNAV", pdf: "charts/ILAR/SID/ODUKO1P RNAV.pdf" },
          { name: "ODUKO1R RNAV", pdf: "charts/ILAR/SID/ODUKO1R RNAV.pdf" },
          { name: "QUEEN1P RNAV", pdf: "charts/ILAR/SID/QUEEN1P RNAV.pdf" },
          { name: "QUEEN3R RNAV", pdf: "charts/ILAR/SID/QUEEN3R RNAV.pdf" },
          { name: "RENTS1R RNAV", pdf: "charts/ILAR/SID/RENTS1R RNAV.pdf" },
          { name: "RENTS1R RNAV", pdf: "charts/ILAR/SID/RENTS2P RNAV.pdf" }

        ]
      }
    },
    STAR: {
      authors: {
        "VilleTheDude, Willek10": [
          { name: "CLR1W RNAV", pdf: "charts/ILAR/STAR/CLR1W RNAV.pdf" },
          { name: "CLR2V RNAV", pdf: "charts/ILAR/STAR/CLR2V RNAV.pdf" },
          { name: "JAMSI1V RNAV", pdf: "charts/ILAR/STAR/JAMSI1V RNAV.pdf" },
          { name: "JAMSI3W RNAV", pdf: "charts/ILAR/STAR/JAMSI3W RNAV.pdf" },
          { name: "JUSTY1W RNAV", pdf: "charts/ILAR/STAR/JUSTY1W RNAV.pdf" },
          { name: "JUSTY2V RNAV", pdf: "charts/ILAR/STAR/JUSTY2V RNAV.pdf" },
          { name: "ODUKO2W RNAV", pdf: "charts/ILAR/STAR/ODUKO2W RNAV.pdf" },
          { name: "ODUKO3V RNAV", pdf: "charts/ILAR/STAR/ODUKO3V RNAV.pdf" }
        ]
      }
    },
    APP: {
      authors: {
        "VilleTheDude, Willek10": [
          { name: "ILS or LOC RWY 06", pdf: "charts/ILAR/APP/ILS OR LOC RWY06.pdf" },
          { name: "VOR RWY 24", pdf: "charts/ILAR/APP/VOR RWY24.pdf" },
          { name: "MOUNTAIN VISUAL RWY 24", pdf: "charts/ILAR/APP/MOUNTAIN VISUAL RWY24.pdf" }
        ]
      }
    }
  },
  IBTH: {
      //NO GEN
    GND: [
      { name: "Airport Diagram from <b>PFTS.xyz/chart</b>", pdf: "charts/IBTH/GND/IBTH Ground Chart.pdf" }
    ],
    SID: {
      authors: {
        "AeroNav": [
          { name: "BARTHELEMY1 (SBH1)", pdf: "charts/IBTH/SID/BARTHELEMY1 (SBH1).pdf" },
          { name: "MOUNTAIN1 RNAV (MONTN1)", pdf: "charts/IBTH/SID/MOUNTAIN1 RNAV (MONTN1).pdf" },
          { name: "OCEAN1 RNAV", pdf: "charts/IBTH/SID/OCEAN1 RNAV.pdf" },
          { name: "RESURGE1 RNAV (RES1)", pdf: "charts/IBTH/SID/RESURGE1 RNAV RES1.pdf" },
          { name: "VONARX RNAV (VOX1)", pdf: "charts/IBTH/SID/VONARX RNAV (VOX1).pdf" }
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
      { name: "IRFD General Information by <b>AeroNav</b>", pdf: "charts/IRFD/GEN/IRFD General Info.pdf" },
      { name: "Obstacale Notes - Noise Abatement by <b>AeroNav</b>", pdf: "charts/IRFD/GEN/Obstacale Notes - Noise Abatement.pdf" },
      { name: "Departure and Arrival Suggestions by <b>AeroNav</b>", pdf: "charts/IRFD/GEN/STARSIDSuggestion.pdf" },
      { name: "VFR Sectional Chart Rockford by <b>AeroNav</b>", pdf: "charts/IRFD/GEN/VFR Sectional Chart.pdf" }
    ],
    GND: [
      { name: "Airport Diagram from <b>PFTS.xyz/chart</b>", pdf: "charts/IRFD/GND/IRFD Ground Chart.pdf" }
    ],
    SID: {
      authors: {
        "AeroNav": [
          { name: "DARRK3 RNAV", pdf: "charts/IRFD/SID/DARRK3 RNAV.pdf" },
          { name: "KENED2 RNAV", pdf: "charts/IRFD/SID/KENED2 RNAV.pdf" },
          { name: "LOGAN4 RNAV", pdf: "charts/IRFD/SID/LOGAN4 RNAV.pdf" },
          { name: "OSHNN1 RNAV", pdf: "charts/IRFD/SID/OSHNN1 RNAV.pdf" },
          { name: "ROCKFORD6 - RFD6", pdf: "charts/IRFD/SID/ROCKFORD6 (RFD6).pdf" },
          { name: "TRAINING1 RNAV - TRN1", pdf: "charts/IRFD/SID/TRAINING1 RNAV (TRN1).pdf" },
          { name: "WNNDY3 RNAV", pdf: "charts/IRFD/SID/WNNDY3 RNAV.pdf" }
        ]
      }
    },
    STAR: {
      authors: {
        "AeroNav": [
          { name: "BEANS1 RNAV", pdf: "charts/IRFD/STAR/BEANS1 RNAV.pdf" },
          { name: "GORDO1", pdf: "charts/IRFD/STAR/GORDO1.pdf" },
          { name: "JAMSI1 RNAV", pdf: "charts/IRFD/STAR/JAMSI1 RNAV.pdf" },
          { name: "KUNAV2 RNAV", pdf: "charts/IRFD/STAR/KUNAV2 RNAV.pdf" },
          { name: "MATRX1", pdf: "charts/IRFD/STAR/MATRX1 .pdf" },
          { name: "MELLOR1", pdf: "charts/IRFD/STAR/MELLOR1.pdf" },
          { name: "POPPY3 RNAV", pdf: "charts/IRFD/STAR/POPPY3 RNAV.pdf" },
          { name: "SUNST3 RNAV", pdf: "charts/IRFD/STAR/SUNST3 RNAV.pdf" },
          { name: "WILEK1", pdf: "charts/IRFD/STAR/WILEK1.pdf" }
        ]
      }
    },
    APP: {
      authors: {
        "AeroNav": [
          { name: "ILS or LOC RWY 25L", pdf: "charts/IRFD/APP/ILS25L.pdf" },
          { name: "ILS or LOC RWY 25C", pdf: "charts/IRFD/APP/ILS25C.pdf" },
          { name: "ILS or LOC RWY 25R", pdf: "charts/IRFD/APP/ILS25R.pdf" },
          { name: "ILS PRM 25C", pdf: "charts/IRFD/APP/ILSPRM25C.pdf" },
          { name: "RNAV (RNP) 7L", pdf: "charts/IRFD/APP/RNAVRNP7L.pdf" },
          { name: "RNAV (RNP) 7C", pdf: "charts/IRFD/APP/RNAVRNP7C.pdf" },
          { name: "RNAV (RNP) 7R", pdf: "charts/IRFD/APP/RNAVRNP7R.pdf" },
          { name: "VOR or GPS 7L/C/R", pdf: "charts/IRFD/APP/VORRWY7L:C.pdf" },
          { name: "RIVER PASS VISUAL 7L/C/R", pdf: "charts/IRFD/APP/RIVERPASSVISUALRWY7S.pdf" },
          { name: "DYNAMIX VALLEY VISUAL 7L/C/R", pdf: "charts/IRFD/APP/DYNAMIXVALLEYVISUAL7S.pdf" }
        ]
      }
    }
  },
  ITRN: {
      //NO GEN
    GND: [
      { name: "Airport Diagram from <b>PFTS.xyz/chart</b>", pdf: "charts/ITRN/GND/ITRC Ground Chart.pdf" }
    ]
    //No SID 
    //No STAR 
    //No APP
  },
  IGAR: {
    //No Gen
    GND: [
      { name: "Airport Diagram from <b>PFTS.xyz/chart</b>", pdf: "charts/IGAR/GND/IGAR Ground Chart.pdf" }
    ]
    //No SID
    //No STAR 
    //No APP
  },
  IBLT: {
      //No GEN
    GND: [
      { name: "Airport Diagram from <b>PFTS.xyz/chart</b>", pdf: "charts/IBLT/GND/IBLT Ground Chart.pdf" }
    ],
      //NO SID
      //No STAR
      //NO APP
  },
  IMLR: {
    GEN: [
      { name: "General Information by <b>AeroNav</b>", pdf: "charts/IMLR/GEN/GENERAL INFORMATION.pdf" },
      { name: "VFR Sectional Chart by <b>AeroNav</b>", pdf: "charts/IMLR/GEN/VFR SECTIONAL CHART.pdf" }
    ],
    GND: [
      { name: "Airport Diagram from <b>PFTS.xyz/chart</b>", pdf: "charts/IMLR/GND/IMLR Ground Chart.pdf" }
    ],
    SID: {
      authors: {
        "AeroNav": [
          { name: "BEANS3 RNAV", pdf: "charts/IMLR/SID/BEANS3 RNAV .pdf" },
          { name: "HAWFA1 RNAV", pdf: "charts/IMLR/SID/HAWFA1 RNAV.pdf" },
          { name: "KENED2 RNAV", pdf: "charts/IMLR/SID/KENED2 RNAV.pdf" },
          { name: "SAWPE1 RNAV", pdf: "charts/IMLR/SID/MELLOR1 (MLR1).pdf" },
          { name: "MELLOR1 (MLR1)", pdf: "charts/IMLR/SID/SAWPE1 RNAV.pdf" }
        ]
      }
    },
    STAR: {
      authors: {
        "AeroNav": [
          { name: "BIGDY1 RNAV", pdf: "charts/IMLR/STAR/BIGDY1 RNAV.pdf" },
          { name: "BUCFA1 RNAV", pdf: "charts/IMLR/STAR/BUCFA1 RNAV.pdf" },
          { name: "NORTHERN1 RNAV (NRTHN1)", pdf: "charts/IMLR/STAR/NORTHERN1 RNAV (NRTHN1).pdf" },
          { name: "URMOM1 RNAV", pdf: "charts/IMLR/STAR/URMOM1 RNAV.pdf" }
        ]
      }
    },
    APP: {
      authors: {
        "AeroNav": [
          { name: "ILS or LOC RWY 7", pdf: "charts/IMLR/APP/ILS OR LOC RWY7.pdf" },
          { name: "ILS or LOC RWY 25", pdf: "charts/IMLR/APP/ILS OR LOC RWY25.pdf" },
          { name: "RNAV (GPS) RWY 7", pdf: "charts/IMLR/APP/RNAV (GPS) RWY7.pdf" },
          { name: "RNAV (GPS) RWY 25", pdf: "charts/IMLR/APP/RNAV (GPS) RWY25.pdf" },
          { name: "MELLOR BRIDGE VISUAL RWY 25", pdf: "charts/IMLR/APP/MELLOR BRIDGE VISUAL RWY25.pdf" }
        ]
      }
    }
  }
};

// Global variables
let currentAirport = '';
let currentChartType = '';
let currentAuthor = '';

function loadCharts() {
  currentAirport = document.getElementById("airport-input").value.toUpperCase();

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
        // Disable button
        btn.classList.add('disabled');
        btn.disabled = true;
      } else {
        // Enable button
        btn.classList.remove('disabled');
        btn.disabled = false;
      }
    });

    minimizeSearch();
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
  const pdfViewer = document.getElementById("pdf-viewer");
  const pdfIframe = document.getElementById("pdf-iframe");
  pdfIframe.src = pdfUrl;
  pdfViewer.style.display = "block";
}

function closePdfViewer() {
  document.getElementById("pdf-viewer").style.display = "none";
}

function minimizeSearch() {
  const searchBar = document.getElementById("search-bar");
  searchBar.classList.add("minimized");
  document.getElementById("open-search-button").style.display = "block";
}

function openSearch() {
  const searchBar = document.getElementById("search-bar");
  searchBar.classList.remove("minimized");
  document.getElementById("open-search-button").style.display = "none";
}

function toggleCredits(show) {
  const overlay = document.getElementById("credits-overlay");
  overlay.style.display = show ? "block" : "none";
}

document.getElementById("credits-toggle").addEventListener("click", () => {
  toggleCredits(true);
});
