import React from 'react';
import PropTypes from 'prop-types';
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

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
