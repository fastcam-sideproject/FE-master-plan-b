interface OnboardingSubjectType {
  title: JSX.Element,
  p: string

}

export default function OnboardingSubject({ title, p }: OnboardingSubjectType) {
  return (

    <div className="flex flex-col gap-3">
      <h2 className='text-heading-small-desktop'>{title}</h2>
      <p className='text-body-large-desktop text-neutral-50'>{p}</p>
    </div>

  );
}