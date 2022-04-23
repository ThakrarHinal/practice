import { INTEGER, STRING, DATE, NOW } from 'sequelize';

import { sequelize } from '../utils/database.js';

const User = sequelize.define('user', {

    user_id:{
  
        type:INTEGER,

        autoIncrement:true,

        allowNull:false,

        primaryKey:true
    },

    name: { type: STRING, allowNull:false },

    email: { type: STRING, allowNull:false },

    myDate: { type: DATE, 
            defaultValue: NOW },

     createdAt: DATE,
     updatedAt: DATE,
})
  
// module.exports = User
export default User;