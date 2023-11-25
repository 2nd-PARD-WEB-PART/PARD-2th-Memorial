import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { UserContext } from "../contexts/userContext";
import axios from "axios";
import flower from "../assets/flower.png"
import OverImage from '../assets/over.png';
import { Link, useLocation } from "react-router-dom";

const Div = styled.div `
display: ${props => props.display || "flex"};
justify-content: ${props => props.justifyContent || "center"};
flex-direction: ${props => props.flexDirection || "row"};
align-items: ${props => props.alignItems || "center"};
width : ${props => props.width || "100%"};
height : ${props => props.height || "100%"};
border : ${props => props.border || "0px solid black"};
border-radius : ${props => props.borderRadius || "0px"};
box-sizing : ${props => props.boxSizing || "border-box"};
background-color: ${props => props.backgroundColor || "white"};
color: ${props => props.color || "black"};
font-size: ${props => props.fontSize || "10px"};
padding : ${props => props.padding || "0px"};
margin : ${props => props.margin || "0px"};
overflow: ${props => props.overflow || ""};
border-bottom : ${props => props.borderBottom || "0px solid black"};
border-top : ${props => props.borderTop || "0px solid black"};

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
    border: ${props => props.border || "none"};
    background-color: ${props => props.backgroundColor || "black"};
    color: ${props => props.color || "white"};
    width: 100%;
    height : ${props => props.height || "80%"};
    border-radius: 28px;


`;

function ViewPage() {

    const funeralName = "꼴초 김현중님 장례식"
    const keyValue = localStorage.getItem("key");
    console.log(keyValue);
    const [curComment, setCurComment] = useState(null);
    const [messageClicked, setMessageClicked] = useState(false);
    const [commentChanged, setCommentChanged] = useState(false);
    const [comments, setComments] = useState([]);
    const [logInData, setLogInData] = useContext(UserContext);
    const [userData, setUserData] = useState("");
    console.log(userData);
    console.log(comments);
    console.log(commentChanged);

    const handleCommentChange = (e) => {
        console.log(e.target.value);
        setCurComment(e.target.value);

    }
  const getData = async () => {
    try {
        const data = await axios.get(`http://172.17.200.74:8080/api/v1/posting/${keyValue}`);
        setUserData(data.data.data);
        setComments(data.data.data.comment);
    } catch (error) {
        console.log(error);
    }
    // const comments = await axios.get("http://172.17.200.74:8080/api/v1/posting/2");
  }
  useEffect(() => {
    getData();
  }, [commentChanged]);



  const handleCommentUpload = async (e) => {
    const newComment = {
        "content": curComment,
    }
    const response = await axios.post(`http://172.17.200.74:8080/api/v1/posting/${keyValue}/comment`, newComment);
    console.log(response);
    setCommentChanged(!commentChanged);
    setCurComment('');
}

const setMessageClickedFalse = async (e) => {
    setMessageClicked(false);
}

const setMessageClickedTrue = async (e) => {
    setMessageClicked(true);
}

    return (
        <Div>
            <Div flexDirection="column" width="80%" height="90vh">
                <Div height="20%" fontSize="80px" >{userData.title}</Div>
                <Div height="70%">
                    <Div width="30%" flexDirection="column">
                        {messageClicked == false ? <div
                        style={{
                            position: "relative",
                            width: "380px",
                            height: "470px"
                        }}>
                        {/* 첫 번째 이미지 */}
                        <img
                            src={userData.imageUrl}
                            alt="사진"
                            width="380px"
                            height="470px"
                            style={{
                                borderRadius: "20px"
                            }}/> {/* 두 번째 이미지 */}
                        <img
                            src={OverImage}
                            alt="오버사진"
                            width="380px"
                            height="470px"
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                zIndex: 1,
                                opacity: 1
                            }}/>
                        </div>: <div
                        style={{
                            position: "relative",
                            width: "380px",
                            height: "470px"
                        }}>
                        {/* 첫 번째 이미지 */}
                        <img
                            src={userData.imageUrl}
                            alt="사진"
                            width="380px"
                            height="470px"
                            style={{
                                borderRadius: "20px"
                            }}/> {/* 두 번째 이미지 */}
                        <img
                            src={OverImage}
                            alt="오버사진"
                            width="380px"
                            height="470px"
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                zIndex: 1,
                                opacity: 1
                            }}/>
                        <Div width="380px"
                            height="470px"
                            backgroundColor="black"
                            color="white"
                            flexDirection="column"
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                zIndex: 2,
                                opacity: 0.7
                            }}>
                                
                            <Div backgroundColor="black" color="white" fontSize="32px" height="20%" margin="20px 0 0 0">유언장</Div>
                            <Div backgroundColor="black" color="white" fontSize="24px" height="80%" width="80%">{userData.content}</Div>
                        </Div>
                        </div>}
                    
                        <Div height="30%">
                            <Link to="/editPage"><Button name="comment2" onClick={setMessageClickedFalse} >수정</Button></Link>
                            <Button name="comment2" onClick={setMessageClickedFalse} >영정 사진</Button>
                            <Button name="comment2" onClick={setMessageClickedTrue} backgroundColor="white" border="solid 1px black" color="black">유언장</Button>
                        </Div>
                    </Div>
                    <Div width="70%" flexDirection="column" alignItems="end">
                        <Div width="80%" backgroundColor="#F0F0F0" borderRadius="20px" flexDirection="column" >
                            <Div height="10%" width="95%" backgroundColor="#F0F0F0" color="black" justifyContent="start" borderBottom="1px solid black" >
                                <Div width="20%" fontSize="15px" backgroundColor="#F0F0F0" >조문 종료 기간</Div>
                                <Div width="20%" fontSize="15px" backgroundColor="#F0F0F0">{userData.startDate}</Div>
                            </Div>
                            <Div flexDirection="column" height="80%" width="95%" backgroundColor="#F0F0F0" overflow="scroll" justifyContent="start" borderBottom="1px solid black" >
                                
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
                            <Div height="10%" width="95%" backgroundColor="#F0F0F0"  >
                                <Div width="10%" backgroundColor="#F0F0F0" height="100%">
                                    <Img src={flower} width="30px"/>
                                </Div>
                                <Div width="75%" justifyContent="start" alignItems="center" height="100%" backgroundColor="#F0F0F0">
                                        <Input type="text" height="90%" placeholder="댓글 달기.." name="inputComment" value={curComment} backgroundColor="#F0F0F0" onChange={handleCommentChange} />
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