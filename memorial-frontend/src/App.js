import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from "styled-components";
import "./App.css";

// case 주영
// import Login from "./test/joo/login"
// import UserName from "./test/joo/userName"
// import UserProvider from "./test/joo/userContext";

// case 현중
import HJLogin from "./test/hyeon/login";

// case 광일
// import Login from './test/kwang/login';
// import LoginOk from './test/kwang/LoginOk'; 

import LoginOk from './test/kwang/LoginOk'; // Dashboard 컴포넌트는 존재하지 않는 예시입니다. 실제 프로젝트에 맞게 수정하세요.


// 기본 배경 (for temp)
const Div = styled.div`
  /* 가로, 길이 */
  width: ${props => props.width || "50vw"};
  height: ${props => props.height || "50vh"};

  /* 배치 */
  display: ${props => props.display || "flex"};;
  margin: ${props => props.margin || "25vh auto"};
  justify-content: ${props => props.justifyContent || "center"};
  align-items: ${props => props.alignItems || "center"};
  

  /* 배경색 */
  background-color: ${props => props.backgroundColor || "aqua"};
  border-radius: ${props => props.borderRadius || "30px"};
`;

function App() {

  // case 현중
  return (
    <Div width="30vw">
      <Div>
        <h1>LDJ 2조 Main page</h1>
      </Div>
      <HJLogin />
    </Div>
  );

  // case 광일
  // return (
  //     <Router>
  //         <Routes>
  //             <Route index path="/" element={<Login />}/>
  //             <Route path="/loginok" element={<LoginOk />}/>
  //         </Routes>
  //     </Router>
  // );

  // // case 주영
  // return (
  //   <Router>

  //     <UserProvider>
  //       <Routes>
  //         <Route path="/" element={<Login />} />
  //         <Route path="/userName" element={<UserName />} />
  //       </Routes>
  //     </UserProvider>

  //   </Router>
  // );

}

export default App;