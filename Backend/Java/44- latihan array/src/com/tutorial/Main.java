package com.tutorial;

import java.util.Arrays;

public class Main {

    public static void main(String[] args) {

        int[] array1 = {5,3,6,8,9};
        int[] array2 = {4,1,6,8,3};
        printArray(array1, "Array 1 = ");
        printArray(array2,  "Array 2 = ");

        // penjumlahan anatara 2 buah array

        int[] arrayHasil1 = arrayTambah(array1, array2);
        printArray(arrayHasil1, "\nhasil penjumlahan");

        // penggabungan dua buah array

        int[] arrayHasil2 = new int[array1.length + array2.length];
        for(int i = 0; i < array1.length; i++){
            arrayHasil2[i] = array1[i];
        } for(int i = 0; i < array2.length; i++){
            arrayHasil2[i + array1.length] = array2[i];
        }
        printArray(arrayHasil2, "hasil penggabungan");

        // sorting array

        Arrays.sort(arrayHasil2);
        printArray(arrayHasil2, "sorting array penggabungan");

        // sorting array dari belakang (reverse)

        reverse(arrayHasil2);
        printArray(arrayHasil2, "sorting array penggabungan (reverse)");
    }
    private static void reverse(int[] dataArray){
        Arrays.sort(dataArray);
        int buffer;
       for(int i = 0; i < dataArray.length/2; i++){
           buffer = dataArray[i];
           dataArray[i] = dataArray[(dataArray.length - 1) - i];
           dataArray[(dataArray.length - 1) - i] = buffer;
       }
    }
    private static int[] arrayTambah(int[] arrayInt1, int[] arrayInt2){
        int[] arrayHasil = new int[arrayInt1.length];
        for(int i = 0; i < arrayInt1.length; i++){
            arrayHasil[i] = arrayInt1[i] + arrayInt2[i];
        } return arrayHasil;
    }
    private static void printArray(int[] dataArray, String message){
        System.out.println(message + " = " + Arrays.toString(dataArray));
    }

}
