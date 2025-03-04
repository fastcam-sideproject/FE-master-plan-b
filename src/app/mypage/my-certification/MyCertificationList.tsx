import React from 'react';
import { IconHexagons, IconPencil, IconPlus, IconTrash } from '@tabler/icons-react';
import { Button } from '@/components/ui/button';

const MyCertificationList = () => {
  return (
    <div>
      <div className="flex w-full justify-between">
        <ul className="flex">
          <IconHexagons className="rotate-180" />
          <li>내 자격증</li>
        </ul>
        <ul className="flex">
          <li>자격증 등록하기</li>
          <IconPlus />
        </ul>
      </div>
      <div>
        <ul className="flex">
          <li>자격증명</li>
          <li>기관명</li>
          <li>취득일</li>
          <li>만료일</li>
          <li>점수</li>
          <li>자격증 번호</li>
        </ul>
        <ul className="flex">
          <li>자격증명 내용</li>
          <li>기관명 내용</li>
          <li>취득일 내용</li>
          <li>만료일 내용</li>
          <li>점수 내용</li>
          <li>자격증 번호 내용</li>
          <li>
            <Button>후기 입력하기</Button>
          </li>
          <li>
            <Button>
              <IconPencil />
            </Button>
          </li>
          <li>
            <Button>
              <IconTrash />
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MyCertificationList;
