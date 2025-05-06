// tailwind config
import type { Config } from 'tailwindcss'

const config: Config = {

    theme: {
        extend: {
            colors: {
                brand: {
                    'DEFAULT': '#001a7f',
                    '50': '#e4f4ff',
                    '100': '#cfeaff',
                    '200': '#a8d6ff',
                    '300': '#74b9ff',
                    '400': '#3e89ff',
                    '500': '#1358ff',
                    '600': '#0044ff',
                    '700': '#0044ff',
                    '800': '#003de4',
                    '900': '#0029b0',
                    '950': '#001a7f',
                },
                secondary: {
                    'DEFAULT': '#ffd609',
                    '50': '#fefde8',
                    '100': '#fffcc2',
                    '200': '#fff687',
                    '300': '#ffe943',
                    '400': '#ffd609',
                    '500': '#efbe03',
                    '600': '#ce9300',
                    '700': '#a46804',
                    '800': '#88510b',
                    '900': '#734210',
                    '950': '#432205',
                },
             dark:'#040b26',
             dark2:'#0a1231',
             dark3:'#bbcbd7',

            },
            container: {
                center: true,
                padding: '2rem',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['PT Mono', 'monospace'],
            },
        },
    },
    plugins: [],
}

export default config