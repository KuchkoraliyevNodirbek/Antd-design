// src/pages/TablePage/TableDetails.js
import React from "react";
import { Typography, Card } from "antd";

const { Title, Paragraph } = Typography;

const TableDetails = () => (
  <div style={{ marginTop: 24 }}>
    <Card style={{ width: 400, padding: 24, borderRadius: 8 }}>
      <Title level={4} style={{ marginBottom: 16 }}>
        Table Details
      </Title>
      <Paragraph>
        Here you can view detailed information about the table.
      </Paragraph>
      {/* Add detailed content here */}
    </Card>
  </div>
);

export default TableDetails;
