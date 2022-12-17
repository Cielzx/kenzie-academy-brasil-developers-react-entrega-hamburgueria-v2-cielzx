import styled from "styled-components";

export const StyleDiv = styled.div`
  width: 100%;
  height: 113vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;

  .cart-div {
    width: 460px;
    display: flex;
    background-color: #27ae60;
    height: 64px;
    border-radius: 4px;
    align-items: center;
    padding: 7px;
    color: white;
  }

  .cart-div div {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  .close-button {
    font-size: 20px;
    width: 30px;
    color: var(--grey-200);
  }

  .cart-ul {
    display: flex;
    flex-direction: column;
    /* height: 400px; */
    background-color: var(--grey-0);
    gap: 10px;
    /* overflow-y: scroll; */
    list-style: none;
    margin-top: 10px;
    align-items: center;
  }

  .cart-list {
    display: flex;
    width: 100%;
    gap: 30px;
    height: 70px;
    align-items: center;
  }
  .cart-list p {
    font-weight: 600;
    font-size: 15px;
  }
  .cart-list span {
    color: #828282;
  }
  .cart-list h3 {
    font-size: 15px;
  }

  .trash-li {
    background: none;
    border: none;
    position: relative;
    bottom: 33%;
    left: 41%;
    color: grey;
    font-size: 17px;
    cursor: pointer;
  }

  .div-list {
    display: flex;
    width: 114px;
    flex-direction: column;
    gap: 10px;
  }
  .div-cart {
    padding: 15px;
    display: flex;
    /* background-color: var(--grey-0); */
    flex-direction: column;
  }
  .img-cart {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  .total-div {
    width: 100%;
    /* height: 300px; */
    gap: 10px;
    display: flex;
    flex-direction: column;
  }

  .total-div div {
    display: flex;
    justify-content: space-between;
  }

  .total-div button {
    width: 450px;
    position: relative;
    left: 1%;
    height: 80px;
    background-color: #e0e0e0;
    color: #828282;
    border: 1px solid #e0e0e0;
    font-size: 20px;
    cursor: pointer;
  }

  .div-appear {
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: center;
    margin: 100px;
  }

  .div-appear span {
    color: #828282;
  }

  .sub-add-div {
    display: flex;
    width: 100px;
    gap: 12px;
  }

  .add-sub-button {
    color: red;
    width: 10px;
    display: flex;
    height: 15px;
    justify-content: center;
    font-size: 21px;
    align-items: center;
    font-weight: 600;
  }

  @media screen and (max-width: 1024px) {
    .cart-div {
      width: 100%;
      display: flex;
      background-color: #27ae60;
      height: 82px;
      border-radius: 9px;
      align-items: center;
      padding: 7px;
      color: white;
    }
    .cart-ul {
      display: flex;
      flex-direction: column;
      gap: 10px;
      border-radius: 9px;
      overflow-y: scroll;
      list-style: none;
      margin-top: 10px;
      align-items: center;
      width: 100%;
    }

    .cart-list {
      display: flex;
      width: 100%;
      gap: 30px;
      height: 70px;
      align-items: center;
    }
    .cart-list p {
      font-weight: 600;
      font-size: 15px;
    }
    .cart-list span {
      color: #828282;
    }

    /* .cart-list button {
      background: none;
      border: none;
      color: grey;
      font-size: 17px;
      cursor: pointer;
    } */

    .div-list {
      display: flex;
      width: 24px;
      flex-direction: column;
      gap: 10px;
    }
    .div-cart {
      padding: 15px;
      display: flex;
      flex-direction: column;
    }
    .img-cart {
      width: 60px;
      height: 60px;
    }

    .total-div {
      width: 95%;
      gap: 10px;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
    }

    .total-div div {
      display: flex;
      justify-content: space-between;
    }

    .total-div button {
      width: 380px;
      position: relative;
      left: 0%;
      height: 80px;
      background-color: #e0e0e0;
      color: #828282;
      border: 1px solid #e0e0e0;
      font-size: 20px;
    }

    .div-appear {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      gap: 10px;
      font-size: 14px;
      align-items: center;
      margin: 90px;
    }

    .sub-add-div {
      display: flex;
      width: 100px;
      gap: 12px;
    }

    .add-sub-button {
      color: red;
      width: 10px;
      display: flex;
      height: 15px;
      justify-content: center;
      font-size: 21px;
      align-items: center;
      font-weight: 600;
    }
  }
`;
