export function AppleLoginBtn() {
  return (
    <button
      className="w-40 mobile:w-[335px] h-[180px] mobile:h-[65px] px-6 py-9 mobile:px-4 mobile:py-2 bg-neutral-90 rounded-4 flex-col justify-center items-center inline-flex"
      type="button"
    >
      <div className="flex flex-col justify-start items-center gap-6 mobile:flex-row mobile:gap-4">
        <img src="/icons/login/apple.svg" alt="apple icon" className="w-8 h-8" />
        <div className="text-neutral-0 text-label-medium-desktop font-normal">애플로 시작하기</div>
      </div>
    </button>
  );
}
