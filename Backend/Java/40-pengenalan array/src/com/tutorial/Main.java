package com.tutorial;

import java.util.Arrays;

public class Main {

    public static void main(String[] args){

        // asignment
        // tipe data[] nama {komponen}

        System.out.println("assignment array");

        //      array =       0  1  2  3
        //                    |  |  |  |
        int[] arrayInteger = {1, 2, 3, 4};

        arrayInteger[2] = 5; // bisa dirubah nilainya secara langsung
        // maka indeks ke-2 yang tadinya nilainya 3 berubah menjadi 5
        
        System.out.println(arrayInteger[0]);
        System.out.println(arrayInteger[1]);
        System.out.println(arrayInteger[2]);
        System.out.println(arrayInteger[3]);


        System.out.println(); // memberikan enter


        //deklarasi
        // tipe data[] nama = new int [jumlah arrray]

        System.out.println("deklarasi array");

        float[] arrayFloat = new float[5];
        arrayFloat[3] = 11.3f;

        System.out.println(arrayFloat[0]);
        System.out.println(arrayFloat[1]);
        System.out.println(arrayFloat[2]);
        System.out.println(arrayFloat[3]);
        System.out.println(arrayFloat[4]);


        System.out.println(); // memberikan enter


        System.out.println(Arrays.toString(arrayInteger));
        System.out.println(Arrays.toString(arrayFloat));

    }

}
