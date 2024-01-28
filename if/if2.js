function ortadagiSonniTop(A, B, C) {
    if (A > B && A > C) {
        return B > C ? B : C;
    } else if (B > A && B > C) {
        return A > C ? A : C;
    } else if (C > A && C > B) {
        return A > B ? A : B;
    }
}

var A = parseInt(prompt("Birinchi sonni kiriting:"));
var B = parseInt(prompt("Ikkinchi sonni kiriting:"));
var C = parseInt(prompt("Uchinchi sonni kiriting:"));

var ortadagiSon = ortadagiSonniTop(A, B, C);
console.log("Eng ortadagi son:", ortadagiSon);