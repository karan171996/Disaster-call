import PropTypes from "prop-types";
import { useState, useEffect, useMemo } from "react";
import { Layout } from "antd";

//Components
import FooterContainer from "./footer";
import ContentContainer from "./content";
import MenuContainer from "./menuItem";

//stylesheet
import "./index.scss";

// departmentNames
import { departmentNames } from "../../constants/departments";

const { Header, Sider } = Layout;

const LayoutContainer = ({ department }) => {
  const [departmentDetail, setDepartment] = useState({});
  useEffect(() => {
    setDepartment(department);
  }, [department]);

  useEffect(() => {
    setDepartment(departmentNames[0]);
  }, []);

  const departmentClickHandler = (item) => {
    const selectedDepartment = departmentNames.find(
      (_, index) => index + 1 === Number(item?.key)
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
        <MenuContainer clickHandler={departmentClickHandler} />
      </Sider>
      <Layout>
        <Header
          className="site-layout-sub-header-background"
          style={{ padding: 0 }}
        >
          {selectedDepartment}
        </Header>
        <ContentContainer />
        <FooterContainer />
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
