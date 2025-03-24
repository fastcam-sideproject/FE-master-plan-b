import Image from 'next/image';

export default function OnbordingTitle() {
  return (
    <aside className='w-full h-[1081px] flex flex-col gap-[55px] items-center justify-center px-[80px] bg-neutral-90'>
      <h1 className='text-neutral-0 text-heading-medium-desktop'>마스터 플랜비에<br /> 오신 것을 환영해요</h1>
      <Image width={400} height={400} src={"/character/web/Onboarding.png"} alt={"메인캐릭터"} />
    </aside>
  );
}


