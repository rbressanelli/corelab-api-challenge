import { Request, Response } from 'express'
import { VehicleTypes, VehicleRepository } from '../../repositories'

const createVehicleController = async (req: Request, res: Response) => {
  try {
    const vehicle: VehicleTypes = await new VehicleRepository().saveVehicle(req.validated)
    return res.status(201).json(vehicle)
  } catch (error) {
    return res.status(400).json({ error: error.detail })
  }
}

export default createVehicleController
