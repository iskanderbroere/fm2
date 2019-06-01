import React, { ReactChild } from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"

const GlobalStyle = createGlobalStyle<{ whiteColor?: boolean }>`
  body {
    color: ${props => (props.whiteColor ? "white" : "black")};
    font-family: monospace;
  }
`

interface LayoutProps {
  children: ReactChild
}
const customMediaQuery = (maxWidth: number) => `@media (max-width: ${maxWidth}px)`

const media = {
  desktop: customMediaQuery(922),
  tablet: customMediaQuery(768),
  phone: customMediaQuery(576),
}

const theme = {
  media,
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
)

export default Layout
