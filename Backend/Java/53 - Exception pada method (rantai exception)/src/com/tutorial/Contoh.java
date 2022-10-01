package com.tutorial;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;

public class Contoh {

    public static void main(String[] args) throws IOException {

        FileInputStream inputFile = new FileInputStream("input.txt");
        System.out.println((char)inputFile.read());

        System.out.println("akhir dari program");

    }

}
