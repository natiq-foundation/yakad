import localFont from "@next/font/local";

export const HafsUthmanicKufi = localFont({
    src: [
        {
            path: '../assets/fonts/kufi.ttf',
            weight: '400',
            style: 'normal',
        },
    ],
    variable: '--yakad-font-kufi',
});

export const HafsUthmanicNaskh = localFont({
    src: [
        {
            path: '../assets/fonts/naskh.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../assets/fonts/naskhBold.ttf',
            weight: '700',
            style: 'normal',
        },
    ],
    variable: '--yakad-font-alnaskh',
});


