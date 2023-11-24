import { useState, useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/userContext';
import styled from 'styled-components';
import axios from 'axios';

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
    padding-left: ${(props) => props.paddingLeft || ''};
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
    background: ${(props) => props.background || ''};
    content: ${(props) => props.content || ''};
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
    const initialImageUrl = '/Group_2239.png';
    const navigate = useNavigate();
    const [imageSrc, setImageSrc] = useState(null);
    const [imageUrl, setImageUrl] = useState(initialImageUrl);
    const [previewSrc, setPreviewSrc] = useState(null);
    const [logInData, setLogInData] = useContext(UserContext);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [startDate, setStartDate] = useState('');

    const onUpload = (e) => {
        const file = e.target.files[0];
        setImageSrc(file); // File 객체를 직접 저장
        setPreviewSrc(URL.createObjectURL(file)); // 미리보기를 위한 URL을 저장
    };

    // 파일 업로드를 처리하는 별도의 함수
    const uploadFile = async (postingId) => {
        const fileData = new FormData();
        fileData.append('multipartFile', imageSrc);

        try {
            const fileResponse = await axios.post(
                `http://172.17.200.74:8080/api/v1/image?postingId=${postingId}`,
                fileData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );
            console.log(fileResponse);
            const imageUrl = fileResponse.data.url;
            console.log(imageUrl);
        } catch (error) {
            console.error(error);
        }
    };

    const onSubmit = async (event) => {
        event.preventDefault();

        // 데이터 전송
        const data = {
            title: title,
            content: content,
            authorId: logInData.uid ? logInData.uid.toString() : '',
            startDate: new Date(startDate).toISOString(),
        };

        try {
            const response = await axios.post('http://172.17.200.74:8080/api/v1/posting', data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            console.log(response);

            // 데이터 전송이 성공하면, 파일 업로드를 시작
            console.log(response.data.id);
            uploadFile(response.data.data.id);
            navigate('/HomePage');
        } catch (error) {
            console.error(error);
        }
    };
    const dateInputRef = useRef();
    return (
        <Div width="100%" height="1000px" margin="0 auto">
            <Form width="100%" display="flex" onSubmit={onSubmit}>
                {/*Column 1*/}
                <Div width="35%" height="1000px">
                    {/*InnerRow1*/}
                    <Div width="100%" height="1000px" alignItems="center" display="flex" paddingLeft="50px">
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
                            {!previewSrc && (
                                // <P textAlign="center" margin="0">
                                //     이미지를 등록해주세요
                                // </P>
                                <Img width="40%" height="40%" objectFit="contain" src={imageUrl} alt="사진" />
                            )}
                            {previewSrc && (
                                <Img width="100%" height="100%" objectFit="cover" src={previewSrc} alt="고인의 사진" />
                            )}
                        </Label>
                    </Div>
                </Div>
                {/*Column 2*/}
                <Div width="65%" height="1000px" display="flex" alignItems="center" justifyContent="center">
                    {/*InnerMainRow*/}
                    <Div width="90%" height="500px" display="block" textAlign="center">
                        {/*첫 헤더*/}
                        <Div
                            width="100%"
                            height="30px"
                            textAlign="left"
                            paddingLeft="45px"
                            color="#161616"
                            fontSize="25px"
                            fontWeight="600"
                            marginBottom="15px"
                        >
                            장례식 제목 작성하기 (15자 이하)
                        </Div>
                        {/*InnerRow1*/}
                        <Div width="100%" height="60px" marginBottom="10px">
                            <Input
                                borderRadius="38px"
                                border="none"
                                backgroundColor="#F0F0F0"
                                width="90%"
                                height="100%"
                                type="text"
                                maxLength="15"
                                placeholder="*버리고 싶은 나의 모습과 나의 이름을 작성해주세요. (예. 손톱 무는 홍길동)"
                                fontSize="18px"
                                fontWeight="400"
                                color="#838383"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </Div>
                        {/*두번째 헤더*/}
                        <Div
                            width="100%"
                            height="30px"
                            textAlign="left"
                            paddingLeft="45px"
                            color="#161616"
                            fontSize="25px"
                            fontWeight="600"
                            marginBottom="15px"
                        >
                            장례식 시작일
                        </Div>
                        {/*InnerRow 2*/}
                        <Div width="100%" height="80px" marginBottom="10px">
                            <Input
                                ref={dateInputRef}
                                borderRadius="38px"
                                border="none"
                                backgroundColor="#F0F0F0"
                                width="90%"
                                height="100%"
                                type="text"
                                placeholder="*장례식은 3일장으로 치뤄지며 그 이후에는 조문객들에게 댓글을 받을 수 없습니다."
                                fontSize="18px"
                                fontWeight="400"
                                color="#838383"
                                onFocus={() => (dateInputRef.current.type = 'date')}
                                onBlur={() => (dateInputRef.current.type = 'text')}
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                            />
                        </Div>
                        {/*세번째 헤더*/}
                        <Div
                            width="100%"
                            height="30px"
                            textAlign="left"
                            paddingLeft="45px"
                            color="#161616"
                            fontSize="25px"
                            fontWeight="600"
                            marginBottom="15px"
                        >
                            유언장 작성하기 (200자 이하)
                        </Div>
                        {/*InnerRow 3*/}
                        <Div width="100%" height="200px" marginBottom="10px">
                            <Textarea
                                borderRadius="38px"
                                backgroundColor="#F0F0F0"
                                width="90%"
                                height="100%"
                                maxLength="200"
                                placeholder="*내가 버리고 싶은 버릇에 대한 스토리와 찾아와준 조문객들에게 전하고 싶은 말을 작성해주세요."
                                fontSize="18px"
                                fontWeight="400"
                                color="#838383"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                            />
                        </Div>
                        {/*InnerRow 4*/}
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
                                fontSize="20px"
                                fontWeight="600"
                                margin="20px 0"
                                cursor="pointer"
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
