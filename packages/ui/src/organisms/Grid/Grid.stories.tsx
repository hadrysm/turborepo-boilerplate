import { Meta, Story } from '@storybook/react';

import { Grid, GridProps } from '.';

export default {
  title: 'Organisms/Grid',
  component: Grid,
  args: {
    count: 3,
    gap: 'xs',
    variant: 'responsive-fit',
  },
  argTypes: {
    className: {
      table: { disable: true },
    },
    count: {
      control: {
        type: 'number',
        min: 1,
        max: 8,
      },
    },
    gap: {
      control: {
        type: 'select',
        options: ['xs', 'sm', 'md', 'lg'],
      },
    },
    variant: {
      control: {
        type: 'select',
        options: ['responsive-fit', 'responsive-fill'],
      },
    },
  },
} as Meta;

const Box = () => (
  <div className="bg-orange-500 text-white text-xl font-bold h-28 flex justify-center items-center">
    Any item
  </div>
);

type DefaultTemplateStoryProps = GridProps & {
  count: number;
};

const Template: Story<DefaultTemplateStoryProps> = ({ count, ...rest }) => {
  const arr = Array.from(Array(count).keys());

  return (
    <Grid {...rest}>
      {arr.map(item => (
        <Box key={item} />
      ))}
    </Grid>
  );
};

export const Grid3Col = Template.bind({});

export const Grid2Col = Template.bind({});
Grid2Col.args = {
  count: 2,
};

export const Grid1Col = Template.bind({});
Grid1Col.args = {
  count: 1,
};

export const Grid3ColFill = Template.bind({});
Grid3ColFill.args = {
  variant: 'responsive-fill',
};
