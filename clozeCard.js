function cloze(text, cloze){  
    if(this instanceof cloze){
        this.text = text,
        this.cloze = cloze
        
    }else{
        return new cloze(text, cloze);

    }
}
cloze.prototype.splittingText= function(){
    var partialText = this.text.split(this.cloze);
    this.partial = partialText;
};


module.exports = cloze;