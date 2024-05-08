import { Router } from 'express';
import { methods as lenguageC } from '../controllers/lenguage.controllers';

const router = Router();

router.get('/', lenguageC.getValues);

router.post('/', lenguageC.addValues);

router.put('/:id', lenguageC.updateValues);

router.delete('/:id', lenguageC.deleteValues);

export default router;