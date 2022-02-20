class Solution {
    public boolean isPalindrome(int x) {
        int rev = 0;
        int temp =x;
        if (x < 0) return false;
        while (temp >= 1){
            rev = rev*10 + x%10;
            temp = (temp-temp%10)/10;
        }
        if (x == rev) {return true;}
        else return false;
    }
}
