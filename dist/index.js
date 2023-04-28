"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const matrix_1 = __importDefault(require("./resources/matrix"));
const inf = Number.POSITIVE_INFINITY;
const matrix = [
    [0, inf, -2, inf],
    [4, 0, 3, inf],
    [inf, inf, 0, 2],
    [inf, -1, inf, 0]
];
const mat = new matrix_1.default();
mat.instance = matrix;
mat.logPaths(mat.floydWarshall(mat.instance));
