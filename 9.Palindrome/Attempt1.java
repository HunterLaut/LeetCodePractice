class Solution {
    public boolean isPalindrome(int x) {
        int stack[] = new int[1000];
        int mod = 0;
        int temp = x;
        int i = 0;
        
        
        //System.out.println(stack.length);
        
        if (x*-1 > 0){return false;}
        else{
            //Split Num into array.
            //for (int z = 0; temp > 10; z++){
            while (temp > 10){
                mod = x % 10;
                stack[i] = mod;        
                temp = (x - mod)/10;
                i++;
            }
            i = stack.length;
            System.out.println(stack.length);
            stack[i-1] = temp;
            //check num
            for (int j = 0; j < i; j++){
                if (stack[j] != stack[i]){
                    return false;
                }
                i--;
                j++;
            }
            return true;
        }
        
    }
}
