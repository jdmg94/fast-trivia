import styled from 'styled-components';

const Level = styled.div`
  padding: 2rem;
  align-items: center;
  display: inline-flex;
  justify-content: space-between;
  width: ${props => props.width ? props.width : '100%'};
`;

export default Level;