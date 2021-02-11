import { row, col, css } from './utils'

class Block {
  constructor(value, options) {
    this.value = value
    this.options = options
  }

  toHtml() {
    throw new Error('Method toHtml should be defined for each children class')
  }
}

export class TitleBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }

  toHtml() {
    const { tag = 'h1', styles } = this.options
    return row(col(`<${tag}>${this.value}<${tag}>`), css(styles))
  }
}

export class TextBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }

  toHtml() {
    return row(col(`<p>${this.value}</p>`), css(this.options.styles))
  }
}

export class ColumnBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }

  toHtml() {
    const html = this.value.map(col).join('')

    return row(html)
  }
}

export class ImageBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }

  toHtml() {
    return `
      <img src=${this.value} alt = "Image">
    `
  }
}