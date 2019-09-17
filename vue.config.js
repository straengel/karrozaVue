module.exports = {
    chainWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            config.plugin('html').tap(args => {
                args[0].minify.removeAttributeQuotes = false;
                return args;
            })
        }
    }
};
// module.exports = {
//     chainWebpack: config => {
//         config.module
//             .rule('images')
//             .use('url-loader')
//             .loader('url-loader')
//             .tap(options => Object.assign(options, { limit: 10240 }))
//     }
// }