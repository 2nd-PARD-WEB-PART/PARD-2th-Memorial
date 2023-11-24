import React, { useEffect, useState } from "react";
import DataBox from '../components/DataBox';
import axios from 'axios';

function Grid() {
    const [items, setData] = useState([]);

    const item = {
        title: "",
        content: "",
        startDate: "",
        endDate: ""
    };
    const [userInfo, setUserInfo] = useState(item);

    const updateUserInfo = (newUserInfo) => {
        setUserInfo(newUserInfo);
    };

    useEffect(() => {
        axios
            .get("http://172.17.200.74:8080/api/v1/posting/all")
            .then((response) => {
                setData(response.data);
                setUserInfo({
                    title: response.data.title,
                    content: response.data.content,
                    startDate: response.data.startDate,
                    endDate: response.data.endDate
                });
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
            {
                items.map((items, key) => (
                    <DataBox item={items} key={key}></DataBox>
                ))
            }
        </div>
    );
}

export default Grid;
