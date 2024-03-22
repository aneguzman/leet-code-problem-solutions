/*
26. Remove Duplicates from Sorted Array
*/

function removeDuplicates(nums: number[]): number {
    let tempNumsArr = [];
    tempNumsArr.push(nums[0]);
    for (let i = 0; i < nums.length-1; i++) {
        if (nums[i] != nums[i+1]) {
            tempNumsArr.push(nums[i+1]);
        }
    }

    for (let i = 0; i < tempNumsArr.length; i++) {
        nums[i] = tempNumsArr[i];
    }
    return tempNumsArr.length;
};
