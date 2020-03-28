import styled from '@emotion/styled';

const Level = styled.div`
  padding: 2rem;
  align-items: center;
  flex-direction: row;
  display: inline-flex;
  justify-content: space-between;
  width: ${props => props.width ? props.width : '100%'};

  @media (max-width: 600px) {
    width: 100vw;
    flex-direction: ${({ nonResponsive }) => nonResponsive ? 'row' : 'column' };
  }
`;

export default Level;