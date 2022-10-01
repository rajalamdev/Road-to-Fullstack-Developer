package com.tutorial;

import java.util.*;

public class Main {
    public static void main(String[] args){
        // menghitung nilai deret fibonacci ke-n
        int fn, fn_1, fn_2, n;

        Scanner inputUser = new Scanner(System.in);
        System.out.print("mengambil nilai fibonacci ke- :");
        n = inputUser.nextInt();

        fn_2 = 0;
        fn_1 = 1;
        fn = 1;

        int i = 1;
        while (i <= n){
            System.out.println("nilai ke- " + i + " adalah " + fn);
            i++;
            
            fn = fn_1 + fn_2;
            fn_2 = fn_1;
            fn_1 = fn;
        }

    }
}
