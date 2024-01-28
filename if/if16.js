let n = parseInt(prompt("Butun son kiriting (0 < n < 10000):"));

// n ni stringga aylantiramiz va har bir raqamni yig'indini hisoblaymiz
let n_str = n.toString();
let totalSum = 0;

for (let i = 0; i < n_str.length; i++) {
    totalSum += parseInt(n_str[i]);
}

console.log(`${n} ning raqamlari yig'indisi: ${totalSum}`);
