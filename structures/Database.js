"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Warns_1 = require("../models/Warns");
const config_1 = require("../config");
const connectionManager = new typeorm_1.ConnectionManager();
connectionManager.create({
    name: config_1.dbName,
    type: "sqlite",
    database: "./db.sqlite",
    entities: [
        Warns_1.Warns
    ]
});
exports.default = connectionManager;
