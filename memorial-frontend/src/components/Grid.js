import React from "react";
import DataBox from '../components/DataBox'

function Grid() {
    const items = [
        1,
        2,
        3,
        4
    ];
    return (
        <div
            style={{
                // margin: "50px",
                // padding: "50px",
                width: "100%",
                display: "grid",
                gridTemplateRows: "1fr ",
                gridTemplateColumns: "1fr 1fr 1fr 1fr",
                backgroundColor: "",
                boxShadow : "border-box"
            }}>
            {
                items.map((item, key) => (
                    // <div
                    //     key={key}
                    //     style={{
                    //         margin: "5px",
                    //         backgroundColor: "white",
                    //         height: "90px"
                    //     }}>
                    //     {item}
                    // </div>
                   <DataBox></DataBox>
                ))
            }
        </div>
    );
}

export default Grid;