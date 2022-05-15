require('dotenv').config()
module.exports = {
  development: {
    database: 'ratemypet_development',
    dialect: 'postgres'
  },
  test: {
    database: 'ratemypet_test',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}

// {
//   "development": {
//     "database": "ratemypet_development",
//     "host": "127.0.0.1",
//     "dialect": "postgres"
//   },
//   "test": {
//     "database": "ratemypet_test",
//     "host": "127.0.0.1",
//     "dialect": "postgres"
//   },
//   "production": {
//     "database": "ratemypet_production",
//     "host": "127.0.0.1",
//     "dialect": "postgres"
//   }
// }