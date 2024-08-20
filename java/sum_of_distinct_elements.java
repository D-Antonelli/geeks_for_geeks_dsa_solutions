import java.util.Arrays;

class Solution
{
    long sumOfDistinct(long arr[], int N)
    {
        Arrays.sort(arr);
        
        long sum = arr[0];
        
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] != arr[i-1]) {
                sum+=arr[i];
            }
        }
        
        return sum;
    }
}
