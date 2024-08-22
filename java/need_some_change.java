// https://www.geeksforgeeks.org/problems/need-some-change-java/0

class Solution {
    static void swapElements(int[] arr) {
        if (arr.length > 2) {
        for (int i=0; i < arr.length - 2; i++) {
            int temp = arr[i];
            arr[i] = arr[i+2];
            arr[i+2] = temp;
        }
        }
    }
}