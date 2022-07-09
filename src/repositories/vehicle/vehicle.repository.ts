import { Repository, getRepository } from 'typeorm'
import Vehicle from '../../entities/Vehicle'
import { VehicleRepoTypes, VehicleTypes } from './interfaces'

class VehicleRepository implements VehicleRepoTypes {
  private ormRepository: Repository<Vehicle>

  constructor() {
    this.ormRepository = getRepository(Vehicle)
  }

  saveVehicle = async (vehicle: VehicleTypes) => await this.ormRepository.save(vehicle)

  listVehicles = async () => await this.ormRepository.find()

  listVehicleById = async (id: string) => await this.ormRepository.findOne(id)

  updateVehicle = async (vehicle: any, id: string) =>
    await this.ormRepository
      .createQueryBuilder()
      .update(Vehicle)
      .set(vehicle)
      .where({ uuid: id })
      .execute()

  updateFavorite = async (vehicle: any) =>
    await this.ormRepository
      .createQueryBuilder()
      .update(Vehicle)
      .set({ isFavorite: !vehicle.isFavorite })
      .execute()

  deleteVehicle = async (id: string) => await this.ormRepository.delete({ uuid: id })
}

export { VehicleRepository, VehicleTypes }
