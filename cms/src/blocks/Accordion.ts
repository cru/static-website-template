import { Block } from 'payload/types';
import richText from '../fields/richText';

export const Accordion: Block = {
  slug: 'accordion',
  labels: {
    singular: 'Accordion',
    plural: 'Accordion',
  },
  fields: [
    {
      name: 'appearance',
      label: 'Appearance',
      type: 'select',
      defaultValue: 'default',
      options: [
        {
          label: 'Default',
          value: 'default',
        },
        {
          label: 'Condensed',
          value: 'condensed',
        },
      ],
    },
    {
      name: 'sections',
      type: 'array',
      minRows: 1,
      labels: {
        singular: 'Section',
        plural: 'Sections',
      },
      fields: [
        {
          type: 'text',
          name: 'label',
          required: true,
          label: 'Label',
        },
        {
          type: 'checkbox',
          name: 'openOnInit',
          label: 'Open',
          admin: {
            description: 'Open this section by default.',
          },
        },
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
            richText({}, {
              elements: [
                'relationship',
                'ol',
                'ul',
                'indent',
              ],
            }),
          ],
        },
      ],
    },
  ],
};
