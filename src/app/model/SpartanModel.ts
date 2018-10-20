import ISpartanModel = require('./interfaces/SpartanModel');

class SpartanModel {
   private spartanModel: ISpartanModel;

   constructor(spartan: ISpartanModel) {
       this.spartanModel = spartan;
   }
    get folk(): string {
        return this.spartanModel.folk;
    }
    get amountPeopleKilled(): number {
        return this.spartanModel.amountPeopleKilled;
    }

    get name(): string {
        return this.spartanModel.name;
    }

}

Object.seal(SpartanModel);
export = SpartanModel;
