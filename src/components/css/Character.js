import styled from "styled-components";

export const ContainerCharacter = styled.div`
 /*border: 2px solid greenyellow;*/
 /*border: 2px solid  yellow;*/
 //border:${({status}) => status === "Alive" ? "3px solid greenyellow":status === "unknown"? " 3px solid #00F0FF" : " 3px solid #FFB800"};
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
    display: ${props => props.infoView ? "block" : "none"};
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
  .favorite{
    padding: 10px;
    font-size: 0.8rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: white;
    border: none;
    border-radius: 50px;
    /*width: 35px;*/
    width: max-content;
    height: 20px;
    position: absolute;
    top: 3px;
    left: 4px;
    background: rgba(0, 0, 0, 0.56);
    backdrop-filter: blur(25px);
    .icon-live{
      margin-left: 5px;
      color: ${({status}) => status === "Alive" ? "greenyellow":status === "unknown"? "#00F0FF" : "#FFB800"};
    }
  }
`;
