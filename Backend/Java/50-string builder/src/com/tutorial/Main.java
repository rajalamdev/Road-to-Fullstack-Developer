package com.tutorial;

import java.lang.StringBuilder;

public class Main {

    public static void main(String[] args) {
        // kapastitas default StringBuilder adalah 16
        StringBuilder builder = new StringBuilder("hallo");
        printData(builder);
        System.out.println();

        // append
        builder.append(" minna");
        printData(builder);
        System.out.println();

        builder.append(" onegaishimasu");
        printData(builder);
        System.out.println();

        // insert
        builder.insert(12, "yoroshiku ");
        printData(builder);
        System.out.println();

        // delete
        builder.delete(22, 35);
        printData(builder);
        System.out.println();

        // rubah character pada index tertentu
        builder.setCharAt(6, 'M');
        printData(builder);
        System.out.println();

        // replace
        builder.replace(12, 22, "yoroshiku onegaishimasu");
        printData(builder);
        System.out.println();

        // casting menjadi string
        String kalimat = builder.toString();
        System.out.println(kalimat);
        int addressKalimat = System.identityHashCode(kalimat);
        System.out.println("address = " + Integer.toHexString(addressKalimat));

    }
    private static void printData(StringBuilder dataBuilder){
        System.out.println("data = " + dataBuilder);
        System.out.println("panjang = " + dataBuilder.length());
        System.out.println("kapasitas = " + dataBuilder.capacity());

        int addressBuilder = System.identityHashCode(dataBuilder);
        System.out.println("address = " + Integer.toHexString(addressBuilder));
    }

}
