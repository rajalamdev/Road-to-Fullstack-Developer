package com.tutorial;

import java.util.Arrays;

public class Main {

    public static void main(String[] args){

        int[] arrayAngka1 = {1,2,3,4,5,6,7,8,9};
        int[] arrayAngka2 = new int[9];


        System.out.println(arrayAngka1);
        System.out.println(arrayAngka2);

        System.out.println(); // memberikan enter

        arrayAngka2 = arrayAngka1;
        System.out.println(arrayAngka1);
        System.out.println(arrayAngka2);

        System.out.println(); // memberikan enter

        System.out.println("array 1 -> " + Arrays.toString(arrayAngka1));
        System.out.println("array 2 -> " + Arrays.toString(arrayAngka2));

        System.out.println(); // memberikan enter

        arrayAngka1[0] = 500;
        arrayAngka2[4] = 1000;
        System.out.println("array 1 -> " + Arrays.toString(arrayAngka1));
        System.out.println("array 2 -> " + Arrays.toString(arrayAngka2));

        System.out.println(); // memberikan enter

        ubaharray(arrayAngka1);
        System.out.println("array 1 -> " + Arrays.toString(arrayAngka1));
        System.out.println("array 2 -> " + Arrays.toString(arrayAngka2));

    }
    // method yang argumen nya adalah reference, pass by reference. bukan passs by value
    private static void ubaharray(int[] dataArray){
        dataArray[0] = 125;
    }

}
