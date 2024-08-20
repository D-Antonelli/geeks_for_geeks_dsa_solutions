// https://www.geeksforgeeks.org/problems/minimum-product-pair3608/1

class Solution {
    
    public long printMinimumProduct(long arr[], long n)
    {
        Arrays.sort(arr);
        
        return arr[0] * arr[1];
        
    }
}