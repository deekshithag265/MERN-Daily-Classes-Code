num="java :${10+20}"
console.log(num);
num='javascript ${10+20}'
console.log(num);
a=50;
b=60
num=`addition 
of a and b :${a+b}`
console.log(num);
num=50;
console.log(num);

num=true
console.log(num)

class sampleexample{
    display(){
    console.log("this is non-static display method in sampleexample class");
    }
    test(){
        console.log("test method")
    }
}

s1=new sampleexample()
s1.display()
s1.test()


function addition(){
    console.log(10+20)
}
addition()

num=331;
result=num%2==0? "Even Number" : "Odd Number"
console.log(result)

a=10;
b='10';
c=null
d=Symbol(10);
let e;
console.log("Type of variable a is:",typeof a);
console.log("Type of variable b is:",typeof b);
console.log("Type of variable c is:",typeof c);
console.log("Type of variable d is:",typeof d);
console.log("Type of variable e is:",typeof e);