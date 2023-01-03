import { Block } from 'payload/types';
import richText from '../fields/richText';
import embeddedVideo from '../fields/embeddedVideo';

export const MediaContent: Block = {
  slug: 'mediaContent',
  labels: {
    singular: 'Media + Content',
    plural: 'Media + Content Blocks',
  },
  fields: [
    {
      name: 'alignment',
      label: 'Alignment',
      type: 'radio',
      defaultValue: 'contentOnLeft',
      required: true,
      options: [
        {
          label: 'Content on Left',
          value: 'contentOnLeft',
        },
        {
          label: 'Content on Right',
          value: 'contentOnRight',
        },
      ],
      admin: {
        layout: 'horizontal',
      },
    },
    richText(
      {},
      {},
    ),
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        // @ts-ignore
        condition: (data, { embeddedVideo }) => Boolean(!embeddedVideo?.embed),
        description: 'Maximum upload file size: 2MB. Recommended file size for images is <500KB.',
      },
    },
    embeddedVideo,
  ],
};

export default MediaContent;
