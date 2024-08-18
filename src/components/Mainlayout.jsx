// src/components/MainLayout.js
import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { LoginOutlined, TableOutlined, QrcodeOutlined } from "@ant-design/icons";

const { Sider, Content } = Layout;

const MainLayout = ({ children }) => (
  <Layout>
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      style={{
        background: "linear-gradient(180deg, #4f54b1, #7090f1)",
        color: "#000", // Black text color
      }}
    >
      <div style={{ padding: "16px", textAlign: "center" }}>
        <h2 style={{ color: "#fff" }}>My App</h2>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        style={{ backgroundColor: "transparent", color: "#000" }} // Black text color
      >
        <Menu.Item key="1" icon={<LoginOutlined />}>
          <Link to="/login" style={{ color: "#fff" }}>
            Login
          </Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<TableOutlined />}>
          <Link to="/table" style={{ color: "#fff" }}>
            Table
          </Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<QrcodeOutlined />}>
          <Link to="/qr-code" style={{ color: "#fff" }}>
            QR Code
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout>
      <Content
        style={{
          margin: "24px 16px",
          padding: 24,
          background: "#fff",
          borderRadius: 8,
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          color: "#000", // Black text color
        }}
      >
        {children}
      </Content>
    </Layout>
  </Layout>
);

export default MainLayout;
