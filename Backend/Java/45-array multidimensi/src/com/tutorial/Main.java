package com.tutorial;

import java.util.Arrays;

public class Main {

    public static void main(String[] args) {

        // cara membuat array 2 dimensi dengan assignment

        int[][] array_2D = {
                {1,2,3},
                {4,5,6}
        };

        printArray(array_2D);

        // cara memm=buat array 2 dimensi dengan deklarasi
        // new int[baris][kolom]

        int[][] arrayAngka = new int[3][2];
        printArray(arrayAngka);

        // looping lengkap secara manual

//        for(int i = 0; i < arrayAngka.length; i++){
//            System.out.print("[");
//            for(int j = 0; j < arrayAngka[i].length; j++){
//                System.out.print(arrayAngka[i][j] + ",");
//            }
//            System.out.print("]\n");
//        }

        // looping foreach


//        for (int[] baris: arrayAngka) {
//            System.out.print("[");
//            for(int angka: baris){
//                System.out.print(angka + ",");
//            }
//            System.out.print("]\n");
//        }

        // array secara manual, untuk pembuktian

        int[][] array_2D_2 = {
                {1,2,3,4,5},
                {6,7,8,9,10},
                {11,12,13,14,15}
        };
        printArray(array_2D_2);


    }
    private static void printArray(int[][] dataArray){
        System.out.print("\n"); // memberikan enter
        // cara ke 1
//        System.out.println(Arrays.deepToString(dataArray)); // deep = masuk bagian dalam array

        // cara ke 2
//        for(int i = 0; i < dataArray.length;i++){
//            System.out.println(Arrays.toString(dataArray[i]));
//
//        }

        // cara ke 3
        for (int[] baris:dataArray) {
            System.out.print("[");
            for(int angka: baris){
                System.out.print(angka + ",");
            }
            System.out.print("]\n");
        }

    }

}
