let sozlar = ['non', 'asal', 'banan', 'olma', 'aziza', 'Gul', 'mashina'];
let a = [];
let b = [];

for (let c of sozlar) {
    if (c.includes('n')) {
        a.push(c);
    } else {
        b.push(c);
    }
}

console.log("'n' harifi ishtirok etgan so'zlar:", a);
console.log("'n' haridi ishtirok etmagan so'zlar:", b);