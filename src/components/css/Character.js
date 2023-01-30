import styled from "styled-components";

export const ContainerCharacter = styled.div`
  overflow: hidden;
  background: #212121;
 box-shadow: 15px 15px 30px rgb(25, 25, 25),
             -4px 4px 5px black;
  border-radius: 15px;
  text-align: center;
  width: 220px;
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
    display: ${props => props.infoView ? "block" : "none"};;
    color: white;
    cursor: pointer;
    border: none;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(4px);
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 28px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
`;
