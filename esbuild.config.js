// esbuild.config.js

const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['src/index.jsx'],
  bundle: true,
  minify: true,
  sourcemap: true,
  loader: {
    '.js': 'jsx', // Enable JSX support
    '.css': 'file',
  },
  outfile: 'serve/bundle.js',
  define: {
    'process.env.NODE_ENV': '"production"', // Define NODE_ENV for React production builds
  },
  jsxFactory: 'React.createElement', // Specify the JSX factory function (for React)
  jsxFragment: 'React.Fragment', // Specify the JSX fragment component (for React)
  format: 'esm', // Output format (ES modules)
  platform: 'browser', // Target platform (browser)
  watch: {
    onRebuild(error, result) {
      if (error) console.error('Build failed:', error);
      else console.log('Build succeeded:', result);
    },
  },
}).catch(() => process.exit(1));
