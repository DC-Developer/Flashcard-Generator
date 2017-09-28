function basic(front, back){
    this.front = front,
    this.back = back
    this.printFront = function(){
        console.log(front);
    }
    this.printBack = function(){
        console.log(back);
    }
}

var question = process.argv[2];
var answer = process.argv[3];

var first = new basic(question, answer);
first.printFront();
first.printBack();


//code that will intialize a new instance of the object constructor

/*if (!(this instanceof UserInfo)) {
   return new userSearch(name, loc);
}*/

module.exports = basic;