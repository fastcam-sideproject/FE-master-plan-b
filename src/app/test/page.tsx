'use client';

import { IconAccessible } from '@tabler/icons-react';
import { useState } from 'react';
import Badge from '@/components/Badge/Badge';
import Category from '@/components/Category/Category';
import Chip from '@/components/Chip/Chip';
import { Avatar } from '@/components/common/Avatar';
import { ContentsHeader } from '@/components/common/ContentsHeader';
import { NumberInput } from '@/components/common/NumberInput';
import { NumberPagination } from '@/components/common/Pagination';
import StarRating from '@/components/common/StarRating/StarRating';
import TabHorizon from '@/components/common/Tab/TabHorizon';
import TabHorizonMedium from '@/components/common/Tab/TabHorizonMedium';
import TabHorizonSmall from '@/components/common/Tab/TabHorizonSmall';
import TabVertical from '@/components/common/Tab/TabVertical';
import TabVerticalSmall from '@/components/common/Tab/TabVerticalSmall';
import { TooltipComponent } from '@/components/common/TooltipComponent';
import BarGraph from '@/components/DashBoard/BarGraph';
import DonutGraph from '@/components/DashBoard/DonutGraph';
import LearningTimeGraph from '@/components/DashBoard/LearningTimeGraph';
import { Dropdown } from '@/components/Dropdown';
import ItemCard from '@/components/ItemCard/ItemCard';
import { ItemList, MainItemList } from '@/components/ItemList';
import { LiveChip } from '@/components/LiveChip';
import { AppleLoginBtn, GoogleLoginBtn, KakaoLoginBtn } from '@/components/LoginButton';
import BtnOnboarding from '@/components/Onboarding/BtnOnboarding';
import Popover from '@/components/Popover/Popover';
import SearchBar from '@/components/SearchBar/SearchBar';
import SideBarFavoriteCertifications from '@/components/SideBar/SideBarFavoriteCertifications';
import SideBarMyHome from '@/components/SideBar/SideBarMyHome';
import StudyCardList from '@/components/StudyCard/StudyCardList';
import ChatList from '@/components/Chat/ChatList';
import Stepper from '@/components/Stepper/Stepper';
import Textarea from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import CommunityBox from '@/components/CommunityBox/CommunityBox';
import CommunityInfo from '@/components/CommunityInfo/CommunityInfo';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';

const difBarGraphData = [
  { label: '쉬워요', value: 30 },
  { label: '보통이에요', value: 95 },
  { label: '어려워요', value: 90 },
];
const methodBarGraphData = [
  { label: '책', value: 30 },
  { label: '인터넷강의', value: 10 },
  { label: '유튜브', value: 90 },
];
const learningTimeGraphData = [
  { label: '과목1', value: 20 },
  { label: '과목2', value: 10 },
  { label: '과목3', value: 25 },
  { label: '과목4', value: 15 },
  { label: '과목5', value: 40 },
];
const reflectionData = [
  { label: '미반영', value: 70 },
  { label: '일부 반영', value: 10 },
  { label: '적극 반영', value: 20 },
];
const timeData = [
  { label: '부족했어요', value: 30 },
  { label: '적절했어요', value: 40 },
  { label: '여유로웠어요', value: 30 },
];
const selectedDates = ['2025-01-24', '2025-01-28', '2025-02-03'];
const ItemCardDummyData = {
  examId: '1',
  exam: '정보처리기사',
  host: '국가기술자격',
  bookmark: false,
  starRating: 4,
  category: '정보통신',
  regStartDate: '2025-01-22',
  regEndDate: '2025-02-28',
  examStartDate: '2025-02-28',
};
const stepperData = [
  { label: '답안지 작성 관련 OT', time: 15 },
  { label: '수험자 휴식시간', time: 5 },
  { label: '신분 확인 및 휴대폰 제출', time: 15 },
  { label: '문제지 배부 및 파본 확인', time: 5 },
  { label: '듣기평가(LC)', time: 45 },
  { label: '읽기평가(RC)', time: 75 },
];
const communityData = [
  {
    uploadedTime: '2025-02-07T18:51:00',
    title: '오늘 자 시험 난이도 어땠나요?',
    category: '시험 꿀팁',
    content: `안녕하세요! 오늘 토익 첫 시험을 봤는데, RC에서 시간이 부족해서 끝까지 못 풀었어요. 😭 다들
        시간 관리 어떻게 하세요? 문제 풀 때 팁이나 전략 있으면 공유 부탁드려요! 🙏`,
    view: 12345,
    reply: 12345,
    like: 12345,
    shareLink: 'https://localhost:3000/communityLinks',
  },
  {
    uploadedTime: '2025-02-07T18:51:00',
    title: '치킨 먹고 싶어요요',
    category: '시험 꿀팁',
    content: `안녕하세요! 오늘 토익 첫 시험을 봤는데, RC에서 시간이 부족해서 끝까지 못 풀었어요. 😭 다들
        시간 관리 어떻게 하세요? 문제 풀 때 팁이나 전략 있으면 공유 부탁드려요! 🙏`,
    view: 12345,
    reply: 12345,
    like: 12345,
    shareLink: 'https://localhost:3000/communityLinks',
  },
];

