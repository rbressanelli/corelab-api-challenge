import * as yup from 'yup'

const updateVehicleSchema = yup.object().shape({
  name: yup.string().optional(),
  description: yup.string().optional(),
  plate: yup.string().optional(),
  year: yup.number().optional(),
  color: yup.string().optional(),
  price: yup.number().optional(),
  isFavorite: yup.boolean().optional(),
})

export default updateVehicleSchema
