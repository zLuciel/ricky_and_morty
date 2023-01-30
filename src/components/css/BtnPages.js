import styled from "styled-components";

export const SkipBack = styled.div`

display: flex;
margin: 50px 0;
column-gap: 20px;
.Link-Back,.Link-Skip{
   color: white;
   .btn-back,.btn-skip{
      width: 40px;
      height: 40px;
      :hover{
         color: greenyellow;
      }
   }
}
`