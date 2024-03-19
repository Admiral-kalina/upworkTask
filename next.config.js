/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    images: {
        unoptimized: true
    },
    trailingSlash: true,
};


module.exports = {
    webpack(config) {
        config.module.rules.push({
                test: /\.svg$/,
                issuer: {
                    test: /\.(js|ts)x?$/,
                    // for webpack 5 use
                    // { and: [/\.(js|ts)x?$/] }
                },

                use: ['@svgr/webpack'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        );
        return config;
    },
};

module.exports = nextConfig;

