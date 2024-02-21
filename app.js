console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:");
for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        continue;
    }
    else {
        console.log(i);
    }
}
console.log("================")

// Exercise 2 Section
console.log("EXERCISE 2:");
for (let i = 1; i <= 100; i++) {
    if (i%3==0 && i%5==0) {
        console.log("FIZZBUZZ");
    }
    else {
        if (i%3==0) {
            console.log("FIZZ");
        }
        else if (i%5==0) {
            console.log("BUZZ");
        }
        else {
            console.log(i);
        }
    }
}
console.log("================")

// Exercise 3
console.log("EXERCISE 3, pt 1:");
let i = 1;
while (i <= 100) {
    if (i%2 == 0) {
        i++;
        continue;
    }
    else if (i%3==0 && i%5==0) {
        console.log("FIZZBUZZ");
    }
    else {
        if (i%3==0) {
            console.log("FIZZ");
        }
        else if (i%5==0) {
            console.log("BUZZ");
        }
        else {
            console.log(i);
        }
    }
    i++;
}
console.log("================")

console.log("EXERCISE 3, pt 2:");
let x = 1;
do {
    if (x%2 == 0) {
        x++;
        continue;
    }
    if (x%3==0 && x%5==0) {
        console.log("FIZZBUZZ");
    }
    else {
        if (x%3==0) {
            console.log("FIZZ");
        }
        else if (x%5==0) {
            console.log("BUZZ");
        }
        else {
            console.log(x);
        }
    }
    x++;
} while (x <= 100);
console.log("================")

// Exercise 4
console.log("EXERCISE 4:");
let value = Math.round((Math.random() * 500));
let n = Math.round(Math.random() * (500 - 100) + 100);
let foundValue = false;

for (let i = 0; i <= n; i++) {
    if (i === value) {
        console.log(`Found value! (${value} was less than ${n})`);
        foundValue = true;
        break;
    }
}
if (!foundValue) console.log(`Did not find value (${value} was greater than ${n})`);
console.log("================")

// Exercise 5
console.log("BONUS/EXERCISE 5:");
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);
let end = Math.round(Math.random() * (1000 - 100) + 100);

console.log(`counting from ${start} to ${end}, fizz @ ${fizzDivisor}, buzz @ ${buzzDivisor}:`)
for (let i = start; i <= end; i++) {
    if (i % fizzDivisor == 0 && i % buzzDivisor == 0) {
        console.log("FIZZBUZZ");
    }
    else {
        if (i % fizzDivisor == 0) {
            console.log("FIZZ");
        }
        else if (i % buzzDivisor == 0) {
            console.log("BUZZ");
        }
        else {
            console.log(i);
        }
    }
}