import styled from 'styled-components';

export const SectionStyle = styled('section')(() => {
  return {
    margin: '0 auto',
    width: '50%',
    padding: '20px 10px',
  };
});

export const SectionTitle = styled('h2')(() => {
  return {
    fontSize: '30px',
    fontWeight: '600',
  };
});
