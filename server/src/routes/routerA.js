import express from 'express';
import { method01 } from '../app/controllers/ControllerA.js';
const router = express.Router();
// pathA + __path
router.get('/', method01);
// router.post('/__path2', ControllerA.method02);
// ...
// ...
export default router;