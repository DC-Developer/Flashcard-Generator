function clozeCard(text, cloze){  
    
        this.text = text,
        this.cloze = cloze
        
   
}
clozeCard.prototype.splittingText= function(){
    var partialText = this.text.split(this.cloze);
    this.partial = partialText;
};


module.exports = clozeCard;