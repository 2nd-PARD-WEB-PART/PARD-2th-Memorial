import {useEffect, useState} from 'react';
import DataBox from '../components/DataBox';
import axios from 'axios';

function Grid() {
    const [datas, setDatas] = useState([]);

    const item = [1, 2, 3, 4];

    useEffect(() => {
        axios
            .get("http://172.17.200.74:8080/api/v1/posting/all")
            .then((response) => {
                // console.log("response: " + JSON.stringify(response.data.data));
                setDatas(response.data.data);
                // setUserInfo((prevUserInfo) => ({     name: response.data.data.name,     age:
                // response.data.data.age,     part: response.data.data.part,     imgURL:
                // response.data.data.imgURL })); console.log(datas.length);
                console.log(datas[2].imageUrl);
            })
            .catch((error) => console.log("error: " + error));

    }, []);
    return (
        <div
            style={{
                width: "100%",
                display: "grid",
                gridTemplateRows: "1fr",
                gridTemplateColumns: "1fr 1fr 1fr 1fr",
                backgroundColor: "",
                boxShadow: "border-box"
            }}>
            {datas.map((item, key) => (<DataBox item={item} key={key}></DataBox>))}
        </div>
    );
}

export default Grid;
