import styled from "styled-components";

export const ContainerCharacters = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 h1{
    font-size: 3rem;
    line-height: 2;
    color: greenyellow;
//**Responsive */
@media screen and (max-width: 557px){
 font-size: 3rem;
 }
 }
 //1477
 .flex-filter{
   flex-wrap: wrap;
   width: 1400px;
   display: flex;
   align-items: center;
   gap: 10px;
//**Response */
@media screen and (max-width: 1477px){
  width: 80%;
 }
 @media screen and (max-width: 1428px){
  width: 88%;
 }
 @media screen and (max-width: 1299px){
  width: 992px;
 }
 @media screen and (max-width: 1100px){
 width: 666px;
 }
 @media screen and (max-width: 769px){
 width: 450px;
 }
 @media screen and (max-width: 514px){
 width: 320px;
 }
 }
 .btn-page{
  display: flex;
  height: 80px;
 }
`
