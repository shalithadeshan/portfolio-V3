module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                nunito: ['Nunito'],
                monospace: ['Space Mono'],
                cursive: ['Shalimar']
            },
            colors: {
                'primary-color': '#0A192F',
                'secondary-color': '#ffcb14',
                'light-color': '#E7E7E7',
                'dark-color': '#989898',
                'darkest-color': '#787878',
            }
        },
        variants: {
            extend: {},
        },
        plugins: [],
    }
}