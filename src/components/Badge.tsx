{/* <div class="c-badge c-badge--<%= type %> c-badge--<%= name %> <%= typeof size !== 'undefined' ? "c-badge--" + size : ""%>">
    <%if (typeof url !== 'undefined') { %>
        <a href="<%= url %>" class="c-badge__link" target="_blank">
    <% } %>
    <img alt="<%= name %> logo" class="c-badge__logo" src="<%= site.baseURL %>/img/badges-<%= type %>/<%= name %>.svg" />
    <%if (typeof url !== 'undefined') { %>
        </a>
    <% } %>
    <span class="c-badge__name <%= type === "project" || type === "social" ? "u-hidden-visually" : ""%>">
        <%= name.replace(/-/g, " ") %>
    </span>
</div> */}

import styled, { css } from "styled-components"
import { Link } from "gatsby"

const BadgeLink = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export default BadgeLink
// export default styled.div<{ url: string, type: string, name: string, size: number }>`
//   /* This renders the buttons above... Edit me! */
//   display: inline-block;
//   border-radius: 3px;
//   padding: 0.5rem 0;
//   margin: 0.5rem 1rem;
//   width: 11rem;
//   background: transparent;
//   color: white;
//   border: 2px solid white;

//   /* The GitHub button is a primary button
//    * edit this to target it specifically! */
//   ${props => props.primary && css`
//     background: white;
//     color: palevioletred;
//   `}
// `
