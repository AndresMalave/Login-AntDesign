import React from "react";
import { Button, Checkbox, Col, Form, Input, Row, Typography } from "antd";
import {
  LockFilled,
  LockOutlined,
  MailFilled,
  UserOutlined,
} from "@ant-design/icons";

import "normalize.css";
import "./App.css";

const App: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="body">
      <div className="box">
        <Row>
          <Col xs={24} md={10}>
            <div className="form">
              <Typography.Title
                level={2}
                style={{
                  margin: 0,
                  padding: 20,
                  fontWeight: "bold",
                }}
              >
                Sign up
              </Typography.Title>
              <Form
                name="login"
                wrapperCol={{ span: 24 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  name="name"
                  rules={[
                    { required: true, message: "Please input your name!" },
                  ]}
                >
                  <Input prefix={<UserOutlined />} placeholder="Your Name" />
                </Form.Item>

                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: "Please input your email!" },
                  ]}
                >
                  <Input prefix={<MailFilled />} placeholder="Your Email" />
                </Form.Item>

                <Form.Item
                  name="password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}
                >
                  <Input.Password
                    prefix={<LockOutlined />}
                    placeholder="Your Password"
                  />
                </Form.Item>

                <Form.Item
                  name="repeat-password"
                  rules={[
                    { required: true, message: "Passwords do not match" },
                  ]}
                >
                  <Input.Password
                    prefix={<LockFilled />}
                    placeholder="Repeat your password"
                  />
                </Form.Item>

                <Form.Item
                  name="remember"
                  wrapperCol={{ span: 24 }}
                  style={{ margin: 0 }}
                >
                  <Checkbox>I agree all statements in</Checkbox>
                  <Typography.Text
                    style={{
                      fontWeight: "bold",
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    terms of service
                  </Typography.Text>
                </Form.Item>

                <Form.Item>
                  <Typography
                    style={{
                      fontWeight: "bold",
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    i am already member
                  </Typography>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
                  <Button type="primary" htmlType="submit" size="large">
                    Register
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Col>

          <Col xs={0} md={14}>
            <div className="image" />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default App;
