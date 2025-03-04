import React, { useMemo } from 'react';
import Image from 'next/image';
import Popover from '@/components/Popover/Popover';

const quotesForEveryday = [
  '지금의 노력들이 쌓여 언젠가 큰 결실로 돌아올 거예요. 조금만 더 힘내 보세요.',
  '꿈을 향해 한 걸음 더 나아가는 멋진 도구예요. 천천히, 하지만 꾸준히 가 볼까요?',
  '작은 한 걸음도 충분히 가치 있어요. 오늘도 당신의 길을 만들어 가 보세요.',
  '도전하는 지금의 모습이 이미 멋집니다. 끝까지 스스로를 믿어 주세요.',
  '공부하는 하루하루가 당신의 미래를 조금씩 바꾸고 있어요. 계속 해 보세요!',
  '포기하지 않고 계속 노력하는 것만으로도 충분히 대단한 거예요. 잘 하고 있어요.',
  '조금만 더 가면 목표에 가까워질 거예요. 함께 끝까지 가 봐요.',
  '지금의 과정이 쉽진 않겠지만, 그만큼 당신을 더 빛나게 만들어 줄 거예요.',
  '천천히 해도 괜찮아요. 중요한 건 꾸준히 앞으로 나아가는 거예요.',
  '오늘의 작은 노력들이 쌓여 큰 변화를 만들어 줄 거예요. 믿고 걸어가 보세요.',
  '힘들 때는 잠시 쉬어 가도 좋아요. 하지만 다시 일어나 걸으면 어느새 목표에 도달해 있을 거예요.',
  '준비하는 과정도 당신을 성장시키는 소중한 시간이 될 거예요.',
  '지금의 노력은 결코 헛되지 않을 거예요. 언젠가 멋진 결실로 돌아올 거니까요.',
  '한 번에 다 잘하려고 하지 않아도 돼요. 한 걸음씩, 천천히 가는 것도 충분히 멋져요.',
  '합격이라는 결과보다 지금 노력하고 있는 당신의 모습이 더 소중하다는 걸 잊지 마세요.',
  '앞으로 가는 길이 조금 멀어 보여도, 한 걸음씩 걷다 보면 어느새 도착해 있을 거예요.',
  '지금 이 순간도 나중에 돌이켜 보면 정말 잘 했다는 생각이 들 거예요. 조금만 더 힘내요.',
  '완벽하지 않아도 괜찮아요. 꾸준히 나아가는 당신의 모습이 정말 멋져요.',
  '모든 노력에는 이유가 있어요. 지금의 시간이 반드시 당신에게 보답할 거예요.',
  '결과가 아니라, 지금 이 과정을 즐기려고 해 보세요. 그게 가장 큰 성장의 시작이에요.',
  '조금 힘들더라도 괜찮아요. 오늘의 노력은 내일의 자신감을 만들어 줄 거예요.',
  '길이 멀어 보여도 걱정하지 마세요. 당신은 이미 잘 하고 있어요.',
  '오늘 하루의 공부가 쌓여 내일의 큰 변화를 만들어요. 한 번 더 도전해 봐요.',
];

const useQuoteOfDay = () => {
  return useMemo(() => {
    const today = new Date();
    const daysSince2024 = Math.floor(
      (today.getTime() - new Date(2024, 0, 1).getTime()) / (1000 * 60 * 60 * 24),
    );
    const index = daysSince2024 % quotesForEveryday.length;
    return quotesForEveryday[index];
  }, []);
};

const Quotes = () => {
  const todayQuote = useQuoteOfDay();

  return (
    <div className="absolute bottom-0 right-[20px]">
      <div className="relative h-[233px] w-[437px]">
        <Popover
          label={todayQuote}
          mode="big"
          bigTipPosition="start"
          className="absolute left-0 top-0 m-[10px]"
        />
        <Image
          src={'/images/character/web/Dashboard.png'}
          width={264}
          height={208}
          alt="마이홈 글귀"
          className="absolute bottom-0 right-0"
        />
      </div>
    </div>
  );
};

export default Quotes;
