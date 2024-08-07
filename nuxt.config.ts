// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-04-03",
    runtimeConfig: {
        public: {
            apiBaseUrl: process.env.API_BASE_URL,
            storage: process.env.STORAGE_BASE_URL,
        }
    },
    devtools: { enabled: true },
    css: ['~/assets/main.css'],
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
    googleFonts: {
        // declare your google fonts here
        families: {
            Poppins: [200, 400, 600, 700, 900],
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
        'webpack:config': (configs) => {
            configs.forEach((config) => {
                if (config.name === 'client') {
                    config.plugins = config.plugins || [];
                    config.plugins.push(
                        new (require('webpack').PrefetchPlugin)({
                            context: __dirname,
                            request: './components/pages/home/FrameOne.vue'
                        }),
                    );
                }
            });
        },
        "build:manifest": (manifest) => {
            // Iterate over all entries in the manifest
            for (const [key, entry] of Object.entries(manifest)) {
                // console.log(key, entry);
                if (entry.resourceType === "script") {
                    entry.prefetch = false;
                    entry.preload = false;
                }
            }
            // Add FrameOne.vue to prefetch
            if (manifest['components/pages/home/FrameOne.vue']) {
                manifest['components/pages/home/FrameOne.vue'].prefetch = true;
            }
        },
    },
});
