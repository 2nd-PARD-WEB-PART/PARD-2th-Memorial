import {Link} from 'react-router-dom';
import {Div, P, Button, Empty} from '../components/box';
function HomePage() {

    return (
        <Div
            backgroundColor="none"
            border="none"
            height="calc(100vh - 40px)"
            flexDirection="column">
            <Div backgroundColor="none" border="none" height="50%" flexDirection="column">
                <P height="20px">버르 장례식</P>
                <P fontSize="20px" height="30px">당신의 버릇 장례식을 도와드립니다.</P>
                <Empty></Empty>
                <Link to="./AddPage">
                    <Button>장례식 등록하기</Button>
                </Link>
            </Div>
        </Div>
    );
}

export default HomePage;