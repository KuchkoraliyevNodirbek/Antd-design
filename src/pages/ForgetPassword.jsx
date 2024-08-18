// src/pages/LoginPage/ForgotPassword.js
import React from "react";
import { Form, Input, Button, Typography, Card } from "antd";

const { Title } = Typography;

const ForgotPassword = () => (
  <div style={{ marginTop: 24 }}>
    <Card style={{ width: 400, padding: 24, borderRadius: 8 }}>
      <Title level={4} style={{ marginBottom: 16 }}>
        Forgot Password
      </Title>
      <Form
        name="forgot-password"
        initialValues={{ remember: true }}
        layout="vertical"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Send Reset Link
          </Button>
        </Form.Item>
      </Form>
    </Card>
  </div>
);

export default ForgotPassword;
