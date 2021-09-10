import { useState, useEffect } from "react";
import getPlaces from "../../api/userDetails";

const useGetPlaces = ({ value = "" }) => {
  const [places, setPlaces] = useState({});
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);
    setPlaces(getPlaces(value));
  }, [value]);

  return { places, fetching };
};

export default useGetPlaces;
