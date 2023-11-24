import {Div, P} from '../components/box'
function DataBox() {
    return (
        <Div
            width="100%"
            padding="5% 15% 5% 15%"
            backgroundColor="none"
            height="400px"
            border="none"
            flexDirection="column"
            margin="0% 5% 20% 0%">

            {/* 첫 번째 이미지 */}
            <img src="첫 번째 이미지 소스" alt="첫 번째 이미지" width="100%" height="100%" padding="0"/> {/* 두 번째 이미지 */}
            <img src="두 번째 이미지 소스" alt="두 번째 이미지" width="100%" height="100%" padding="0"/>

            <P fontSize="20px" margin="20px 0px">담배피는 현중</P>
            <P fontSize="20px">담배피는 현중</P>
        </Div>
    );
}

export default DataBox;