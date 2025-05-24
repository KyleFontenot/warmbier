import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
	/* config options here */
	turbopack: {
		resolveAlias: {
			components: path.resolve(__dirname, "./src/components"),
		},
	},
};

export default nextConfig;
