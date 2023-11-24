import react from "react";
import styled from "styled-components";

// div styled-component
const Div = styled.div`
  /* 가로, 길이 */
  width: ${(props) => props.width || "50vw"};
  height: ${(props) => props.height || "50vh"};

  /* 배치 */
  display: ${(props) => props.display || "flex"};
  margin: ${(props) => props.margin || "25vh auto"};
  justify-content: ${(props) => props.justifyContent || "center"};
  align-items: ${(props) => props.alignItems || "center"};

  /* 배경색 */
  background-color: ${(props) => props.backgroundColor || "aqua"};
  border-radius: ${(props) => props.borderRadius || "30px"};
`;

function AddPage() {
  return (
    <div>
      <p>AddPage입니다.</p>
    </div>
  );
}

export default AddPage;
