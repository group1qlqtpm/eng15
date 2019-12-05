import React from "react";
import { connect } from "react-redux";
import { Button, Card } from "antd";

import { addQuestionAction } from "my-redux/do-exam/actions";
import { CustomCol, CustomInput, Label } from "./StyledComponents";

class AddQuestion extends React.PureComponent {
  state = {
    question1: "",
    a: "",
    b: "",
    c: "",
    d: "",
    question2: "",
    answer: "",
    submitting: false
  };

  onClickAddQuestion = type => () => {
    const { submitting, ...remain } = this.state;

    this.props.addQuestion({ type, ...remain });
  };

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    console.log(this.state);
    return (
      <>
        <CustomCol md={12} sm={24}>
          <Card
            title="Multiple choice"
            extra={<Button onClick={this.onClickAddQuestion(1)}>Add</Button>}
          >
            <Label>Question</Label>
            <CustomInput
              name="question1"
              onChange={this.onInputChange}
              placeholder="Question"
            />

            <Label>Answer</Label>
            <CustomInput
              name="a"
              onChange={this.onInputChange}
              placeholder="A"
            />
            <CustomInput
              name="b"
              onChange={this.onInputChange}
              placeholder="B"
            />
            <CustomInput
              name="c"
              onChange={this.onInputChange}
              placeholder="C"
            />
            <CustomInput
              name="d"
              onChange={this.onInputChange}
              placeholder="D"
            />
          </Card>
        </CustomCol>

        <CustomCol md={12} sm={24}>
          <Card
            title="Fill in the blank"
            extra={<Button onClick={this.onClickAddQuestion(2)}>Add</Button>}
          >
            <Label>Question</Label>
            <CustomInput
              name="question2"
              onChange={this.onInputChange}
              placeholder="Question"
            />

            <Label>Answer</Label>
            <CustomInput
              name="answer"
              onChange={this.onInputChange}
              placeholder="Answer"
            />
          </Card>
        </CustomCol>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addQuestion: (body, callback) => dispatch(addQuestionAction(body, callback))
});

const withConnect = connect(null, mapDispatchToProps);

export default withConnect(AddQuestion);
