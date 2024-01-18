console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count){

    if(count <= 0){
        console.log("The number must be a positive number and greater than 1");
    }
    else{
        for(i = 1; i <= count; i++){
            if( i % 2 != 0){
                console.log(i);
            }
        }
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age){

    if(userName === undefined || age < 0 || age === undefined){
        console.log("Please input a Name and a valid age");
    }
    else{
        let aboveSixteen = `Congrats ${userName}, you can drive!`;
        let belowSixteen = `Sorry ${userName}, you need to wait until you're 16.`;

        if (age >= 16){
             console.log(aboveSixteen);
         }
         else{
             console.log(belowSixteen);
        }
    }
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

function quadrant(x, y){

    if( x === undefined || y === undefined){
        console.log("Please input the x and y axis");
    }
    else if(x === 0 && y === 0){
        console.log(`(${x},${y}) is on the center of the axis`);
    }
    else if(x === 0){
        console.log(`(${x},${y}) is on the x axis`);
    }
    else if(y === 0){
        console.log(`(${x},${y}) is on the y axis`);
    }
    else if(x >= 1 && y >= 1){
        console.log(`(${x},${y}) is in Quadrant 1`);
    }
    else if(x <= -1 && y >= 1){
        console.log(`(${x},${y}) is in Quadrant 2`);
    }
    else if(x <= -1 && y <= -1){
        console.log(`(${x},${y}) is in Quadrant 3`);
    }
    else if(x >= 1 && y <= -1){
        console.log(`(${x},${y}) is in Quadrant 4`);
    }
}

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

function makeTriangle(s1,s2,s3){

    if((s1 + s2) <= s3 || (s1 + s3) <= s2 || (s2 + s3) <= s1){
        console.log(`Sides ${s1}, ${s2}, ${s3} make an invalid triangle`);
    }
    else{
        if(s1 === s2 && s2 === s3){
            console.log(`Sides ${s1}, ${s2}, ${s3} make an equilateral triangle`);
        }
        if((s1 === s2 && s2 != s3) || (s1 === s3 && s1 != s2) || (s2 === s3 && s2 != s1)){
            console.log(`Sides ${s1}, ${s2}, ${s3} make an isosceles triangle`);
        }
        if(s1 != s2 && s2 != s3 && s1 != s3){
            console.log(`Sides ${s1}, ${s2}, ${s3} make an scalene triangle`);
        }
    }
}

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

function dataPlan(planLimit, day, usage){

    if(planLimit <= 0 || day <= 0 || usage <= 0 || planLimit === undefined || day === undefined || usage === undefined){
        console.log("Please insert the correct information. (Plan Limit, Day, Usage)");
    }
    else{
        let averageMonthly = (planLimit/30).toFixed(2);
        let monthlyUse = (usage/day).toFixed(2);

        if(day === 1){
            console.log(`${day} day used, ${30 - day} days remaining`);
        }
        else{
        console.log(`${day} days used, ${30 - day} days remaining`);
        }

        console.log(`Average daily use: ${averageMonthly} GB/day`);
    
        if(usage >= planLimit){
            console.log("You have used up all your Data for the month,")
            console.log(`you used ${usage} GB of ${planLimit}GB that you had on your plan.`)
        }
        else{
            if(monthlyUse > averageMonthly){
                console.log(`You are EXCEEDING your average daily use (${monthlyUse} GB/day),`);
                console.log(`continuing this high usage, you'll exceed your data plan by ${((monthlyUse * 30) - planLimit).toFixed(2)} GB.`);
                console.log(`To stay below your data plan, use no more than ${((planLimit - usage) / (30 - day)).toFixed(2)} GB/day.`)
            }
            else if (monthlyUse === averageMonthly){
                console.log(`You are RIGHT on your average daily use (${monthlyUse} GB/day),`);
                console.log(`continuing this usage, you'll be exactly right on your monthly limit.`);
            }
            else{
               console.log(`You are UNDER your average daily use (${monthlyUse} GB/day),`);
               console.log(`continuing this low usage, you'll waste ${(planLimit - (monthlyUse * 30)).toFixed(2)} GB of you data plan.`);
               console.log(`You can increase your daily usage to ${((planLimit - usage) / (30 - day)).toFixed(2)} GB/day to fully enjoy your plan.`)
            }
        }
    }
}