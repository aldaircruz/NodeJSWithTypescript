import DataAccess = require('./../../dataAccess/DataAccess');
import IHeroModel = require('./../../model/interfaces/HeroModel');

const mongoose = DataAccess.mongooseInstance;
const mongooseConnection = DataAccess.mongooseConnection;

class HeroSchema {

  static get schema() {
       return mongoose.Schema({
           amountPeopleSaved: {
               required: true,
               type: Number,
           },
           name : {
               required: true,
               type: String,
           },
           power: {
               required: true,
               type: String,
           },
       });
   }

}
export = mongooseConnection.model<IHeroModel>('Heroes', HeroSchema.schema);
