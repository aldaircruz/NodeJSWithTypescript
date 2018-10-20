import IHeroModel = require('./interfaces/HeroModel');

class HeroModel {

   private heroModel: IHeroModel;

   constructor(heroModel: IHeroModel) {
       this.heroModel = heroModel;
   }
   get name(): string {
       return this.heroModel.name;
   }

   get power(): string {
       return this.heroModel.power;
   }

   get amountPeopleSaved(): number {
       return this.heroModel.amountPeopleSaved;
   }

}
Object.seal(HeroModel);
export =  HeroModel;
