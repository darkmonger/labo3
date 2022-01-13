
const N = 100;
var counter = 0;





function draw_lots(n){
    r = Math.floor(n*Math.random()) + 1;
    return r;
}


 var a = 1 ;  // left edge of range
 var b = N  ; // right edge of range
 var x = draw_lots(N); // computer draws a random number
 
 console.log("C: I thought a number. Guess it!\n");
 var guess = 0;

 


 while (guess != x){
    guess = prompt("C: put a number from " +  parseInt(a) + " to " + parseInt(b) +": " );
    guess = parseInt(guess);
    counter += 1;
    if(guess < x){
        console.log("C: too small");
        a = guess;
    }
        
    else if(guess > x){
        console.log("C: two big");
        b = guess;
    }      
       
    else{
        console.log("C: you guessed my number. It was " + parseInt(x));
    }
        
 }
    