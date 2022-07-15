import { getCollection } from '../lib/controllerHelpers.js'

export const getOvernightParkings = async (req, res) => {
  const boundsSW = req.query.boundsSW
  const boundsNE = req.query.boundsNE

  const result = await getCollection(OvernightParking, boundsSW, boundsNE)

  res.json(result)
  return
}

export const createOvernightParking = async (req, res) => {
  try {
    const location = new OvernightParking({
      ...req.body,
    })

    const result = await location.save()
    res.status(200).json(result)
  } catch (error) {
    res.status(400).json({ errormessage: error })
  }
}

export const deleteOvernightParking = async (req, res) => {
  const overnightParkingId = req.query.overnightParkingId
  try {
    const overnightParking = await Roadtrip.findOneAndDelete({ _id: `${overnightParkingId}` })
    if (overnightParking) {
      res.json({
        success: true,
      })
    } else {
      res.json({
        success: false,
        message: 'OvernightParking not found',
      })
    }
  } catch (error) {
    res.status(400).json({ success: false, error: error })
  }
}

export const updateOvernightParking = async (req, res) => {
  const overnightParkingId = req.query.roadtripId
  const updatedOvernightParking = req.body
  try {
    const result = await OvernightParking.findOneAndUpdate({ _id: `${overnightParkingId}` }, updatedOvernightParking)
    if (result) {
      res.json({
        success: true,
      })
    } else {
      res.json({
        success: false,
      })
    }
  } catch (error) {
    res.status(400).json({ success: false, error: error })
  }
}
