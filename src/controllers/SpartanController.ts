import express = require('express');
import SpartanBusiness = require('./../app/business/SpartanBusiness');
import ISpartanModel = require('./../app/model/interfaces/SpartanModel');
import IBaseController = require('./interfaces/base/BaseController');

class SpartanController implements IBaseController <SpartanBusiness> {

    public create(req: express.Request, res: express.Response): void {
            try {

                const spartan: ISpartanModel = req.body as ISpartanModel;
                const spartanBusiness = new SpartanBusiness();
                spartanBusiness.create(spartan, (error, result) => {
                    if (error) { res.send({error: 'error'}); } else { res.send({success: 'success'}); }
                });
            } catch (e)  {
                console.log(e);
                res.send({error: 'error in your request'});
            }
    }
    public update(req: express.Request, res: express.Response): void {
        try {
             const spartan: ISpartanModel = req.body as ISpartanModel;
             const _id: string = req.params._id;
             const spartanBusiness = new SpartanBusiness();
             spartanBusiness.update(_id, spartan, (error, result) => {
                    if (error) { res.send({error: 'error'}); } else { res.send({success: 'success'}); }
                });
            } catch (e)  {
                console.log(e);
                res.send({error: 'error in your request'});

            }
    }
    public delete(req: express.Request, res: express.Response): void {
        try {

             const _id: string = req.params._id;
             const spartanBusiness = new SpartanBusiness();
             spartanBusiness.delete(_id, (error, result) => {
                    if (error) { res.send({error: 'error'}); } else { res.send({success: 'success'}); }
                });
            } catch (e)  {
                console.log(e);
                res.send({error: 'error in your request'});

            }
    }
    public retrieve(req: express.Request, res: express.Response): void {
        try {

             const spartanBusiness = new SpartanBusiness();
             spartanBusiness.retrieve((error, result) => {
                    if (error) { res.send({error: 'error'}); } else { res.send(result); }
                });
            } catch (e)  {
                console.log(e);
                res.send({error: 'error in your request'});

            }
    }
    public findById(req: express.Request, res: express.Response): void {
        try {

             const _id: string = req.params._id;

             const spartanBusiness = new SpartanBusiness();
             spartanBusiness.findById(_id, (error, result) => {
                    if (error) { res.send({error: 'error'}); } else { res.send(result); }
                });
            } catch (e)  {
                console.log(e);
                res.send({error: 'error in your request'});

            }
    }

}
export = SpartanController;
