import React from "react";
import { connect } from "react-redux";
import { Table, Button } from "antd";

import { addQuestionToTestExamAction } from "my-redux/do-exam/actions";

import { Wrapper, Label, CustomInput } from "./StyledComponents";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id"
  },
  {
    title: "Question",
    dataIndex: "question",
    key: "question"
  }
];

class AddQuestionToExam extends React.PureComponent {
  state = {
    selectedRowKeys: [],
    name: ""
  };

  onSubmit = () => {
    const { selectedRowKeys, name } = this.state;

    this.props.addQuestionToTestExam({ name, ids: selectedRowKeys });
  };

  onInputChange = e => {
    this.setState({
      name: e.target.value
    });
  };

  onSelectChange = selectedRowKeys => {
    this.setState({ selectedRowKeys });
  };

  render() {
    const { selectedRowKeys, name } = this.state;
    const { question } = this.props;

    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange
    };

    return (
      <Wrapper>
        <Label>Exam name</Label>
        <CustomInput
          placeholder="Exam name"
          value={name}
          onChange={this.onInputChange}
        />

        <Table
          rowSelection={rowSelection}
          dataSource={question.list}
          columns={columns}
          loading={question.loading}
          pagination={{ pageSize: 10 }}
        />

        <Button onClick={this.onSubmit}>Add</Button>
      </Wrapper>
    );
  }
}

const mapStateToProps = ({ question }) => ({
  question
});

const mapDispatchToProps = dispatch => ({
  addQuestionToTestExam: (body, callback) =>
    dispatch(addQuestionToTestExamAction(body, callback))
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withConnect(AddQuestionToExam);
