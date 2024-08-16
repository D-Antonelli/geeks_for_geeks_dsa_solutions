# https://www.geeksforgeeks.org/problems/at-least-two-greater-elements4625/1

class Solution:
    def findElements(self,arr):
       arr.sort()
       arr.pop()
       arr.pop()
        
       return arr

#{ 
 # Driver Code Starts
#Initial Template for Python 3


def main():

    T = int(input())

    while (T > 0):

        arr = [int(x) for x in input().strip().split()]
        ob = Solution()
        print(*ob.findElements(arr))

        T -= 1


if __name__ == "__main__":
    main()

# } Driver Code Ends
