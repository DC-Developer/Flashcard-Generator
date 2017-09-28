function basic(front, back){
    if(this instanceof basic){
        this.front = front,
        this.back = back
        this.printFront = function(){
            console.log(front);
        }
        this.printBack = function(){
            console.log(back);
        }

    }else{
        return new basic(front, back);
    }

}


module.exports = basic;


/*
    //BONUS: scope-safe constructor
    if(this instanceof BasicCard) {
        this.front = front;
        this.back = back;
        } else {
          return new BasicCard(front, back);
        }
    };

    */