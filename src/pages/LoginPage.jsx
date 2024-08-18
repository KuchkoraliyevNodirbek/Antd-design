// src/pages/LoginPage.js
import React from "react";
import { Form, Input, Button, Typography, Card } from "antd";
import { Routes, Route, Link } from "react-router-dom";
import ForgotPassword from "./ForgetPassword";

const { Title } = Typography;

const LoginPage = () => (
  <div style={{ padding: 24 }}>
    <Title level={3} style={{ marginBottom: 16 }}>
      Login
    </Title>
    <Form name="login" initialValues={{ remember: true }} layout="vertical">
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Log in
        </Button>
      </Form.Item>
    </Form>
    <Link to="forgot-password">Forgot Password?</Link>
    <Routes>
      <Route path="forgot-password" element={<ForgotPassword />} />
    </Routes>
  </div>
);

export default LoginPage;
