import styled from "styled-components";

export const LoginContainerFlex = styled.div`
overflow: hidden;
width: 100%;
min-height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`
export const LoginAnime = styled.div`
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.8);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(0, 0, 0, 0.3);
background: rgba(0, 0, 0, 0.2);
position: relative;
width:  1200px;
height: 489px;
border-radius: 20px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
//**reponsive */
@media screen and (max-width: 1302px){
 width: 800px;
}
@media screen and (max-width: 1145px){
  width: 600px;
}
@media screen and (max-width: 639px){
  width: 400px;
  h1{
    font-size: 1.5rem;
  }
}
@media screen and (max-width: 460px){
  width: 300px;
  h1{
    text-align: center;
    font-size: 1.5rem;
  }
}
h1{
    margin-bottom: 22px;
    b{
        color: greenyellow;
    }
}
.login-img-rigth,.login-img-left{
    z-index: -1;
}
.login-img-rigth{
    position: absolute;
    height: 120%;
    bottom: 0px;
    right: -250px;
//**reponsive */
@media screen and (max-width: 1302px){
    height: 100%;
    right: -300px;
}
@media screen and (max-width: 1145px){
    display: none;
}
}
.login-img-left{
    position: absolute;
    height: 120%;
    bottom: 0;
    left: -60px;
//**reponsive */
@media screen and (max-width: 1302px){
    width: 50%;
    left: -190px;
}
@media screen and (max-width: 1145px){
    display: none;
}
}
.login-usuario,.login-password{
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: 1px solid greenyellow;
    width: 40%;
    height: 50px;
    padding-left: 10px;
    .ico-login{
      color: greenyellow;
    }
    input{
      margin-left: 10px;
        color: white;
        width: 100%;
        border: none;
        outline: none;
        background: none;
        ::placeholder{
            color: #C1C1C1;
        }
    }
//**Responsive */
@media screen and (max-width: 1145px){
  width: 80%;
}
@media screen and (max-width: 639px){
  width: 80%;
}
}
.btn-ingresar{
    border: none;
    font-weight: 500;
    font-size: 1rem;
    cursor: pointer;
    background: greenyellow;
    border-radius: 20px;
    width: 120px;
    height: 30px;
    margin-bottom:20px;
    box-shadow: inset -4px 4px 4px rgba(0, 0, 0, 0.25);
    filter: drop-shadow(-4px 4px 2px #000000);
    transition: transform 400ms ease-in-out;
    :hover{
      background: white;
    }
}
.login-con{
    margin-bottom:20px;
    position: relative;
}
.login-con::before{
content: " ";
bottom: 7px;
left: -90px;
position: absolute;
background: greenyellow;
width: 80px;
height: 2px;
//**Responsive */
@media screen and (max-width: 460px){
  width: 70px;
  left: -80px;
}
}
.login-con::after{
content: " ";
bottom: 7px;
right: -90px;
position: absolute;
background: #D8F90F;
width: 80px;
height: 2px;
@media screen and (max-width: 460px){
  width: 70px;
  right: -80px;
}
}
.Login-google{
    color: greenyellow;
    cursor: pointer;
    width: 30px;
    height: 30px;
}
`