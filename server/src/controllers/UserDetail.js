import fetch from "node-fetch";

//Models
import UserDetailModal from "../models/UserDetail";

export const UserDetailController = async (req, res, next) => {
  const detail = new UserDetailModal({
    disasterName: req.body.disasterName,
    userName: req.body.userName,
    location: req.body.location,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    department: req.body.department,
    date: req.body.date,
    situation: req.body.situation,
    familyMembers: req.body.familyMembers,
    phoneNumber: req.body.phoneNumber,
  });
  try {
    console.log("detail", detail);
    const newUserDetail = await detail.save();
    res.status(201).json({ newUserDetail });
    next();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getPlaceController = async (req, res, next) => {
  // const value = req.query.place;
  // fetch(
  //   `https://api.mapbox.com/geocoding/v5/mapbox.places/${value}.json?types=address&proximity=28.7041,77.1025&access_token=${process.env.MAPOX_TOKEN}`
  // )
  //   .then((response) => response.json())
  //   .then((json) => {
  //     res.status(200).json(json);
  //     next();
  //   })
  //   .catch((error) => res.status(400).json(error));

  res.status(200).json({
    type: "FeatureCollection",
    query: ["hello"],
    features: [
      {
        id: "address.664871585697760",
        type: "Feature",
        place_type: ["address"],
        relevance: 1,
        properties: { accuracy: "street" },
        text: "Hellör",
        place_name: "Hellör, 24864 Brodersby-Goltoft, Germany",
        center: [9.7330928, 54.5366238],
        geometry: { type: "Point", coordinates: [9.7330928, 54.5366238] },
        context: [
          { id: "postcode.10939784736964980", text: "24864" },
          { id: "locality.16973565097708790", text: "Brodersby" },
          {
            id: "place.10939784736551790",
            wikidata: "Q670861",
            text: "Brodersby-Goltoft",
          },
          {
            id: "region.11132476791043490",
            wikidata: "Q1194",
            short_code: "DE-SH",
            text: "Schleswig-Holstein",
          },
          {
            id: "country.11437281100480410",
            wikidata: "Q183",
            short_code: "de",
            text: "Germany",
          },
        ],
      },
      {
        id: "address.1088203218743966",
        type: "Feature",
        place_type: ["address"],
        relevance: 1,
        properties: { accuracy: "street" },
        text: "Hellortsweg",
        place_name: "Hellortsweg, 49324 Melle, Germany",
        center: [8.2948707, 52.2433497],
        geometry: { type: "Point", coordinates: [8.2948707, 52.2433497] },
        context: [
          { id: "postcode.15917319629655190", text: "49324" },
          { id: "locality.6757557521257580", text: "Westerhausen" },
          { id: "place.2033493161467340", wikidata: "Q6954", text: "Melle" },
          {
            id: "region.6397691837244140",
            wikidata: "Q1197",
            short_code: "DE-NI",
            text: "Lower Saxony",
          },
          {
            id: "country.11437281100480410",
            wikidata: "Q183",
            short_code: "de",
            text: "Germany",
          },
        ],
      },
      {
        id: "address.8737433272409372",
        type: "Feature",
        place_type: ["address"],
        relevance: 1,
        properties: { accuracy: "street" },
        text: "Hellonsillantie",
        place_name: "Hellonsillantie, 17130 Asikkala, Finland",
        center: [25.6625628, 61.1151145],
        geometry: { type: "Point", coordinates: [25.6625628, 61.1151145] },
        context: [
          { id: "postcode.7937707493995410", text: "17130" },
          { id: "place.2801975493634380", text: "Asikkala" },
          {
            id: "region.9149223705033610",
            wikidata: "Q5708",
            short_code: "FI-16",
            text: "Päijänne Tavastia",
          },
          {
            id: "country.12473357386425650",
            wikidata: "Q33",
            short_code: "fi",
            text: "Finland",
          },
        ],
      },
      {
        id: "address.2507420413931442",
        type: "Feature",
        place_type: ["address"],
        relevance: 1,
        properties: { accuracy: "street" },
        text: "Hellouwlaan",
        place_name: "Hellouwlaan, 4006 XJ Tiel, Netherlands",
        center: [5.4079465, 51.8770603],
        geometry: { type: "Point", coordinates: [5.4079465, 51.8770603] },
        context: [
          { id: "neighborhood.3147079082412430", text: "Wadjenlaan" },
          { id: "postcode.1699053893048470", text: "4006 XJ" },
          { id: "place.11072984849855780", wikidata: "Q73221", text: "Tiel" },
          {
            id: "region.4415653720663110",
            wikidata: "Q775",
            short_code: "NL-GE",
            text: "Gelderland",
          },
          {
            id: "country.13545879598622050",
            wikidata: "Q55",
            short_code: "nl",
            text: "Netherlands",
          },
        ],
      },
      {
        id: "address.4774715659530264",
        type: "Feature",
        place_type: ["address"],
        relevance: 1,
        properties: { accuracy: "street" },
        text: "Hellouwstraat",
        place_name: "Hellouwstraat, 3089 JL Rotterdam, Netherlands",
        center: [4.4317083, 51.8931722],
        geometry: { type: "Point", coordinates: [4.4317083, 51.8931722] },
        context: [
          { id: "neighborhood.11375302234217380", text: "Waalhaven" },
          { id: "postcode.4165488174525170", text: "3089 JL" },
          { id: "locality.15278814464365850", text: "Waalhaven-Eemhaven" },
          {
            id: "place.3973555947083920",
            wikidata: "Q2680952",
            text: "Rotterdam",
          },
          {
            id: "region.14504181044798270",
            wikidata: "Q694",
            short_code: "NL-ZH",
            text: "South Holland",
          },
          {
            id: "country.13545879598622050",
            wikidata: "Q55",
            short_code: "nl",
            text: "Netherlands",
          },
        ],
      },
    ],
    attribution:
      "NOTICE: © 2021 Mapbox and its suppliers. All rights reserved. Use of this data is subject to the Mapbox Terms of Service (https://www.mapbox.com/about/maps/). This response and the information it contains may not be retained. POI(s) provided by Foursquare.",
  });
  next();
};
