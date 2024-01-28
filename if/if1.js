let a = parseInt(prompt("a ni kiriting (butun son):"));
let b = parseInt(prompt("b ni kiriting (butun son):"));
let c = parseInt(prompt("c ni kiriting (butun son):"));

// a, b, va c ni taqqoslash
if (a <= b && a <= c) {
    console.log(`${a} eng kichik son`);
} else if (b <= a && b <= c) {
    console.log(`${b} eng kichik son`);
} else {
    console.log(`${c} eng kichik son`);
}
