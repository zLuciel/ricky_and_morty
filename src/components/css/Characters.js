import styled from "styled-components";

export const ContainerCharacters = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 h1{
    font-size: 5rem;
    line-height: 2;
    margin-bottom: 18px;
 }
 
 .flex-filter{
   width: 1400px;
   display: flex;
   align-items: center;
   gap: 10px;
   @media screen and (max-width: 1476px){
    width: 90%;
  border: 1px solid red;
 }
 }
 .btn-page{
  display: flex;
  height: 80px;
 }
`
