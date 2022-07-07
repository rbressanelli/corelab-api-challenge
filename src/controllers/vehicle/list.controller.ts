import { Request, Response } from 'express'
import { VehicleTypes, VehicleRepository } from '../../repositories'

const listVehiclesController = async (req: Request, res: Response) => {
  const vehicles: VehicleTypes[] = await new VehicleRepository().listVehicles()

  return res.status(200).json(vehicles)
}

export default listVehiclesController
