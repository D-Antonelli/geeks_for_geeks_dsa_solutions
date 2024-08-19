 // https://www.geeksforgeeks.org/problems/product-of-array-element/0

 // Test case 404: Your program took more time than expected.Expected Time Limit : 1sec
 class Solution {
    product(arr) {
       let product = 1n
       const mod = 1000000007n
       
       for (let num of arr) {
           num = BigInt(num)
           product = product * num
       }
       
       return product >= mod ? product % mod : product
       
       
    }
}