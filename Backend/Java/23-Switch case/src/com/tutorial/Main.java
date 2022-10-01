package com.tutorial;
import java.util.*;
public class Main {
    public static void main(String[] args){
        //switch case


        String input;
        Scanner inputUser = new Scanner(System.in);
        System.out.print("panggil nama: ");
        input = inputUser.next();

        // ekspresi nya berupa satuan (int,byte,short,long,) String atau enum
       switch(input){
           case "otong":
               System.out.println("saya otong dan hadir bossssssssss!");
               break;
           case "ucup":
               System.out.println("saya ucup dan hadir boss!!!");
               break;
           case "asep":
               System.out.println("saya asep dan saya hadir bossque!!");
               break;
           default:
               System.out.println(input + " tidak hadir boss");
        }
    }
}
