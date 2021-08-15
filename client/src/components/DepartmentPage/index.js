import PropTypes from "prop-types";
import { useState, useEffect, useMemo, useRef } from "react";
import { Layout, Menu } from "antd";

//Components
import Department from "../Departments";

//stylesheet
import "./index.scss";

// departmentNames
import { departmentNames } from "../../constants/departments";

const { Header, Content, Footer, Sider } = Layout;

const LayoutContainer = ({ department }) => {
  const [departmentDetail, setDepartment] = useState({});
  const ref = useRef(null);
  useEffect(() => {
    console.log(department);
    setDepartment(department);
  }, [department]);

  useEffect(() => {
    setDepartment(departmentNames[0]);
  }, []);

  const departmentClickHandler = (item) => {
    const selectedDepartment = departmentNames.find(
      (department, index) => index + 1 === Number(item?.key)
    );
    setDepartment(selectedDepartment);
  };

  const selectedDepartment = useMemo(() => {
    return (
      <div className="heading_departmentName_section">
        <div className="heading_departmentName_section__icon">
          {departmentDetail?.icon}
        </div>
        <div className="heading_departmentName_section__name">
          {departmentDetail?.label}
        </div>
      </div>
    );
  }, [departmentDetail]);

  return (
    <Layout className="layout__container">
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          onClick={departmentClickHandler}
        >
          {departmentNames.map((item, index) => (
            <Menu.Item
              key={index + 1}
              icon={<div className="menu-icon">{item.icon}</div>}
            >
              {item.shortName}
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout>
        <Header
          className="site-layout-sub-header-background"
          style={{ padding: 0 }}
        >
          {selectedDepartment}
        </Header>
        <Content>
          <div className="site-layout-background">
            <Department />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          💟 Created by Karan Singh
        </Footer>
      </Layout>
    </Layout>
  );
};
LayoutContainer.defaultProps = {
  department: {},
};
LayoutContainer.propTypes = {
  department: PropTypes.object,
};
export default LayoutContainer;
