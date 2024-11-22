"use strict";

const path = require("path");
const http = require("http");
const oas3Tools = require("oas3-tools");

const serverPort = 8080;

// Configuração do Swagger Router
const options = {
  routing: {
    controllers: path.join(__dirname, "./controllers"),
  },
};

// Inicializar a aplicação Express com o Swagger
const expressAppConfig = oas3Tools.expressAppConfig(
  path.join(__dirname, "api/openapi.yaml"),
  options
);
const app = expressAppConfig.getApp();

// Configurar o Swagger UI para ser exibido na raiz
app.use("/", express.static(path.join(__dirname, "public")));

// Iniciar o servidor HTTP
http.createServer(app).listen(serverPort, () => {
  console.log(
    "Your server is listening on port %d (http://localhost:%d)",
    serverPort,
    serverPort
  );
  console.log("Swagger-ui is available on http://localhost:%d", serverPort);
});
