"use strict";
const inf = Number.POSITIVE_INFINITY;
const matrix = [
    [0, inf, -2, inf],
    [4, 0, 3, inf],
    [inf, inf, 0, 2],
    [inf, -1, inf, 0]
];
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
        for (let k = 0; k < matrix.length; k++) {
            if (matrix[j][k] > matrix[j][i] + matrix[i][k]) {
                matrix[j][k] = matrix[j][i] + matrix[i][k];
            }
        }
    }
}
