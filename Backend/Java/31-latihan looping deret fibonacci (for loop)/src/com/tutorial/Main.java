package com.tutorial;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        // menghitung nilai deret fibonacci ke-n
        int fn, fn_1, fn_2, n;

        Scanner inputUser = new Scanner(System.in);
        System.out.print("mengambil nilai fibonacci ke- :");
        n = inputUser.nextInt();

        fn_2 = 0;
        fn_1 = 1;
        fn = 1;

        for(int i = 1; i <= n; i++){
            System.out.println("nilai ke - " + i + " adalah " + fn);
            fn = fn_1 + fn_2;
            fn_2 = fn_1;
            fn_1 = fn;
        }

    }
}


