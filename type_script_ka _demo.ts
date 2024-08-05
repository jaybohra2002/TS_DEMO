let arr:[number , string]=[1,"2"]
//console.log(arr);
 //interfaces and classes in ts *******************************************************************************************
 /**
  * IMPORTANT NOTE:
    Interfaces gives us the contract (Structure) like this is how a object should look like
  but it does not gives us the logic for the function defined in it
  instead it gives us the return type of the function.
  where as in class we can define the logi of the function
  */
 interface Product{
    name:string,
    price:number,
    brand:string,
    display():void
 }
 class Car {
    name:string
    constructor(name:string){
        this.name=name;

    }
    display(){

    }
 }
 let p=new Car("Santro");
 let b :Product={
    name:"Iphone",
    price:100000,
    brand:"Apple",
    display:()=>{
        //console.log("This is the display of Iphone");
    }
 }; //Here  Variable b is of type Product  
 //console.log(b);
 b.display();
 //************************************************************************************************************** */



 //FUNCTIONS in TypeScript


 function sum (a:number,b?:number) :number {
    return a+(b || 0 ); //short circuiting (if b is not passed then replace b as 0)
};
//console.log(sum(10));


//*************************************************************************************************************** */


// Date Object in TypeScript

const dob =new Date(2002,7,26);
//console.log(dob);
 /**
  * any type object 

  if you want to define a Variable of type any, then you have to declare it with ": any" or
  just declare the variable without assiging the value to it.
  */
let x;

x=10;
//console.log(x);
x="Jay";
 

 // Void FUNCTIONS
//  function abc(a:string) :void {
//     return a;
//  }
//  abc("a");

// ******************************************************************************************************



// ENUMS or Enumerations


enum TicketStatus{
    INITIALISED,
    PENDING,
    CANCELLED,
    CLOSED
}

const Tickets={
    id:1,
    title:"new Ticket",
    status:TicketStatus.PENDING
}
//console.log(Tickets);
if (Tickets.status===TicketStatus.PENDING){
    //console.log("Matched the Status");
}

// We can also change value to the value of enum is mapped to. Below is the implementation

enum StatusCodes{
    CREATED=201,
    ACCEPTED=202,
    NOTFOUND=404,
    BADREQUEST=400

}
const response={
    url:"www.something.com",
    type:"GET",
    status:StatusCodes.CREATED

}
//console.log(response);
 


/************************************************************************************************* */


//Objects and its types (Infer)
//We have defined the types Detail here as we cannot afford to write this humoungous cosde and hence we are 
//trying to make a type which can be used in several objects in future
type Details ={name:string, marks:number,address?:string};

const result :Details={
    name:"Jay",
    marks:45,

}
console.log(result);

// *******************************************************************************************************


// Simple auth form 
 


interface AuthForm{
    name: string,
    message:string,
    onLogin: (e:any) => void

    ,
    onSubmit : (e:any)=> void

    
}
 const loginForm :AuthForm= {
    name:"Jay",
    message:"Submitted the form",
    onLogin: (e)=>{
        //some IMPLEMENTATION
    },
    onSubmit:(e)=>{
        //some inplementation
    }
 }
 console.log(loginForm);
 



 //*/************************************************************************************************************ */

 //TYPES VS INTERFACES


type text=string;
type stringArr=string[];
// using types it i s easy to define a type rather than using an interface

interface NumberArray{
    [index:number]:number
}

type pair= [number,number];

type triplets =[number, number,number];

interface PairInterface{
    first : number,
    second:number
}

//********************************************************************************************************** */


//Unions in ts



type unionOfStrNum=number|string;

// interface equivalend of above type



interface ComplexNumber{
    real:number,
    imaginary:number
}

interface ComplexNumber{
    add:(num:number)=> void
}
/////////////////////////////////OR/////////////////////////////////////////
interface ComplexNumber{
    real:number,
    imaginary:number,
    add:(num:number)=> void
}









