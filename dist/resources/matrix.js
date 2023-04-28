"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Matrix {
    constructor(instance) {
        this.instance = instance;
    }
    floydWarshall(matrix) {
        if (matrix) {
            for (let i = 0; i < matrix.length; i++) {
                for (let j = 0; j < matrix.length; j++) {
                    for (let k = 0; k < matrix.length; k++) {
                        if (matrix[j][k] > matrix[j][i] + matrix[i][k]) {
                            matrix[j][k] = matrix[j][i] + matrix[i][k];
                        }
                    }
                }
            }
            return matrix;
        }
        throw new Error('No matrix!');
    }
    logPaths(matrix) {
        console.table(matrix);
    }
}
exports.default = Matrix;
