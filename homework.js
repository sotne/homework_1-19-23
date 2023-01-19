console.log('we out here')
/*
    Exercise 1: Write a function called toCelcius that takes in a number representing 
    temperature in Fahrenheit and converts the number into Celcius.

    Ex 1. toCelcius(32) // 0
    Ex 2. toCelcius(212) // 100
    Ex 3. toCelcius(50) // 10
*/

function toCelcius(C){
    return (C-32)/(9/5)
}
console.log(toCelcius(50))


/*
    Exercise 2: Create a class for a User that sets username and password property
    on creation. Add a method to change the user's password. The method should take in 
    the old password and new password. If the old password is wrong do not reset the password.
    Create an instance of the new user and then change their password using the method.
*/

class User{
    constructor(username, password){
        this.username = username,
        this.password = password
    }

    check_password(password){
        if (this.password === password){
            continue
        } else {
            console.log( `${this.password} isnt in our database`)
        }
        
    }

    update_password(old_password, new_password){
        if (this.check_password === password){
            new_password.update
        }
    }
}



/*
    Exercise 3: Write a function that takes in an array of integers and returns
    an array of the negative integers squared using Array methods

    Ex 1. squareNegatives([-10, -3, 4, -2, 8, 9, -3]) // [100, 9, 4, 9]
    Ex 2. squareNegatives([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]) // [25, 16, 9, 4, 1]
    Ex 3. squareNegatives([2, 4, 6, 8, 10]) // []
*/
new_lst= []
function squareNegatives(lst){
    for (let i = 0; i < lst.length; i++) {
        if (lst[i] < 0) {
            return lst[i] **2;
            
        };
    };
};

squareNegatives([-10, -3, 4, -2, 8, 9, -3])
console.log(squareNegatives([-10, -3, 4, -2, 8, 9, -3]))

console.log('we out here')

