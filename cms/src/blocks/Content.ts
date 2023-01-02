import { Block } from 'payload/types';
import richText from '../fields/richText';
import Video from '../fields/richText/video';
import HR from '../fields/richText/hr';

export const Content: Block = {
  slug: 'content',
  labels: {
    singular: 'Content',
    plural: 'Content Blocks',
  },
  fields: [
    {
      name: 'columns',
      type: 'array',
      minRows: 1,
      labels: {
        singular: 'Column',
        plural: 'Columns',
      },
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'width',
              label: 'Column Width',
              type: 'select',
              defaultValue: 'full',
              required: true,
              //values are based on a 6-column grid
              options: [
                {
                  label: 'One Third',
                  value: '2',
                },
                {
                  label: 'Half',
                  value: '3',
                },
                {
                  label: 'Two Thirds',
                  value: '4',
                },
                {
                  label: 'Full Width',
                  value: 'full',
                },
              ],
              admin: {
                width: '50%',
              },
            },
            {
              name: 'alignment',
              label: 'Alignment',
              type: 'select',
              defaultValue: 'left',
              required: true,
              options: [
                {
                  label: 'Left',
                  value: 'left',
                },
                {
                  label: 'Center',
                  value: 'center',
                },
                {
                  label: 'Right',
                  value: 'right',
                },
              ],
              admin: {
                width: '50%',
              },
            },
          ],
        },
        richText(
          {},
          {
            elements: [
              'ol',
              'ul',
              'indent',
              'relationship',
              'upload',
              Video,
              HR,
            ],
          },
        ),
      ],
    },
  ],
};

export default Content;
