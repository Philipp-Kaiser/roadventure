import Roadtrip from '../model/roadtrip.model'

export const createRoadtrip = async (req, res) => {
  const roadtripInput = new Roadtrip({
    name: req.body.name,
    locations: req.body.locations,
  })
  try {
    const roadtrip = await roadtripInput.save()
    res.json(roadtrip)
  } catch (error) {
    res.status(400).json({ success: false, error: error })
  }
}

export const getRoadtrips = async (req, res) => {
  try {
    const roadtrips = await Roadtrip.find()
    res.status(200).json({ success: true, data: roadtrips })
  } catch (error) {
    res.status(400).json({ success: false, error: error })
  }
}

export const getRoadtrip = async (req, res) => {
  const id = req.query.roadtripId

  try {
    const roadtrip = await Roadtrip.findOne({ _id: `${id}` })
    res.json(roadtrip)
  } catch (error) {
    res.status(400).json({ success: false, error: error })
  }
}

export const deleteRoadtrip = async (req, res) => {
  const roadtripId = req.query.roadtripId
  try {
    const roadtrip = await Roadtrip.findOneAndDelete({ _id: `${roadtripId}` })
    if (roadtrip) {
      res.json({
        success: true,
      })
    } else {
      res.json({
        success: false,
        message: 'Roadtrip not found',
      })
    }
  } catch (error) {
    res.status(400).json({ success: false, error: error })
  }
}

export const updateRoadtrip = async (req, res) => {
  const roadtripId = req.query.roadtripId
  const updatedRoadtrip = req.body
  try {
    const result = await Roadtrip.findOneAndUpdate({ _id: `${roadtripId}` }, updatedRoadtrip)
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
