import { build } from 'vite';

async function run() {
    try {
        await build({
            clearScreen: false,
            logLevel: 'error'
        });
    } catch (e) {
        console.log("=== VITE RUNTIME ERROR ===");
        console.log(e);
    }
}
run();
