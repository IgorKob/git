function myff(a, b) {
    return a.filter(el => el.include(b));
}
const a = [];
const b = [];

const total = 10000;

for (let i = 0; i < total; i++) {
    a.push(i);
    b.push(i + total);
}

console.time(total);
myff(a, b);
console.timeEnd(total);

// n  O(n2)
// 10k 103ms
// 30k 955ms