import image from './img/photo_2021-01-27_16-57-29.jpg'
import { TitleBlock, TextBlock, ColumnBlock, ImageBlock } from './blocks'

export const model = [
  new TitleBlock('new Title', {
    tag: 'h2',
    styles: {
      background: 'black',
      color: 'white'
    }
  }),
  new TextBlock('new Text', {
    styles: {
      color: 'blue'
    }
  }),
  new ColumnBlock([
    '111',
    '222',
    '333',
    '444'
  ]),
  new ImageBlock(image)
]