import { Request, Response } from 'express'
import { VehicleRepository, VehicleTypes } from '../../repositories'

const isFavoriteController = async (req: Request, res: Response) => {
  try {
    // eslint-disable-next-line no-unused-vars
    const vehicleToFavorite = await new VehicleRepository().listVehicleById(req.params.uuid)

    if (!vehicleToFavorite) {
      return res.status(404).json({ error: 'Vehicle not found or not registered' })
    }

    const updatedVehicle = await new VehicleRepository().updateFavorite(
      vehicleToFavorite as VehicleTypes
    )
    if (updatedVehicle.affected === 0) {
      return res.status(404).json({ error: 'Vehicle not found or not registered' })
    }
    return res.status(204).json()
  } catch (error) {
    return res.status(400).json({ error: error.detail })
  }
}

export default isFavoriteController
