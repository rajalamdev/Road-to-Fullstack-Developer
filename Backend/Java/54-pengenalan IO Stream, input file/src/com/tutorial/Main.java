package com.tutorial;

import java.io.FileInputStream;
import java.io.IOException;

public class Main {

    public static void main(String[] args) throws IOException {

//        try {
//            FileInputStream FileInput = new FileInputStream("input.txt");
//        } catch (Exception e){
//            System.err.println(e);
//        }

        FileInputStream FileInput = new FileInputStream("input.txt");
        System.out.print((char) FileInput.read());
        System.out.print((char) FileInput.read());
        System.out.print((char) FileInput.read());
        System.out.print((char) FileInput.read());
        System.out.print((char) FileInput.read());
        System.out.print((char) FileInput.read());
        System.out.print((char) FileInput.read());
        System.out.print((char) FileInput.read());
        System.out.print((char) FileInput.read());

        /* Note: java -jar (name file) --> melihat output dengan console cmd/terminal (artifacts file)
                 java com.tutorial.Main --> melihat output dengan console cmd/terminal (Main File)
        **/

    }

}
