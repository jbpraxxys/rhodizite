<template>
  <footer class="footer">
    <div class="footer__content">
      <div class="footer__logo">
        <NuxtImg
          src="/ibpap-logo.png"
          alt="IBPAP Logo"
          width="150"
          height="63"
          loading="lazy"
          decoding="async"
          sizes="150px"
          format="webp"
          densities="1x 2x"
          quality="100"
        />
        <p class="footer__address">
          {{ footerData.address }}
        </p>
      </div>
      <div class="footer__links">
        <div
          v-for="(column, index) in footerData.footerColumns"
          :key="index"
          class="footer__column"
        >
          <h3>{{ column.title }}</h3>
          <ul>
            <li v-for="link in column.links" :key="link.text">
              <NuxtLink :to="link.url">{{ link.text }}</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer__partners">
        <h3>{{ footerData.partnersTitle }}</h3>
        <div class="footer__partner-logos">
          <NuxtImg
            v-for="partner in partners"
            :key="partner.name"
            :src="partner.logo"
            :alt="`${partner.name} logo`"
            width="50"
            height="30"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </div>
    <div class="footer__bottom">
      <p class="footer__copyright">{{ footerData.copyright }}</p>
      <div class="footer__social">
        <NuxtLink
          v-for="social in footerData.socialLinks"
          :key="social.name"
          :to="social.url"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon :name="social.icon" />
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>

<script setup>
const { data: footerData } = await useFetch("/api/footer", {});
</script>
