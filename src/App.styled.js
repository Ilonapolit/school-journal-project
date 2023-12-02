import styled from "styled-components";

export const SApp =styled.div`
`

export const STable = styled.table`
border-collapse:collapse;

td,th {
   border:1px solid black;
   padding:12px;

}

tr:nth-child(even){background-color: #f2f2f2;}

th {
    padding-top:12px;
    padding-bottom:12px;
    text-align:left;
    background-color:greenyellow;
}
`;