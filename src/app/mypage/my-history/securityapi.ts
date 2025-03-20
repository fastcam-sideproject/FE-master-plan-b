import axios from 'axios';

const getSecurityInfo = async () => {
  try {
    const BASE_URL = 'http://13.125.158.122';

    // 개발 환경일 때만 사용할 테스트 토큰
    const testToken =
      'Bearer%20eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0QHRlc3QuY29tIiwiYXV0aCI6IlJPTEVfVVNFUiIsImV4cCI6MTc0MTYwMDM2MSwiaWF0IjoxNzQxNTk2NzYxLCJqdGkiOiJhNjIxYTRmNS1kZDAxLTRmZjYtYTE1Ny01NTI2ZTZmNTMyOTEifQ.gpknsYWXZ5Kiew54-RIy34QN2CFS41nWhsQU73IwAsA';

    // API 요청 URL 디버깅
    console.log('요청 URL:', `${BASE_URL}/api/v1/member/security`);

    const response = await axios.get(`${BASE_URL}/api/v1/member/security`, {
      headers: {
        Authorization: testToken,
        'Content-Type': 'application/json',
      },
    });
    return [null, response.data];
  } catch (error) {
    console.error('API 호출 중 오류:', error);
    if (axios.isAxiosError(error)) {
      console.log('에러 응답:', error.response);
      console.log('에러 상태:', error.response?.status);
      console.log('에러 데이터:', error.response?.data);
    }
    console.log('security 안 돼?');
    return [error, null];
  }
};

export default getSecurityInfo;
