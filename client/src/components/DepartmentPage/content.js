import { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";

import { Layout } from "antd";
// socket connection
//Component
import Department from "../Departments";
import { socket } from "../../server.setup";

const { Content } = Layout;

export default function ContentContainer({ department }) {
  const [departmentData, setDepartmentData] = useState([]);

  useEffect(() => {
    if (department) {
      const departmentName = department?.value;
      socket.emit("departmentName", departmentName);
      socket.on("department", (data) => {
        setDepartmentData(data);
      });
    }
  }, [department]);
  return (
    <Content>
      <div className="site-layout-background">
        <Department department={departmentData} />
      </div>
    </Content>
  );
}

ContentContainer.defaultProps = {
  department: {},
};
ContentContainer.propTypes = {
  department: PropTypes.object,
};
