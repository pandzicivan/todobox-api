const settings = {
  server: {
    port: 8001
  },
  db: {
    port: 3306,
    user: "root",
    password: "Lin08Uxs",
    connectTimeout: 3000,
    host: "db",
    multipleStatements: true
  },
  cache: {
    host: "redis",
    port: 6379
  },
  user: {
    sessions: {
      secretKey : "forDevelopmentEnv"
    }
  }
}

module.exports = settings;
