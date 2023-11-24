import { Div, P } from '../components/box'
function DataBox() {
    return (
        <Div
            width="100%"
            padding="5% 15% 5% 15%"
            backgroundColor="none"
            height="400px"
            border="none"
            flexDirection="column"
            margin="0% 5% 20% 0%"
            key={key}
        >
            
            <img src="" alt="" width="100%" height="100%" padding="0"/>
            {/* <img src="" alt="" width="100%" height="100%" padding="0"/> */}
            <P fontSize="20px" margin="20px 0px">{item.title}</P>

            <P fontSize="20px">{item.startDate}</P>
        </Div>
    );
}

export default DataBox;