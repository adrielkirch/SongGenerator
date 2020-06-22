class Notes {
    constructor() {
        this.notes = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];
       
        
    }
    

    get notes() {
        return this.notes;
    }
    
    findIndexByKey(key){
       let index = 0;
        for (var i = 0; i < notes.length; i++) {
            if(this.notes[i]== key) {
                return i;
            }
        }
        
        
    }
    
    findKeyByIndex(index) {
       return this.notes[index];
    }
    
    fixIndex(index) {
        if(index > 11) {
            index = index % 12;
            return index
        } else {
            return index; 
        }       
    }

}

