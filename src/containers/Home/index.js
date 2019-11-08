import React from 'react';
import { connect } from 'react-redux';

import { Wrapper } from './StyledComponents';
import { getQuestionOfExamAction } from 'my-redux/do-exam/actions';

class Home extends React.PureComponent {
  componentDidMount() {
    this.props.getQuestionOfExam('123');
  }
  render() {
    const { doExam } = this.props;
    console.log('TCL: Home -> render -> this.props', doExam);

    return <Wrapper>Hello World!</Wrapper>;
  }
}

const mapStateToProps = ({ doExam }) => ({
  doExam,
});

const mapDispatchToProps = (dispatch) => ({
  getQuestionOfExam: (id) => dispatch(getQuestionOfExamAction(id)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default withConnect(Home);
