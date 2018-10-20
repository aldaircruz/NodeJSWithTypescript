import HeroModel = require('./../model/HeroModel');
import IHeroModel = require('./../model/interfaces/HeroModel');
import HeroRepository = require('./../repository/HeroRepository');
import IHeroBusiness = require('./interfaces/HeroBusiness');

class HeroBusiness  implements IHeroBusiness {
    private _heroRepository: HeroRepository;

    constructor() {
        this._heroRepository = new HeroRepository();
    }

    public create(item: IHeroModel, callback: (error: any, result: any) => void) {
        this._heroRepository.create(item, callback);
    }

    public retrieve(callback: (error: any, result: any) => void) {
         this._heroRepository.retrieve(callback);
    }

    public update(_id: string, item: IHeroModel, callback: (error: any, result: any) => void) {

        this._heroRepository.findById(_id, (err, res) => {
            if (err) { callback(err, res); } else {
                this._heroRepository.update(res._id, item, callback);
            }

        });
    }

    public delete(_id: string, callback: (error: any, result: any) => void) {
        this._heroRepository.delete(_id , callback);
    }

    public findById(_id: string, callback: (error: any, result: IHeroModel) => void) {
        this._heroRepository.findById(_id, callback);
    }

}

Object.seal(HeroBusiness);
export = HeroBusiness;
