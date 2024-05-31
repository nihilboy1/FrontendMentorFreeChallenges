/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
      unoptimized: true, // Adicione esta linha para garantir que as imagens sejam servidas como estão
    },
  };
  
  export default nextConfig;