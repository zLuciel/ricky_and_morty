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
 .grid-characters{
 /*width: 82%;*/
 width: 1400px;
 /*width: 1210px;*/
 display: grid;
 grid-template-columns: repeat(auto-fill,minmax(210px,1fr));
 row-gap: 40px;
 column-gap: 20px;
 @media screen and (max-width: 1476px){
  width: 80%;
 }
 @media screen and (max-width: 1428px){
  width: 90%;
  grid-template-columns: repeat(auto-fill,minmax(215px,1fr));
 }
 @media screen and (max-width: 776px){
  width: 80%;
  grid-template-columns: repeat(auto-fill,minmax(220px,1fr));
 }
 @media screen and (max-width: 590px){
  width: 50%;
  grid-template-columns: repeat(1,minmax(300px,1fr));
 }
 }
 .flex-filter{
   width: 1400px;
   display: flex;
   align-items: center;
   gap: 10px;
 }
 .btn-page{
  display: flex;
  height: 80px;
 }
`
