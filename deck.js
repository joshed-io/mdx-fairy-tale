import fairyTaleTheme from './themes/fairy-tale'
import Provider from './components/Provider'

import { slides as one } from './slides/one.mdx'
import { slides as two } from './slides/two.mdx'

export const theme = {
  Provider,
  ...fairyTaleTheme,
  metadata: {
    title: `MDX: content for kings and princesses`,
    author: `Josh Dzielak`,
    twitter: `@dzello`,
    event_twitter: `@jamstackconf`,
    event_twitter_link: `https://twitter.com/jamstackconf`,
    date: `July 9, 2019`,
    repository: `https://github.com/developermode/mdx-fairy-tale`
  }
}

export const slides = [...one, ...two];