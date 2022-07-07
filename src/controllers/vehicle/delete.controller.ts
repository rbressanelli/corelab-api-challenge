import { Request, Response } from 'express'
import { VehicleRepository } from '../../repositories'

const deleteVehicleController = async (req: Request, res: Response) => {
  try {
    const deletedVehicle = await new VehicleRepository().deleteVehicle(req.params.uuid)

    if (deletedVehicle.affected === 0) {
      return res.status(404).json({ error: 'Vehicle not found or not registered' })
    }
    return res.status(204).json()
  } catch (error) {
    return res.status(400).json({ error: error.detail })
  }
}

export default deleteVehicleController
