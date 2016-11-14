import webpack from 'webpack';
import cssnext from 'postcss-cssnext';
import postcssFocus from 'postcss-focus';
import postcssReporter from 'postcss-reporter';
import fetch from './fetch';
import node from './node';
import namedModules from './named-modules';
import chunk from './chunk';

export default [
    fetch,
    node,
    namedModules,
    new webpack.LoaderOptionsPlugin({
        options: {
            // 'context' needed for css-loader see
            // https://github.com/mxstbr/react-boilerplate/pull/1032#issuecomment-249821676
            context: __dirname,
            postcss: () => [
                postcssFocus(), // Add a :focus to every :hover
                cssnext({ // Allow future CSS features to be used, also auto-prefixes the CSS...
                    browsers: ['last 2 versions', 'IE > 10'] // ...based on this browser list
                }),
                postcssReporter({ // Posts messages from plugins to the terminal
                    clearMessages: true
                })
            ]
        }
    }),
    chunk
];
