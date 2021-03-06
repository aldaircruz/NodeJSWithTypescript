import HeroSchema = require('./../dataAccess/schemas/HeroSchema');
import HeroModel = require('./../model/HeroModel');
import IHeroModel = require('./../model/interfaces/HeroModel');
import RepositoryBase = require('./base/RepositoryBase');

class HeroRepository  extends RepositoryBase<IHeroModel> {
    constructor() {
        super(HeroSchema);
    }
}

Object.seal(HeroRepository);
export = HeroRepository;
