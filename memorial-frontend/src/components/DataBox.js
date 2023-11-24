import {Div, P} from '../components/box';
import axios from 'axios';
import OverImage from '../assets/over.png';
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

function DataBox({item, key}) {
    const [imageData, setImageData] = useState({});

    useEffect(() => {
        axios
            .get(`http://172.17.200.74:8080/api/v1/image/${item.id}`)
            .then((response) => {
                // 이미지 데이터를 받아와서 state로 설정합니다.
                setImageData(response.data.data);
            })
            .catch((error) => console.log("error: " + error));
    }, [item.id]);

    return (
        <Div width="100%" padding="5% 15% 5% 15%" backgroundColor="none" height="400px" border="none" flexDirection="column" margin="0% 5% 20% 0%" position="relative"
            // 부모 요소를 relative로 설정합니다.
>
            <Link to='/ViewPage'>
                <div
                    style={{
                        position: "relative",
                        width: "200px",
                        height: "250px"
                    }}>
                    {/* 첫 번째 이미지 */}
                    <img
                        src={item.imageUrl}
                        alt="사진"
                        width="200px"
                        height="250px"
                        style={{
                            borderRadius: "20px"
                        }}/> {/* 두 번째 이미지 */}
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
                        }}/>
                </div>
            </Link>
            <P fontSize="20px" margin="20px 0px">{item.title}</P>
            <P fontSize="20px">{item.content}</P>

        </Div>
    );
}

export default DataBox;
