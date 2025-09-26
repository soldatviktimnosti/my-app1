const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;  // Обновляем дефолтный порт

// Middleware
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'OK',
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV || 'development',
        port: PORT
    });
});

// Main endpoint
app.get('/', (req, res) => {
    res.json({
        message: '🚀 Hello from Node.js App in K3s!',
        version: process.env.APP_VERSION || '1.0.0',
        nodeEnv: process.env.NODE_ENV || 'development',
        port: PORT,
        timestamp: new Date().toISOString()
    });
});

// API endpoint
app.get('/api/info', (req, res) => {
    res.json({
        app: 'My Node.js App',
        version: '1.0.0',
        status: 'running',
        port: PORT,
        features: ['health check', 'api info', 'ready check']
    });
});

// Ready check for K8s
app.get('/ready', (req, res) => {
    res.status(200).json({ status: 'ready', port: PORT });
});

module.exports = app;

// Запуск сервера
if (require.main === module) {
    app.listen(PORT, '0.0.0.0', () => {
        console.log(`✅ Server is running on port ${PORT}`);
        console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
    });
}