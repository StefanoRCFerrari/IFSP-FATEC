let nome = "Felipe";
let idade = 19;

console.log("Olá, me chamo", nome, "e tenho", idade, "anos");

let num1 = 10;
let num2 = 5;

console.log("+",num1+num2);
console.log("-",num1-num2);
console.log("*",num1*num2);
console.log("/",num1/num2);

let idade_ = 22;

if(idade_ > 18)
    console.log("Maior de Idade!!");
else
    console.log("Menor de Idade!!");

for(let i = 1; i <=10; i++)
    console.log("-", i);

let line = "";
let j = 0
for(i = 1; i <=5; i++){
    while(j<i){
        line += "*";
        j++;
    }
    console.log(line);
}


let line2 = [" ", " ", " ", " ", " "];
let texto
for(i = 1; i<= 5; i++){
    line2.push("*");
    line2.shift();
    texto = line2.join("")
    console.log(`${texto}`);
};

line = ""; 
j = 1;
for(i = 5; i >=0; i--){
    while(j<i){
        line += "*";
        j++;
    }
    
    console.log(line);
    line = "";
    j = 1;
};



line2 = ["*", "*", "*", "*", "*"];
for(i = 1; i<= 5; i++){
    texto = line2.join("")
    console.log(`${texto}`);
    line2.pop();
    line2.unshift(" ");
};

let result = ""
let n = 1
for(i = 1; i<=8; i++){
    for(j = 1; j<=i; j++){
        result += n;
        result += " ";
        n++;
    }

    n++
    result+=n

    console.log(result);
}



