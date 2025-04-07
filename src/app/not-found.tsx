import Image from 'next/image';
import React from 'react';

const notFoundPage = () => {
  return (
    <div className="flex h-[calc(100vh-72px-248px)] items-center justify-center">
      <ul className="flex flex-col items-center justify-center gap-5 text-title-large-desktop">
        <Image
          src={'/images/character/web/No_Info.png'}
          alt="NO INFO"
          width={300}
          height={300}
        />
        <li>PAGE NOT FOUND</li>
        <li>페이지를 찾을 수 없슴다</li>
      </ul>
    </div>
  );
};

export default notFoundPage;
