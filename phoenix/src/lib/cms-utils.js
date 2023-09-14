import escapeHTML from 'escape-html'

const cmsUtils = {}

cmsUtils.serializeRichText = (children = []) =>
  children.map((node, i) => {
    if (!node) {
      return null
    }

    if (node.text) {
      let text = <span dangerouslySetInnerHTML={{ __html: escapeHTML(node.text) }} />

      if (node.bold) text = <strong key={i}>{text}</strong>
      if (node.code) text = <code key={i}>{text}</code>
      if (node.italic) text = <em key={i}>{text}</em>
      if (node.strikethrough) text = <s key={i}>{text}</s>
      if (node.underline) text = <u key={i}>{text}</u>

      return <span key={i}>{text}</span>
    }

    switch (node.type) {
      case 'h1':
        return <h1 key={i}>{cmsUtils.serializeRichText(node.children)}</h1>
      case 'h2':
        return <h2 key={i}>{cmsUtils.serializeRichText(node.children)}</h2>
      case 'h3':
        return <h3 key={i}>{cmsUtils.serializeRichText(node.children)}</h3>
      case 'h4':
        return <h4 key={i}>{cmsUtils.serializeRichText(node.children)}</h4>
      case 'h5':
        return <h5 key={i}>{cmsUtils.serializeRichText(node.children)}</h5>
      case 'h6':
        return <h6 key={i}>{cmsUtils.serializeRichText(node.children)}</h6>
      case 'link':
        return node.newTab ? (
          <a href={escapeHTML(node.url)} key={i} target='_blank' rel='noopener'>
            {cmsUtils.serializeRichText(node.children)}
          </a>
        ) : (
          <a href={escapeHTML(node.url)} key={i}>
            {cmsUtils.serializeRichText(node.children)}
          </a>
        )
      case 'ul':
        return <ul key={i}>{cmsUtils.serializeRichText(node.children)}</ul>
      case 'ol':
        return <ol key={i}>{cmsUtils.serializeRichText(node.children)}</ol>
      case 'li':
        return <li key={i}>{cmsUtils.serializeRichText(node.children)}</li>
      case 'hr':
        return <hr key={i} />
      case 'large-body':
        return (
          <span key={i} className='text-lg'>
            {cmsUtils.serializeRichText(node.children)}
          </span>
        )
      default:
        return <span key={i}>{cmsUtils.serializeRichText(node.children)}</span>
    }
  })

cmsUtils.getColSpan = (width = '') => {
  switch (width) {
    case 'full':
      return 'col-span-full'
    case 'oneThird':
      return 'col-span-2'
    case 'half':
      return 'col-span-3'
    case 'twoThirds':
      return 'col-span-4'
    default:
      return 'col-auto'
  }
}

cmsUtils.getAlignment = (alignment = '') => {
  switch (alignment) {
    case 'center':
      return 'text-center'
    case 'left':
      return 'text-left'
    case 'right':
      return 'text-right'
    default:
      return 'text-left'
  }
}

cmsUtils.renderBlock = (block = {}) => {
  if (!block) {
    return null
  }

  switch (block.blockType) {
    case 'paragraph':
      return <p>{cmsUtils.serializeRichText(block.paragraph)}</p>
  }
}

export default cmsUtils
