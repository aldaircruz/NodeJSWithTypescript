
import IHeroModel = require('./../../model/interfaces/HeroModel');
import IBaseBusiness = require('./base/BaseBusiness');

interface IHeroBusiness extends IBaseBusiness<IHeroModel> {

}
export = IHeroBusiness;
