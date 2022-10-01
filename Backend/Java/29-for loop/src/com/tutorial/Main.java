package com.tutorial;

public class Main {
    public static void main(String[] args){

        // for loop

//        for (inisialisasi;kondisi;step nilai){
//            aksi
//        }

        System.out.println("ini adalah awal program");

        System.out.println("loop pertama");
        for (int nilai = 0; nilai <= 10; nilai++){
            System.out.println("for loop ke" + nilai);
        }

        System.out.println("loop kedua");
        for (int nilai = 0; nilai <10; nilai++){
            System.out.println("for loop ke" + nilai);
        }

        for (int nilai = 5; nilai >=-100; nilai--){
            System.out.println("for loop ke" + nilai);
        }

        int nilai = 0;
        for (;nilai >-50; nilai++){
            System.out.println("for loop ke" + nilai);
        }

        System.out.println("ini adalah akhir program");

    }
}
