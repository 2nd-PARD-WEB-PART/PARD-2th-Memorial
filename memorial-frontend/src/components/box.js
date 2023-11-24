import styled from 'styled-components';

export const Div = styled.div `
    display: ${props => props.display || "flex"};
    justify-content: ${props => props.justifyContent || "center"};
    align-items: ${props => props.alignItems || "center"};
    /* width : ${props => props.width || "100%"}; */
    height : ${props => props.height || "100px"};
    border : ${props => props.border || "1px solid black"};
    box-sizing : ${props => props.border || "border-box"};
    background-color: ${props => props.backgroundColor || " black"};
    color: ${props => props.backgroundColor || " white"};


`;

export const Menu = styled.label `
    margin : ${props => props.margin || "20px"};

    &:hover{
        color : yellow;
    }
`;