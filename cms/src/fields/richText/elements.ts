import { RichTextElement } from 'payload/dist/fields/config/types';
import hr from './hr';
import largeBody from './largeBody';

const elements: RichTextElement[] = [
  'blockquote',
  'h1',
  'h2',
  'h3',
  'h4',
  'link',
  'ol',
  'ul',
  hr,
  largeBody,
];

export default elements;
