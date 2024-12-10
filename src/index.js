import { PoolProtocolGitHub } from '../github-mcp/index.js';

async function main() {
    const github = new PoolProtocolGitHub();
    await github.initialize();
    console.log('Pool Protocol initialized');
}

main().catch(console.error);
