// This is the link to this JavaScript Coding Challenge
// https://www.codewars.com/kata/539de388a540db7fec000642/train/javascript

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){

        currentDate = currentDate.toLowerCase()
        expirationDate = expirationDate.toLowerCase()

        // We will concat a space at the end of the date so we can use it as a marker for the if condition inside the for loop that if when it detects a space, it will perform a slice with the indices indicated and push the element to the date array. We have also used the replace function to remove the comma.
        currentDate = currentDate.replace(/,/g, '');
        currentDate = currentDate.concat(' ')

        console.log(`Your code is: ${enteredCode}\nThe correct code is ${correctCode}\nCurrent Date is: ${currentDate}\nExpiration Date is: ${expirationDate}`)

        // To see the relationship of the indices correctly, we first output in the console the desired strings using the slice method.
        // console.log(currentDate.length)
        // console.log(currentDate.slice(0,4))
        // console.log(currentDate.slice(5,6))
        // console.log(currentDate.slice(7,11))

        currentDateArr = []
        let j = 0
        for(i=0; i<=currentDate.length-1; i++){
            // console.log(currentDate[i])
            if(currentDate[i] == ' '){
                // console.log(j,i)
                currentDateArr.push(currentDate.slice(j,i))
                j = i + 1
            }
        }

        let monthsArray = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
        month = currentDateArr[0].slice(0,3)
        // console.log(month)
        for(i=0; i<=monthsArray.length-1; i++){
            if(month == monthsArray[i]){
                // console.log(`The month number is ${i+1}`)
                monthnum = i + 1
            }
        }

        day = parseInt(currentDateArr[1])
        year = parseInt(currentDateArr[2])
        
        // ===============================================

        expirationDate = expirationDate.replace(/,/g, '');
        expirationDate = expirationDate.concat(' ')

        expirationDateArr = []
        let k = 0
        for(i=0; i<=expirationDate.length-1; i++){
            // console.log(currentDate[i])
            if(expirationDate[i] == ' '){
                // console.log(j,i)
                expirationDateArr.push(expirationDate.slice(k,i))
                k = i + 1
            }
        }

        let monthsArrayexp = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
        monthexp = expirationDateArr[0].slice(0,3)
        for(i=0; i<=monthsArrayexp.length-1; i++){
            if(monthexp == monthsArrayexp[i]){
                // console.log(`The month number is ${i+1}`)
                monthnumexp = i + 1
            }
        }
        dayexp = parseInt(expirationDateArr[1])
        yearexp = parseInt(expirationDateArr[2])

        if(enteredCode == correctCode){
            if( (yearexp >= year) && (monthnumexp == monthnum) && (enteredCode == correctCode) && (day == dayexp) ) {
                console.log(`${true}: Valid Coupon`)
            } else if( (yearexp == year) && (monthnumexp == monthnum) && (enteredCode == correctCode) && (day > dayexp) ){
                console.log(`${false}: Invalid Coupon`)
            } else if( (yearexp <= year) && (monthnumexp < monthnum) ){
                console.log(`${false}: Invalid Coupon`)
            } else if( (yearexp >= year) && (monthnumexp >= monthnum) ){
                console.log(`${true}: Valid Coupon`)
            } else if( (yearexp < year) ){
                console.log(`${false}: Invalid Coupon`)
            } else if( (yearexp > year) ){
                console.log(`${true}: Valid Coupon`)
            }
                
        } else {
            console.log('Invalid Coupon')
        }

}
checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")
console.log('=====')
checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")
console.log('=====')
checkCoupon('1423', '1423', 'Mar 9, 2016', 'feb 1, 2016')
console.log('=====')
checkCoupon('1423', '1423', 'Mar 9, 2016', 'feb 1, 2017')