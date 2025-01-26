type TabHorizonType = {
  isDark: boolean;
};

type TabHorizonButtonType = {
  innerText: string;
  link: string;
  isDark: boolean;
  size?: 'normal' | 'medium' | 'small';
  fontSize?: string;
};

type TabButtonType = {
  innerText: string;
  link: string;
  fontSize?: string;
};

export type { TabHorizonType, TabHorizonButtonType, TabButtonType };
