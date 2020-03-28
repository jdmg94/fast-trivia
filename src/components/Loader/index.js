import styled from '@emotion/styled'

const Loader = styled.div`
  border-radius: 50%;
  border: 0.5rem solid #8884;
  border-top: 0.5rem solid #48B;
  height: 8rem;
  width: 8rem;
  animation: spins 2s infinite;

  @media (max-width: 600px) {
    height: 5rem;
    width: 5rem;
  }

  @keyframes spins {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export default Loader
