interface TabButtonProp {
  innerText: string;
  type: 'liked' | 'written' | 'stored';
}

interface TabHorizonSmallProps {
  btnProps: TabButtonProp[];
  onTabChange?: (type: 'liked' | 'written' | 'stored') => void;
}

export default function TabHorizonSmall({
  btnProps,
  onTabChange,
}: TabHorizonSmallProps) {
  return (
    <nav className="flex">
      <ul className={`flex rounded-10 p-2 shadow-2`}>
        {btnProps.map((btnProp, index) => (
          <li key={index}>
            <button
              className={`px-4 py-2 text-label-small-desktop`}
              onClick={() => onTabChange?.(btnProp.type)}
            >
              {btnProp.innerText}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
