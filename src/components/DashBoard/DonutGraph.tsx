import React from 'react';
import DashboardCardLayout from './DashboardCardLayout';

type DonutGraphProps = {
  type: 'reflection' | 'time';
  data: { label: string; value: number }[];
};
export default function DonutGraph({ type, data }: DonutGraphProps) {
  const getConicGradient = (items: { hex: string; value: number }[]) => {
    let currentDeg = 0;
    return items
      .map((item) => {
        const startDeg = currentDeg;
        const endDeg = startDeg + (item.value / 100) * 360;
        currentDeg = endDeg;
        return `${item.hex} ${startDeg.toFixed(1)}deg ${endDeg.toFixed(1)}deg`;
      })
      .join(', ');
  };
  const templates = {
    reflection: {
      title: (
        <p className="text-title-medium-desktop text-neutral-85">
          기출이 얼마나 <br /> 반영되었나요?
        </p>
      ),
      items: [
        { label: '미반영', color: 'bg-violet-30', hex: '#8058EE' },
        { label: '일부 반영', color: 'bg-violet-20', hex: '#A386F3' },
        { label: '적극 반영', color: 'bg-violet-10', hex: '#C7B5F8' },
      ],
    },
    time: {
      title: (
        <p className="text-title-medium-desktop text-neutral-85">
          주어진 시간은 <br /> 충분했나요?
        </p>
      ),
      items: [
        { label: '부족했어요', color: 'bg-blue-30', hex: '#4B76F6' },
        { label: '적절했어요', color: 'bg-blue-20', hex: '#7C9BF9' },
        { label: '여유로웠어요', color: 'bg-blue-10', hex: '#ACC0FB' },
      ],
    },
  };
  const template = {
    ...templates[type],
    items: templates[type].items.map((item, index) => {
      const value = data[index]?.value || 0;
      return { ...item, value };
    }),
  };
  const maxValue = template.items.reduce((prev, current) =>
    current.value > prev.value ? current : prev,
  );

  const labelPositions = template.items.map((item, index) => {
    const startDeg =
      index === 0
        ? 0
        : template.items.slice(0, index).reduce((sum, cur) => sum + (cur.value / 100) * 360, 0);
    const midDeg = startDeg + ((item.value / 100) * 360) / 2;
    const x = 125 + 95 * Math.cos(((midDeg - 90) * Math.PI) / 180);
    const y = 125 + 95 * Math.sin(((midDeg - 90) * Math.PI) / 180);
    return { label: `${item.value}%`, x, y };
  });

  const conicGradient = getConicGradient(template.items);
  return (
    <DashboardCardLayout className="flex gap-7">
      <div className="flex flex-col gap-9">
        {template.title}{' '}
        <div className="flex flex-col gap-4">
          {template.items.map((item, index) => (
            <div key={index} className="flex gap-3 items-center">
              <div className={`w-5 h-5 rounded-2 ${item.color}`}></div>
              <span className="text-body-small-desktop text-neutral-50">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="relative size-[250px]">
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: `conic-gradient(${conicGradient})`,
          }}
        ></div>
        {labelPositions.map((position, index) => (
          <div
            key={index}
            className="absolute text-title-small-desktop text-neutral-0"
            style={{
              left: `${position.x}px`,
              top: `${position.y}px`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            {position.label}
          </div>
        ))}
        <div className="absolute size-full flex items-center justify-center">
          <div className="size-[125px] flex items-center justify-center bg-neutral-0 rounded-10">
            <div className="flex flex-col items-center">
              <span className="text-title-large-desktop text-neutral-85">{maxValue.value}%</span>
              <span className="text-title-small-desktop text-neutral-50">{maxValue.label}</span>
            </div>
          </div>
        </div>
      </div>
    </DashboardCardLayout>
  );
}
