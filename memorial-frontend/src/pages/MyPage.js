import {Div, P} from '../components/box'
function MyPage() {
    return (
        <Div
            backgroundColor="none"
            border="none"
            height="calc(100vh - 40px)"
            flexDirection="column">
            <Div
                width="100%"
                backgroundColor="none"
                border="none"
                height="100%"
                flexDirection="column"
                justifyContent="start"
                alignItems="top"
                padding="20px">

                <P fontSize="30px">마이페이지</P>
                <P fontSize="15px" margin="20px 0px">버리고자 하는 버릇들이 장례식을 기다리고 있어요.</P>
                <Div
                    width="100%"
                    backgroundColor="none"
                    border="none"
                    height="50%"
                    justifyContent="start"
                    alignItems="top"
                    padding="0px">
                    <Div width="25%" padding="5%"></Div>
                    <Div width="25%" padding="5%"></Div>
                    <Div width="25%" padding="5%"></Div>
                    <Div width="25%" padding="5%"></Div>

                </Div>
            </Div>
        </Div>
    );
}

export default MyPage;