// For local images, we reference them from public directory
// With vite-plugin-singlefile, assets referenced via import get inlined
// But public directory files are just served as-is

// We'll use direct path strings for public images - they'll be available at the served location
export const LOCAL_IMAGES = {
  planckPortrait: '/images/planck-portrait.jpg',
  planckYoung: '/images/planck-young.jpg',
  planckDesk: '/images/planck-desk.jpg',
  planckEinstein: '/images/planck-einstein.jpg',
  planckLegacy: '/images/planck-legacy.jpg',
  kielGermany: '/images/kiel-germany.jpg',
  blackbodySpectrum: '/images/blackbody-spectrum.jpg',
  quantumStaircase: '/images/quantum-staircase.jpg',
  uvCatastrophe: '/images/uv-catastrophe.jpg',
  nobelMedal: '/images/nobel-medal.jpg',
};
