import PropTypes from "prop-types";
import { useState, useEffect, useMemo } from "react";
import { Layout } from "antd";
import { useDispatch } from "react-redux";

// actions
import * as actions from "../../actions";

//Components
import FooterContainer from "./footer";
import ContentContainer from "./content";
import MenuContainer from "./menuItem";

//stylesheet
import "./index.scss";

// departmentNames
import { departmentNames } from "../../constants/departments";

import socketIOClient from "socket.io-client";

const SOCKET_SERVER_URL = "http://localhost:3030";

const { Header, Sider } = Layout;

const LayoutContainer = () => {
  const dispatch = useDispatch();

  const [departmentDetail, setDepartment] = useState({});
  // useEffect(() => {
  //   setDepartment(department);
  // }, [department]);
  const socket = socketIOClient(SOCKET_SERVER_URL, {
    transports: ["polling"],
    forceNew: true,
  });
  useEffect(() => {
    dispatch(
      actions.departmentAlertRequest({ department: departmentNames[0]?.value })
    );
    socket.on("department", (data) => {
      console.log("data", data);
    });
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
    dispatch(
      actions.departmentAlertRequest({ department: selectedDepartment?.value })
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
