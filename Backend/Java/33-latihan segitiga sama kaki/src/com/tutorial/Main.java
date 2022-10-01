package com.tutorial;

public class Main {
    public static void main(String[] args) {

        for (int i = 1; i <= 5; i++){ // space ke bawah
            System.out.println();
            for (int j = 1; j <= 5; j++){ // space ke samping
                System.out.print("* ");
            }
        }

        System.out.println();

        for (int i = 1; i <= 5; i++){
            System.out.println();
            for (int j = 1; j <= i; j++){
                System.out.print("* ");
            }
        }

        System.out.println("\n");

        for (int i = 1; i <= 6; i++) {
            for (int j = 5; j >= i; j--) { // nilai j = space dari kiri ke kanan
                System.out.print(" ");
            }
            for (int k = 1; k <= i; k++) {
                System.out.print("*");
            }
            for (int l = 1; l <= i-1; l++) {
                System.out.print("*");
            }
            System.out.println();
        }

    }
}


