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
 let b : Product ={
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
//console.log(result);

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
 //console.log(loginForm);
 



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

//************************************************************************************* */

//Classees in TypeScript


class Product {
    name: string;
    private price: number ;
    readonly category:string;

    constructor(name: string,category:string, price: number) {
        this.name = name;
        this.price = price;
        this.category=category;
    }

    display(): void {
        //console.log("product name is ", this.name, "and the price of it is ", this.price );
    }
    setPrice(p:number) : void{
        if(p<=0) return ;
        this.price=p;
    }
}

const p1 = new Product("iPhone","electronics",5);
//p1.display();
//console.log(p1);
p1.setPrice(-500000);
p1.display();


/**
 * Class to write the complex numbers
 * where we can add and multiply the complex numbers
 * 
 */

class Complex{
    private real:number;
    private imag:number;
    constructor(real:number,imag:number){
        this.real=real;
        this.imag=imag;
    }
    display(): void{
        console.log(`${this.real}+i${this.imag}`);
    }
    add(C:Complex):void{
        this.real+=+C.real;
        this.imag+=C.imag;
    }
    multiply(C:Complex): void{
        this.real=(this.real*C.real-this.imag*C.imag);
        this.imag=(this.real*C.imag+this.imag*C.real);
    }
}
let c1:Complex=new Complex(2,30);
//c1.display();
let c2:Complex=new Complex(5,2);
//c1.add(c2);
//c1.display();
//c2.display();
c2.add(c1);
//c2.display();
c1.multiply(c2);
//c1.display();

/**
 * Linera Search
 */

function linearSearch<T>(array:T[],x:T):[number,T]{
    for(let i=0;i<array.length;i++){
        if(array[i]===x) return [i,array[i]];
    }
    return [-1,x];
}
const array:number[]=[2,8,4,-5,99,5,7];
//console.log(linearSearch<number>(array,69));
const strarr:string[]=["abc","def","xyz"];
//console.log(linearSearch<string>(strarr,""));


//Generic Stack In TypeScript


class Stack<T>{
    private arr:T[];
    constructor(){
        this.arr=[];
    }
    push(x:T):void{
        this.arr.push(x);
    }
    pop():void{
        this.arr.pop();

    }
    top():T
    {
        return this.arr[arr.length];
    }
    display():void{
        console.log(this.arr);
    }
}
let st  : Stack<number>=new Stack();
//st.display();
st.push(3);
st.push(5);
st.push(55889);
st.push(-8);
st.pop();
//console.log("Pop Called :",st.top());
//st.display();


/**
 * LINKED LIST IN ts
 * 
 */


//*********************************************************************************** */


class node<T> {
    data: T;
    next: node<T> | null;

    constructor(data: T) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList<T> {
    head: node<T> | null;

    constructor() {
        this.head = null;
    }
    addAtHead(x:T):void{
        if(this.head==null){
            this.head =new node(x);
            return;
        }
        let temp=new node(x);
        temp.next=this.head;
        this.head=temp;
    }

    display(): void {
        let temp: node<T> | null = this.head;
        while (temp != null) {
            console.log(temp.data);
            temp = temp.next;
        }
    }
}
let ll =new LinkedList<number>();
ll.addAtHead(5);
ll.addAtHead(6);
ll.addAtHead(7);
ll.addAtHead(8);
ll.addAtHead(9);
ll.addAtHead(10);
//ll.display();

/**
 * Generics Interfaces
 */

//******************************************************************** */


interface customInterface<T1,T2>{
    property:T1;
    moreProperty:T2;

}

const obj: customInterface<string,number>={
    property:"10",
    moreProperty:20
}
console.log(obj);





