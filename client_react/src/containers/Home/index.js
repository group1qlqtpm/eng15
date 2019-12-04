import React from "react";
import { connect } from "react-redux";
import { Col, PageHeader, Row, Modal, Result, Button } from "antd";

import { getQuestionOfExamAction } from "my-redux/do-exam/actions";
import QuestionAnswerItem from "components/QuestionAnswerItem";
import { fields } from "my-redux/do-exam/constants";

import { Wrapper, Content, Countdown, SubmitButton } from "./StyledComponents";

class Home extends React.PureComponent {
  state = {
    timeCountdown: 600,
    isSubmitted: false,
    picked: [],
    totalPoint: 0,
    isShowModal: false
  };

  timer = null;

  componentDidMount() {
    const onSuccess = response => {
      //console.log("------------------bong")
      //console.log(response);
      this.setState({
        picked: Array(response.length).fill("")
      });
    };

    this.props.getQuestionOfExam("1", onSuccess);

    this.timer = setInterval(() => {
      const nextTimeCountdown = this.state.timeCountdown - 1;

      this.setState({
        timeCountdown: nextTimeCountdown
      });

      if (nextTimeCountdown === 0) {
        this.onClickSubmit();
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  onClickSubmit = () => {
    clearInterval(this.timer);

    let totalPoint = 0;

    this.props.doExam.examDetail[fields.DATA_LIST].forEach((item, index) => {
      if (item.answer === this.state.picked[index]) {
        totalPoint++;
      }
    });

    this.setState({
      isSubmitted: true,
      totalPoint,
      isShowModal: true
    });
  };

  onChangePickedValue = no => value => {
    const { picked } = this.state;

    picked[no] = value;

    this.setState({
      ...this.state,
      picked
    });
  };

  onCloseModal = () => {
    this.setState({ isShowModal: false });
  };

  render() {
    const { doExam } = this.props;
    const { timeCountdown, isSubmitted, totalPoint, isShowModal } = this.state;
    const hour = parseInt(timeCountdown / 60, 10);
    const minute =
      timeCountdown % 60 >= 10 ? timeCountdown % 60 : `0${timeCountdown % 60}`;
    const questionLength = doExam.examDetail[fields.DATA_LIST].length;
    const isPassedTheTest = totalPoint >= questionLength / 2;
    if (doExam.examDetail[fields.DATA_LIST][fields.CHOICE_QUESTION]) {
      doExam.examDetail[fields.DATA_LIST] = doExam.examDetail[fields.DATA_LIST][fields.CHOICE_QUESTION];
    }
    return (
      <Wrapper>
        <Col lg={4} md={4} xs={24}>
          <Countdown>
            <img src="/hourglass.png" alt="hour-glass" />
            {hour}:{minute}
            <SubmitButton onClick={this.onClickSubmit} disabled={isSubmitted}>
              NỘP BÀI
            </SubmitButton>
          </Countdown>
        </Col>

        <Content lg={16} md={16} xs={24}>
          <PageHeader
            onBack={() => null}
            title={doExam.examDetail[fields.CLASS]}
            subTitle={doExam.examDetail[fields.SEMESTER]}
          />

          <Row>
            {doExam.examDetail[fields.DATA_LIST].map((item, index) => (
              <Col lg={12} md={24} key={index}>
                <QuestionAnswerItem
                  no={index + 1}
                  data={item}
                  onChange={this.onChangePickedValue(index)}
                  disabled={isSubmitted}
                />
              </Col>
            ))}
          </Row>
        </Content>

        <Modal visible={isShowModal} footer={null} closable={false}>
          <Result
            status={isPassedTheTest ? "success" : "error"}
            title={
              <div>
                Kết quả:{" "}
                <span>
                  {totalPoint}/{questionLength}
                </span>
              </div>
            }
            subTitle={
              isPassedTheTest
                ? "Bạn đã vượt qua bài kiểm tra"
                : "Bạn có thể làm tốt hơn thế"
            }
            extra={[<Button onClick={this.onCloseModal}>Đồng ý</Button>]}
          />
        </Modal>
      </Wrapper>
    );
  }
}

const mapStateToProps = ({ doExam }) => ({
  doExam
});

const mapDispatchToProps = dispatch => ({
  getQuestionOfExam: (id, callback) =>
    dispatch(getQuestionOfExamAction(id, callback))
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withConnect(Home);
