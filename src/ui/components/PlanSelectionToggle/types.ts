type ToggleProps = { name: string; icon: string; isActive: boolean };

type plansProps = {
  title: string;
  value: string;
  isHighlight: boolean;
  bulledDescriptions: { icon: string; text: string }[];
};

export type Props = {
  label?: string;
  togglesProps: ToggleProps[];
  plansProps: plansProps[];
};
