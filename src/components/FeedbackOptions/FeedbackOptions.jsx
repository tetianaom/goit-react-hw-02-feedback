import React from 'react';
import { BtnFeedback } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(opt => (
        <BtnFeedback key={opt} onClick={() => onLeaveFeedback(opt)}>
          {opt}
        </BtnFeedback>
      ))}
    </>
  );
};
