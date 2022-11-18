import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MediaVideo } from './MediaVideo';

export default {
  title: 'Atoms/MediaVideo',
  component: MediaVideo,
  parameters: {
    controls: { expanded: true },
  },
} as ComponentMeta<typeof MediaVideo>;

const Template: ComponentStory<typeof MediaVideo> = args => <MediaVideo {...args} />;

export const VideoURL = Template.bind({});
VideoURL.args = {
  width: '300',
  height: '170',
  videoURL: 'https://player.vimeo.com/video/766625443?h=58310cdcb5',
};
VideoURL.argTypes = {
  videoFilePath: {
    table: {
      disable: true,
    },
  },
  videoURL: {
    description: 'Embedded link for YouTube or Vimeo videos.',
  },
};

export const VideoSelfHosted = Template.bind({});
VideoSelfHosted.args = {
  width: '300',
  height: '500',
  videoFilePath: 'https://a.storyblok.com/f/121094/x/1807f87863/pexels-pavel-danilyuk-7318864.mp4',
};
VideoSelfHosted.argTypes = {
  videoURL: {
    table: {
      disable: true,
    },
  },
  videoFilePath: {
    description: 'Path to the .mp4 or .webm file hosted on Storyblok.',
  },
};
