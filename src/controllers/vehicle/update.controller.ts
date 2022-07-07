import { Request, Response } from 'express'
import { VehicleRepository, VehicleTypes } from '../../repositories'

const updateVehicleController = async (req: Request, res: Response) => {
  try {
    // eslint-disable-next-line no-unused-vars
    const updatedVehicle = await new VehicleRepository().updateVehicle(
      req.validated as VehicleTypes,
      req.params.uuid
    )
    if (updatedVehicle.affected === 0) {
      return res.status(404).json({ error: 'Vehicle not found or not registered' })
    }
    return res.status(204).json()
  } catch (error) {
    return res.status(400).json({ error: error.detail })
  }
}

export default updateVehicleController
