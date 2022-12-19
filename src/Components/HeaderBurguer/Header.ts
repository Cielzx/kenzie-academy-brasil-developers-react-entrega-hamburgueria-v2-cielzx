import styled from "styled-components";

export const Head = styled.header`
  width: 100%;
  display: flex;
  gap: 20px;
  margin: 8px 0px;
  align-items: center;
  height: 68px;
  justify-content: space-between;
  padding: 50px;
  font-family: var(--font-family);

  div input {
    /* position: absolute; */
    width: 400px;
    height: 60px;
    left: 16px;
    top: 65px;
    background: #ffffff;
    border: 2px solid #e0e0e0;
    border-radius: 8p;
    z-index: -1;
    border-radius: 8px;
  }

  .search-cart-logout {
    display: flex;
    gap: 20px;
    align-items: center;
  }

  .counter-cart-box {
    width: 18px;
    position: absolute;
    right: 110px;
    top: 34px;
    height: 21px;
    color: white;
    text-align: center;
    border-radius: 4px;
    font-weight: 600;
    background-color: var(--color-green);
    font-family: var(--font-family);
  }

  .search-button {
    width: 51px;
    height: 40px;
    position: absolute;
    right: 180px;
    top: 38px;

    color: white;
    background: #27ae60;
    border: 2px solid #27ae60;
    flex: none;
    order: 1;
    flex-grow: 0;
    border-radius: 8px;
  }

  @media screen and (max-width: 1024px) {
    width: 94%;
    display: flex;

    gap: 20px;
    margin: 10px;
    max-width: 900px;

    align-items: center;
    height: 68px;
    padding: 0px;

    div input {
      position: absolute;
      width: 98%;
      height: 60px;
      left: 5px;
      top: 65px;
      background: #ffffff;
      border: 2px solid #e0e0e0;
      border-radius: 8p;
      z-index: 0;
      border-radius: 8px;
    }

    .search-button {
      width: 107px;
      height: 40px;
      position: absolute;
      right: 10px;
      top: 78px;
      color: white;
      background: #27ae60;
      border: 2px solid #27ae60;
      flex: none;
      order: 1;
      flex-grow: 0;
      border-radius: 8px;
    }

    .counter-cart-box {
      width: 18px;
      position: absolute;
      right: 65px;
      top: 18px;
      height: 21px;
      color: white;
      text-align: center;
      border-radius: 4px;
      font-weight: 600;
      background-color: var(--color-green);
      font-family: var(--font-family);
    }
  }
`;
