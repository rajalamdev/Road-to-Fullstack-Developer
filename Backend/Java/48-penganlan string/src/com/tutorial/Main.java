package com.tutorial;

import java.util.Arrays;

public class Main {

    public static void main(String[] args){

        // membuat String

        String kataString = "hallo";
        char[] kataChar = {'h', 'a', 'l', 'l', 'o'};

        // menampilkan String

        System.out.println(kataString);
        System.out.println(Arrays.toString(kataChar));

        // mengakses komponen String

        System.out.println("komponen pertama dari String = " + kataString.charAt(1));
        System.out.println("komponen pertama dari char[] = " + kataChar[0]);

        // merubah komponen di String
        // itu tidak bisa...kenapa?, karena String di java itu immutable

        kataChar[0] = 'c';
        System.out.println(Arrays.toString(kataChar));

        // kita bisa merubah komponen secara tidak langsung
        // kataString[0] = "c"; <--- tidak bisa
        // kataString.charAt(0) = "c"; <--- tidak bisa

        kataString = "c" + kataString.substring(1,5);
        System.out.println(kataString);

        printAddress("kataString", kataString);

        // memory dari String

        String str_1 = "hallo";
        String str_2 = "hai";
        String str_3 = "testing";

        printAddress("str_1", str_1);
        printAddress("str_2", str_2);
        printAddress("str_3", str_3);

        str_3 = str_3.substring(0,4);
        printAddress("str_3", str_3.substring(0,4));

        String str_4 = "callo";
        printAddress("str_4", str_4);

        kataString = "callo";
        printAddress("kataString", kataString);

        /* 1. String di java itu immutable
        * 2. String yang berada di string pool itu akan reuseable, memory nya lebih efisien
        * 3. membuat string dengan method baru, maka dia akan ditaro di memory lain bukan di
        * string pool*/

        // liat lebih dalam

        String a = new String("hallo");
        printAddress("a", a);

    }
    private static void printAddress(String nama, String data){
        int addresss = System.identityHashCode(data);
        System.out.println(nama + " = " + data + "\t|| adress = " + Integer.toHexString(addresss));
    }

}
