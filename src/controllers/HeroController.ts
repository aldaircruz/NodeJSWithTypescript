import express = require('express');
import HeroBusiness = require('./../app/business/HeroBusiness');
import IHeroModel = require('./../app/model/interfaces/HeroModel');
import IBaseController = require('./interfaces/base/BaseController');

class HeroController implements IBaseController <HeroBusiness> {

    public create(req: express.Request, res: express.Response): void {
            try {

                const hero: IHeroModel = req.body as IHeroModel;
                const heroBusiness = new HeroBusiness();
                heroBusiness.create(hero, (error, result) => {
                    if (error) { res.send({error: 'error'}); } else { res.send({success: 'success'}); }
                });
            } catch (e)  {
                console.log(e);
                res.send({error: 'error in your request'});

            }
    }
    public update(req: express.Request, res: express.Response): void {
        try {
             const hero: IHeroModel = req.body as IHeroModel;
             const _id: string = req.params._id;
             const heroBusiness = new HeroBusiness();
             heroBusiness.update(_id, hero, (error, result) => {
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
             const heroBusiness = new HeroBusiness();
             heroBusiness.delete(_id, (error, result) => {
                    if (error) { res.send({error: 'error'}); } else { res.send({success: 'success'}); }
                });
            } catch (e)  {
                console.log(e);
                res.send({error: 'error in your request'});

            }
    }
    public retrieve(req: express.Request, res: express.Response): void {
        try {

             const heroBusiness = new HeroBusiness();
             heroBusiness.retrieve((error, result) => {
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
             const heroBusiness = new HeroBusiness();
             heroBusiness.findById(_id, (error, result) => {
                    if (error) { res.send({error: 'error'}); } else { res.send(result); }
                });
            } catch (e)  {
                console.log(e);
                res.send({error: 'error in your request'});

            }
    }

}
export = HeroController;
