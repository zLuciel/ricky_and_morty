import styled from "styled-components";

export const ContainerFilters = styled.div`
  .container-selector {
    z-index: 4;
    position: relative;
    color: black;
    margin-bottom: 20px;
    div {
        cursor: pointer;
        position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100px;
      height: 25px;
      font-size: 0.9rem;
      padding: 5px 28px 5px 20px;
      border-radius: 50px;
      background: white;
      margin-bottom: 10px;
      box-shadow: inset -4px 4px 4px rgba(0, 0, 0, 0.25);
      filter: drop-shadow(-4px 4px 2px #000000);
      :hover{
      background: #CCFF00;
    }
    }
    .select-name {
       font-family: 'Bebas Neue';
        text-transform: capitalize;
     .icon-filter{
      font-size: 1.5rem;
        top: 0px;
        right: 12px;
        position: absolute;
     }
    }
    @media screen and (max-width: 515px){
     margin-bottom: 0;
    }
  }

  .container-selector > ul {
    display: ${(props) => (props.mostrar ? "flex" : "none")};
    flex-direction: column;
    row-gap: 5px;
    padding: 10px 10px;
    border-radius: 10px;
    color: white;
    text-align: center;
    position: absolute;
    width: 100%;
    height: ${(props) => (props.name === "Pages" ? "95px" : "max-content")};
    overflow-y: ${(props) => (props.name === "Pages" ? "scroll" : "none")};
    background: rgb(0 0 0 / 52%);
    backdrop-filter: blur(5px);
    z-index: 500;
    list-style: none;
  ::-webkit-scrollbar {
    border-radius: 10px;
  display: initial;
  width: 6px;
  height: 7px;
  background-color: black;
}
::-webkit-scrollbar-thumb {
  border-radius: 50px;
  background-color: greenyellow;
}
    li:hover {
      cursor: pointer;
      border-radius: 5px;
      background: black;
      color: greenyellow;
    }
  } 
 
`;