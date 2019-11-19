import React, { useState } from 'react';
import { Radio, Icon } from 'antd';

import { Wrapper, Question, Answer } from './StyledComponents';

export default function({ no, data, ...rest }) {
  const [value, setValue] = useState('');

  const onValueChange = (e) => {
    setValue(e.target.value);

    if (rest.onChange) {
      rest.onChange(e.target.value);
    }
  };

  return (
    <Wrapper>
      <Question>
        {`${no}. ${data.question} `}
        {rest.disabled && value === data.answer && (
          <Icon type="check" style={{ color: '#52c41a' }} />
        )}
        {rest.disabled && value !== data.answer && (
          <Icon type="close" style={{ color: '#eb2f96' }} />
        )}
      </Question>

      <Radio.Group
        size="small"
        {...rest}
        value={value}
        onChange={onValueChange}
      >
        <Answer value="a">{data.a}</Answer>
        <Answer value="b">{data.b}</Answer>
        <Answer value="c">{data.c}</Answer>
        <Answer value="d">{data.d}</Answer>
      </Radio.Group>
    </Wrapper>
  );
}
