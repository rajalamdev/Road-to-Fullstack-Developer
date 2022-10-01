package com.tutorial;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        int[] arrayData = {0,1,2,3};
        Scanner userInput = new Scanner(System.in);
        System.out.print("data ke-:");
        int indexInput =  userInput.nextInt();



        // Exception biasa

        System.out.println("Exception biasa");
        try{
            System.out.printf("data dari array ke-%d adalah %d\n\n", indexInput, arrayData[indexInput]);
        } catch (Exception e){
            System.err.println(e);
        }



        // Exception di dalam fungsi atau method

        System.out.println("Exception dalam fungsi");
        int data = ambildataArray(arrayData, indexInput);
        System.out.printf("data dari array ke-%d adalah %d\n\n", indexInput, arrayData[data]);



        // Exception throws by method

        System.out.println("Exception throws by method");
        int data2 = 0;

        try{
            data2 = ambilData(arrayData, indexInput);
        } catch (Exception e){
            System.err.println(e);
        }
        System.out.printf("data dari array ke-%d adalah %d\n\n", indexInput, arrayData[data2]);

        System.out.println("\n\nakhir dari program");
    }
    private static int ambilData(int[] array, int index){
        int hasil = array[index];
        return hasil;
    }

    private static int ambildataArray(int[] array, int index){
        int hasil = 0;
        try{
           hasil =  array[index];
        } catch (Exception e){
            System.err.println(e);
        }
        return hasil;
    }

}
