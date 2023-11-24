import styled from "styled-components";
import axios from "axios";
import {UserContext} from "./userContext";
import {useContext, useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";

// 기본 배경 (for temp)
const Div = styled.div `
  /* 가로, 길이 */
  width: 50vw;
  height: 50vh;

  /* 배치 */
  margin: 25vh auto;
  justify-content: center;
  align-items: center;
  display: flex;

  /* 배경색 */
  background-color: aqua;
  border-radius: 30px;
`;

const Div2 = styled.div `
  display: ${props => props.display || "flex"};
  flex-direction: ${props => props.flexDirection || "column"};
  justify-content: ${props => props.justifyContent || "center"};
  align-items: ${props => props.alignItems || "center"};
`

const Form = styled.form `

`

const Label = styled.label `

`

const Input = styled.input `

`

const Button = styled.button `

`

function Login() {
    const [IDPW, setIDPW] = useState({})
    const [userName, setUserName, updateName] = useContext(UserContext);
    const navigate = useNavigate();
    const inputHandler = (e) => {
        setIDPW({
            ...IDPW,
            [e.target.name]: e.target.value
        })
        console.log(IDPW);
    }
    const submitHandler = async (e) => {
        // e.preventDefault()
        await axios
            .post("http://172.17.200.74:8080/api/v1/auth/signin", IDPW)
            .then((response) => {
                if (response.data.result) {
                    console.log(response.data.data.userResponseDto.userName);
                    updateName(response.data.data.userResponseDto.userName);
                } else {
                    alert("Login Failed");
                    e.preventDefault()
                }
            })
    }
    return (
        <> < Div > <h1>LDJ 2조 Main page</h1>
    </Div>
    <Div2>
        <Form>
            <Div2 flexDirection="row">
                <Label>ID:
                </Label>
                <Input type="text" name="userEmail" onChange={inputHandler}/>
            </Div2>
            <Div2 flexDirection="row">
                <Label>PW:
                </Label>
                <Input type="text" name="userPassword" onChange={inputHandler}/>
            </Div2>
            <Div2>
                <Link to="/userName">
                <Button type="submit" onClick={submitHandler}>
                    로그인
                </Button>
                </Link>
            </Div2>
        </Form>
    </Div2>
</>

    );
}

export default Login;
