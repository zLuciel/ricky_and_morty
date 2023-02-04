import styled from "styled-components";
export const ContainerSearch = styled.div`
   position: relative;
  .input-search {
    padding: 0 8px;
    width: 400px;
    height: 25px;
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(25px);
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 5px;
    @media screen and (max-width: 1126px){
    width: 300px;
  }
  }
  .input-search > button {
    height: 20px;
    width: 30px;
    border: none;
    background: none;
    color: greenyellow;
    .icon-search{
      width: 100%;
      height: 100%;
    }
  }
  .input-search > input {
    width: 100%;
    color: white;
    background: none;
    outline: none;
    border: none;
  }
  .search-view{
    margin-top: 10px;
    display: ${props => props.mostrar ? "block" : "none"};
    padding: 10px 20px;
    overflow-y: auto;
    position: absolute;
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(25px);
    border-radius: 20px;
    width: 100%;
    max-height: 170px;
    height: max-content;
  }
 /* @media screen and (max-width: 902px){
  display: none;
}*/
`;
