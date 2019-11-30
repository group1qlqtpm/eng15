import React from "react";
import { connect } from "react-redux";
import { Icon, Input, Checkbox, Form, Col, PageHeader, Row, Modal, Result, Button } from "antd";

import { loginAction } from "my-redux/do-exam/actions";

import { Wrapper, Content, Countdown, SubmitButton } from "./StyledComponents";

import './index.css';


class Login extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const onSuccess = response => {
          console.log(response.data);
        };
        var body = {username: "bongnguyen", password: "123456"};
        this.props.postLogin(body, onSuccess);
      }
     
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Wrapper>
        <Col lg={9} md={9} xs={24}>

        </Col>
        <Content lg={6} md={6} xs={20}>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Username"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(<Checkbox>Remember me</Checkbox>)}
              <a className="login-form-forgot" href="">
                Forgot password
                    </a>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
                    </Button>

              Or <a href="">register now!</a>
            </Form.Item>
          </Form>
        </Content>
      </Wrapper>
    );
  }
}

const mapStateToProps = ({ doExam }) => ({
  doExam
});

const mapDispatchToProps = dispatch => ({
  postLogin: (body, callback) =>
    dispatch(loginAction(body, callback))
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withConnect(Form.create({ name: 'horizontal_login' })(Login));