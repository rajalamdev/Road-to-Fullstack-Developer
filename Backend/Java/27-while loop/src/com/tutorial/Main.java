package com.tutorial;

public class Main {
    public static void main(String[] args){

//        while (kondisi){
//            aksi
//        }
        int a = 0;
        boolean kondisi = true;

        System.out.println("awal program");

        while (kondisi){
            System.out.println("while loop ke-" + a);

            if (a == 999999999){
                kondisi = false;
            } a++;
        }
        System.out.println("akhir program");
    }
}
