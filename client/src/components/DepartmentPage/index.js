import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { Layout } from "antd";

//Components
import FooterContainer from "./footer";
import ContentContainer from "./content";
import MenuContainer from "./menuItem";

//stylesheet
import "./index.scss";

// departmentNames
import { departmentNames } from "../../constants/departments";
import { socket } from "../../server.setup";
const { Header, Sider } = Layout;

const LayoutContainer = () => {
  const [departmentDetail, setDepartment] = useState({});

  useEffect(() => {
    setDepartment(departmentNames[0]);
    return () => {
      socket.on("disconnect", () => {
        console.log("socket-disconnect", socket.connected);
      });
    };
  }, []);

  const departmentClickHandler = (item) => {
    const selectedDepartment = departmentNames.find(
      (_, index) => index + 1 === Number(item?.key)
    );
    setDepartment(selectedDepartment);
  };

  const selectedDepartment = (
    <div className="heading_departmentName_section">
      <div className="heading_departmentName_section__icon">
        {departmentDetail?.icon}
      </div>
      <div className="heading_departmentName_section__name">
        {departmentDetail?.label}
      </div>
    </div>
  );

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
        <MenuContainer clickHandler={departmentClickHandler} />
      </Sider>
      <Layout>
        <Header
          className="site-layout-sub-header-background"
          style={{ padding: 0 }}
        >
          {selectedDepartment}
        </Header>
        <ContentContainer department={departmentDetail} />
        <FooterContainer />
      </Layout>
    </Layout>
  );
};

export default LayoutContainer;
