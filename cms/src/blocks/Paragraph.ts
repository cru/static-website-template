import { Block } from 'payload/types'

const ParagraphBlock: Block = {
  slug: 'paragraph', // required
  interfaceName: 'ParagraphBlock', // optional
  fields: [
    // required
    {
      name: 'paragraph',
      type: 'textarea',
      required: true,
    },
  ],
}

export default ParagraphBlock
