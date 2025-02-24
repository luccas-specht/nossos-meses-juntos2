import type { Meta, StoryObj } from '@storybook/react';
import PlanSelectionToggle from './PlanSelectionToggle';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Plan Selection Toggle',
  component: PlanSelectionToggle,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof PlanSelectionToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    label: 'Plano Selecionado',
    plansProps: [
      {
        isHighlight: true,
        title: 'Muito amor',
        value: '29,90',
        bulledDescriptions: [{ icon: 'oie', text: 'oie' }],
      },
      {
        isHighlight: false,
        title: 'Muito amor',
        value: '29,90',
        bulledDescriptions: [{ icon: 'oie', text: 'oie' }],
      },
    ],
    togglesProps: [
      { icon: '', isActive: true, name: 'Muito amor' },
      { icon: '', isActive: false, name: 'Pouco amor' },
    ],
  },
};
