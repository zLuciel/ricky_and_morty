import styled from "styled-components";

export const ContainerCharacter = styled.div`
  overflow: hidden;
  background: rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(25px);
  border-radius: 15px;
  text-align: center;
  width: 200px;
  height: 300px;
  h2 {
    color: greenyellow;
  }
  .info-card {
    height: calc(100% - 180px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .img-card {
    position: relative;
    overflow: hidden;
    height: 180px;
    img {
      width: 100%;
      height: 100%;
      transition: transform 400ms;
    }
    img:hover {
      transform: scale(1.2);
    }
  }
  .btn-card-id {
    color: white;

    cursor: pointer;
    border: none;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(4px);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 28px;
  }
`;
