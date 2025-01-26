import TabHorizonButton from "./TabHorizonButton";
import { TabHorizonType } from "./types";

const tabButtonProps = [
  {
    innerText: "안녕하세요",
    buttonLink: "/"
  },
  {
    innerText: "안녕",
    buttonLink: "/"
  }
];

export default function TabHorizon({ isDark }: TabHorizonType) {
  return (
    <nav className="flex">
      <ul className={`p-2 flex gap-3 shadow-2 rounded-10 ${isDark ? "bg-neutral-0" : "bg-neutral-5"}`}>
        {tabButtonProps.map((btnProps, index) => (
          <TabHorizonButton
            key={index}
            innerText={btnProps.innerText}
            link={btnProps.buttonLink}
            isDark={isDark}
          />
        ))}
      </ul>
    </nav>
  );
}
