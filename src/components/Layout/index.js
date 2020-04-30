import React from "react";
import { Layout, Menu, Dropdown, message } from "antd";
import { adminRoutes } from "../../routes";
import { withRouter } from "dva/router";
import { DownOutlined } from "@ant-design/icons";
import { clearToken } from "../../utils/token";

const { Header, Content, Sider } = Layout;
const routes = adminRoutes.filter((route) => route.isShow === true);

const index = (props) => {
  const menu = (
    <Menu
      onClick={(p) => {
        if (p.key === "quit") {
          props.history.push("/login");
          clearToken();
        } else {
          message.info(p.key);
        }
      }}
    >
      <Menu.Item key="setting">设置</Menu.Item>
      <Menu.Item key="notify">通知中心</Menu.Item>
      <Menu.Item key="quit">退出</Menu.Item>
    </Menu>
  );
  return (
    <Layout style={{ height: "100%" }}>
      <Header
        className="header"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div style={{ color: "#eee" }}>管理页面</div>
        <Dropdown overlay={menu}>
          <div className="ant-dropdown-link" style={{ color: "#eee" }}>
            Hover me <DownOutlined />
          </div>
        </Dropdown>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            {routes.map((route) => {
              return (
                <Menu.Item
                  onClick={() => {
                    props.history.push(`${route.path}`);
                  }}
                  key={route.path}
                >
                  {route.title}
                </Menu.Item>
              );
            })}
          </Menu>
        </Sider>
        <Layout style={{ padding: "16px", background: "#eee" }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {props.children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default withRouter(index);
