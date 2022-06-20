/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = {
	webpack: (config, option) => {
		// Important: return the modified config
		// console.log(config.module.rules);
		config.module.rules.push({
			test: /\.(png|jpg|gif)$/i,
			use: [
				{
					loader: 'url-loader',
				},
			],
			type: 'javascript/auto',
		});
		return config;
	},
};
