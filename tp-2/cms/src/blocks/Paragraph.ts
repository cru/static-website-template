import { Block } from 'payload/types'

const ParagraphBlock: Block = {
  slug: 'paragraph',
  interfaceName: 'ParagraphBlock',
  fields: [
    {
      name: 'paragraph',
      type: 'richText',
      required: true,
      admin: {
        elements: ['ol', 'ul', 'textAlign', 'link', 'blockquote'],
      },
    },
  ],
}

export default ParagraphBlock
