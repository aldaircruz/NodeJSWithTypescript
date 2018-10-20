import IHeroModel = require('./../../model/interfaces/HeroModel');
import IRead = require('./../interfaces/base/Read');
import IWrite = require('./../interfaces/base/Write');

import mongoose = require('mongoose');

class RepositoryBase<T extends mongoose.Document> implements IRead<T>, IWrite<T> {

    private model: mongoose.Model<mongoose.Document>;

    constructor(schemaModel: mongoose.Model<mongoose.Document>) {
        this.model = schemaModel;
    }

    public create(item: T, callback: (error: any, result: any) => void) {
        this.model.create(item, callback);

    }

    public retrieve(callback: (error: any, result: any) => void) {
         this.model.find({}, callback);
    }

    public update(_id: mongoose.Types.ObjectId, item: T, callback: (error: any, result: any) => void) {
            this.model.update({_id}, item, callback);

    }

    public delete(_id: string, callback: (error: any, result: any) => void) {
        this.model.remove({_id: this.toObjectId(_id)}, (err) => callback(err, null));

    }

    public findById(_id: string, callback: (error: any, result: T) => void) {
        this.model.findById( _id, callback);
    }

    private toObjectId(_id: string): mongoose.Types.ObjectId {
        return mongoose.Types.ObjectId.createFromHexString(_id);
    }

}

export = RepositoryBase;