export default function Home() {
  const breadcrumbItems = [
    { label: '홈', href: '/' },
    { label: '하위 페이지', href: '#' },
  ];
  const [expanded, setExpanded] = useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined);

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <LiveChip />
      <main className="rounded-10 border bg-neutral-10 stroke-normal font-semibold shadow-1">
        안녕하세요 마스터 플랜 비 입니다
        <Category />
      </main>
      <KakaoLoginBtn />
      <AppleLoginBtn />
      <GoogleLoginBtn />

      <NumberPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        className="custom-class"
      />
      <MainItemList
        title="제목을 입력해주세요"
        labels={['Label', 'Label']}
        tags={['하루 1~2시간 학습', '비전공자', '6개월 준비']}
        content="필기는 기출문제를 정복하면 절반은 먹고 들어갑니다. 저는 5년 치 기출문제를 다운로드해서 한 번 풀어본 뒤, 틀린 문제만 다시 정리했어요. 기출문제는 반복되는 경향이 강하니까 시험 직전까지 최소 3번은 돌려보는 걸 추천합니다. 암기 팁으로는 **'키워드 중심으로 정리'**하는 게 중요해요. 책 한 권을 다 외우려 하지 말고, 꼭 나오는 핵심 개념만 메모하면서 공부했어요."
      />
      <Dropdown
        items={['검은색 1', '검은색 2', '검은색 3', '검은색 4', '검은색 5']}
        size="w-[165px]"
        color="bg-neutral-90"
      />

      <div className="flex items-center justify-center">
        <TooltipComponent />
      </div>
      <Dropdown items={['흰색 1', '흰색 2', '흰색 3', '흰색 4', '흰색 5']} />
      <div className="h-6 w-px bg-neutral-30" />
      <Avatar size="xl" src="/icons/gnb/user-filled.svg" alt="asdsa" />
      <Avatar src="/icons/gnb/user-filled.svg" alt="Custom icon" size="lg" />
      <Avatar src="/icons/gnb/user-filled.svg" alt="Custom icon" size="md" />
      <Avatar src="/icons/gnb/user-filled.svg" alt="Custom icon" size="sm" />
      <Avatar src="/icons/gnb/user-filled.svg" alt="" size="xs" />
      <ItemList
        title="필기시험은 기출문제 무조건 반복하세요"
        labels={['멜딕기관기능사', '정호안', '2024.12.03']}
        tags={['하루 1~2시간 학습', '비전공자', '6개월 준비']}
        content="기출문제만 잘 활용해도 필기시험의 반은 준비된 거나 다름없습니다. 저는 최근 5년간의 기출문제를 풀어본 후, 틀린 문제들을 모아 다시 복습하면서 약점을 보완했어요. 필기시험을 대비할 때 가장 중요한 건 기출문제를 정복하는 거예요. 저는 5년 치 기출문제를 풀어본 후, 틀린 문제들을 따로 정리하고 반복해서 공부했더니 효과가 좋았어요."
        initialLikes={10}
        writtenDifficulty="보통"
        practicalDifficulty="어려움"
        writtenStudy="인터넷 강의"
        practicalStudy="인터넷 강의"
      />
      <div className="h-6 w-px bg-neutral-30" />
      <Category />
      <SearchBar type="main" />
      <SearchBar type="default" />
      <Chip size="large" keyword="테스트" selected={false} disabled />
      <Chip size="small" keyword="테스트" selected={false} disabled />
      <Chip size="xsmall" keyword="테스트" selected={false} disabled />
      <StarRating size="large" rating={1} />
      <StarRating size="large" rating={2} />
      <StarRating size="large" rating={3} />
      <StarRating size="large" rating={4} />
      <StarRating size="large" rating={5} />
      <StarRating size="small" rating={1} />
      <StarRating size="small" rating={2} />
      <StarRating size="small" rating={3} />
      <StarRating size="small" rating={4} />
      <StarRating size="small" rating={5} />
      <NumberInput min={0} max={100} defaultValue={0} />
      <ContentsHeader
        size="large"
        title="Main Title"
        description="Detail Text"
        icon={<IconAccessible />}
      />
      <Button variant="secondary" size="lg" className="font-medium">
        라지 박스
      </Button>
      <Button variant="secondary" size="md" className="ga text-neutral-80">
        미디움 박스
      </Button>
      <Button variant="secondary" size="sm" className="text-neutral-80">
        스몰 박스
      </Button>
      <Button variant="default" size="sm">
        Default Box
      </Button>
      <SideBarMyHome />
      {/* <SideBarFavoriteCertifications /> */}
      <LearningTimeGraph data={learningTimeGraphData} />
      <div className="flex flex-col gap-6">
        <div className="flex gap-6">
          <BarGraph type={'difficulty'} data={difBarGraphData} />
          <BarGraph type={'method'} data={methodBarGraphData} />
        </div>
        <div className="flex gap-6">
          <DonutGraph type={'reflection'} data={reflectionData} />
          <DonutGraph type={'time'} data={timeData} />
        </div>
      </div>
      <div className="flex gap-9">
        <BtnOnboarding type={'general'} />
        <BtnOnboarding type={'specific'} />
      </div>
      {/* <StudyCardList /> */}
      <TabVertical />
      <TabVerticalSmall />
      <TabHorizon isDark={true} />
      <TabHorizon isDark={false} />

      <TabHorizonMedium isDark={true} />
      <TabHorizonMedium isDark={false} />

      <TabHorizonSmall isDark={true} />
      <TabHorizonSmall isDark={false} />

      <div className="flex gap-3">
        <Calendar date={selectedDates} bg={'light'} size={'large'} />
        <Calendar date={selectedDates} bg={'dark'} size={'large'} />
      </div>
      <div className="flex gap-3">
        <Calendar date={selectedDates} bg={'light'} size={'small'} />
        <Calendar date={selectedDates} bg={'dark'} size={'small'} />
      </div>
      <div className="mx-5 my-5 flex gap-5">
        <ItemCard type={'community'} data={ItemCardDummyData} />
        <ItemCard type={'info'} data={ItemCardDummyData} />
        <ItemCard type={'date'} data={ItemCardDummyData} />
        button 컴포넌트 수정필요함
      </div>
      {/* <div className="w-[1200px] tablet:w-[780px] mobile:w-[360px]">
        <Stepper data={stepperData} />
      </div> */}
      <ChatList />
      <Textarea placeholder="여기에 텍스트 입력" />
      <Textarea placeholder="여기에 텍스트 입력" disabled />
      <Input placeholder="여기에 텍스트 입력" size="text_md" />
      <Input placeholder="여기에 텍스트 입력" size="text_md" disabled />
      {communityData.map((item, index) => (
        <CommunityBox key={index} data={item} />
      ))}
      <CommunityInfo />
      <div className="box-border w-fit border border-neutral-90 p-5">
        <Popover label="여기에 다크모드 텍스트 입력" tipPosition="start" mode="dark" />
        <Popover label="여기에 다크모드 텍스트 입력" tipPosition="center" mode="dark" />
        <Popover label="여기에 다크모드 텍스트 입력" tipPosition="end" mode="dark" />
        <Popover
          label="여기에 다크모드 텍스트 입력"
          tipPosition="start"
          mode="dark"
          tipDirection="up"
        />
        <Popover
          label="여기에 다크모드 텍스트 입력"
          tipPosition="center"
          mode="dark"
          tipDirection="up"
        />
        <Popover
          label="여기에 다크모드 텍스트 입력"
          tipPosition="end"
          mode="dark"
          tipDirection="up"
        />
      </div>
      <div className="w-fit bg-neutral-90 p-5">
        <Popover label="여기에 화이트모드 텍스트 입력" tipPosition="start" mode="light" />
        <Popover label="여기에 화이트모드 텍스트 입력" tipPosition="center" mode="light" />
        <Popover label="여기에 화이트모드 텍스트 입력" tipPosition="end" mode="light" />
        <Popover
          label="여기에 화이트모드 텍스트 입력"
          tipPosition="start"
          mode="light"
          tipDirection="up"
        />
        <Popover
          label="여기에 화이트모드 텍스트 입력"
          tipPosition="center"
          mode="light"
          tipDirection="up"
        />
        <Popover
          label="여기에 화이트모드 텍스트 입력"
          tipPosition="end"
          mode="light"
          tipDirection="up"
        />
      </div>
      <div className="box-border w-fit border border-neutral-90 p-5">
        <Popover
          label="앞으로 가는 길이 조금 멀어보여도, 한 걸음씩 걷다보면 어느새 도착해 있을 거예요."
          mode="big"
        />
        <Popover
          label="앞으로 가는 길이 조금 멀어보여도, 한 걸음씩 걷다보면 어느새 도착해 있을 거예요."
          mode="big"
          bigTipPosition="start"
        />
      </div>
      <div className="box-border flex w-fit gap-3 bg-neutral-70 p-5">
        <Badge achieveItem="electronicsMaestro" />
        <Badge variant="default" achieveItem="growthApprentice" />
        <Badge variant="default" achieveItem="expert" selected={true} achieve={true} />
        <Badge variant="secondary" achieveItem="businessBrain" achieve={true} />
      </div>
    </>
  );
}
