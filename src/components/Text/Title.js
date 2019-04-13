import Text from './Text';
import styled from 'styled-components';

const Title = styled(Text.withComponent('h1'))`
  font-size: 45px;
  font-weight: 600;
`;

export default Title;