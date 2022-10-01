package com.tutorial;

import java.util.Arrays;

public class Main {

    public static void main(String[] args){

        int arrayAngka [] = {1,2,3,4,5,6,7,8,9};
        System.out.println(Arrays.toString(arrayAngka));

        // looping standar

        System.out.println(); // memberikan enter
        System.out.println("looping standar");
        for (int i = 0; i < 9; i++){
            System.out.println("index ke-" + i + " adalah = " + arrayAngka[i]);
        }
        // looping dengan property array

        System.out.println(); // memberikan enter
        System.out.println("looping dengan properti length");
        for (int i = 0; i < arrayAngka.length; i++){
            System.out.println("index ke-" + i + " adalah = " +arrayAngka[i]);
        }

        // looping khusus untuk collection <- array

        System.out.println(); // memberikan enter
        System.out.println("looping array dengan for each");
        for (int angka : arrayAngka){
            System.out.println("angka pada looping ini = " + angka);
        }

    }

}
