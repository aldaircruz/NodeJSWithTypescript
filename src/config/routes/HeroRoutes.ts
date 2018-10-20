import express = require('express');
import HeroController = require('./../../controllers/HeroController');

const router = express.Router();
class HeroRoutes {
    private heroController: HeroController;

    constructor() {
        this.heroController = new HeroController();
    }
    get routes() {
        const controller = this.heroController;
        router.get('/heroes', controller.retrieve);
        router.post('/heroes', controller.create);
        router.put('/heroes/:_id', controller.update);
        router.get('/heroes/:_id', controller.findById);
        router.delete('/heroes/:_id', controller.delete);

        return router;
    }

}

Object.seal(HeroRoutes);
export = HeroRoutes;
