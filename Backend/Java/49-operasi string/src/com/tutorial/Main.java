package com.tutorial;

import java.util.Scanner;
import java.lang.String;

public class Main {

    public static void main(String[] args) {

        String kalimat = "saya suka makan nasi";

        // mengambil komponen dari string

        System.out.println(kalimat.charAt(6));

        // mengambil substring

        String kata = kalimat.substring(10,15);
        System.out.println(kata);

        // concatenation (concat)

        String kalimat2 = "makan " + kata;
        System.out.println(kalimat2);

        kata = kata + " indomie";
        System.out.println(kata);

        // concat dengan non string

        int jumlah = 20;
        String kalimat3 = kata + " " + jumlah; // casting
        System.out.println(kalimat3);

        // lowercase dan uppercase

        System.out.println(kalimat.toUpperCase());
        System.out.println(kalimat.toLowerCase());

        // replace

        String kalimat4 = kalimat.replace("nasi", "ramen");
        System.out.println(kalimat4);

        // compare String

        String motor1 = "royal enfield himalayan";
        String motor2 = "kawasaki ninja";
        System.out.println(motor1.compareTo(motor2)); // klmnopqr, jarak antara huruf k dengan r = 7
        System.out.println(motor2.compareTo(motor1)); // jarak antara huruf r dengan k = -7

        String gorengan1 = "bakwan";
        String gorengan2 = "bala-bala";
        // karena "bakwan" dan "bala-bala" memiliki huruf awalan yang sama yaitu "b"
        // makan akan di cek huruf selanjutnya yaitu "a" dan "a"
        // karena "a" dan "a" huruf yang sama, maka di cek lagi huruf selanjutnya yaitu "k" dan "l"
        // karena huruf "k" dan "l" berbeda maka huruf itu yang akan di hitung jaraknya
        // klmnopqr
        // jarak dari huruf "l" dengan "k" = -1
        // jarak dari huruf "k" dengan "l" = 1
        System.out.println(gorengan1.compareTo(gorengan2));
        System.out.println(gorengan2.compareTo(gorengan1));

        // equality ( persamaan )

        String kataInput = "test"; // ini ada di string pool
//        String kataInput = new String("test"); // ini bukan string literal, dan tidak berada di string pool
        String kataTest = "test"; // ini juga ada di string pool

        System.out.println("\npersamaan pada lokasi string pool");

        if (kataInput == kataTest){
            System.out.println("sama");
        } else {
            System.out.println("tidak sama");
        }

        Scanner userInput = new Scanner(System.in);
        System.out.print("\nmengambil input string dari user: ");
        kataInput = userInput.next(); // tidak di string pool
        System.out.println("ini adalah input user: " + kataInput);

        if (kataInput.equals(kataTest)){
            System.out.println("sama");
        } else {
            System.out.println("tidak sama");
        }


    }

}
