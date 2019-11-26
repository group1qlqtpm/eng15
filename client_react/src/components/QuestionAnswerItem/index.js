import React, { useState } from "react";
import { Icon } from "antd";

import { Wrapper, Question, AnswerWrapper, Answer } from "./StyledComponents";

import AnswerButton from "./AnswerButton";

export default function({ no, data, onChange, ...rest }) {
  console.log("TCL: rest", rest);
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
        {`${no}. ${data.question} `}
        {rest.disabled && value === data.answer && (
          <Icon type="check" style={{ color: "#52c41a" }} />
        )}
        {rest.disabled && value !== data.answer && (
          <Icon type="close" style={{ color: "#eb2f96" }} />
        )}
      </Question>

      <AnswerWrapper>
        <Answer isActive={value === "a"} onClick={onValueChange("a")}>
          <AnswerButton>A</AnswerButton>
          {data.a}
        </Answer>

        <Answer isActive={value === "b"} onClick={onValueChange("b")}>
          <AnswerButton>B</AnswerButton>
          {data.b}
        </Answer>

        <Answer isActive={value === "c"} onClick={onValueChange("c")}>
          <AnswerButton>C</AnswerButton>
          {data.c}
        </Answer>

        <Answer isActive={value === "d"} onClick={onValueChange("d")}>
          <AnswerButton>D</AnswerButton>
          {data.d}
        </Answer>
      </AnswerWrapper>
    </Wrapper>
  );
}
