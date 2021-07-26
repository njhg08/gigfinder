const { Sequelize } = require('sequelize');

const db = new Sequelize('codegig', 'postgres', '12345', {
  host: 'localhost',
  dialect: 'postgres',
});

// Test DB
const testDB = async () => {
  try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

module.exports = { testDB, db };
