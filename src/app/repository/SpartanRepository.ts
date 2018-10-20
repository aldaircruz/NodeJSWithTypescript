import SpartanSchema = require('./../dataAccess/schemas/SpartanSchema');
import ISpartanModel = require('./../model/interfaces/SpartanModel');
import SpartanModel = require('./../model/SpartanModel');
import RepositoryBase = require('./base/RepositoryBase');

class SpartanRepository  extends RepositoryBase<ISpartanModel> {
    constructor() {
        super(SpartanSchema);
    }

}

Object.seal(SpartanRepository);
export = SpartanRepository;
