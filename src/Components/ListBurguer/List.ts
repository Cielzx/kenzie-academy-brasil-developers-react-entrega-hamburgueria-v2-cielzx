import styled from "styled-components";

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;

  li img {
    width: 100%;
    height: 170px;
    object-fit: cover;
  }

  li {
    display: flex;
    width: 254px;
    height: 367px;
    flex-direction: column;
    gap: 20px;
    border: 2px solid #e0e0e0;
    align-items: flex-start;
    border-radius: 5px;
  }

  li:hover {
    border: 4px solid var(--color-green);
    color: var(--color-green);
    button {
      background-color: var(--color-green);
      border: 2px solid var(--color-green);
    }
  }

  li h2 {
    font-weight: 600;
  }

  .span-sand {
    color: #828282;
  }

  .span-rs {
    font-weight: 600;
    font-size: 17px;
    color: #27ae60;
    margin: 0;
  }

  @media screen and (max-width: 1024px) {
    list-style: none;
    width: 100%;
    margin: 73px 0px;
    display: flex;
    gap: 10px;
    overflow-x: scroll;
    flex-wrap: nowrap;

    li img {
      width: 250px;
      /* position: relative;
    left: 14%; */
      height: 250px;
      object-fit: cover;
    }

    li {
      display: flex;
      width: 319px;
      height: 416px;
      flex-direction: column;
      gap: 9px;
      border: 2px solid #e0e0e0;
      align-items: flex-start;
      border-radius: 5px;
    }

    li h2 {
      font-weight: 600;
    }

    .span-sand {
      color: #828282;
    }

    .span-rs {
      font-weight: 600;
      font-size: 17px;
      color: #27ae60;
      margin: 0;
    }
  }
`;
