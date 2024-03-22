/*
    243. Move Zeroes
*/

function moveZeroes(nums: number[]): void {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[j] != 0) {
                    nums[i] = nums[j]
                    nums[j] = 0;
                    i--;
                    break;
                }
            }
        }
    }
};