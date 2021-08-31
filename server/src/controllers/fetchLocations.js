// Fetch placeValues
export const getPlaceController = async (req, res, next) => {
  // const value = req.query.place;
  // fetch(
  //   `https://api.mapbox.com/geocoding/v5/mapbox.places/${value}.json?country=IN&proximity=28.7041,77.1025&access_token=${process.env.MAPOX_TOKEN}`
  // )
  //   .then((response) => response.json())
  //   .then((json) => {
  //     res.status(200).json(json);
  //     next();
  //   })
  //   .catch((error) => res.status(400).json(error));
  const responseData = {
    type: "FeatureCollection",
    query: ["dwarka"],
    features: [
      {
        id: "locality.11091457299335220",
        type: "Feature",
        place_type: ["locality"],
        relevance: 1,
        properties: {},
        text: "Dwarka",
        place_name: "Dwarka, New Delhi, New Delhi, Delhi, India",
        bbox: [77.011190871, 28.525811524, 77.08530307, 28.620475315],
        center: [77.056, 28.5795],
        geometry: {
          type: "Point",
          coordinates: [77.056, 28.5795],
        },
        context: [
          {
            id: "place.8915687851165670",
            wikidata: "Q987",
            text: "New Delhi",
          },
          {
            id: "district.6350047862165670",
            wikidata: "Q987",
            text: "New Delhi",
          },
          {
            id: "region.9972194009026890",
            wikidata: "Q1353",
            short_code: "IN-DL",
            text: "Delhi",
          },
          {
            id: "country.2782945337",
            wikidata: "Q668",
            short_code: "in",
            text: "India",
          },
        ],
      },
      {
        id: "locality.7958454041286150",
        type: "Feature",
        place_type: ["locality"],
        relevance: 1,
        properties: {
          wikidata: "Q6150733",
        },
        text: "Janakpuri",
        place_name: "Janakpuri, New Delhi, West Delhi, Delhi, India",
        bbox: [77.067246385, 28.605321069, 77.114056373, 28.636778588],
        center: [77.09444, 28.62],
        geometry: {
          type: "Point",
          coordinates: [77.09444, 28.62],
        },
        context: [
          {
            id: "place.8915687851165670",
            wikidata: "Q987",
            text: "New Delhi",
          },
          {
            id: "district.17560998141842890",
            wikidata: "Q549807",
            text: "West Delhi",
          },
          {
            id: "region.9972194009026890",
            wikidata: "Q1353",
            short_code: "IN-DL",
            text: "Delhi",
          },
          {
            id: "country.2782945337",
            wikidata: "Q668",
            short_code: "in",
            text: "India",
          },
        ],
      },
    ],
    attribution:
      "NOTICE: © 2021 Mapbox and its suppliers. All rights reserved. Use of this data is subject to the Mapbox Terms of Service (https://www.mapbox.com/about/maps/). This response and the information it contains may not be retained. POI(s) provided by Foursquare.",
  };

  res.status(200).json(responseData);

  next();
};
