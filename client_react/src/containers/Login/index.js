import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Icon, Input, Checkbox, Form, Col, Button } from "antd";

import { loginAction } from "my-redux/do-exam/actions";

import { Wrapper, Content } from "./StyledComponents";

import "./index.css";

class Login extends React.Component {
  state = {
    loginErr: false
  };

  constructor(props) {
    super(props);
    this.onSuccess = this.onSuccess.bind(this);
  }

  onSuccess = response => {
    if (response.length > 0) {
      localStorage.setItem("userLogin", JSON.stringify(response[0]));
      this.props.history.push("/");
    } else {
      this.setState({
        loginErr: true
      });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        var body = { username: values.username, password: values.password };
        this.props.postLogin(body, this.onSuccess);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Wrapper>
        <Col lg={9} md={9} xs={24}></Col>
        <Content lg={6} md={6} xs={20}>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator("username", {
                rules: [
                  { required: true, message: "Vui lòng nhập tên đăng nhập!" }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Tên Đăng Nhập"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("password", {
                rules: [
                  { required: true, message: "Vui lòng nhập tên mật khẩu!" }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="Mật Khẩu"
                />
              )}
            </Form.Item>
            {this.state.loginErr === true ? (
              <Form.Item
                validateStatus="error"
                help="Tên đăng nhập hoặc mật khẩu không đúng!"
              ></Form.Item>
            ) : (
              ""
            )}
            <Form.Item>
              {getFieldDecorator("remember", {
                valuePropName: "checked",
                initialValue: true
              })(<Checkbox>Nhớ mật khẩu</Checkbox>)}
              <Link to="/" className="login-form-forgot">
                Quên mật khẩu
              </Link>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
              Hoặc <Link to="/">Đăng kí</Link>
            </Form.Item>
          </Form>
        </Content>
      </Wrapper>
    );
  }
}

const mapStateToProps = ({ prop }) => ({
  prop
});

const mapDispatchToProps = dispatch => ({
  postLogin: (body, callback) => dispatch(loginAction(body, callback))
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withConnect(Form.create({ name: "horizontal_login" })(Login));
