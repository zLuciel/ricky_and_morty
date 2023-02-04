import styled from "styled-components";

export const GridCharacter = styled.div`
 /*width: 82%;*/
 width: 1400px;
 /*width: 1210px;*/
 display: grid;
 place-items: center;
 grid-template-columns: repeat(auto-fill,minmax(210px,1fr));
 row-gap: 40px;
 column-gap: 20px;

 //**Responsive */
 @media screen and (max-width: 1476px){
  width: 80%;
 }
 @media screen and (max-width: 1428px){
  width: 90%;
  grid-template-columns: repeat(auto-fill,minmax(215px,1fr));
 }
 @media screen and (max-width: 1298px){
  width: 992px;
  grid-template-columns: repeat(auto-fill,minmax(215px,1fr));
 }
 @media screen and (max-width: 1100px){
  width: 666px;
  grid-template-columns: repeat(auto-fill,minmax(208px,1fr));
 }
 @media screen and (max-width: 768px){
  width: 450px;
  grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
 }
 @media screen and (max-width: 514px){
 width: 320px;
  grid-template-columns: repeat(auto-fill,minmax(135px,1fr));
 }
`
