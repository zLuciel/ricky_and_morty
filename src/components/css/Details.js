import styled from "styled-components";

export const ContainerDetails = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 80px);
  row-gap: 50px;
  .return-details{
    cursor: pointer;
    border: none;
    width:100px;
    height: 20px;
    background: greenyellow;
    border-radius: 50px;
  }
  .flex-container-details{
  display: flex;
  justify-content: center;
  align-items: center;
  }
  .flex-details {
    width: 801px;
    height: 346px;
    background: rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(15px);
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    //*Responsive */
    @media screen and (max-width: 896px){
      width: 550px;
      height: max-content;
      .xd{
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 20px;
    }
    }
    @media screen and (max-width: 706px){
      width: 450px;
      height: max-content;
      .xd{
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    }
    @media screen and (max-width: 506px){
      width: 300px;
    }
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
    //**Responsive */
    @media screen and (max-width: 896px){
      width: 250px;
      height: 200px;
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }
  }
  .info-details{
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
    //**Responsive */
    @media screen and (max-width: 896px){
      width: max-content;
      h1{
        line-height: 2.5;
      }
      div{
        padding: 0;
      }
    }
    @media screen and (max-width: 706px){
      h1{
        line-height: 2.5;
      }
    }
    @media screen and (max-width: 506px){
      width: 340px;
      div{
        justify-content: center;
         ul > li{
        text-align: center;
        font-size: 1rem;
      }
      }
     
    }
  }
`;
