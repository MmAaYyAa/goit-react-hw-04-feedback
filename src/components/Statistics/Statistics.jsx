import { Component } from 'react';
import { StatisticsList, StatisticsText } from './Statistics.styled';
export default class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <>
        <StatisticsList>
          <li>
            <StatisticsText>Good: {good}</StatisticsText>
          </li>
          <li>
            <StatisticsText>Neutral: {neutral}</StatisticsText>
          </li>
          <li>
            <StatisticsText>Bad: {bad}</StatisticsText>
          </li>
          <li>
            <StatisticsText>Total:{total}</StatisticsText>
          </li>
          <li>
            <StatisticsText>
              Positive feedback: {positivePercentage}%
            </StatisticsText>
          </li>
        </StatisticsList>
      </>
    );
  }
}
