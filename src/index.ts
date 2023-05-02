import Matrix from "./resources/matrix"

const matrix = new Matrix();

const inf: number = Number.POSITIVE_INFINITY
const newMatrix: number[][] = [
    [0, inf, -2, inf],
    [4, 0, 3, inf],
    [inf, inf, 0, 2],
    [inf, -1, inf, 0]
];

matrix.instance = newMatrix;
console.table(matrix.floydWarshall(matrix.instance));
