const express = require("express");
const app = express();
const swaggerUi = require("swagger-ui-express");
const port = 4200;

var options = {
  explorer: true,
  swaggerOptions: {
    urls: [
      {
        url:
          "https://raw.githubusercontent.com/nsccomunicacao/clube-do-assinante-documentation/master/clube-nsc-swagger-app.yaml",
        name: "App",
      },
      {
        url:
          "https://raw.githubusercontent.com/nsccomunicacao/clube-do-assinante-documentation/master/clube-nsc-swagger-site.yaml",
        name: "Site",
      },
      {
        url:
          "https://raw.githubusercontent.com/nsccomunicacao/clube-do-assinante-documentation/master/clube-nsc-swagger-backoffice.yaml",
        name: "Backoffice",
      },
    ],
  },
};

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(null, options));
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api-docs`);
});
