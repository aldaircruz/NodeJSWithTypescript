import bodyParser = require('body-parser');
import express = require('express');

import BaseRoutes = require('./../../routes/base/BaseRoutes');
import MethodOverride = require('./../MethodOverride');

class MiddlewaresBase {

    static get configuration() {
         const app = express();
         app.use(bodyParser.json());
         app.use(MethodOverride.configuration());
         app.use(new BaseRoutes().routes);

         return app;
    }
}
Object.seal(MiddlewaresBase);
export = MiddlewaresBase;
