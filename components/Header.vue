<!-- components/Header.vue -->
<template>
  <header class="header">
    <div class="container">
      <nav class="navbar">
        <div class="navbar__logo">
          <NuxtLink to="/">
            <NuxtImg
              class="logo"
              src="/ibpap-logo.png"
              alt="IBPAP Logo"
              width="150"
              height="63"
              sizes="150px"
              format="webp"
              densities="1x 2x"
              quality="100"
            />
          </NuxtLink>
        </div>
        <ul class="navbar__menu">
          <li><NuxtLink to="/about-us">ABOUT US</NuxtLink></li>
          <li><NuxtLink to="/investors">INVESTORS</NuxtLink></li>
          <li><NuxtLink to="/members">MEMBERS</NuxtLink></li>
          <li><NuxtLink to="/policies">POLICIES</NuxtLink></li>
          <li><NuxtLink to="/talent-hub">TALENT HUB</NuxtLink></li>
          <li><NuxtLink to="/knowledge-hub">KNOWLEDGE HUB</NuxtLink></li>
          <li class="dropdown">
            <NuxtLink to="#">
              MORE
              <Icon name="heroicons:chevron-down" class="icon-chevron-down" />
            </NuxtLink>
          </li>
        </ul>
        <div class="navbar__actions">
          <button class="btn-search">
            <Icon name="heroicons:magnifying-glass-solid" />
          </button>
          <button class="btn-user">
            <Icon name="heroicons:user-circle" />
          </button>
          <NuxtLink to="/become-member" class="btn btn-primary"
            >BE A MEMBER</NuxtLink
          >
        </div>
      </nav>
    </div>
  </header>
</template>
