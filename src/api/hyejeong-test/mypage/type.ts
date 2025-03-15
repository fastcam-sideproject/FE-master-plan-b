export interface Post {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  nickname: string;
  category: string;
  likeCount: number;
  viewCount: number;
  commentCount: number;
}

export interface MyPostResponse {
  content: Post[];
  pageable: {
    pageNumber: number;
    pageSize: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    offset: number;
    paged: boolean;
    unpaged: boolean;
  };
  totalPages: number;
  totalElements: number;
  last: boolean;
  size: number;
  number: number;
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}

export interface ApiResponse<T> {
  data: T;
  message: string;
  status: number;
}
