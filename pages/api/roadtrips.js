import { createRoadtrip, deleteRoadtrip, getAllRoadtrips, updateRoadtrip } from './controller/roadtrips.controller.js'
import dbConnect from './dbConnect'

export default async function handler(req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      getAllRoadtrips(req, res)
      break

    case 'POST':
      createRoadtrip(req, res)
      break

    case 'PUT':
      updateRoadtrip(req, res)
      break

    case 'DELETE':
      deleteRoadtrip(req, res)
      break

    default:
      res.status(400).json({ success: false })
      break
  }
}
