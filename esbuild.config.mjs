import esbuild from 'esbuild';
import time from 'esbuild-plugin-time';

(async () => {

    // Configuración de esbuild
    const context = await esbuild.context({
        entryPoints: ['src/App.tsx'],
        outdir: 'public/dist/',
        bundle: true,
        sourcemap: true,
        minify: true,
        plugins: [
            time(),
        ]
    });

    // Inicia el servidor esbuild
    const {  port } = await context.serve({
        servedir: 'public',
        port: 3000
    });



    await context.watch()
    console.info(`Server started at http://localhost:${port}`);

})();
