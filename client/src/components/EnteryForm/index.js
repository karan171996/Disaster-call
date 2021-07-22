import { useState, useCallback } from "react";
import "./index.scss";
import { debounce } from "../../util/debounce";
import axios from "axios";

export const EnteryFormComponent = () => {
  const [options, setOptions] = useState([]);

  const onChangeHandlers = (e) => {
    const { value } = e.target;
    axios
      .get("http://localhost:3030/userDetails/get-place", {
        params: {
          place: value,
        },
      })
      .then((response) => setOptions(response.data))
      .catch((error) => console.log("error", error));
  };

  const searchResultHandler = useCallback(debounce(onChangeHandlers, 500), []);
  console.log("options", options);

  return (
    <div className="form__container">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <input type="text" onChange={searchResultHandler} />
        </div>
        <div>
          <ol>
            {options?.features &&
              options?.features.map((item) => <li>{item.place_name}</li>)}
          </ol>
        </div>
      </div>
    </div>
  );
};
