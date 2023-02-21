"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Problema_1_1 = require("../../../Busqueda.Binaria.01/03/Problema.1");
const Problema_2_1 = require("../../../Busqueda.Binaria.01/03/Problema.2");
test("Es cudrado perfecto? test 1", () => {
    let numero = 16;
    let objetivo = true;
    let salida = (0, Problema_1_1.es_cuadrado_perfecto)(numero);
    expect(objetivo).toBe(salida);
});
test("Es cudrado perfecto? test 2", () => {
    let numero = 14;
    let objetivo = false;
    let salida = (0, Problema_1_1.es_cuadrado_perfecto)(numero);
    expect(objetivo).toBe(salida);
});
test("Es cudrado perfecto? test 2", () => {
    let numero = 64;
    let objetivo = true;
    let salida = (0, Problema_1_1.es_cuadrado_perfecto)(numero);
    expect(salida).toBe(objetivo);
});
/* Distancia de 2 vectores */
test("encontar valor distancia test 1", () => {
    let vector_1 = [4, 5, 8];
    let vector_2 = [10, 9, 1, 8];
    let distancia = 2;
    let objetivo = 2;
    let salida = (0, Problema_2_1.encontar_valor_distancia)(vector_1, vector_2, distancia);
    expect(objetivo).toBe(salida);
});
test("encontar valor distancia test 2", () => {
    let vector_1 = [1, 4, 2, 3];
    let vector_2 = [-4, -3, 6, 10, 20, 30];
    let distancia = 3;
    let objetivo = 2;
    let salida = (0, Problema_2_1.encontar_valor_distancia)(vector_1, vector_2, distancia);
    expect(salida).toBe(objetivo);
});
test("encontar valor distancia test 3", () => {
    let vector_1 = [2, 1, 100, 3];
    let vector_2 = [-5, -2, 10, -3, 7];
    let distancia = 6;
    let objetivo = 1;
    let salida = (0, Problema_2_1.encontar_valor_distancia)(vector_1, vector_2, distancia);
    expect(salida).toBe(objetivo);
});
test("encontar valor distancia test 4", () => {
    let vector_1 = [-3, 10, 2, 8, 0, 10];
    let vector_2 = [-9, -1, -4, -9, -8];
    let distancia = 9;
    let objetivo = 2;
    let salida = (0, Problema_2_1.encontar_valor_distancia)(vector_1, vector_2, distancia);
    expect(salida).toBe(objetivo);
});
test("encontar valor distancia test 5", () => {
    let vector_1 = [
        -803, 715, -224, 909, 121, -296, 872, 807, 715, 407, 94, -8, 572, 90, -520,
        -867, 485, -918, -827, -728, -653, -659, 865, 102, -564, -452, 554, -320,
        229, 36, 722, -478, -247, -307, -304, -767, -404, -519, 776, 933, 236, 596,
        954, 464,
    ];
    let vector_2 = [
        817, 1, -723, 187, 128, 577, -787, -344, -920, -168, -851, -222, 773, 614,
        -699, 696, -744, -302, -766, 259, 203, 601, 896, -226, -844, 168, 126, -542,
        159, -833, 950, -454, -253, 824, -395, 155, 94, 894, -766, -63, 836, -433,
        -780, 611, -907, 695, -395, -975, 256, 373, -971, -813, -154, -765, 691,
        812, 617, -919, -616, -510, 608, 201, -138, -669, -764, -77, -658, 394,
        -506, -675, 523, 730, -790, -109, 865, 975, -226, 651, 987, 111, 862, 675,
        -398, 126, -482, 457, -24, -356, -795, -575, 335, -350, -919, -945, -979,
        611,
    ];
    let distancia = 37;
    let objetivo = 0;
    let salida = (0, Problema_2_1.encontar_valor_distancia)(vector_1, vector_2, distancia);
    expect(salida).toBe(objetivo);
});
