import styled from 'styled-components';
import { animated } from 'react-spring';

const Layout = styled(animated.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  position: absolute;
  align-items: center;
  will-change: transform;
  justify-content: center;
`;

export default Layout;