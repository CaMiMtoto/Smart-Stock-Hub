import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'primary': '#0A70B7',
                'secondary': '#F2F2F2',
                'danger': '#E3342F',
                'warning': '#F6993F',
                'info': '#2F8A9E',
                'light': '#F2F2F2',
                'success': '#38C172',
            }
        },
    },

    plugins: [forms],
};
