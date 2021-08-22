import { useState, useEffect } from "react";
import axios from "axios";
import { Form, Input, Button, Select, Spin } from "antd";
import socketIOClient from "socket.io-client";

//stylesheet
import "./index.scss";

//Custom hooks
import useDebounce from "../hooks/useDebounce";

//constants
import { departmentNames } from "../../constants/departments";

//api calls
import { getPlaces, addUserDetails } from "../../api/userDetails";

const { Option } = Select;
const { TextArea } = Input;
const SOCKET_SERVER_URL = "http://localhost:3030";

export const EnteryFormComponent = () => {
  const [enteredPlace, setPlace] = useState("");
  const latestValue = useDebounce(enteredPlace, 500);
  const [foundPlaces, setPlaces] = useState({});

  useEffect(() => {
    const socket = socketIOClient(SOCKET_SERVER_URL);

    socket.on("hello", (data) => {
      console.log("data", data);
    });
    return () => {
      socket.disconnect();
    };
  }, []);
  useEffect(() => {
    if (latestValue) {
      foundLocations(latestValue).then((data) => {
        setPlaces(data);
      });
    }
  }, [latestValue]);

  const foundLocations = (latestValue) => {
    const place = getPlaces(latestValue);
    return place;
  };
  const searchResultHandler = (value) => {
    setPlace(value);
  };

  // console.log("options", places);

  const onFinishHandler = (values) => {
    // const latitude = places?.features.find(
    //   (item) => item.place_name === values?.location
    // )?.center[0];
    // const longitude = places?.features.find(
    //   (item) => item.place_name === values?.location
    // )?.center[0];
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
