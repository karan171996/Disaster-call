import { useEffect } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

import { Layout } from "antd";
// socket connection
//Component
import Department from "../Departments";

const { Content } = Layout;

export default function ContentContainer({ department }) {
  const departmentData = useSelector((state) => state);

  useEffect(() => {
    console.log("aaya", department);
    // if (On)
  }, [department]);
  return (
    <Content>
      <div className="site-layout-background">{/* <Department /> */}</div>
    </Content>
  );
}

ContentContainer.defaultProps = {
  department: {},
};
ContentContainer.propTypes = {
  department: PropTypes.object,
};
