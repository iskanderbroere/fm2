import React from "react"
import { BadgeLink, BadgeLogo } from "@/components/Badge"
import VisuallyHidden from "@reach/visually-hidden"
import { Heading } from "rebass"
import FrontmenLogo from "@/images/frontmen.svg"
import SEO from "@/components/SEO"

const IndexPage = () => (
  <>
    <SEO title="homepage" description="homepage description" />
    <Heading>Hi there</Heading>
    <Heading as="h4">Hi there</Heading>
    <Heading>Hi there</Heading>
    <BadgeLink fill="black" to="/page-2">
      <Heading>Hi there</Heading>
      <VisuallyHidden>Hi There</VisuallyHidden>
      <BadgeLogo alt="hank" src={FrontmenLogo} />
    </BadgeLink>
  </>
)

export default IndexPage
