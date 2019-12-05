import React from "react";
import { connect } from "react-redux";
import { Tabs } from "antd";

import { Wrapper } from "./StyledComponents";
import AddQuestion from "./AddQuestion";
import AddQuestionToExam from "./AddQuestionToExam";

const { TabPane } = Tabs;

class AddExam extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Add Question" key="1">
            <AddQuestion />
          </TabPane>
          <TabPane tab="Add Question To Test Exam" key="2">
            <AddQuestionToExam />
          </TabPane>
        </Tabs>
      </Wrapper>
    );
  }
}

const mapStateToProps = ({ doExam }) => ({
  doExam
});

const mapDispatchToProps = dispatch => ({
  // getQuestionOfExam: (id, callback) =>
  //   dispatch(getQuestionOfExamAction(id, callback))
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withConnect(AddExam);
