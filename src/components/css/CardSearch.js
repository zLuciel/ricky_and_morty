import styled from "styled-components";

export const CardSearchContainer = styled.span`
display: flex;
align-items: center;
.btn-favorite{
    cursor: pointer;
    border-radius: 25px;
    background: greenyellow;
    border: none;
    width: 80px;
    height: 23px;
    box-shadow: inset -4px 4px 4px rgba(0, 0, 0, 0.25);
    filter: drop-shadow(-4px 4px 2px #000000);
    :hover{
        background: yellow;
    }
}
.link-search{
    width: 100%;
    color: white;
    text-decoration: none;
   display: flex;
align-items: center;
column-gap: 10px;
margin-bottom: 8px;
:hover{
    cursor: pointer;
    color: greenyellow;
} 
}
.link-search > div{
    overflow: hidden;
    border-radius: 5px;
    width: 50px;
    height: 50px;
    img{
        width: 100%;
        height: 100%;
    }
}
`