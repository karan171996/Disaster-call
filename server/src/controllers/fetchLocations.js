const fetch = require("node-fetch");

// Fetch placeValues
export const getPlaceController = async (req, res, next) => {
  const value = req.query.place;
  fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${value}.json?country=IN&proximity=28.7041,77.1025&access_token=${process.env.MAPOX_TOKEN}`
  )
    .then((response) => response.json())
    .then((json) => {
      res.status(200).json(json);
      next();
    })
    .catch((error) => res.status(400).json(error));
};
