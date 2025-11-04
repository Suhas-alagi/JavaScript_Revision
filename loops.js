//for loop

for (let i=1;i<=5;i++)
{
    console.log(i)
}

console.log("--------")
for (let i=5;i>=1;i--){

    console.log(i)
}


console.log("--------")
//break 

for (let i =1; i<=5;i++){

    if (i ==4) {
        break;
    }
    console.log(i)
}

console.log("--------")

//continue

for (let i=1;i<=5;i++){

    if (i==3){
        continue;
    }
    else{
        console.log(i)
    }
}
console.log("--------")
//while

let i=1

while (i<= 5)
{
    console.log(i)
    i++
}   

console.log("--------")


let j=1

while (j <= 5)
{
    if(j==2){

        continue;
    }
    else{

        console.log(j)
        j++
    }
    
    
   
}   

console.log("--------")
