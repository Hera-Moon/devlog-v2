import styled from 'styled-components';
import Post from './Post';

const S = styled(Post)`
  /* max-width: 700px; */
  width: 100%;
  margin: auto;

  .article-header {
    .cover-wrap {
      height: 320px;
      position: relative;

      .cover {
        width: 100vw;
        height: 100%;
        position: absolute;
        left: 50%;
        top: 0;
        transform: translateX(-50%);
        overflow: hidden;

        img {
          top: 50% !important;
          transform: translateY(-50%) !important;
          height: auto !important;
        }
      }
    }

    .post-title-wrap {
      margin: 5rem 13rem;
      padding: 0 1.6rem;
      h1 {
        color: var(--text1);
        font-size: 4.8rem;
        font-weight: bold;
      }
      h2 {
        margin-top: 2rem;
        font-size: 2.4rem;
        color: var(--text2);
      }
    }
  }
`;

export default S;
