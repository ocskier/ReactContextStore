const TYPES = {
  UPDATE_LOCATION: 'UPDATE_LOCATION',
  UPDATE_COORDS: 'UPDATE_COORDS',
  UPDATE_CITY: 'UPDATE_CITY',
  UPDATE_NAME: 'UPDATE_NAME',
};

const actions = {
  updateLocation: (city, coords) => ({
    type: TYPES.UPDATE_LOCATION,
    payload: { city, coords },
  }),
  updateCoords: (coords) => ({
    type: TYPES.UPDATE_COORDS,
    payload: { coords },
  }),
  updateCity: (city) => ({
    type: TYPES.UPDATE_CITY,
    payload: { city },
  }),
  updateName: (name) => ({
    type: TYPES.UPDATE_NAME,
    payload: { name },
  }),
};

module.exports = actions;
