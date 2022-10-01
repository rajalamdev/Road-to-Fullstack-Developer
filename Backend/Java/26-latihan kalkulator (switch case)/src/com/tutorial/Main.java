package com.tutorial;

import java.util.*;

public class Main {
    public static void main(String[] args){
        // kalkulator sederhana switch case

        float a,b,hasil;
        String operator;

        Scanner inputUser = new Scanner(System.in);

        System.out.print("nilai a = ");
        a = inputUser.nextFloat();
        System.out.print("nilai operator = ");
        operator = inputUser.next();
        System.out.print("nilai b = ");
        b = inputUser.nextFloat();

        switch(operator) {
            case "+":
                //penjumlahan
                hasil = a + b;
                System.out.println("hasil penjumlahan = " + hasil);
                break;
            case "-":
                //pengurangan
                hasil = a - b;
                System.out.println("hasil pengurangan = " + hasil);
                break;
            case "*":
                //perkalian
                hasil = a * b;
                System.out.println("hasil perkalian = " + hasil);
                break;
            case "/":
                //pembagian
                    hasil = a / b;
                    System.out.println("hasil pembagian = " + hasil);
                    break;
            default:
                System.out.println("operator" + operator + "tidak ditemukan");
        }
    }
}
