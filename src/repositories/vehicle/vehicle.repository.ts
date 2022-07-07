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

  updateVehicle = async (vehicle: any, id: string) =>
    await this.ormRepository
      .createQueryBuilder()
      .update(Vehicle)
      .set(vehicle)
      .where({ uuid: id })
      .execute()

  deleteVehicle = async (id: string) => await this.ormRepository.delete({ uuid: id })
}

export { VehicleRepository, VehicleTypes }
