import axios from 'axios';
import testToken from '../testToken';

// const BASE_URL = 'http://13.125.158.122';
const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL?.replace(/\/$/, '');

const getMyPost = async () => {
  try {
    // API 요청 URL 디버깅
    console.log('요청 URL:', `${BASE_URL}/api/v1/posts/my`);

    const response = await axios.get(`${BASE_URL}/api/v1/posts/my`, {
      headers: {
        Authorization: testToken,
        'Content-Type': 'application/json',
      },
    });

    console.log('된다앗!'); // 디버깅용 로그
    return [null, response.data]; // 성공 시: [에러 없음, 데이터]
  } catch (error) {
    console.error('API 호출 중 오류:', error);
    if (axios.isAxiosError(error)) {
      console.log('에러 응답:', error.response);
      console.log('에러 상태:', error.response?.status);
      console.log('에러 데이터:', error.response?.data);
    }
    console.log('안 돼?');
    return [error, null];
  }
};

const deleteMyPost = async (postId: number) => {
  try {
    console.log('삭제 요청 URL:', `${BASE_URL}/api/v1/posts/${postId}`);

    const response = await axios.delete(`${BASE_URL}/api/v1/posts/${postId}`, {
      headers: {
        Authorization: testToken,
        'Content-Type': 'application/json',
      },
    });

    console.log('게시물 삭제 성공!');
    return [null, response.data];
  } catch (error) {
    console.error('게시물 삭제 중 오류:', error);
    if (axios.isAxiosError(error)) {
      console.log('에러 응답:', error.response);
      console.log('에러 상태:', error.response?.status);
      console.log('에러 데이터:', error.response?.data);
    }
    return [error, null];
  }
};

const patchMyPost = async (postId: number) => {
  try {
    console.log('삭제 요청 URL:', `${BASE_URL}/api/v1/posts/${postId}`);

    const response = await axios.patch(`${BASE_URL}/api/v1/posts/${postId}`, {
      headers: {
        Authorization: testToken,
        'Content-Type': 'application/json',
      },
    });

    console.log('게시물 삭제 성공!');
    return [null, response.data];
  } catch (error) {
    console.error('게시물 삭제 중 오류:', error);
    if (axios.isAxiosError(error)) {
      console.log('에러 응답:', error.response);
      console.log('에러 상태:', error.response?.status);
      console.log('에러 데이터:', error.response?.data);
    }
    return [error, null];
  }
};

export { getMyPost, deleteMyPost, patchMyPost };
