#Original
print("    *")
print("   * *")
print("  *   *")
print(" *     *")
print("***   ***")
print("  *   *")
print("  *   *")
print("  *****")
 
#Minimizing the number of print invocations
print("    *\n   * *\n  *   *\n *     *\n***   ***\n  *   *\n  *   *\n  *****")
 
 
# #Making the arrow twice as large (Keeping the proportions)
print("     *       ")            #<-- Had to add spaces before to correct distortion
print("    * *      ")            #<-- Had to add this line to correct distortion
print("   *"," *    ",sep=2*" ")   #<-- Add as many spaces as necessary inside sep argument
print("  * ","  *   ",sep=2*" ")
print(" *  ","   *  ",sep=2*" ")
print("*** ","  *** ",sep=2*" ")
print("  * ","  *   ",sep=2*" ")
print("  * ","  *   ",sep=2*" ")
print("  **","***   ",sep=2*"*")   #<-- Add as many "*" as necessary inside sep argument
 