import { VehicleTypes } from '../repositories'

declare global {
  namespace Express {
    interface Request {
      validated: VehicleTypes
      uuid: string
    }
  }
}
