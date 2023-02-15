import styled from "styled-components";

export const ContainerCharacter = styled.div`
 //border: 0.5px solid greenyellow;
// border: 2px solid  yellow;
 //border:${({status}) => status === "Alive" ? "2px solid greenyellow":status === "unknown"? " 2px solid #00F0FF" : " 2px solid #FFB800"};
  overflow: hidden;
 // background: #212121;
 box-shadow: 15px 15px 30px rgb(25, 25, 25),
             4px 4px 5px black;

  background: rgba(0,0,0,0.25);
  backdrop-filter: blur(0.5px);

   //**puede ser */
   box-shadow: rgb(0 0 0) 10px 10px 35px, rgb(0 0 0) -4px 4px 25px;
   background: rgb(169 0 255 / 4%); 
   backdrop-filter: blur(5px);
  //** termina puede ser */
  border-radius: 15px;
  text-align: center;
  width: 220px;
  height: 300px;
  transition: transform 400ms ease;
  :hover{
    //z-index: 80;
    //box-shadow: -2px 2px 20px black, 2px -2px 20px black;
    cursor: pointer;
    transform: scale(1.1);
  }
  //**Responsive */
  @media screen and (max-width: 514px){
   width: 150px;
   height: 190px;
  }
  h2 {
    color: greenyellow;
  }
  .info-card {
    height: calc(100% - 180px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2{
      text-overflow: ellipsis;
      height: 38px;
      overflow: hidden;
      white-space: wrap;
    }
  @media screen and (max-width: 514px){
    height: calc(100% - 100px);
    h2{
      font-size: 1rem;
      height: max-content;
    }
    p{
      font-size: 0.8rem;
    }
  }
  }
  .img-card {
    position: relative;
    overflow: hidden;
    height: 180px;
    width: 100%;
    background:  url("https://blog.teamtreehouse.com/wp-content/uploads/2015/05/loading.gif") 50% no-repeat;
    img {
      width: 100%;
      height: 100%;
     // transition: transform 400ms;
    }
   /* img:hover {
      transform: scale(1.2);
    }*/
  //**Responsive */
  @media screen and (max-width: 514px){
   width: 150px;
   height: 100px;
  }
  }
  .btn-card-id {
    display: ${props => props.infoView ? "block" : "none"};
    color: greenyellow;
    cursor: pointer;
    border: none;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(3px);
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 28px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
  .favorite,.addFavorite{
    padding: 10px;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    color: white;
    border: none;
    border-radius: 50px;
    /*width: 35px;*/
    width: max-content;
    height: 20px;
    position: absolute;
    background: rgba(0, 0, 0, 0.56);
    backdrop-filter: blur(25px);
    .icon-live{
      margin-left: 5px;
      color: ${({status}) => status === "Alive" ? "greenyellow":status === "unknown"? "#00F0FF" : "#FFB800"};
    }
  }
  .favorite{
    justify-content: space-evenly;
    top: 3px;
    left: 4px;
  }
  .addFavorite{
    cursor: pointer;
    color: white;
    justify-content: center;
    position: absolute;
    top: 3px;
    right: 5px;
    :hover{
      color: greenyellow;
    }
  }
`;
