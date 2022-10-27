// path: ./src/api/<content-type-name>/controllers/<controller-name>.js

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::resources.resources");
