import Sequelize from 'sequelize';

const sequelize = new Sequelize(
    'nodejs',
    'root',
    'Hinal22@tc', {
  
       
        dialect: 'mysql',          
        host: 'localhost'
    }
);

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  

  export default sequelize
  global.sequelize = sequelize;
// module.exports = sequelize