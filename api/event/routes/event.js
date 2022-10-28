// path: ./src/api/<content-type-name>/controllers/<controller-name>.js

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::event.event");
