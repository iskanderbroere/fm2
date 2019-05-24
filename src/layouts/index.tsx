import React, { ReactNode } from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle<{ whiteColor?: boolean }>`
  body {
    color: ${props => (props.whiteColor ? 'white' : 'black')};
    font-family: monospace;
  }
`

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <GlobalStyle />
    {children}
  </>
)

export default Layout
