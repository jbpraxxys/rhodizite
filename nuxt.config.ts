// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-04-03",
    runtimeConfig: {
        public: {
            apiBaseUrl: process.env.API_BASE_URL,
            storage: process.env.STORAGE_BASE_URL,
            siteKey: process.env.RECAPTCHA_SITE_KEY,
        },
    },
    nitro: {
        compressPublicAssets: {
            gzip: true,
            brotli: true,
        },
        compression: {
            gzip: true,
            brotli: true,
        },
        routeRules: {
            "/**": {
                headers: {
                    "Cache-Control": "max-age=31536000, immutable",
                },
            },
        },
    },
    devtools: { enabled: false },
    css: ["~/assets/main.css"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    modules: [
        "@nuxtjs/google-fonts",
        "@nuxt/image",
        "nuxt-gtag",
        "@nuxtjs/seo",
        "nuxt-lazy-hydrate",
        "nuxt-schema-org",
        "@nuxt/icon",
    ],
    app: {
        head: {
            htmlAttrs: {
                lang: "en",
            },
            charset: "utf-8",
        },
    },
    image: {
        format: ['webp']
    },
    googleFonts: {
        // declare your google fonts here
        families: {
            Poppins: [400, 600, 700],
            "Alfa Slab One": [400],
            Gabarito: [900],
            Righteous: [400],
        },
        display: "fallback",
        preload: true,
        text: `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!"#$%&'()*+,—-.:?_<>/€`,
    },
    gtag: {
        id: "G-XXXXXXXXXX",
        enabled: false,
    },
    imports: {
        dirs: ["composables/**"],
    },
    ogImage: {
        enabled: false,
    },
    seoExperiments: {
        enabled: false,
    },
    hooks: {
        "build:manifest": (manifest) => {
            // Iterate over all entries in the manifest
            for (const [key, entry] of Object.entries(manifest)) {
                // console.log(key, entry);
                if (entry.resourceType === "script") {
                    entry.prefetch = false;
                    entry.preload = false;
                }
            }
        },
    },
});
