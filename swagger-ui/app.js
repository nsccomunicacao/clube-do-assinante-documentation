const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const port = 3000;
 
var options = {
  explorer: true,
  swaggerOptions: {
    urls: [
      {
        url: 'https://raw.githubusercontent.com/nsccomunicacao/clube-do-assinante-documentation/master/clube-nsc-swagger-app.yaml?token=AEKWECVVR7OWXRYHTUIXCE27PXKOE',
        name: 'APP'
      },
      {
        url: 'https://raw.githubusercontent.com/nsccomunicacao/clube-do-assinante-documentation/master/clube-nsc-swagger-site.yaml?token=AEKWECQHXJ74FBVA5B2INGC7PXKXQ',
        name: 'Site'
      }
    ]
  }
}
 
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(null, options));
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api-docs`)
})