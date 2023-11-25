import styled from 'styled-components';
export const FeedbackButtons = styled('div')(() => {
  return {
    display: 'flex',
    gap: '20px',
    margin: '0 auto',
  };
});

export const FeedbackButton = styled('button')(() => {
  return {
    padding: '6px 20px',
    fontSize: '16px',
    fontWeight: '500',
    color: '#2d4059',
    border: '1px solid lightgray',
    borderRadius: '6px',

    '&:hover': {
      backgroundColor: '#626fe6',
      color: 'whitesmoke',
      outline: 'none',
      cursor: 'pointer',
    },
    '&:first-letter': {
      textTransform: 'uppercase',
    },
  };
});
