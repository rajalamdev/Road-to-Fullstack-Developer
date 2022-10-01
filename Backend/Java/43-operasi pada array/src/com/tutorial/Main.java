package com.tutorial;

import java.util.Arrays;

public class Main {

    public static void main(String[] args) {

        int[] arrayAngka1 = {1,2,3,4,5};

        // merubah array menjadi string
        System.out.println("\n merubah array menjadi string \n ============================");
        printArray(arrayAngka1);

        // mengkopi array
        System.out.println("\n merubah array menjadi string \n ============================");
        int[] arrayAngka2 = new int[5];
        printArray(arrayAngka1);
        printArray(arrayAngka2);
        System.out.println("\n mengkopi dengan loop \n ============================");

        for(int i = 0; i < arrayAngka1.length; i++){
            arrayAngka2[i] = arrayAngka1[i];
        }
        // mengkopi array dari arrayAngka1 meskipun address nya berbeda
        printArray(arrayAngka1);
        System.out.println(arrayAngka1);
        printArray(arrayAngka2);
        System.out.println(arrayAngka2);

        System.out.println("\n mengkopi dengan copy0f \n ============================");
        int[] arrayAngka3 = Arrays.copyOf(arrayAngka1, 5);
        // mengkopi array dari arrayAngka1 meskipun address nya berbeda
        printArray(arrayAngka1);
        System.out.println(arrayAngka1);
        printArray(arrayAngka3);
        System.out.println(arrayAngka3);

        System.out.println("\n mengkopi dengan copy0fRange \n ============================");
        int[] arrayAngka4 = Arrays.copyOfRange(arrayAngka1, 2, 5);
        // mengkopi array dengan copyOfRange
        System.out.println(arrayAngka1);
        printArray(arrayAngka1);
        System.out.println(arrayAngka1);
        printArray(arrayAngka4);
        System.out.println(arrayAngka4);

        // fill array
        System.out.println("\n merubah array menjadi string \n ============================");
        int[] arrayAgnka5 = new int[10];
        printArray(arrayAgnka5);
        Arrays.fill(arrayAgnka5, 5);
        printArray(arrayAgnka5);

        // komparasi array
        System.out.println("\n komparasi array \n ============================");
        int[] arrayAngka6 = {1,2,3,4,5};
        int[] arrayAngka7 = {1,2,3,4,5};
        // membandingkan 2 buah array apakah sama atau beda(true or false)
        // ada 2 cara, cara yang ke 1 lebih simpel dibanding dengan cara ke 2

        // cara ke 1
        System.out.println(Arrays.equals(arrayAngka6, arrayAngka7));

        // cara ke 2
        if (Arrays.equals(arrayAngka6, arrayAngka7)){
            System.out.println("array ini sama");
        } else {
            System.out.println("array ini beda");
        }

        // mengecek array mana yang paling besar
        System.out.println("\n mengecek array yang paling besar \n ============================");
        // 0 = sama
        System.out.println(Arrays.compare( arrayAngka6, arrayAngka7));

        // mengecek index mana yang berbeda
        // -1 = tidak ada yang berbeda (sama)
        System.out.println("\n mengecek index yang berbeda \n ============================");
        System.out.println(Arrays.mismatch(arrayAngka6, arrayAngka7));

        // sort array
        System.out.println("\n mensort array agara nilai nya berurutan \n ============================");
        int[] arrayAngka8 = {4,34,64,67,75,45,32,1,2,3,5,6,7,8,9};
        Arrays.sort(arrayAngka8);
        printArray(arrayAngka8);

        // search array
        System.out.println("\n mensearch nilai array ada di index ke berapa \n ============================");
        // sebelum search array harus dilakukan sort array terlebih dahulu (ada di line-82)
        int angka = 34;
        int posisi = Arrays.binarySearch(arrayAngka8, angka);
        printArray(arrayAngka8);
        System.out.println("angka " + angka + " ada di idex ke-" + posisi);

        /* tugas -> sorting array kebalik, operasi aritmatika dua buah array,
        * menggabungkan 2 buah array */

    }
    private static void printArray(int[] dataArray){
        System.out.println(" array = " + Arrays.toString(dataArray));
    }

}
