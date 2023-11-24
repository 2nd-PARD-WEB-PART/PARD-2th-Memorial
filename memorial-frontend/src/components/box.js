import styled from 'styled-components';

export const Div = styled.div `
    display: ${props => props.display || "flex"};
    justify-content: ${props => props.justifyContent || "center"};
    flex-direction: ${props => props.flexDirection || "row"};
    align-items: ${props => props.alignItems || "center"};
    width : ${props => props.width || "100%"};
    height : ${props => props.height || "100px"};
    border : ${props => props.border || "1px solid black"};
    box-sizing : ${props => props.boxSizing || "border-box"};
    background-color: ${props => props.backgroundColor || " black"};
    color: ${props => props.backgroundColor || " white"};
    padding : ${props => props.padding || "10px"};
    margin : ${props => props.margin || "0px"};
    position: ${props => props.position || ''};
    background-image: ${props => props.backgroundImage || ''};

`;

export const Menu = styled.label `
    margin : ${props => props.margin || "40px"};

    &:hover{
        color : black;
        font-weight: bold;
        border : 1px solid white;
        background-color: white;
        border-radius: 5px;
        padding : 5px;
    }
`;

export const P = styled.p `
    font-size: ${props => props.fontSize || "70px"};
    font-weight: ${props => props.fontWeight || "bold"};
    /* display: ${props => props.display || "block"}; */
    white-space: pre-wrap;
    box-sizing : ${props => props.boxSizing || "border-box"};
    margin : ${props => props.margin || "0px"};

`;

export const Button = styled.button `
    border : none;
    background : none;
    background-color: black;
    color : white;
    height : ${props => props.height || "50px"};
    width : 200px;
    border-radius: 20px;
    font-size : ${props => props.fontSize || "20px"};;
`;

export const Empty = styled.div `
    text-align: center;
    height : ${props => props.height || "100px"};
`;

export const Img = styled.img `
    width : 40%;
    margin-top : 50px;
    margin-bottom: 50px;
`;