// src/components/BaseLayout.js
import React from "react";
import { Layout } from "antd";

const { Header, Footer } = Layout;

const BaseLayout = ({ children }) => (
  <Layout style={{ minHeight: "100vh", backgroundColor: "#f0f2f5" }}>
    <Header
      style={{
        padding: 0,
        backgroundColor: "#fff",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        style={{
          padding: "0 16px",
          textAlign: "right",
          color: "#000", // Black text color
          fontWeight: "bold",
        }}
      >
        Welcome to My App
      </div>
    </Header>
    {children}
    <Footer
      style={{
        textAlign: "center",
        backgroundColor: "#4f54b1",
        color: "#000", // Black text color
      }}
    >
      Ant Design ©2024 Created by You
    </Footer>
  </Layout>
);

export default BaseLayout;
