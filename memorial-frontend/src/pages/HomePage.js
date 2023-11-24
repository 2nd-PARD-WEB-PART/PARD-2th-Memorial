import {Link, useNavigate} from 'react-router-dom';
import {Div, P, Button, Empty} from '../components/box';
import {useEffect} from 'react';
import Main2 from '../assets/main2.png';
import Main_sub2 from '../assets/main_sub2.png';

function HomePage() {
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('emailVerified') !== 'true') {
            navigate("/");
        }
    }, [])

    const divStyle = {
        backgroundImage: `url(${Main2})`, // 이미지 경로를 설정
        backgroundSize: 'cover', // 이미지를 커버하도록 설정
        backgroundPosition: 'center', // 이미지를 가운데 정렬하도록 설정
    }

    return (
        <Div
            style={divStyle}
            backgroundColor="none"
            border="none"
            height="calc(100vh - 40px)"
            flexDirection="column">
            <Div backgroundColor="none" border="none" height="80%" flexDirection="column">
                <P height="20px">버르장례식</P>

                {/* <P fontSize="20px" height="30px">당신의 '버릇'이 잘 돌아가실 수 있도록 장례를 돕겠습니다.</P> */}
                <Empty>
                    <img src={Main_sub2} alt="" width="70%"/>
                </Empty>
                <Empty height = "150px"></Empty>
                <Link to="/AddPage">
                    <Button>장례식 등록하기</Button>
                </Link>
            </Div>
        </Div>
    );
};

export default HomePage;