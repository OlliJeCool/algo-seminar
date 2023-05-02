import IMatrix from "../utils/interfaces/matrix.interface";

class Matrix implements IMatrix{
    public instance: number[][] = []



    floydWarshall(matrix: number[][]): number[][] {
        for(let i = 0; i < matrix.length; i++){
            for(let j = 0; j < matrix.length; j++){
                for(let k = 0; k < matrix.length; k++){
                    if(matrix[j][k] > matrix[j][i] + matrix[i][k]){
                        matrix[j][k] = matrix[j][i] + matrix[i][k]
                    }
                }
            } 
        }
        return matrix
    }
}


export default Matrix