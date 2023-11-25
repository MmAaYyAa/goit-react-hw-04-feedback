import { useState } from 'react';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
export const App =()=> {
  const[good,setGood]= useState(0);
  const[neutral,setNeutral]=useState(0);
  const[bad,setBad]=useState(0);

  const countTotalFeedback = () => {
    return good + neutral+ bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const sum = countTotalFeedback();
    const percentage = Math.round((good / sum) * 100);
    return percentage;
  };

  const handleOptionsFeedback = ({ target }) => {
   
   if(target.textContent==='good') setGood(prev => prev + 1);
   if(target.textContent==='neutral') setNeutral(prev => prev + 1);
   if(target.textContent==='bad') setBad(prev => prev + 1);
   }

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good','neutral','bad']}
            onLeaveFeedback={handleOptionsFeedback}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </>
    );
  }


/* <div>
        <h2>Please leave feedback</h2>
        <div>
          <button type="button">Good</button>
          <button type="button">Neutral</button>
          <button type="button">Bad</button>
        </div>
        <h3>Statistics</h3>
        <ul>
          <li>
            <p>Good: </p>
          </li>
          <li>
            <p>Neutral: </p>
          </li>
          <li>
            <p>Bad: </p>
          </li>
        </ul>
      </div> */
