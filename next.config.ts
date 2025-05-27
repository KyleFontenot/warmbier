import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
	/* config options here */
	serverExternalPackages: ["./src/db/seasonchanges.sqlite"],
	turbopack: {
		resolveAlias: {
			components: path.resolve(__dirname, "./src/components"),
			db: path.resolve(__dirname, "./src/db"),
		},
	},
};

export default nextConfig;
