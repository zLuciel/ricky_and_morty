import styled from "styled-components";

export const IconHamburger = styled.span`
display: none;
border: none;
position: relative;
 color: greenyellow;
 font-size: 1.5rem;
 //904
 .icon-hambur{
    cursor: pointer;
    display: ${props => props.view ? "none" : "flex"};
 }
 @media screen and (max-width: 902px){
  display: flex;
 }
`
export const NavHamburger = styled.div`
padding: 20px 0;
position: absolute;
width: 200px;
height: max-content;
background: rgba(0, 0, 0, 0.47);
    backdrop-filter: blur(8px);
    border-radius: 15px;
top: -10px;
right: -10px;
display: ${props => props.view ? "flex" : "none"};
row-gap: 10px;
flex-direction: column;
justify-content: center;
align-items: center;
animation: ${props => props.view ? "rotate 0.8s ease" : "none"};
@keyframes rotate {
0% {
    opacity: 0;
    transform: translateX(155%);
  }
  70%{
    opacity: 0.3;
  }
  100% {
    transform: translateX(0%);
    opacity: 1;
  }
}
.icon-close{
    cursor: pointer;
}
`