import styled from 'styled-components';
import DefaultLayout from './DefaultLayout';

const S = styled(DefaultLayout)`
  font-size: 1.4rem;
  .layout-inner {
    max-width: 980px;
    width: 100%;
    margin: 0 auto 10rem auto;
    padding: 2rem;
  }
`;

export default S;
