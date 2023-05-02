export default interface IMatrix{
    instance: number[][];

    floydWarshall(matrix: number[][]): void;
}