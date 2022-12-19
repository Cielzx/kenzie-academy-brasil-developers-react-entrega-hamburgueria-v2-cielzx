import styled from "styled-components";

export const DivLoginStyled = styled.div`
  display: flex;
  gap: 70px;
  width: 800px;
  height: 100vh;
  align-items: center;
  margin: 0 auto;

  form {
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  /* form input {
    width: 400px;
    height: 40px;
    border-radius: 6px;
    border: none;
    padding: 20px;
    background-color: #dddddd;
  } */
  input:focus {
    outline-color: var(--color-green);
  }

  form button {
    height: 40px;
    background-color: var(--color-green);
    border-radius: 6px;
    color: var(--grey-0);
    font-weight: 600;
  }

  form div {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 10px;
  }

  form span {
    color: var(--grey-200);
  }

  form a {
    color: var(--grey-200);
    font-weight: 600;
  }

  form p {
  }

  .content-div {
    display: flex;
    flex-direction: column;
    height: 180px;
    gap: 20px;
  }

  .title-span {
    color: red;
    font-size: 26px;
  }

  .content-text {
    width: 300px;
    display: flex;
    font-size: 56px;
    color: var(--color-green);
    gap: 20px;
    align-items: center;
  }

  .content-text p {
    font-size: 15px;
    color: black;
  }

  .content-span {
    font-weight: 600;
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    gap: 10px;
    form {
      width: 80%;

      display: flex;

      flex-direction: column;
      gap: 20px;
      padding: 0px 14px;
    }

    form input {
      width: 100%;
      height: 40px;
      border-radius: 6px;
    }

    form button {
      height: 40px;
      background-color: var(--color-green);
      border-radius: 6px;
      color: var(--grey-0);
      font-weight: 600;
      width: 100%;
    }

    .content-div {
      display: flex;
      flex-direction: column;
      height: 180px;
      gap: 20px;
      width: 93%;
      align-items: center;
    }
    .content-text p {
      font-size: 14px;
    }
  }
`;
