const { createProxyMiddleware } = require('http-proxy-middleware');



module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            // target: 'https://a3d6-175-123-102-30.ngrok.io',
            target : 'http://localhost:4000',
            changeOrigin: true,
        })
    );
};
