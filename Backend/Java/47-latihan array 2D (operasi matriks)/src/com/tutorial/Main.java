package com.tutorial;

import java.util.Arrays;

public class Main {

    public static void main(String[] args) {

        int[][] matrik_a = {
                {1, 2, 3},
                {4, 5, 6},
                {7, 8, 9}
        };

        int[][] matrix_b = {
                {11, 12, 13},
                {14, 15, 16},
                {17, 18, 19}
        };
        printArray(matrik_a);
        printArray(matrix_b);

        int[][] hasilTambah = tambah(matrik_a, matrix_b);
        printArray(hasilTambah);

        // perkalian matrix
        int[][] matrix_c = {
                {1, 2},
                {3, 4},
        };

        int[][] matrix_d = {
                {11, 12},
                {13, 14}
        };

        int[][] hasilKali = kali(matrix_c, matrix_d);
        printArray(hasilKali);

    }
    private static int[][] kali(int[][] matrix_1, int[][] matrix_2){
        int baris_c = matrix_1.length;
        int kolom_c = matrix_1[0].length;

        int baris_d = matrix_2.length;
        int kolom_d = matrix_2[0].length;

        // jika a . b  maka jumlah baris akan mengikuti matrix a,
        // kolom akan mengikuti kolom b

        int[][] kali = new int[baris_c][kolom_d];

        int buffer;
        for(int i = 0; i < baris_c; i++){
            for(int j = 0; j < kolom_c; j++){
                buffer = 0;
                for(int k = 0; k < kolom_d; k++){
                    buffer += matrix_1[i][k] * matrix_2[k][j];
                }
                kali[i][j] = buffer;
            }
        }
        return  kali;
    }
    private static int[][] tambah(int[][] matrix_1, int[][] matrix_2){
        int baris_1 = matrix_1.length;
        int kolom_1 = matrix_1[0].length;

        int baris_2 = matrix_2.length;
        int kolom_2 = matrix_2[0].length;

        int[][] hasil = new int[baris_1][kolom_1];

        if(baris_1 == baris_2 && kolom_1 == kolom_2){

            for(int i = 0; i < baris_1; i++){
                for(int j = 0; j < kolom_1; j++){
                    hasil[i][j] = matrix_1[i][j] + matrix_2[i][j];
                }
            }
        } else {
            System.out.println("jumlah baris dan kolom tidak sama");
        }
        return hasil;
    }
    private static void printArray(int[][] dataArray){
        int baris = dataArray.length;
        int kolom = dataArray[0].length;

        for(int i = 0; i < baris; i++){
            System.out.print("[");
            for(int j = 0; j < kolom; j++){
                System.out.print(dataArray[i][j]);

                if(j < (kolom - 1)){
                    System.out.print(",");
                } else {
                    System.out.print("]");
                }
            }
            System.out.print("\n");
        }
        System.out.print("\n");
    }
}
