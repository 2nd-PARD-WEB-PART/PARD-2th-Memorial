import { Div, P } from '../components/box';
import axios from 'axios';
import OverImage from '../assets/over.png';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function DataBox({ item, key }) {
    const [imageData, setImageData] = useState({});

    useEffect(() => {
        axios
            .get(`http://172.17.200.74:8080/api/v1/image/${item.id}`)
            .then((response) => {
                // 이미지 데이터를 받아와서 state로 설정합니다.
                setImageData(response.data.data);
                console.log(item);
            })
            .catch((error) => console.log("error: " + error));
    }, [item.id]);
    const startDate = new Date(item.startDate);
    // 월과 일 추출
    const month = startDate.getMonth() + 1; // getMonth()는 0부터 시작하므로 +1 해줍니다.
    const day = startDate.getDate();

    const handleClick = () => {
        // key 값을 클릭할 때 localStorage에 저장합니다.
        console.log(key);
        localStorage.setItem('key', item.id);
    };

    return (
        <Div
            width="100%"
            padding="5% 15% 5% 15%"
            backgroundColor="none"
            height="400px"
            border="none"
            flexDirection="column"
            margin="0% 5% 20% 0%"
            position="relative"
        >
            <Link to="/viewPage" onClick={handleClick}>
                <div
                    style={{
                        position: "relative",
                        width: "200px",
                        height: "250px"
                    }}
                >
                    {/* 첫 번째 이미지 */}
                    <img
                        src={item.imageUrl}
                        alt="사진"
                        width="200px"
                        height="250px"
                        style={{
                            borderRadius: "20px"
                        }}
                    /> {/* 두 번째 이미지 */}
                    <img
                        src={OverImage}
                        alt="오버사진"
                        width="200px"
                        height="250px"
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            zIndex: 1,
                            opacity: 1
                        }}
                    />
                </div>
            </Link>
            <P fontSize="20px" margin="20px 0px">{item.title}</P>
            <P fontSize="20px">{item.startDate}</P>

        </Div>
    );
}

export default DataBox;
