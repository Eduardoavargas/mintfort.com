import { css } from 'styled-components'
import {
  rem as _rem,
  transitions as _transitions
} from 'polished'

export const rem = (...arg) => _rem(...arg)
export const transitions = (...arg) => _transitions(...arg)

export const navHeight = _rem(70)

export const mobile = inner => css`
  @media (max-width: ${1000 / 16}em) {
    ${inner}
  }
`

export const phone = inner => css`
  @media (max-width: ${650 / 16}em) {
    ${inner}
  }
`

export const centrate = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const flex = inner => css`
  display: flex;
  justify-content: ${inner.x};
  align-items: ${inner.y};
`

export const hover = inner => css`
  &:hover,
  &:focus {
    ${inner}
  }
`


export const theme = {
  mint: '#19DBB6',
  blue: '#1b243f',
  red: '#F44336',
  lightFont: "#A2A3AB",
  main: '#fff',
  background: '#f4f5fA',
  backgroundCard: '#eaecf5',
  border: '1px solid #f4f5fA',
  shadow: '0 1px 6px 0 #e2e4ed'
}
