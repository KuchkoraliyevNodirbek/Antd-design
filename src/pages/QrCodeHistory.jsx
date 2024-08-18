// src/pages/QrCodePage/QrCodeHistory.js
import React from "react";
import { Typography, Card } from "antd";

const { Title, Paragraph } = Typography;

const QrCodeHistory = () => (
  <div style={{ marginTop: 24 }}>
    <Card style={{ width: 400, padding: 24, borderRadius: 8 }}>
      <Title level={4} style={{ marginBottom: 16 }}>
        QR Code History
      </Title>
      <Paragraph>
        Here you can view the history of generated QR codes.
      </Paragraph>
      {/* Add history content here */}
    </Card>
  </div>
);

export default QrCodeHistory;
