import { HttpResponse, http } from 'msw';

// msw 예제 코드
const lodgment = [
  {
    id: '0',
    thumbnail: 'https://picsum.photos/200/300',
    price: 100000,
    name: '서울 숙소',
    address: '서울시 강남구 역삼동 123-456',
    numbers: '02-1234-5678',
    comment: '서울 중심부에 위치한 아늑한 숙소입니다.',
    roomList: [
      {
        id: '0',
        roomTypeName: ' A 싱글룸',
        roomType: ' 싱글룸',
        roomPrice: 100000,
        roomExtraPrice: 50000,
        roomStock: 10,
        roomDefaultGuest: 1,
        roomMaxGuest: 1,
        comment: '싱글룸 입니다. 해당 상품은 1인 기준입니다.',
        imageList: [
          'https://picsum.photos/200/300',
          'https://picsum.photos/200/300',
          'https://picsum.photos/200/300',
        ],
      },
      {
        id: '1',
        roomTypeName: ' B 더블룸',
        roomType: '더블룸',
        roomPrice: 200000,
        roomExtraPrice: 100000,
        roomStock: 10,
        roomDefaultGuest: 2,
        roomMaxGuest: 2,
        comment: '더블룸 입니다.',
        imageList: [
          'https://picsum.photos/200/300',
          'https://picsum.photos/200/300',
          'https://picsum.photos/200/300',
        ],
      },
    ],
  },
];

export const handlers = [
  http.get('/api/lodgment', () => {
    return HttpResponse.json(lodgment);
  }),
];
