/*
    27. Remove Element
*/

function removeElement(nums: number[], val: number): number {
    let counter: number = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != val) counter++;

        if (nums[i] == val) {
            for (let j = i+1; j < nums.length; j++) {
                if (nums[j] != val) {
                    nums[i] = nums[j];
                    nums[j] = val;
                    i--;
                    break;
                }
            }
        }
    }

    return counter;
};
