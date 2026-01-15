module.exports = {
  HOST: "database-1.ch3etftdyain.us-east-1.rds.amazonaws.com",
  USER: "admin",
  PASSWORD: "adminadmin",
  DB: "testdb",
  dialect: "mysql",
  PORT: 3306,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
