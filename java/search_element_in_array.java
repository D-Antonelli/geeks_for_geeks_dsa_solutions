// https://www.geeksforgeeks.org/problems/check-if-two-arrays-are-equal-or-not3847/1?track=ppc-hashing&batchId=221

class Solution {
    public static boolean check(int[] arr1, int[] arr2) {
        Arrays.sort(arr1);
        Arrays.sort(arr2);
        
        for (int i=0; i < arr1.length; i++) {
            if (arr1[i] != arr2[i]) {
                return false;
            }
        }
        
        return true;
    }
}