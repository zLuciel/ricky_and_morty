import styled from "styled-components";

export const ContainerDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 50px);
  .flex-details {
    width: 801px;
    height: 346px;
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(25px);
    border-radius: 15px;
    padding: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .xd{
    width: 650px;
    display: flex;
  }
  .img-details{
    overflow: hidden;
    width: 285px;
    height: 265px;
    border-radius: 10px;
  }
  .info-details{
    width: 400px;
    h1{
        text-align: center;
        color: greenyellow;
    }
    div{
        padding: 0 30px;
        display: flex;
        align-items: center;
        height: calc(100% - 40px);
        ul > li{
            list-style: none;
            margin-bottom: 10px;
        }
        ul > li > b{
            color: greenyellow;
            margin-right:  8px;
        }
        margin: 0 40px;
    }
  }
`;
