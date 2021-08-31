import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Input, Button, Select, Spin } from "antd";
import * as actions from "../../actions";
//stylesheet
import "./index.scss";

//Custom hooks
import useDebounce from "../hooks/useDebounce";

//constants
import { departmentNames } from "../../constants/departments";

const { Option } = Select;
const { TextArea } = Input;

export const EnteryFormComponent = () => {
  const [enteredPlace, setPlace] = useState("");
  const [foundPlaces, setPlaces] = useState({});
  const dispatch = useDispatch();
  const latestValue = useDebounce(enteredPlace, 500);
  const locations = useSelector((state) => state.locations.location);

  useEffect(() => {
    setPlaces(locations);
  }, [locations]);

  useEffect(() => {
    if (latestValue) {
      dispatch(actions.locations(latestValue));
    }
  }, [latestValue]);

  const searchResultHandler = (value) => {
    setPlace(value);
  };

  // console.log("options", places);

  const onFinishHandler = (values) => {
    const latitude = foundPlaces?.features.find(
      (item) => item.place_name === values?.location
    )?.center[0];
    console.log(
      "🚀 ~ file: index.js ~ line 59 ~ onFinishHandler ~ latitude",
      latitude
    );
    const longitude = foundPlaces?.features.find(
      (item) => item.place_name === values?.location
    )?.center[1];
    console.log(
      "🚀 ~ file: index.js ~ line 63 ~ onFinishHandler ~ longitude",
      longitude
    );
    dispatch(
      actions.submitEntryRequest({
        ...values,
        latitude,
        longitude,
      })
    );
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="91">+91</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  return (
    <div className="form__container">
      <Form onFinish={onFinishHandler}>
        <div className="form__container_input_container">
          <Form.Item label="DisasterName" name="disasterName">
            <Input />
          </Form.Item>
          <Form.Item label="Name" name="userName">
            <Input />
          </Form.Item>
          <Form.Item label="Location" name="location">
            <Select
              showSearch
              filterOption={false}
              // notFoundContent={<Spin size="small" /> }
              placeholder="Select Location"
              onSearch={searchResultHandler}
            >
              {foundPlaces?.features &&
                foundPlaces?.features.map((item) => (
                  <Option value={item.place_name}>{item.place_name}</Option>
                ))}
            </Select>
          </Form.Item>
          <Form.Item label="Department" name="department">
            <Select placeholder="Department">
              {departmentNames.map((item, index) => (
                <Option key={index} value={item.value}>
                  {item.label}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="Phone No" name="phoneNumber">
            <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item label="Situation" name="situation">
            <TextArea placeholder="Situation of Disaster" autoSize />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};
