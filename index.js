/**
 * Automatically hook babel into all node requires.
 */
require('babel/register')({
    optional: ['es7.asyncFunctions', 'es7.classProperties', 'es7.decorators']
});

require('dotenv').config();
/**
 * Intl APIs (ECMA-402) Polyfill.
 */
require('./src/utils/intlServerPolyfill');

/**
 * Start application server.
 */
require('./src/server');
/**
 * Get environment variables
 */
require('dotenv').config();
/**
 * In development, also start Webpack dev server.
 */
if (process.env.NODE_ENV === 'development') {
    require('./webpack/server');
}
