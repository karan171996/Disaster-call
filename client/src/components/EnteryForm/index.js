import { useState, useCallback } from "react";
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
      .get("http://localhost:3030/userDetails/get-place", {
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
    values.preventDefault();

    console.log("values", values);
  };

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
            <Input.Group compact>
              <Input style={{ width: "20%" }} defaultValue="+91" disabled />
              <Input style={{ width: "80%" }} />
            </Input.Group>
          </Form.Item>
          <Form.Item label="Situation">
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
