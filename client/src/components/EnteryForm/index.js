import { useState } from "react";
import "./index.scss";
import { debounce } from "../../util/debounce";
import axios from "axios";
import { Form, Input, Button, Select, Spin } from "antd";

//constants
import { departmentNames } from "../../constants/departments";

const { Option } = Select;
const { TextArea } = Input;

export const EnteryFormComponent = () => {
  const [options, setOptions] = useState({});
  const [fetching, setFetching] = useState(false);

  const onChangeHandlers = (value) => {
    setFetching(true);
    axios
      .get("http://localhost:3030/get-place", {
        params: {
          place: value,
        },
      })
      .then((response) => {
        setFetching(false);
        setOptions(response.data);
      })
      .catch((error) => {
        setFetching(false);
        console.log("error", error);
      });
  };

  const searchResultHandler = debounce(onChangeHandlers, 500);
  console.log("options", options);

  const onFinishHandler = (values) => {
    console.log("values", values);
    const latitude = options?.features.find(
      (item) => item.place_name === values?.location
    )?.center[0];
    console.log(
      "🚀 ~ file: index.js ~ line 43 ~ onFinishHandler ~ latitude",
      latitude
    );
    const longitude = options?.features.find(
      (item) => item.place_name === values?.location
    )?.center[0];
    axios
      .post("http://localhost:3030/userDetails/add", {
        ...values,
        latitude: latitude,
        longitude: longitude,
      })
      .then((response) => console.log(response?.data?.newUserDetail))
      .catch((error) => console.log(error));
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
              notFoundContent={fetching ? <Spin size="small" /> : null}
              placeholder="Select Location"
              onSearch={searchResultHandler}
            >
              {options?.features &&
                options?.features.map((item) => (
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
