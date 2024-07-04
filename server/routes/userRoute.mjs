import express from 'express';

import {create} from "../controller/userController.mjs";

const route = express.Router();

route.post("/user", create);

export default route;