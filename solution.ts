/*
* Description: Takes an array of Integers and the size n of array
* Returns: third largest Number
*/

let thirdLargestNumber = function(numsArray: Array<number>, n: number): number{
   
    let firstLarge = 0, secLarge = 0, thirdLarge = 0;

    //Sort The array
    numsArray.sort() // Logn

    //Loop through array storing the 1,2,3 largest
    for (let i = 0; i < numsArray.length; i++) {
        if (numsArray[i] > firstLarge) {

            secLarge = firstLarge;
            firstLarge = numsArray[i];

        } else if (numsArray[i] > secLarge) {
            
            thirdLarge = secLarge;
            secLarge = numsArray[i];

        } else if (numsArray[i] > thirdLarge) {
            thirdLarge = numsArray[i];
        }
        console.log(firstLarge , secLarge , thirdLarge)
    }
    // return the thirdLarge variable
    return thirdLarge

    
}


function Main() {

    //Test Cases
    console.log("Expected: 3, Actual: ", thirdLargestNumber([10, -2, 5, -6, 3], 5))

    console.log("Expected: 13, Actual: ", thirdLargestNumber([4, 1, 13], 3))

    console.log("Expected: 5, Actual: ", thirdLargestNumber([3, 3, 5, 5, 32, 0, 14], 7))


}

Main()