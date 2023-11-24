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
    padding-top: ${(props) => props.paddingTop || ''};
    flex-direction: ${(props) => props.flexDirection || ''};
    margin-bottom: ${(props) => props.marginBottom || ''};
    bottom: ${(props) => props.bottom || ''};

    /* 배경색 */
    background-color: ${(props) => props.backgroundColor || ''};
    border-radius: ${(props) => props.borderRadius || ''};
    border: ${(props) => props.border || ''};
    color: ${(props) => props.color || ''};
    cursor: ${(props) => props.cursor || ''};
    font-size: ${(props) => props.fontSize || ''};
    font-weight: ${(props) => props.fontWeight || ''};
    color: ${(props) => props.color || ''};
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
    margin-bottom: ${(props) => props.marginBottom || ''};
    padding-left: ${(props) => props.paddingLeft || '20px'};

    /* 배경색 */
    background-color: ${(props) => props.backgroundColor || ''};
    border-radius: ${(props) => props.borderRadius || ''};
    border: ${(props) => props.border || ''};
    color: ${(props) => props.color || ''};
    cursor: ${(props) => props.cursor || ''};
    font-size: ${(props) => props.fontSize || ''};
    font-weight: ${(props) => props.fontWeight || ''};
    color: ${(props) => props.color || ''};
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
    font-size: ${(props) => props.fontSize || ''};
    font-weight: ${(props) => props.fontWeight || ''};
    color: ${(props) => props.color || ''};
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

//p styled-component
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
    font-size: ${(props) => props.fontSize || ''};
    font-weight: ${(props) => props.fontWeight || ''};
    color: ${(props) => props.color || ''};
`;

//form styled-component
const Form = styled.form`
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
    border: ${(props) => props.border || ''};

    /* 배경색 */
    background-color: ${(props) => props.backgroundColor || ''};
    border-radius: ${(props) => props.borderRadius || ''};
    color: ${(props) => props.color || ''};
    cursor: ${(props) => props.cursor || ''};
`;

// textarea styled-component
const Textarea = styled.textarea`
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
    border: ${(props) => props.border || 'none'};
    resize: ${(props) => props.cursor || 'none'};
    overflow: ${(props) => props.cursor || 'auto'};
    padding-left: ${(props) => props.paddingLeft || '20px'};
    line-height: ${(props) => props.lineHeight || '50px'};

    /* 배경색 */
    background-color: ${(props) => props.backgroundColor || ''};
    border-radius: ${(props) => props.borderRadius || ''};
    color: ${(props) => props.color || ''};
    cursor: ${(props) => props.cursor || ''};
    font-size: ${(props) => props.fontSize || ''};
    font-weight: ${(props) => props.fontWeight || ''};
    color: ${(props) => props.color || ''};
`;

// button styled-component
const Button = styled.button`
    /* 가로, 길이 */
    width: ${(props) => props.width || '100px'};
    height: ${(props) => props.height || '100px'};

    /* 배치 */
    display: ${(props) => props.display || ''};
    margin: ${(props) => props.margin || ''};
    justify-content: ${(props) => props.justifyContent || ''};
    align-items: ${(props) => props.alignItems || ''};
    text-align: ${(props) => props.textAlign || ''};

    /* 배경색 */
    background-color: ${(props) => props.backgroundColor || ''};
    border-radius: ${(props) => props.borderRadius || ''};
    border: ${(props) => props.border || ''};
    color: ${(props) => props.color || ''};
    cursor: ${(props) => props.cursor || ''};
    font-size: ${(props) => props.fontSize || ''};
    font-weight: ${(props) => props.fontWeight || ''};
    color: ${(props) => props.color || ''};
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
        <Div width="100%" height="1000px" margin="0 auto">
            <Form width="100%" display="flex">
                {/*Column 1*/}
                <Div width="35%" height="1000px">
                    {/*InnerRow1*/}
                    <Div width="100%" height="1000px" alignItems="center" display="flex">
                        <Input
                            display="none"
                            id="file"
                            accept="image/*"
                            multiple
                            type="file"
                            onChange={(e) => onUpload(e)}
                        />
                        <Label
                            display="flex"
                            width="90%"
                            height="500px"
                            backgroundColor="#F0F0F0"
                            borderRadius="38px"
                            border="none"
                            lineHeight="100px"
                            fontSize="30px"
                            fontWeight="400"
                            color="#838383"
                            cursor="pointer"
                            htmlFor="file"
                            alignItems="center"
                            justifyContent="center"
                            margin="0 auto"
                            overflow="hidden"
                        >
                            {!imageSrc && (
                                <P textAlign="center" margin="0">
                                    이미지를 등록해주세요
                                </P>
                            )}
                            {imageSrc && (
                                <Img width="100%" height="100%" objectFit="cover" src={imageSrc} alt="고인의 사진" />
                            )}
                        </Label>
                    </Div>
                </Div>
                {/*Column 2*/}
                <Div width="65%" height="1000px" display="flex" alignItems="center" justifyContent="center">
                    {/*InnerMainRow*/}
                    <Div width="90%" height="500px" display="block" textAlign="center">
                        {' '}
                        {/*InnerRow1*/}
                        <Div width="100%" height="100px" marginBottom="10px">
                            <Input
                                borderRadius="38px"
                                border="none"
                                backgroundColor="#F0F0F0"
                                width="90%"
                                height="100%"
                                type="text"
                                maxLength="15"
                                placeholder="장례식 제목 작성하기 (15자)"
                                fontSize="30px"
                                fontWeight="400"
                                color="#838383"
                            />
                        </Div>
                        {/*InnerRow 2*/}
                        <Div width="100%" height="80px" marginBottom="10px">
                            <Input
                                borderRadius="38px"
                                border="none"
                                backgroundColor="#F0F0F0"
                                width="90%"
                                height="100%"
                                type="datetime-local"
                                placeholder="장례식 시작일"
                                fontSize="30px"
                                fontWeight="400"
                                color="#838383"
                            />
                        </Div>
                        {/*InnerRow 3*/}
                        <Div width="100%" height="80px" marginBottom="15px">
                            <Input
                                borderRadius="38px"
                                border="none"
                                backgroundColor="#F0F0F0"
                                width="90%"
                                height="80px"
                                type="datetime-local"
                                placeholder="장례식 마감일"
                                fontSize="30px"
                                fontWeight="400"
                                color="#838383"
                            />
                        </Div>
                        {/*InnerRow 4*/}
                        <Div width="100%" height="200px" marginBottom="10px">
                            <Textarea
                                borderRadius="38px"
                                backgroundColor="#F0F0F0"
                                width="90%"
                                height="100%"
                                maxLength="500"
                                placeholder="유언장 작성하기 (500자)"
                                fontSize="30px"
                                fontWeight="400"
                                color="#838383"
                            />
                        </Div>
                        {/*InnerRow 5*/}
                        <Div width="96%" height="200px" display="flex" justifyContent="flex-end">
                            <Button
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                type="submit"
                                width="20%"
                                height="50px"
                                backgroundColor="#161616"
                                borderRadius="38px"
                                border="none"
                                color="#F0F0F0"
                                fontSize="30px"
                                fontWeight="600"
                                margin="20px 0"
                            >
                                등록하기
                            </Button>
                        </Div>
                    </Div>
                </Div>
            </Form>
        </Div>
    );
}

export default AddPage;
