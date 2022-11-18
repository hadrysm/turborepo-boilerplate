import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Container } from '.';

export default {
  title: 'Organisms/Container',
  component: Container,
  args: {
    variant: 'xl',
  },
  argTypes: {
    className: {
      table: { disable: true },
    },
    variant: {
      control: {
        type: 'select',
        options: ['full', 'xl', 'lg', 'md'],
      },
    },
  },
} as ComponentMeta<typeof Container>;

const Box = () => (
  <div className="bg-orange-500 w-full text-white text-xl font-bold h-28 flex justify-center items-center">
    Any item
  </div>
);

const Template: ComponentStory<typeof Container> = args => (
  <Container {...args}>
    <Box />
  </Container>
);

export const Default = Template.bind({});
