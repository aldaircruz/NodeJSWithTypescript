import HeroModel = require('./../model/HeroModel');
import IHeroModel = require('./../model/interfaces/HeroModel');
import HeroRepository = require('./../repository/HeroRepository');
import IHeroBusiness = require('./interfaces/HeroBusiness');

class HeroBusiness  implements IHeroBusiness {
    private heroRepository: HeroRepository;

    constructor() {
        this.heroRepository = new HeroRepository();
    }

    public create(item: IHeroModel, callback: (error: any, result: any) => void) {
        this.heroRepository.create(item, callback);
    }

    public retrieve(callback: (error: any, result: any) => void) {
         this.heroRepository.retrieve(callback);
    }

    public update(_id: string, item: IHeroModel, callback: (error: any, result: any) => void) {

        this.heroRepository.findById(_id, (err, res) => {
            if (err) { callback(err, res); } else {
                this.heroRepository.update(res._id, item, callback);
            }

        });
    }

    public delete(_id: string, callback: (error: any, result: any) => void) {
        this.heroRepository.delete(_id , callback);
    }

    public findById(_id: string, callback: (error: any, result: IHeroModel) => void) {
        this.heroRepository.findById(_id, callback);
    }

}

Object.seal(HeroBusiness);
export = HeroBusiness;
