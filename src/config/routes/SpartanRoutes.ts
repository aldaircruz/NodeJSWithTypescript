import express = require('express');
import SpartanController = require('./../../controllers/SpartanController');

const router = express.Router();
class SpartanRoutes {
    private spartanController: SpartanController;

    constructor() {
        this.spartanController = new SpartanController();
    }
    get routes(): express.Router {

        const controller = this.spartanController;
        router.get('/spartans', controller.retrieve);
        router.post('/spartans', controller.create);
        router.put('/spartans/:_id', controller.update);
        router.get('/spartans/:_id', controller.findById);
        router.delete('/spartans/:_id', controller.delete);

        return router;
    }

}

Object.seal(SpartanRoutes);
export = SpartanRoutes;
