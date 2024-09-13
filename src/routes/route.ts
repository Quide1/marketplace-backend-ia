import { Router } from 'express'

import { RouterController } from '../controllers/controller'

export const routerRouter = Router()

routerRouter.get('/controller', RouterController.generateContent)
