import { Router } from 'express';
import { methods as lenguageC } from '../controllers/lenguage.controllers';

const router = Router();

router.get('/', lenguageC.getValues);

export default router;