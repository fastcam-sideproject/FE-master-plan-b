import OnbordingTitle from "./OnbordingTitle";


export default function OnboardingLayoutt({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-full grid grid-cols-3">
      <OnbordingTitle />
      <section className="col-span-2 flex flex-col justify-between px-20 pt-64 pb-20">
        {children}
      </section>
    </main>
  );
}