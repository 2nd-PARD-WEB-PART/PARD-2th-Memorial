import { useState } from 'react';
import styled from 'styled-components';

// div styled-component
const Div = styled.div`
    /* 가로, 길이 */
    width: ${(props) => props.width || '100px'};
    height: ${(props) => props.height || '100px'};

    /* 배치 */
    display: ${(props) => props.display || ''};
    margin: ${(props) => props.margin || ''};
    justify-content: ${(props) => props.justifyContent || ''};
    align-items: ${(props) => props.alignItems || ''};
    text-align: ${(props) => props.textAlign || ''};
    line-height: ${(props) => props.lineHeight || ''};

    /* 배경색 */
    background-color: ${(props) => props.backgroundColor || ''};
    border-radius: ${(props) => props.borderRadius || ''};
    color: ${(props) => props.color || ''};
    cursor: ${(props) => props.cursor || ''};
`;

//input styled-component
const Input = styled.input`
    /* 가로, 길이 */
    width: ${(props) => props.width || '100px'};
    height: ${(props) => props.height || '100px'};

    /* 배치 */
    display: ${(props) => props.display || ''};
    margin: ${(props) => props.margin || ''};
    justify-content: ${(props) => props.justifyContent || ''};
    align-items: ${(props) => props.alignItems || ''};
    text-align: ${(props) => props.textAlign || ''};
    line-height: ${(props) => props.lineHeight || ''};

    /* 배경색 */
    background-color: ${(props) => props.backgroundColor || ''};
    border-radius: ${(props) => props.borderRadius || ''};
    color: ${(props) => props.color || ''};
    cursor: ${(props) => props.cursor || ''};
`;

//label styled-component
const Label = styled.label`
    /* 가로, 길이 */
    width: ${(props) => props.width || '100px'};
    height: ${(props) => props.height || '100px'};

    /* 배치 */
    display: ${(props) => props.display || ''};
    margin: ${(props) => props.margin || ''};
    justify-content: ${(props) => props.justifyContent || ''};
    align-items: ${(props) => props.alignItems || ''};
    text-align: ${(props) => props.textAlign || ''};
    line-height: ${(props) => props.lineHeight || ''};
    overflow: ${(props) => props.overflow || ''};

    /* 배경색 */
    background-color: ${(props) => props.backgroundColor || ''};
    border-radius: ${(props) => props.borderRadius || ''};
    color: ${(props) => props.color || ''};
    cursor: ${(props) => props.cursor || ''};
`;

//Img styled-component
const Img = styled.img`
    /* 가로, 길이 */
    width: ${(props) => props.width || ''};
    height: ${(props) => props.height || ''};

    /* 배치 */
    display: ${(props) => props.display || ''};
    margin: ${(props) => props.margin || ''};
    justify-content: ${(props) => props.justifyContent || ''};
    align-items: ${(props) => props.alignItems || ''};
    text-align: ${(props) => props.textAlign || ''};
    line-height: ${(props) => props.lineHeight || ''};

    /*배경*/
    border-radius: ${(props) => props.borderRadius || ''};
    object-fit: ${(props) => props.objectFit || ''};
`;

//label styled-component
const P = styled.p`
    /* 가로, 길이 */
    width: ${(props) => props.width || ''};
    height: ${(props) => props.height || ''};

    /* 배치 */
    display: ${(props) => props.display || ''};
    margin: ${(props) => props.margin || ''};
    justify-content: ${(props) => props.justifyContent || ''};
    align-items: ${(props) => props.alignItems || ''};
    text-align: ${(props) => props.textAlign || ''};
    line-height: ${(props) => props.lineHeight || ''};

    /* 배경색 */
    background-color: ${(props) => props.backgroundColor || ''};
    border-radius: ${(props) => props.borderRadius || ''};
    color: ${(props) => props.color || ''};
    cursor: ${(props) => props.cursor || ''};
`;

function AddPage() {
    const [imageSrc, setImageSrc] = useState(null);

    const onUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = () => {
            setImageSrc(reader.result || null); // 파일의 컨텐츠
        };
    };
    return (
        <Div backgroundColor="blue" width="1000px" height="100%">
            <form>
                {/*Column 1*/}
                <Div>
                    {/*InnerRow1*/}
                    <Div>
                        <Input
                            display="none"
                            id="file"
                            accept="image/*"
                            multiple
                            type="file"
                            onChange={(e) => onUpload(e)}
                        />
                        <Label
                            display="block"
                            width="100%"
                            height="100%"
                            backgroundColor="red"
                            borderRadius="tpx"
                            textAlign="center"
                            lineHeight="100px"
                            color="#000"
                            cursor="pointer"
                            htmlFor="file"
                        >
                            {!imageSrc && <P margin="0">이미지를 등록해주세요</P>}
                            {imageSrc && (
                                <Img width="100%" height="100%" objectFit="cover" src={imageSrc} alt="고인의 사진" />
                            )}
                        </Label>
                    </Div>
                </Div>
                {/*Column 2*/}
                <Div>
                    {/*InnerRow1*/}
                    <Div></Div>
                    {/*InnerRow 2*/}
                    <Div></Div>
                    {/*InnerRow 3*/}
                    <Div></Div>
                    {/*InnerRow 4*/}
                    <Div></Div>
                </Div>
            </form>
        </Div>
    );
}

export default AddPage;
