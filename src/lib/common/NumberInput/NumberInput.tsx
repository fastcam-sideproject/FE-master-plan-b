import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { Input } from '@/components/ui/input';

type NumberInputProps = {
  min: number;
  max: number;
  defaultValue: number;
  onChange?: (value: number) => void;
};

export function NumberInput({ min, max, defaultValue, onChange }: NumberInputProps) {
  const [value, setValue] = useState<number>(defaultValue);

  const handleIncrement = () => {
    if (value < max) {
      const newValue = value + 1;
      setValue(newValue);
      onChange?.(newValue);
    }
  };

  const handleDecrement = () => {
    if (value > min) {
      const newValue = value - 1;
      setValue(newValue);
      onChange?.(newValue);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value) || 0;
    if (newValue >= min && newValue <= max) {
      setValue(newValue);
      onChange?.(newValue);
    }
  };

  return (
    <div className="flex items-center justify-center border rounded-4 overflow-hidden border-neutral-10 bg-neutral-0 max-w-[91px] h-9 p-2">
      <button type="button" className="w-[26px] h-[26px] text-neutral-30" onClick={handleDecrement}>
        <Minus className="w-5 h-5" />
      </button>
      <Input
        type="number"
        value={value}
        onChange={handleChange}
        className=" h-[29px] text-body-large-desktop font-[400] text-center border-none text-neutral-85"
      />
      <button type="button" className="w-[26px] h-[26px] text-neutral-30" onClick={handleIncrement}>
        <Plus className="w-5 h-5" />
      </button>
    </div>
  );
}
