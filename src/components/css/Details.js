import styled from "styled-components";

export const ContainerDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 50px);
  .flex-details {
    border: 1px solid red;
    width: 801px;
    height: 346px;
    background: #212121;
 box-shadow: 15px 15px 30px rgb(25, 25, 25),
             -4px 4px 5px black;
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
          font-size: 1.2rem;
            list-style: none;
            margin-bottom: 5px;
        }
        ul > li > b{
            color: greenyellow;
            margin-right:  8px;
        }
        margin: 0 40px;
    }
  }
`;
