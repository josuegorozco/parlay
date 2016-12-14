export default {
    test: /\.(jpe?g|png|gif|svg)$/i,
    loaders: [
        'file-loader',
        {
            loader: 'image-webpack-loader',
            query: {
                progressive: true,
                optimizationLevel: 7,
                interlaced: false,
                pngquant: {
                    quality: '65-90',
                    speed: 4,
                },
            },
        },
    ],
};
