import { Router } from "express";
import controller from '../../controllers/initController'

const router = Router()

router.route('/route2')
    .get(controller.get)
    .post(controller.post)
    .put(controller.put)
    .delete(controller.delete)


router.route('/route2/:id')
    .get(controller.getDetail)
    .post(controller.getDetail)
    .put(controller.putDetail)
    .delete(controller.deleteDetail)


export default router