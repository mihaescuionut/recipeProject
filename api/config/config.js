import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
import Recipe from '../models/recipe.js';

dotenv.config();

const configDB=()=>{
     
    try{
        let sequelize = new Sequelize(process.env.DATABASE, "root", process.env.USER_PASSWORD,
            {  
                host: process.env.HOST,
                dialect: process.env.DIALECT
            });

        let db = {
            models:{}
        }

        db.sequelize = sequelize;
        db.Sequelize = Sequelize;

        db.models.Recipe = Recipe(sequelize);
        
        return db;
    }catch(e){
        throw new Error(e);
    }
}

let db = configDB();
export default db;