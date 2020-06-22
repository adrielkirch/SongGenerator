class Scale {
    constructor(sequence,name) {
        this.sequence = sequence; 
        this.name = name;
        this.notes = new Notes();

    }

    getScaleByKey(key) {
        var index = this.notes.findIndexByKey(key);
        var scale = [key];
        for (var i = 0; i  < this.sequence.length - 1; i++) {
            //validation
            
            if(sequence.charAt(i)=='T') {                
                nextIndex = this.notes.fixIndex(index+2);
                scale.push(notes[nextIndex]);
                index = nextIndex;
            } else if (sequence.charAt(i)=='S') {
                nextIndex = this.notes.fixIndex(index+1);
                scale.push(notes[nextIndex]);
                index = nextIndex;
            }
        }
        return scale;
    }

    set sequence(sequence) {
        this.sequence = sequence;
    }

    set name(name) {
        this.name = name;
    }

    get name() { // define o get moed
        return this.name;
    }

    get sequence() {
        return this.sequence;
    }

}

