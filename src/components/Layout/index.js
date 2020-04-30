import React from "react";
import { Layout, Menu } from "antd";
import { adminRoutes } from "../../routes";
import { withRouter } from "dva/router";

const { Header, Content, Sider } = Layout;
const routes = adminRoutes.filter((route) => route.isShow === true);
const index = (props) => {
  return (
    <Layout style={{ height: "100%" }}>
      <Header className="header">
        <div className="logo" />
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
