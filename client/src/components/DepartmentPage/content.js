import { Layout } from "antd";
// socket connection
//Component
import Department from "../Departments";

const { Content } = Layout;

export default function ContentContainer() {
  return (
    <Content>
      <div className="site-layout-background">{/* <Department /> */}</div>
    </Content>
  );
}
