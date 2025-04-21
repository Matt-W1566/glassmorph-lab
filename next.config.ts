import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_ACTIONS || false;
const repoName = "glassmorph-lab";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubPages ? `/${repoName}` : "",
  assetPrefix: isGithubPages ? `/${repoName}/` : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
