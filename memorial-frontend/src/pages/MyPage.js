import { Div, P } from '../components/box';
import Grid from '../components/Grid';
function MyPage() {
    return (
        <Div backgroundColor="none" border="none" height="calc(200vh - 40px)" flexDirection="column">
            <Div
                width="100%"
                backgroundColor="none"
                border="none"
                height="100%"
                flexDirection="column"
                justifyContent="start"
                alignItems="top"
                padding="50px"
            >
                <P fontSize="30px">마이페이지</P>
                <P fontSize="15px" margin="20px 0px">
                    버리고자 하는 버릇들이 장례식을 기다리고 있어요.
                </P>
                <Grid></Grid>
            </Div>
        </Div>
    );
}

export default MyPage;
