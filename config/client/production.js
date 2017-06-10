// App config the for production environment.
// Do not require this directly. Use ./src/config instead.
export default {
    app: {
        title: 'BananaCatCo',
        locale: {
            available: ['en', 'es'],
            default: 'en'
        }
    },
    api: {
        atlas: {
            baseUrl: 'http://bananacat.co/v1'
        }
    },
    googleAnalytics: {
        enabled: true,
        trackingId: 'UA-100816759-1', // LIVE Property
        options: {
            debug: false
        }
    },
    facebookPixel: {
        enabled: true,
        id: '247941852357863'
    },
    crisp: {
        enabled: true,
        websiteID: process.env.CRISP_WEBSITE_ID // TODO: This is still hardcoded in the vendor file
    },
    mailChimp: {
        signupFormPostURL: process.env.MAILCHIMP_SIGNUP_FORM_POST_URL
    },
    switchPayments: {
        enabled: true,
        environment: 'https://api.switchpayments.com/v2/',
        publicKey: process.env.SWITCH_PUBLIC_KEY
    }
};
