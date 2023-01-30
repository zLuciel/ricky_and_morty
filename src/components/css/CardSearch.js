import styled from "styled-components";

export const CardSearchContainer = styled.span`

.link-search{
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