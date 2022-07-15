import {
  createOvernightParking,
  deleteOvernightParking,
  getOvernightParkings,
  updateOvernightParking,
} from '../controller/overnightParking.controller'
import dbConnect from '../lib/dbConnect'

export default async function handler(req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      getOvernightParkings(req, res)
      break

    case 'POST':
      createOvernightParking(req, res)
      break

    case 'PUT':
      updateOvernightParking(req, res)
      break

    case 'DELETE':
      deleteOvernightParking(req, res)
      break

    default:
      res.status(400).json({ success: false })
      break
  }
}
