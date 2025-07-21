const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

fs.readdirSync(__dirname).forEach((file) => {
    if (file !== 'index.route.js' && file.endsWith('.js')) {
    //   const routePath = '/' + file.replace('.route.js', '');
      const route = require(path.join(__dirname, file));

    //   console.log(`[INFO] Registering route: ${routePath}`);
      
      if (typeof route === 'function') {
        router.use(route);
      }
      else {
        console.warn(`[WARN] Route file ${file} is not exporting a router function`);
      }
    }
  });

module.exports = router;
