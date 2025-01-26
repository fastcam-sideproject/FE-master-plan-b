import TabButton from "./TabButton";

const tabButtonProps = [
  {
    innerText: "안녕하세요",
    buttonLink: "/"
  },
  {
    innerText: "안녕하세요",
    buttonLink: "/"
  }
];


function TabVerticalSmall() {
  return (
    <nav className="flex">
      <ul className="p-3 flex flex-col gap-3 shadow-2 rounded-7">
        {tabButtonProps.map((btnProps, index) => (
          <TabButton
            key={index}
            innerText={btnProps.innerText}
            link={btnProps.buttonLink}
            fontSize="text-label-small-desktop"
          />
        ))}
      </ul>
    </nav>
  );
}

export default TabVerticalSmall;
