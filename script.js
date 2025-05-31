var arr = [10,20,30];
var arr1 = [...arr,40,50];
console.log(arr);
console.log(arr1); // spread function

var marks =[100,99,90,80,85];
var[m1,m2,m3,m4,m5] = marks;
console.log(m1,m2,m3,m4,m5); // destructuring operator

function demo()
{ 
    console.log("hello world"); 

}
const callback = (callbackfun)=>{
console.log("hello from call back");
callbackfun(); 
}
callback(demo) //call back function

var name = "Swa";
console.log(`Welcome, ${name}`); //backticks

function addOne(n)
{
    return n*2;
}
let array=[1,2,3,4,5];
let mappedarr=array.map((i)=>{return i*2})
console.log(array);
console.log(mappedarr) //map function

const filterarray=array.filter((i)=>{return i%2==0});
console.log(filterarray); // filter function

const reducedArray =array.reduce((sum,current)=>{return sum+current},0);
console.log(reducedArray); // reduce function

const getdata = async()=>{
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const user = await response.json()
        console.log(user);
    }
    catch(error){
        console.log(`error: ${error}`);
    }
}
getdata() //async await
