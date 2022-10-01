package com.tutorial;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Scanner;

public class Main {

    public static void main(String[] args){

        int[] array = {1,2,3,4};
        Scanner userInput = new Scanner(System.in);
        System.out.print("nilai array ke: ");
        int index = userInput.nextInt();

        FileInputStream fileInput = null;




        // exception handling (try, catch, finally)

        System.out.println("handling out of bound");

        try{
            System.out.printf("index ke- %d, adalah %d\n",index, array[index]);
        } catch (Exception e){
            System.err.println(e);
        }
        System.out.println(); // memberikan enter



        // runtime error jika file tidak ada

        System.out.println("handling IO not found");

        try{
            fileInput = new FileInputStream("input.txt");
        } catch (IOException e){
            System.err.println(e);
        }
        System.out.println();



        // menggabungkan dua exception

        System.out.println("menggabungkan dua buah exception");

        try{
            System.out.printf("index ke-%d, adalah %d\n", index, array[index]);
            fileInput =  new FileInputStream("input.txt");
        } catch (ArrayIndexOutOfBoundsException e){
            System.err.println("index yang anda masukan tidak sesuai dengan jumlah array");
        } catch (IOException e){
            System.err.println("file tidak ditemukan");
        }



        // Finally

        System.out.println("\nmenambahkan finally");

        try{
            System.out.printf("index ke-%d, adalah %d\n", index, array[index]);
        } catch (ArrayIndexOutOfBoundsException e){
            System.err.println(e);
        } finally {
            System.out.println("finally");
        }

        
        System.out.println("akhir dari program");

    }

}
