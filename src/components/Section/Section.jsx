import { Component } from 'react';
import { SectionStyle, SectionTitle } from './Section.styled';
export default class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <SectionStyle>
        <SectionTitle>{title}</SectionTitle>
        {children}
      </SectionStyle>
    );
  }
}
