import React from "react";
import { Card, Button, Table, Popconfirm, message } from "antd";
const dataSource = [
  {
    name: "苹果电脑",
    price: 13000,
  },
  {
    name: "大碗宽面",
    price: 130,
  },
  {
    name: "罗技鼠标",
    price: 100,
  },
];

const columns = [
  {
    title: "序号",
    dataIndex: "index",
    key: "index",
    render: (txt, record, index) => index + 1,
    width: 100,
  },
  {
    title: "商品",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "价格",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "操作",
    width: 200,
    render: () => (
      <div>
        <Button style={{ marginRight: "10px" }} type={"primary"} size={"small"}>
          修改
        </Button>
        <Popconfirm
          title="确定要删除此项吗？"
          onConfirm={() => {
            message.success("删除成功！");
          }}
          cancelText="No"
          okText="Yes"
          placement="topRight"
        >
          <Button type={"danger"} size={"small"}>
            删除
          </Button>
        </Popconfirm>
      </div>
    ),
  },
];
const Product = (props) => {
  return (
    <div>
      <Card
        title="产品列表"
        extra={
          <Button
            type={"primary"}
            size={"small"}
            onClick={() => {
              props.history.push("/admin/products/edit");
            }}
          >
            新增
          </Button>
        }
      >
        <Table dataSource={dataSource} columns={columns} />
      </Card>
    </div>
  );
};

export default Product;
