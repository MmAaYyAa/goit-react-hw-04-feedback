import { Component } from 'react';
import { FeedbackButtons, FeedbackButton } from './FeedbackOptions.styled';
export default class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <FeedbackButtons>
        {options.map(option => (
          <FeedbackButton type="button" onClick={onLeaveFeedback} key={option}>
            {option}
          </FeedbackButton>
        ))}
      </FeedbackButtons>
    );
  }
}
