import styled from "styled-components";

export const  ContainerMain = styled.div`
display: flex;
justify-content: center;
align-items: center;
min-height: calc(100vh - 100px);
.grid-main{
    width: 1500px;
    height: 70vh;
    display: grid;
    grid-template-columns: 800px 1fr;
    column-gap: 140px;
    margin: 0 50px;
    //**Responsive */
    @media screen and (max-width: 1405px){
    grid-template-columns: 600px 1fr;
     width: 1200px;
     column-gap: 80px;
    }
    @media screen and (max-width: 1172px){
    grid-template-columns: 500px 1fr;
     width: max-content;
    }
    @media screen and (max-width: 1000px){
        height: 700px;
        grid-template-columns: 800px;
        row-gap: 40px;
        grid-template-rows: 1fr 1fr;
    }
    @media screen and (max-width: 841px){
       grid-template-columns: 600px;
    }
    @media screen and (max-width: 636px){
        height: max-content;
       grid-template-columns: 1fr;
       row-gap: 0px;
    }
}
`
export const ContainerInfoMain = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
h1{
    font-size: 4rem;
    font-family: 'Jacques Francois';
    font-style: normal;
    font-weight: 400;
    u{
        color: greenyellow;
    }
}
//**Responsive */
@media screen and (max-width: 1405px){
    h1{
        font-size: 3rem;
    }
}
@media screen and (max-width: 1000px){
    align-items: center;
    h1{
    text-align: center;
   }
}
.sub-titulo{
    font-family: "Inter";
    font-family: normal;
    margin: 10px 0;
    font-size: 1.1rem;
//**Responsive */
@media screen and (max-width: 1000px){
   font-size: 1rem;
   text-align: center;
   
}
}
.video-main{
        overflow: hidden;
        border-radius: 10px;
        width: 500px;
        background: none;
//**Responsive */
@media screen and (max-width: 1172px){
   width: 450px;
}
@media screen and (max-width: 1000px){
    display: none;
}
video{
    width: 100%;
    height: 100%;
}
}
`
export const ContainerInfoContador = styled.div`
position: relative;
width: 427px;
height: 70px;
background: rgba(0, 0, 0, 0.33);
backdrop-filter: blur(12.5px);
border-radius: 20px;
display: flex;
justify-content: center;
column-gap: 50px;
align-items: center;
margin-top: 20px;
margin-bottom: 30px;
box-shadow: -4px 4px 5px #000000, inset -4px 4px 25px #000000;
//**Responsive */
@media screen and (max-width: 479px){
    column-gap: 20px;
      width: 300px;
      margin-bottom: 0px;
}
.barra{
    border-radius: 50px;
    position: absolute;
    background: #DADADA;
    width: 50px;
    height: 2px;
    transform: rotate(90deg);
}
.barra.uno{
    left: 120px;
    @media screen and (max-width: 479px){
        left: 80px;
    }
}
.barra.dos{
    left: 220px;
 @media screen and (max-width: 479px){
        left: 133px;
    }
}
span{  
  h2{
    font-size: 1.8rem;
    font-family: 'Bebas Neue';
    font-weight: 400;
    font-style: normal;
    text-align: center;
    color: greenyellow;
  }
  p{
    font-size: 1rem;
  }
@media screen and (max-width: 479px){
       h2{
        font-size: 1.5rem;
       }
       p{
        font-size: 0.8rem;
       }
}
}
`

export const ContainerImg = styled.div`
align-self: center;
justify-self: center;
position: relative;
/*width: 472px;
height: 641px;*/
width: 372px;
height: 541px;
background: url("https://s3-prod.adage.com/s3fs-public/image0.png") center center/cover no-repeat;
border: 2px solid #CCFF00;
border-radius: 15px;
transition: all 400ms ease;
animation: subir 1.8s infinite alternate ease-in-out;
//**reponsive */
@media screen and (max-width: 1172px){
   width: 350px;
   height: 500px;
}
@media screen and (max-width: 1000px){
    width: 300px;
    height: 400px;
}
@media screen and (max-width: 479px){
    animation:none;
}
@keyframes subir {
        0%{
            transform: translateY(10px);
        }
        100%{
            transform: translateY(-10px);
        }
    }
.cont-redes{
    margin: auto;
    width: 90%;
}
button{
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 100px;
    height: 30px;
    border: none;
    background: #CCFF00;
    border-radius: 50px;
    box-shadow: inset -4px 4px 4px rgba(0, 0, 0, 0.25);
    filter: drop-shadow(-4px 4px 2px #000000);
    :hover{
      background: white;
    }
}
.info-img{
position: absolute;
width: 90%;
height: max-content;
background: rgba(0, 0, 0, 0.51);
backdrop-filter: blur(12.5px);
/*box-shadow: inset 0px 4px 40px #000000;
filter: drop-shadow(-4px 4px 40px #CCFF00);*/
bottom: 5px;
left: 50%;
transform: translate(-50%,-70%);
border-radius: 15px;
padding: 10px;
text-align: center;
font-size: 0.8rem;
}

//box-shadow: inset 0px 4px 40px #000000;
-webkit-box-shadow: -4px 4px 18px 1px rgba(150,255,13,1);
-moz-box-shadow: -4px 4px 18px 1px rgba(150,255,13,1);
box-shadow: -4px 4px 18px 1px rgba(150,255,13,1),inset -10px -10px 25px #000000, inset 10px 10px 25px #000000;  

`