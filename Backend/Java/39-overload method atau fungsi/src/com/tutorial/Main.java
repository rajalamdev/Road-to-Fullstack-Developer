package com.tutorial;

public class Main {

    public static void main(String[] args){

        int hasilInteger;
        hasilInteger = tambah(5, 5);
        printAngka(hasilInteger);

        float hasilFloat;
        hasilFloat = tambah(5.5f, 5.5f); // f = float
        printAngka(hasilFloat);

        hasilFloat = tambah(6, 6.5f); // bilangan int + bilangan float
        printAngka(hasilFloat);

        hasilFloat = tambah(5, 1.5f, 2.1f); // int + float + float
        printAngka(hasilFloat);

        printAngka(14);
        printAngka(15.5f); // f = float
        printAngka(16.5d); // d = double
        printAngka(17);

    }

    private static float tambah(int angkaInteger1, float angkaFloat1, float angkaFloat2){
        return (angkaInteger1 + angkaFloat1) * angkaFloat2;
    }

    private static float tambah(int angkaInteger1, float angkaFloat1){
        return angkaInteger1 + angkaFloat1;

    }

    private static float tambah(float angkaFloat1, float angkaFloat2){
        return angkaFloat1 + angkaFloat2;

    }

    private static int tambah(int angkaInteger1, int angkaInteger2){
        return angkaInteger1 + angkaInteger2;

    }

    private static void printAngka(double angkaDouble){
        System.out.println("angka ini adalah double dengan nilai = " + angkaDouble);

        System.out.println("\n"); // memberikan enter dua kali

    }

    private static void printAngka(float angkaFloat){
        System.out.println("angka ini adalah float dengan nilai = " + angkaFloat);
        System.out.println("\n"); // memberikan enter dua kali

    }

    private static void printAngka(int angkaInteger){
        System.out.println("angka ini adalah integer dengan nilai = " + angkaInteger);
        System.out.println("\n"); // memberikan enter dua kali

    }

}
