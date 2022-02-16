//Define a function that takes one integer argument and returns logical 
//value true or false depending on if the integer is a prime.

//Per Wikipedia, a prime number (or a prime) is a natural number greater than 1
//that has no positive divisors other than 1 and itself.

function isPrime(num) {
    console.log(num % 2==1)
if( num% 2 == 1 && num%3 >=1 && num > 1){
    return  num + " is prime"
}
else {
   return num + " is not prime"
}  
  }
 console.log(isPrime(1))
  
  