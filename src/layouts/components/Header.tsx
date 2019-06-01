import styled, { css } from "styled-components"

export default () => (
  <header role="banner" class="c-page-header o-layout__header">
    <button class="c-btn c-btn--icon c-page-header__toggle js-menu-toggle">
        <span class="c-icon c-icon--40 c-icon--menu-hamburger"></span>
        <span class="u-hidden-visually">Menu</span>
    </button>

    <h1 class="c-page-header__title">
        <%if (typeof page.title !== "undefined") { %>
        <span class="c-page-header__title-sub"><%= page.layout %></span>
        <% } %>
        <%= page.title %>
    </h1>

    <%if (typeof page.title !== "undefined") { %>
    <a href="<%= site.baseURL %>" class="c-page-header__logo">
        <img src="<%= site.baseURL %>/img/fm-monogram-logo.svg" alt="Frontmen">
    </a>
    <% } %>

</header>
)

const HeaderTitle = styled.h1`

`
