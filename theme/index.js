import theme from 'mdx-deck/dist/themes/base'
import prism from 'react-syntax-highlighter/styles/prism/coy'
import graphql from 'react-syntax-highlighter/languages/prism/graphql'
import { colors } from '../constants'

export default {
  ...theme,
  transitionTimingFunction: 'linear',
  transitionDuration: '0s',
  font: 'Roboto, "Lato", sans-serif',
  prism: {
    style: prism,
    languages: {
      graphql,
    },
  },
  blockquote: {
    color: theme.colors.text,
    paddingLeft: '2rem',
    borderLeft: `5px solid ${theme.colors.text}`,
  },
  h1: {
    fontWeight: 100,
  },
  p: {
    fontWeight: 100,
  },
  span: {
    fontWeight: 300,
    color: colors.black,
    background: colors.accent,
    paddingLeft: '4px',
    paddingRight: '8px',
  },
  em: {
    color: colors.red,
  },
}
