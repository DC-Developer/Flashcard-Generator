function clozeCard(text, cloze){  
    if(this instanceof clozeCard){
        this.text = text,
        this.cloze = cloze
        
    }else{
        return new clozeCard(text,cloze);

    }
}
clozeCard.prototype.splittingText= function(){
    var partialText = this.text.split(this.cloze);
    this.partial = partialText;
};


module.exports = clozeCard;