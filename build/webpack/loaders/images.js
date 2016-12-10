export default {
    test: /\.(jpe?g|png|gif|svg)$/i,
    loaders: [
        'file-loader',
        'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}',
    ],
};
