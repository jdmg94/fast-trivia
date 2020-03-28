import styled from '@emotion/styled';

const Text = styled.span`
  font-size: 18px;
  color: ${({ color }) => color};
  font-weight: ${({ bold }) => bold ? '600' : 'normal'};

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export default Text;