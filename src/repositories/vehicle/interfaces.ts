/* eslint-disable no-unused-vars */
import { DeleteResult } from 'typeorm'

interface VehicleTypes {
  uuid: string
  name: string
  description: string
  plate: string
  year: number
  color: string
  price: number
  isFavorite: boolean
  createdOn: Date
  updatedOn: Date
}

interface VehicleRepoTypes {
  saveVehicle: (vehicle: VehicleTypes) => Promise<VehicleTypes | any>
  listVehicles: () => Promise<VehicleTypes[]>
  updateVehicle: (vehicle: any, id: string) => Promise<Object>
  deleteVehicle: (id: string) => Promise<DeleteResult>
}

export { VehicleTypes, VehicleRepoTypes }
