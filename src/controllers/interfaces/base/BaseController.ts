import IBaseBusiness = require('../../../app/business/interfaces/base/BaseBusiness');
import IReadController = require('./../common/ReadController');
import IWriteController = require('./../common/WriteController');
interface IBaseController<T extends IBaseBusiness<object>> extends IReadController, IWriteController {

}
export = IBaseController;
