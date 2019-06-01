import styled, { css } from "styled-components"
import { Link } from "gatsby"

interface SvgRatioMixin {
  width?: number
}
const svgRatioMixin = css<SvgRatioMixin>`
  width: ${({ width = 200 }) => width}px;
  height: ${({ width = 200 }) => 392 / (288 / width)}px;
`

interface BadgeLinkProps {
  fill?: string
}

export enum BadgeType {
  Social,
  Project,
}
interface BadgeLabelProps {
  type: BadgeType
}

interface BadgeLogoProps {
  alt: string
  src: string
}
const getUrlEncodedSvg = ({ fill }) =>
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 288 392"><defs><path id="a" d="M144 0L0 82.526v226.948L144 392l144-82.526V82.526z"/></defs><use fill="${fill}" xlink:href="#a"/></svg>`
  )
const getDiamondSvg = fill => css`
    /* https://stackoverflow.com/questions/10768451/inline-svg-in-css */
    background-image: url("data:image/svg+xml,${getUrlEncodedSvg({ fill })}");
`

export const BadgeLink = styled(Link)<BadgeLinkProps>`
  ${({ fill = "red" }) => getDiamondSvg(fill)}
  fill-rule: evenodd;
  ${svgRatioMixin}
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const BadgeLogo = styled.img<BadgeLogoProps>`
  max-width: 70%;
  width: 70%;
  height: auto;
  margin-bottom: $global-spacing-unit-tiny;
  ${({ theme: { media } }) =>
    media.phone &&
    `
        margin-bottom: 0;
    `}
`
