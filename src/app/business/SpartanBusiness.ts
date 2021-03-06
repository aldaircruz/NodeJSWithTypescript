import ISpartanModel = require('./../model/interfaces/SpartanModel');
import SpartanRepository = require('./../repository/SpartanRepository');
import ISpartanBusiness = require('./interfaces/SpartanBusiness');

class SpartanBusiness  implements ISpartanBusiness {
    private spartanRepository: SpartanRepository;

    constructor() {
        this.spartanRepository = new SpartanRepository();
    }

    public create(item: ISpartanModel, callback: (error: any, result: any) => void) {
        this.spartanRepository.create(item, callback);
    }

    public retrieve(callback: (error: any, result: any) => void) {
         this.spartanRepository.retrieve(callback);
    }

    public update(_id: string, item: ISpartanModel, callback: (error: any, result: any) => void) {
        this.spartanRepository.findById(_id, (err, res) => {
            if (err) { callback(err, res); } else {
                this.spartanRepository.update(res._id, item, callback);
            }

        });
    }

    public delete(_id: string, callback: (error: any, result: any) => void) {
        this.spartanRepository.delete(_id, callback);
    }

    public findById(_id: string, callback: (error: any, result: ISpartanModel) => void) {
        this.spartanRepository.findById(_id, callback);
    }

}
Object.seal(SpartanBusiness);
export = SpartanBusiness;
