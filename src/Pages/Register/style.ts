import styled from "styled-components";

export const DivLoginStyled = styled.div`
  display: flex;
  gap: 20px;
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

  form input {
    width: 400px;
    height: 40px;
    border: none;
    border-radius: 6px;
    padding: 20px;
    background-color: #dddddd;
  }

  input:focus {
    outline-color: var(--color-green);
  }

  form p {
    color: red;
  }

  form button {
    height: 40px;
    background-color: none;
    border: none;
    border-radius: 6px;
    color: var(--grey-200);
    font-weight: 600;
    font-size: 20px;
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
    text-decoration-line: underline;
  }
  .register-form-title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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
    width: 99%;
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    gap: 20px;
    form {
      width: 77%;

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

    .register-form-title {
      display: flex;
      justify-content: space-between;
      width: 94%;
      align-items: center;
    }
  }
`;
