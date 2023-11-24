import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { UserContext } from "../contexts/userContext";
import axios from "axios";
import flower from "../assets/flower.png"

const Div = styled.div `
display: ${props => props.display || "flex"};
justify-content: ${props => props.justifyContent || "center"};
flex-direction: ${props => props.flexDirection || "row"};
align-items: ${props => props.alignItems || "center"};
width : ${props => props.width || "100%"};
height : ${props => props.height || "100%"};
border : ${props => props.border || "1px solid black"};
border-radius : ${props => props.borderRadius || "0px"};
box-sizing : ${props => props.boxSizing || "border-box"};
background-color: ${props => props.backgroundColor || "white"};
color: ${props => props.color || "black"};
font-size: ${props => props.fontSize || "10px"};
padding : ${props => props.padding || "0px"};
margin : ${props => props.margin || "0px"};
overflow: ${props => props.overflow || ""};

`;

const Img = styled.img`
    width: ${props => props.width || "12vh"};
`;

const Input = styled.input`
    border: none;
    width: 100%;
    height : ${props => props.height || "100%"};
    background-color: ${props => props.backgroundColor || "white"};
    &::placeholder {
    color: black; 
    
  }
`;

const Button = styled.button`
    border: none;
    background-color: black;
    color: white;
    width: 100%;
    height: 80%;
    border-radius: 28px;


`;

function ViewPage() {

    const funeralName = "꼴초 김현중님 장례식"

    const [curComment, setCurComment] = useState();
    const [commentChanged, setCommentChanged] = useState(false);
    const [comments, setComments] = useState([]);
    const [logInData, setLogInData] = useContext(UserContext);
    const [userData, setUserData] = useState();
    console.log(userData);
    console.log(comments);
    console.log(commentChanged);

    const handleCommentChange = (e) => {
        console.log(e.target.value);
        setCurComment(e.target.value);

    }
  const getData = async () => {
    const data = await axios.get("http://172.17.200.74:8080/api/v1/posting/2");
    setUserData(data.data);
    // const comments = await axios.get("http://172.17.200.74:8080/api/v1/posting/2");
    setComments(data.data.data.comment);
  }
  useEffect(() => {
    getData();
  }, [commentChanged]);

  const handleCommentUpload = async (e) => {
    const newComment = {
        "content": curComment,
    }
    const response = await axios.post("http://172.17.200.74:8080/api/v1/posting/2/comment", newComment);
    console.log(response);
    setCommentChanged(!commentChanged);
    setCurComment('');
}

    return (
        <Div>
            <Div flexDirection="column" width="80%" height="90vh">
                <Div height="20%" fontSize="80px" >{userData.data.title}</Div>
                <Div height="70%">
                    <Div width="30%">
                        <Img></Img>
                        <Div>
                            <Button   Button name="comment2" onClick={handleCommentUpload} >댓글 작성</Button>
                        </Div>
                    </Div>
                    <Div width="70%" flexDirection="column" alignItems="end">
                        <Div width="80%" backgroundColor="#F0F0F0" borderRadius="20px" flexDirection="column" >
                            <Div height="10%" width="95%" backgroundColor="#F0F0F0" color="black" justifyContent="start">
                                <Div width="20%" fontSize="12px">조문 종료 기간</Div>
                                <Div width="20%" fontSize="12px">20:20:20</Div>
                            </Div>
                            <Div flexDirection="column" height="80%" width="95%" backgroundColor="#F0F0F0" overflow="scroll" justifyContent="start"  >
                                
                                {comments.map((comment, index) => (
                                    <Div key={index} margin="1% 0 0 0" backgroundColor="#F0F0F0" alignItems="start" height="10%">
                                       
                                        <Div height="100%" justifyContent="start" alignItems="center" fontSize="12px" fontWeight="bold" backgroundColor="#F0F0F0" >
                                            <Div width="10%" backgroundColor="#F0F0F0">
                                                <Img src={flower} width="30px"/>
                                            </Div>
                                            {comment.content}
                                        </Div>
                                    </Div>
                                ))}
                            </Div>
                            <Div height="10%" width="95%" backgroundColor="#F0F0F0" >
                                <Div width="10%" backgroundColor="#F0F0F0" height="100%">
                                    <Img src={flower} width="30px"/>
                                </Div>
                                <Div width="75%" justifyContent="start" alignItems="center" height="100%" backgroundColor="#F0F0F0">
                                        <Input type="text" height="100%" placeholder="댓글 달기.." name="inputComment" value={curComment} backgroundColor="#F0F0F0" onChange={handleCommentChange} />
                                </Div>
                                <Div width="15%" justifyContent="end" alignItems="center" backgroundColor="#F0F0F0" >
                                    <Button name="comment2" onClick={handleCommentUpload} >댓글 작성</Button>
                                </Div>
                            </Div>
                        </Div>
                    </Div>
                </Div>
            </Div>
        </Div>
    );
}

export default ViewPage;