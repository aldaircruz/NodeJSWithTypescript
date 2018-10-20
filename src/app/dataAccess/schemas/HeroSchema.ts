import DataAccess = require('./../../dataAccess/DataAccess');
import IHeroModel = require('./../../model/interfaces/HeroModel');

const mongoose = DataAccess.mongooseInstance;
const mongooseConnection = DataAccess.mongooseConnection;

class HeroSchema {

  static get schema() {
       const schema =  mongoose.Schema({
           name : {
               type: String,
               required: true,
           },
           power: {
               type: String,
               required: true,
           },
           amountPeopleSaved: {
               type: Number,
               required: true,
           },
       });

       return schema;
   }

}
const schema = mongooseConnection.model<IHeroModel>('Heroes', HeroSchema.schema);
export = schema;
