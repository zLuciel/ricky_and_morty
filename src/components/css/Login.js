import styled from "styled-components";

export const LoginContainerFlex = styled.div`
width: 100vw;
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
h1{
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
}
.login-img-left{
    position: absolute;
    height: 120%;
    bottom: 0;
    left: -60px;
}
.login-usuario,.login-password{
    margin-bottom: 20px;
    display: flex;
    border-radius: 10px;
    border: 1px solid greenyellow;
    width: 40%;
    height: 50px;
    padding-left: 10px;
    input{
        color: white;
        width: 100%;
        border: none;
        outline: none;
        background: none;
    }
}
.btn-ingresar{
    font-weight: 500;
    font-size: 1rem;
    cursor: pointer;
    background: greenyellow;
    border-radius: 20px;
    width: 200px;
    height: 40px;
    margin-bottom:20px
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
background: #D8F90F;
width: 80px;
height: 2px;
}
.login-con::after{
content: " ";
bottom: 7px;
right: -90px;
position: absolute;
background: #D8F90F;
width: 80px;
height: 2px;
}
.Login-google{
    color: greenyellow;
    cursor: pointer;
    width: 30px;
    height: 30px;
}
`