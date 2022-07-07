import { Router } from 'express'
import {
  createVehicleController,
  deleteVehicleController,
  listVehiclesController,
  updateVehicleController,
} from './controllers'
import { validateSchema } from './middlewares'
import { createVehicleSchema, updateVehicleSchema } from './schemas'

const router = Router()

router.post('/vehicles', validateSchema(createVehicleSchema), createVehicleController)

router.get('/vehicles', listVehiclesController)

router.patch('/vehicles/:uuid', validateSchema(updateVehicleSchema), updateVehicleController)

router.delete('/vehicles/:uuid', deleteVehicleController)

export default router
