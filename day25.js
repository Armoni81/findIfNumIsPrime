//Define a function that takes one integer argument and returns logical 
//value true or false depending on if the integer is a prime.

//Per Wikipedia, a prime number (or a prime) is a natural number greater than 1
//that has no positive divisors other than 1 and itself.
// https://www.codewars.com/kata/5262119038c0985a5b00029f/train/javascript
function isPrime(num) {
    console.log(num % 2==1)
if( num < 0){
    return " this is a negative number"
}
if(num <= 2 && num > 0){
     return num + " is prime"
    }

if( num% 2 == 1){
    return  num + " is prime"

} if(num%3 >=1){
    return  num + " is prime"
}
else {
   return num + " is not prime"
}  
  }
 console.log(isPrime(70))
  
  