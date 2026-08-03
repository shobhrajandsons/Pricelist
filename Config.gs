/*************************************************************
 * Catalogue Management System V2
 * Config.gs
 * Version : 2.0.0
 *************************************************************/

const CONFIG = Object.freeze({

  //==========================================================
  // SYSTEM
  //==========================================================

  SYSTEM_NAME: "Catalogue Management System",

  COMPANY_NAME: "Shobhraj and Sons",

  BRAND_NAME: "The Crafted Corners",

  API_VERSION: "2.0.0",

  CACHE_SECONDS: 300,



  //==========================================================
  // GOOGLE SHEET
  //==========================================================

  SPREADSHEET_ID:
  "1P0zwjIjKZCEXqwkWadT0s77GMk9XaqjXAFz9f5o7GNc",



  //==========================================================
  // SHEET NAMES
  //==========================================================

  SHEETS:{

    BRANDS:"Brands",

    CATALOGUES:"Catalogues",

    VARIANTS:"Variants",

    USERS:"Users",

    SETTINGS:"Settings"

  },



  //==========================================================
  // WEBSITE
  //==========================================================

  WEBSITE_URL:
  "https://shobhrajandsons.github.io/Pricelist/",



  //==========================================================
  // QR
  //==========================================================

  QR_PARAMETER:"catalogue",



  //==========================================================
  // CACHE KEYS
  //==========================================================

  CACHE:{

    DATABASE:"CMS_DATABASE",

    BRANDS:"CMS_BRANDS",

    CATALOGUES:"CMS_CATALOGUES",

    VARIANTS:"CMS_VARIANTS"

  }

});
