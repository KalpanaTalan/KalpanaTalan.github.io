/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export for GitHub Pages: every page is built ahead of time into `out/`.
  output: "export",
  // GitHub Pages serves folders, so /projects/paperless/ maps to its index.html.
  trailingSlash: true,
  // No image server on GitHub Pages; images are served as they are.
  images: { unoptimized: true }
};

export default nextConfig;
