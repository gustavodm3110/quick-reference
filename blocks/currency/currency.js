export default function decorate(block) {
    const rows = [...block.children];
    [...block.children].forEach((row, r) => {
        [...row.children].forEach((col, c) => {
            console.log(`r = ${r}, c = ${c}`)
        });
    });
}