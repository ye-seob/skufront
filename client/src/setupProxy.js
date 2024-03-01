const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    createProxyMiddleware("/api/students", {
      target: "http://localhost:5000",
      changeOrigin: true,
    })
  );
};
