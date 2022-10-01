package com.tutorial;

public class Main {
    public static void main(String[] args){
        int a,b,c,d;
        for (a = 1; a <=10; a++) {
            //outerloop
            for ( b = 9; b >= a; b--) {
                //inner loop no 1
                System.out.print(" ");
                //Untuk memberikan spasi ke samping
            }

            for ( c = 1; c <=a; c++) {
                //inner loop no 2
                System.out.print("*");
                //menampilkan bintang dari kanan ke kiri
            }
            for ( d = 1; d <= a-1; d++) {
                //inner loop no 3
                System.out.print("*");
                //menampilkan bintang dari kiri ke kanan
            }
            System.out.println();
            //Memberikan baris baru atau enter pada
        }
    }
}