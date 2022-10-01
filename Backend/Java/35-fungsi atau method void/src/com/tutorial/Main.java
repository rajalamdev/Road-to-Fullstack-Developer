package com.tutorial;

public class Main {
    public static void main(String[] args){

        // void itu artinya hampa atau kosong

        System.out.println(simpel());

        fungsivoid("apaan kek");

        selamatPagi("Raj Alam");

    }
    private static void selamatPagi(String nama){
        System.out.println("selamat pagi " + nama);
    }


    // fugngsi atau method tanpa kembalian
    private static void fungsivoid(String input){
        System.out.println(input);
    }

    /* fungsi atau method dengan kembalian sehingga menggunakan return
     untuk mengembalikan nilainya (10.0f) */
    private static float simpel(){
        return 10.0f;
    }
}