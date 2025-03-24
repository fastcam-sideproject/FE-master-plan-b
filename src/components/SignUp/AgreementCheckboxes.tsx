import { useState } from "react";

interface CheckboxItem {
  id: string;
  label: JSX.Element;
  required: boolean;
}

const checkboxes: CheckboxItem[] = [
  {
    id: "age",
    label: (
      <div>
        <span className="text-[#F84B5F]">[필수]</span> 만 14세 이상입니다.
      </div>
    ),
    required: true,
  },
  {
    id: "privacy",
    label: (
      <div>
        <span className="text-[#F84B5F]">[필수]</span> 마스터플랜비 개인정보 수집 및 이용 동의
      </div>
    ),
    required: true,
  },
  {
    id: "marketing",
    label: (
      <div>
        <span className="text-gray-500">[선택]</span> 자격증 정보, 일정, 콘텐츠 등 마스터플랜비<br />
        맞춤 정보 받기
      </div>
    ),
    required: false,
  },
];

interface AgreementCheckboxesProps {
  onChange: (isRequiredChecked: boolean) => void;
}

export default function AgreementCheckboxes({ onChange }: AgreementCheckboxesProps) {
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({
    age: false,
    privacy: false,
    marketing: false,
  });

  const allChecked = Object.values(checkedItems).every(Boolean);
  const isRequiredChecked = checkboxes.filter((c) => c.required).every((c) => checkedItems[c.id]);

  const handleCheck = (id: string) => {
    setCheckedItems((prev) => {
      const updatedItems = { ...prev, [id]: !prev[id] };
      const isRequiredChecked = checkboxes.filter((c) => c.required).every((c) => updatedItems[c.id]);
      onChange(isRequiredChecked);
      return updatedItems;
    });
  };

  const handleCheckAll = () => {
    const newChecked = !allChecked;
    const updatedItems = Object.keys(checkedItems).reduce(
      (acc, key) => ({ ...acc, [key]: newChecked }),
      {}
    );
    setCheckedItems(updatedItems);
    onChange(checkboxes.filter((c) => c.required).every((c) => newChecked));
  };

  return (
    <div className="flex flex-col gap-4 w-full text-neutral-40">

      <label className="flex items-center space-x-2 cursor-pointer font-medium text-lg">
        <input
          type="checkbox"
          checked={allChecked}
          onChange={handleCheckAll}
          className="w-5 h-5 accent-gray-600 cursor-pointer"
        />
        <span className="text-body-xsmall-desktop">모두 동의해요</span>
      </label>

      <hr className="border-gray-200" />

      {checkboxes.map(({ id, label }) => (
        <label key={id} className="flex gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={checkedItems[id]}
            onChange={() => handleCheck(id)}
            className="w-5 h-5 accent-gray-600 cursor-pointer"
          />
          <span className="text-body-xsmall-desktop">{label}</span>
        </label>
      ))}
    </div>
  );
}