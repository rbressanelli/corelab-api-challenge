import * as yup from 'yup'

const createVehicleSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().required(),
  plate: yup.string().required(),
  year: yup.number().required(),
  color: yup.string().required(),
  price: yup.number().required(),
})

export default createVehicleSchema
