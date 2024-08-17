const esbuild = require('esbuild');

esbuild.build({
    entryPoints: ['src/index.tsx'],
    bundle: true,
    outdir:'dist',
    loader: {'.tsx': 'tsx'},
    define: {"process.env.NODE_ENV": "'development'"},
    sourcemap: true,
    watch: true,   
}).catch(() => process.exit(1));