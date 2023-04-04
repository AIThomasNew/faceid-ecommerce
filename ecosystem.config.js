module.exports = {
  apps: [
    {
      name: "backend",
      script: "./backend/server.js",
      exp_backoff_restart_delay: 100,
      max_memory_restart: "300M",
    },
    {
      name: "client",
      script: "serve",
      exp_backoff_restart_delay: 100,
      max_memory_restart: "300M",
      env: {
        PM2_SERVE_PATH: "./client/build/",
        PM2_SERVE_PORT: 3000,
        PM2_SERVE_SPA: "true",
      },
    },
  ],
};
