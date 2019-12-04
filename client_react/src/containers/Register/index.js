import React from "react";
import { connect } from "react-redux";
import { AutoComplete, Select, Cascader, Tooltip, Icon, Input, Checkbox, Form, Col, PageHeader, Row, Modal, Result, Button } from "antd";

import { registerAction } from "my-redux/do-exam/actions";

import { Wrapper, Content, Countdown, SubmitButton } from "./StyledComponents";

import './index.css';

class Register extends React.Component {

  state = {
    confirmDirty: false,
    autoCompleteResult: [],
    registerErr: false
  };

  onSuccess = response => {
    if (response.length > 0) {
      localStorage.setItem('userLogin', JSON.stringify(response[0]));
      alert("Đăng kí thành công!");
      this.props.history.push('/');     
      //console.log(response);
    }
    else {
      this.setState({
         registerErr: true
      });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        var body = { username: values.username, password: values.password, name: values.nickname };
        this.props.postRegister(body, this.onSuccess);
      }
    });
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  handleWebsiteChange = value => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };

    return (
      <Wrapper>
        <Col lg={8} md={8} xs={24}>

        </Col>
        <Content lg={8} md={8} xs={20}>
          <Form {...formItemLayout} onSubmit={this.handleSubmit} className="register-form">
            <Form.Item label="Tên Đăng Nhập">
              {getFieldDecorator('username', {
                rules: [
                  {
                    required: true,
                    message: 'Vui lòng nhập tên đăng nhập!',
                  },
                ],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Mật Khẩu" hasFeedback>
              {getFieldDecorator('password', {
                rules: [
                  {
                    required: true,
                    message: 'Vui lòng nhập mật khẩu',
                  },
                  {
                    validator: this.validateToNextPassword,
                  },
                ],
              })(<Input.Password />)}
            </Form.Item>
            <Form.Item label="Nhập lại Mật Khẩu" hasFeedback>
              {getFieldDecorator('confirm', {
                rules: [
                  {
                    required: true,
                    message: 'vui lòng nhập lại mật khẩu!',
                  },
                  {
                    validator: this.compareToFirstPassword,
                  },
                ],
              })(<Input.Password onBlur={this.handleConfirmBlur} />)}
            </Form.Item>
            <Form.Item
              label={
                <span>
                  Họ và tên&nbsp;
              <Tooltip title="Bạn muốn đặt biệt danh cho bạn là gì?">
                    <Icon type="question-circle-o" />
                  </Tooltip>
                </span>
              }
            >
              {getFieldDecorator('nickname', {
                rules: [{ required: true, message: 'vui long nhập họ tên của bạn!', whitespace: true }],
              })(<Input />)}
            </Form.Item>
            {this.state.registerErr == true ?
              <Form.Item
                validateStatus="error"
                help="Tên đăng nhập đã tồn tại!"
              ></Form.Item> : ""}
            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit" className="register-form-button">
                Đăng kí
              </Button>
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
  postRegister: (body, callback) =>
    dispatch(registerAction(body, callback))
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withConnect(Form.create({ name: 'register' })(Register));
