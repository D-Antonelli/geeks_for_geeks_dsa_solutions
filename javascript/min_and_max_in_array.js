// https://www.geeksforgeeks.org/problems/find-minimum-and-maximum-element-in-an-array4428/1

class Solution {
    getMinMax(arr) {
        let n = arr.length;
        
        if (n == 1) {
            return [arr[0], arr[0]]
        }
        
        let min = Number.MAX_VALUE;
        let max = 0;
        
        for (let ele of arr) {
            if (ele < min) {
                min = ele;
            }
            
            if (ele > max) {
                max = ele
            }
        }
        
        return [min, max]
    }
}