module.exports = {
    head: [
        ['link', {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            href: '/images/favicon-32x32.png'
        }],
        ['link', {
            rel: 'icon',
            type: 'image/png',
            sizes: '16x16',
            href: '/images/favicon-16x16.png'
        }],
        ['link', {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            href: '/images/apple-touch-icon.png'
        }],
        ['link', {
            rel: 'mask-icon',
            color: '#5bbad5',
            href: '/images/safari-pinned-tab.svg'
        }],
        ['link', {
            rel: 'manifest',
            href: '/images/manifest.json'
        }]
    ],
    title: "Fatkid at Heart",
    description: "Let's make beautiful food babies together.",
    themeConfig: {
        logo: "/images/fatkid-at-heart-logo_text.svg",
        nav: [
            // { text: "Home", link: "/" },
            {
                text: "Recipes", link: "/recipes/",
                items: [
                    { text: "Food", link: "/recipes/food/" },
                    { text: "Drinks", link: "/recipes/drinks/" }
                ]
            },
            // { text: "Techniques", link: "/techniques/" },
            // { text: "Tools", link: "/tools/" },
        ],
        sidebar: "auto"
        // sidebar: {
        //     "/recipes/" : [
        //         "",
        //         "Food",
        //         "Drinks"
        //     ]
        // }
    },
    extend: "@vuepress/theme-default",
    plugins: [
        [
            '@vuepress/google-analytics',
            {
                'ga': 'UA-125075417-1'
            },
            '@vuepress/back-to-top'
        ]
    ]
    [
        '@vuepress/pwa', {
            serviceWorker: true,
            updatePopup: true
        }
    ]
}
