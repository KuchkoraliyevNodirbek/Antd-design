// src/pages/QrCodePage.js
import React, { useState } from "react";
import { QRCode, Card, Typography, Button, Input, Space } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { Link, Outlet } from "react-router-dom";

const { Title } = Typography;

const QrCodePage = () => {
  const [qrValue, setQrValue] = useState("https://example.com");

  return (
    <div style={{ padding: 24 }}>
      <Title level={3} style={{ marginBottom: 16 }}>
        QR Code Page
      </Title>
      <Card
        style={{
          textAlign: "center",
          padding: 24,
          borderRadius: 8,
          width: 400,
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Title level={4} style={{ marginBottom: 16 }}>
          Scan the QR Code
        </Title>
        <QRCode value={qrValue} size={256} />
        <Space direction="vertical" style={{ marginTop: 24 }}>
          <Input
            value={qrValue}
            onChange={(e) => setQrValue(e.target.value)}
            placeholder="Enter URL or text for QR code"
          />
          <Button type="primary" icon={<DownloadOutlined />}>
            Download QR Code
          </Button>
          <Link to="history">View QR Code History</Link>
        </Space>
      </Card>
      <Outlet />
    </div>
  );
};

export default QrCodePage;
