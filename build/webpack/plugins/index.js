import dev from './index.dev';
import production from './index.production';

export default isProduction => (isProduction ? production : dev);
