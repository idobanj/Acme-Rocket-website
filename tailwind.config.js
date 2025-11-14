/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
    content: ['./src/**/*.{html,js}'],
    theme: {
        extend: {
            screens: {
                widescreen: {raw: '(min-aspect-ratio: 3/2)'},
                tallscreen: {raw: '(min-aspect-ratio: 3/2)'},
            },
        },
    },
    plugins: [],
};
