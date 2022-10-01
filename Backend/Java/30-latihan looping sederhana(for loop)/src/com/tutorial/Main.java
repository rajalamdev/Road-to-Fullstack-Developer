package com.tutorial;

import java.util.*;

public class Main {
    public static void main(String[] args){
        //latihan looping sederhana (for loop)

        int nilai_awal, nilai_akhir, total;
        Scanner inputUser = new Scanner(System.in);

        System.out.print("masukan nilai awal: ");
        nilai_awal = inputUser.nextInt();
        System.out.print("masukan nilai akhir: ");
        nilai_akhir = inputUser.nextInt();

        for (total = 0; nilai_awal <= nilai_akhir; nilai_awal++){
            total = total + nilai_awal;
            System.out.println("ditambah " + nilai_awal + " menjadi " + total);
        }

    }
}
