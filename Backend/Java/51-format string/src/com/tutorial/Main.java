package com.tutorial;

import java.lang.String;
import java.util.Formatter;

public class Main {

    public static void main(String[] args) {

        String nama = "iofi";
        int umur = 16;

        // output : nama saya adalah iofi, umur saya adalah 16
        System.out.println("nama saya adalah " + nama + ", umur saya adalah " + umur);



        // cara lain dengan format string
        System.out.printf("nama saya adalah %s, umur %s adalah %d\n", nama, nama, umur);



        // conversion : f = floating point, d = integer, s = stringg, b = boolean, c = character



        // struktur format = %[argumen_index$][flags][width][.precision]conversion



        // [argumen_index$]
        System.out.println("\n[argumen_index$]");

        // iofi wahai iofi, kemana saja kamu iofi
        System.out.printf("%s wahai %s, kemana saja kamu %s?\n", nama, nama, nama); // kepanjangan
        System.out.printf("%1$s wahai %1$s, kemana saja kamu %1$s?\n", nama); // lebih simple

        // umur iofi berapa?, iofi menjawab: 16, wah masih muda ya umurnya 16
        System.out.printf("\numur %1$s berapa? \n%1$s menjawab: %2$d \nwah masih muda ya umurnya %2$d\n", nama, umur);



        // [flags]
        System.out.println("\n[flags]");
        int int1 = 5;
        int int2 = 8;
        int hasil = int1 - int2;
        System.out.printf("%d - %d = %+d", int1, int2, hasil);
        // %+d : tanda "+" digunakan untuk menampilkan output "+" atau "-"



        // [width]
        System.out.println("\n[width]");
        int int3 = 1000;
        System.out.println("INTEGER");
        System.out.printf("%d\n", int3);
        System.out.printf("%5d\n", int3);
        System.out.printf("%-5d\n", int3); // flags "-" = artinya rata kiri
        System.out.printf("%+5d\n", int3); // flags akan mengambil slot di dalam format
        System.out.printf("%+-6d\n", int3); // flags akan digabungkan
        System.out.printf("%10d\n", int3);
        System.out.printf("% 10d\n", int3);
        System.out.printf("%010d\n", int3); // flags "0", menambahkan leading "0" di depan
        System.out.printf("%+010d\n", int3);
        int int4 = 1000000000;
        System.out.printf("%,10d\n", int3); // flags "," menandakan delimeter per seribu
        System.out.printf("%-,15d\n", int4);



        // floating point
        System.out.println("\nfloating point");
        float float1 = 1.543f;
        System.out.printf("%f\n", float1);
        System.out.printf("%+9f\n", float1); // floating point akan mengambil width dengan 6 decimal



        // [.precision]
        System.out.println("\n[.precision]");
        float float2 = 1.678f;
        System.out.printf("%f\n", float2);
        System.out.printf("%.1f\n", float2);
        System.out.printf("%.2f\n", float2);
        System.out.printf("%8.2f\n", float2); // gabungkan dengan width
        System.out.printf("%+08.2f\n", float2); // gabungkan dengan width dan flag



        // contoh
        String nama2 = "iofi";
        float IPK = 3.754444444f;

        // struktur format = %[argumen_index$][flags][width][.precision]conversion

        // IPK iofi berapa? iofi: saya dapet
        System.out.printf("\nIPK %1$s berapa? \niofi: saya dapet %2$+6.2f\n", nama2, IPK);



        // kesimpulan

        // save format ini kedalam format string
        String info_biasa = "nama: " + nama2 + ", IPK: " + IPK;
        System.out.println("biasa -> " +info_biasa);

        String info_format = String.format("nama: %s, IPK: %2$+6.2f", nama2, IPK);
        System.out.println("string format -> " + info_format);

        // save format ini kedalam string builder

        StringBuilder builder_info = new StringBuilder();
        Formatter formatBuilder = new Formatter(builder_info);
        formatBuilder.format("nama: %s, IPK: %2$+5.2f", nama2, IPK);
        System.out.println("string builder format -> " + builder_info);

    }

}
