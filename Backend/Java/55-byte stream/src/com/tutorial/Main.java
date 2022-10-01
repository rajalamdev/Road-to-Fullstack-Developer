package com.tutorial;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

public class Main {

    public static void main(String[] args) throws IOException {

        FileInputStream fileInput = null;
        FileOutputStream fileOutput = null;

        // membuka file
        fileInput = new FileInputStream("input.txt");

        // membaca file
        int data = fileInput.read();
        while(data != -1){
            System.out.println((char)data);
            data = fileInput.read();
        }
        // menutup file
        fileInput.close();

        // salah satu contoh skenario program pembukaan file

        try {
            // membuka file
            fileInput = new FileInputStream("input2.txt");
            fileOutput = new FileOutputStream("output2.txt");

            // membaca file
            int buffer = fileInput.read();

            // menulis file

            while(buffer != -1){
                fileOutput.write(buffer);
                buffer = fileInput.read();
            }

        } finally {
            if (fileInput != null){
                fileInput.close();
            }

            if (fileOutput != null){
                fileOutput.close();
            }

        }

        // try with resources
        try(FileInputStream in = new FileInputStream("input.txt");
            FileOutputStream out = new FileOutputStream("output.txt")
        ){

            // membaca file
            int data2 = in.read();

            while(data2 != -1){
                out.write((char)data2);
                data2 = in.read();
            }

        }

    }
}
