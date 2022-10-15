import java.util.Arrays;

public class RemoveDuplicatesFromSortedArray {
    public static void main(String[] args) {
        System.out.println(Integer.toString(removeDuplicates(new int[]{0,0,1,1,1,2,2,3,3,4})) + " To Be 5");
    }

    public static int removeDuplicates(int[] nums) {

        int i = 0; // first index // size = 1
        for (int j = 1; j < nums.length; j++) {
            System.out.println(Arrays.toString(nums) + " i = " + i + " and j = " + j);
            if (nums[i] != nums[j]) {
                nums[i + 1] = nums[j];
                i++;
                System.out.println("REPLACED: " + Arrays.toString(nums));
            }
        }
        return i + 1;
    }
}


/*
* Logic:
*
* As the problem statement defined, we need to return only the number of elements that don't repeat and reorganize the array.
* Which means that we don't need to remove elements of the array, we just need to reorganize it and count how many elements don't repeat.
*
* For this to happen, we need to track 2 things as we iterate through the array:
* 1- The first Element which will be our slow pointer
* 2- The following Element which will be the fast pointer.
*
*
* For Example:
* We have an array like this:
* [0,0,1,1,1,2,2,3,3,4,4]
*
* Our slow pointer will be at the first element of the array (index 0).
* Our fast pointer will be at the next element (index 1);
*
* [0,0,1,1,1,2,2,3,3,4,4] //First Iteration, i=0, j=1. Here index 0 and 1 are the same so we move j to the next number
*  i j
*
* [0,0,1,1,1,2,2,3,3,4,4] // Second Iteration, i=0, j=2. Here j has a different value than i, so we make the following element after i equal to j. nums[i+1] = nums[j].
*  i   j
*
* Now we have the following array
* [0,1,1,1,1,2,2,3,3,4,4]
*
* Lets Increment i by 1;
*
* [0,1,1,1,1,2,2,3,3,4,4] // Next iteration i=1, j=4
*    i   j
*
* It will iterate until i=1 and j=6.
* [0,1,1,1,1,2,2,3,3,4,4]  // Here nums[i] is not equal to nums[j]. So we make nums[i+1] = nums[j]. We increment i again.
*    i       j
*
* Now we have:
* [0,1,2,1,1,2,2,3,3,4,4] // Now it will iterate until j = 8. Again the numbers are different so we will make nums[i+1] = nums[j] and increment i;
*      i         j
*
* [0,1,2,3,1,2,2,3,3,4,4] // Now it will iterate until j = 10. Again the numbers are different so we will make nums[i+1] = nums[j] and increment i;
*        i           j
*
* [0,1,2,3,4,2,2,3,3,4,4] // Now j reached the end of the array. which means we iterate through all the elements and put the nom repeatable ones in the beginning in non-decreasing order.
*          i           j
*
* Now i = 4 ;
*
* Because arrays starts with index 0, we need to increment i one more time.
*
* So we will return i + 1;
*
*
*
* */