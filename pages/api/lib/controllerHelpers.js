export const getLocations = async (Model, boundsSW, boundsNE) => {
  const result = await Model.find({
    $and: [
      { 'properties.name': { $exists: true } },
      {
        geometry: {
          $geoWithin: {
            $box: [boundsSW.split(','), boundsNE.split(',')],
          },
        },
      },
    ],
  })
  return result
}
