

class cylinder{
       constructor(r,h){
    this.ra=r;
    this.ha=h;

    }
    getVolume(){
        console.log("Volume of cylinder")
        console.log((3.14*this.ra*this.ra*this.ha).toFixed(4)+"\n");
    }
}

class sphere{
    constructor(radius){
        this.ra=radius;
    }
    getVolume(){
        console.log("Volume of Sphere")
        var a= 1.3*3.14*this.ra*this.ra*this.ra;
        
        console.log(a.toFixed(4)+"\n");
    }
}
class cone{
    constructor(radius,height){
        this.ra=radius;
        this.ha=height;

    }
    getVolume(){
        console.log("Volume of cone")
        console.log(((3.14*this.ra*this.ra*this.ha)/3).toFixed(4)+"\n");
    }
}
let obj2=new cylinder(2,2);
obj2.getVolume();

let obj3 = new sphere(2);
obj3.getVolume();

let obj= new cone(2,2);
obj.getVolume();