import React, { useState } from "react";
import { Icon } from "antd";

import { dataListFields } from "my-redux/do-exam/constants";

import { Wrapper, Question, AnswerWrapper, Answer } from "./StyledComponents";

import AnswerButton from "./AnswerButton";

export default function({ no, data, onChange, ...rest }) {
  const [value, setValue] = useState("");

  const onValueChange = value => () => {
    if (rest.disabled) return;

    setValue(value);

    if (onChange) {
      onChange(value);
    }
  };

  return (
    <Wrapper>
      <Question>
        {`${no}. ${data[dataListFields.QUESTION]} `}
        {rest.disabled && value === data[dataListFields.QUESTION] && (
          <Icon type="check" style={{ color: "#52c41a" }} />
        )}
        {rest.disabled && value !== data[dataListFields.ANSWER] && (
          <Icon type="close" style={{ color: "#eb2f96" }} />
        )}
      </Question>

      <AnswerWrapper>
        <Answer isActive={value === "A"} onClick={onValueChange("A")}>
          <AnswerButton>A</AnswerButton>
          {data[dataListFields.A]}
        </Answer>

        <Answer isActive={value === "B"} onClick={onValueChange("B")}>
          <AnswerButton>B</AnswerButton>
          {data[dataListFields.B]}
        </Answer>

        <Answer isActive={value === "C"} onClick={onValueChange("C")}>
          <AnswerButton>C</AnswerButton>
          {data[dataListFields.C]}
        </Answer>

        <Answer isActive={value === "D"} onClick={onValueChange("D")}>
          <AnswerButton>D</AnswerButton>
          {data[dataListFields.D]}
        </Answer>
      </AnswerWrapper>
    </Wrapper>
  );
}
