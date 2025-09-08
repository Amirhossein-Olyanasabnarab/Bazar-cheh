const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

function setupSwagger(app) {
  const options = swaggerJsdoc({
    swaggerDefinition: {
      openapi: "3.0.0",
      info: {
        title: "API Documentation",
        version: "1.0.0",
        contact: {
          name: "Amir Hossein",
          email: "amirholyanasabnarab@gmail.com",
        },
      },
    },
    apis: [], // Path to the API docs
  });

  const swagger = swaggerUi.setup(options, {});
  app.use("/api-docs", swaggerUi.serve, swagger);
}

module.exports = setupSwagger;
