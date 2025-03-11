// import axios from "@/utils/axios";
// import toAxios from "@/utils/toAxios";
// import { GetCenterData } from "@/models/ApiTypes";
// import { CENTER_API_PATH } from "@/apis/path";

import axios from '@/lib/hyejeong-test/axios';
import toAxios from '@/lib/hyejeong-test/toAxios';
import { MY_HISTORY_API_PATH } from '../path';

interface MyHistoryData {
  // 백엔드에서 받아오는 데이터 타입을 정의하세요
  postId: number;
  title: string;
  content: string;
  nickname: string;
  createdAt: string;
  category: string;
  likeCount: number;
  viewCount: number;
  commentCount: number;
}

interface MyHistoryResponse {
  data: {
    content: MyHistoryData[];
    pageable: {
      pageNumber: number;
      pageSize: number;
    };
    totalElements: number;
    totalPages: number;
  };
}

const getMyHistory = async () => {
  return toAxios<MyHistoryResponse>(axios.get(MY_HISTORY_API_PATH.my));
};

export default getMyHistory;
