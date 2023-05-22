/*
* Description: Takes an array of Integers and the size n of array
* Returns: third largest Number
* Complexity: O(n)
*/

let thirdLargestNumber = function(numsArray: Array<number>, n: number): number{
   
    // Use Set as remove duplicates and sort is logN
    let arr = new Set<number>(numsArray)

    //Loop through array storing the 1,2,3 largest
    const firstLarge = Math.max(...arr);

    //Base Case: just in case
    if (arr.size < 3) return firstLarge;

    arr.delete(firstLarge);

    const secLarge = Math.max(...arr);
    arr.delete(secLarge); 
    
    // return the thirdLarge variable
    return Math.max(...arr);
   
    
}


function Main() {

    //Test Cases
    console.log("Expected: 3, Actual: ", thirdLargestNumber([10, -2, 5, -6, 3], 5))

    console.log("Expected: 1, Actual: ", thirdLargestNumber([4, 1, 13], 3))

    console.log("Expected: 5, Actual: ", thirdLargestNumber([3, 3, 5, 5, 32, 0, 14], 7))


}

Main()