import { Menu } from "antd";
import PropTypes from "prop-types";

//departmentNames
import { departmentNames } from "../../constants/departments";

const MenuContainer = ({ clickHandler }) => {
  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={["1"]}
      onClick={clickHandler}
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
  );
};
MenuContainer.defaultProps = {
  clickHandler: () => {},
};
MenuContainer.propTypes = {
  clickHandler: PropTypes.func,
};

export default MenuContainer;
