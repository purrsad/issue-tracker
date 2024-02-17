/** @type {import('next').NextConfig} */
const nextConfig = {
	headers: async function () {
		return [
			{
				source: "/:path*",
				headers: [{ key: "referrer-policy", value: "no-referrer" }],
			},
		];
	},
};

module.exports = nextConfig;
