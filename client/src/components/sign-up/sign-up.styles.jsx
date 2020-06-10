import styled from 'styled-components';

export const SignUpContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 800px) {
    align-items: center;
    margin-bottom: 50px;

    form {
      width: 100%;
    }
    button {
      margin: 0 auto;
    }
  }
`;

export const SignUpTitle = styled.h2`
  margin: 10px 0;
`;
