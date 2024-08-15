// https://www.geeksforgeeks.org/problems/find-the-frequency/1

class Solution{
    findFrequency(v, n, x){

        let repeated = 0;
        
        for (let num of v) {
            if (num == x) {
                repeated++;
            }
        }
        
        return repeated;
        
    }
}