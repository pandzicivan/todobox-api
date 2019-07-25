#!/usr/bin/env node
const fs = require('fs');
const settings = require('../settings');
const swaggerJSDoc = require('swagger-jsdoc');

(function () {
  fs.writeFile('docs/api-docs.json', JSON.stringify(swaggerJSDoc(settings.docs)), (err) => {
    if (err) return console.log(err);
  });
})();
