// src/pages/TablePage.js
import React from "react";
import { Table, Typography, Card } from "antd";
import { Routes, Route, Link } from "react-router-dom";
import TableDetails from "./TableDetail";

const { Title } = Typography;

const TablePage = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];

  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
    },
  ];

  return (
    <div style={{ padding: 24 }}>
      <Title level={3} style={{ marginBottom: 16 }}>
        Table Page
      </Title>
      <Card>
        <Table columns={columns} dataSource={data} />
        <Link to="details">View Details</Link>
      </Card>
      <Routes>
        <Route path="details" element={<TableDetails />} />
      </Routes>
    </div>
  );
};

export default TablePage;
