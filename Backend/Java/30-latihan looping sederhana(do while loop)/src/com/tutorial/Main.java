package com.tutorial;

import java.util.*;

public class Main {
    public static void main(String[] args){

        int nilai_awal, nilai_akhir, total;

        Scanner inputUser = new Scanner(System.in);
        System.out.print("masukan nilai awal: ");
        nilai_awal = inputUser.nextInt();
        System.out.print("masukan nilai akhir: ");
        nilai_akhir = inputUser.nextInt();

        total = 0;

        do {
            total = total + nilai_awal;
            System.out.println("ditambah " + nilai_awal + " menjadi " + total);
            nilai_awal++;
        } while (nilai_awal <= nilai_akhir);
    }
}
