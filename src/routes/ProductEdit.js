import React from "react";
import { Form, Input, Button, Checkbox, Card, message } from "antd";

function ProductEdit(props) {
  const priceValidator = (rules, value, callback) => {
    if (value * 1 > 100) {
      callback("价格不能超过100");
    } else {
      callback();
    }
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    message.error("请输入正确内容！");
    console.log("Failed:", errorInfo);
  };

  return (
    <Card>
      <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Form.Item
          label="商品"
          name="name"
          rules={[
            {
              required: true,
              message: "请输入商品名称！",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="价格"
          name="price"
          rules={[
            {
              required: true,
              message: "请输入价格！",
            },
            {
              validator: priceValidator,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}

export default ProductEdit;
