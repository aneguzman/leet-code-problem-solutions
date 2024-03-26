/* 
66 - Plus One
*/

function plusOne(digits: number[]): number[] {
    const length: number = digits.length;
    const lastDigit: number = digits[length - 1];
    if (lastDigit < 9) {
        digits[length - 1]++;
    } else {
        for (let i = length - 1; i >= 0; i--) {
            if (i == 0 && digits[i] == 9) {
                digits[i] = 1;
                digits.push(0);
                break;
            }
            if (digits[i] == 9) {
                digits[i] = 0;
            } else {
                digits[i]++;
                break;
            }
        }
        
    }
    return digits;
};