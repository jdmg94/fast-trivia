import styled from '@emotion/styled';

const Title = styled.h1`
  margin: 1.5rem auto;
  font-size: 45px;
  font-weight: 600;
  color: ${props => props.color};

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export default Title;