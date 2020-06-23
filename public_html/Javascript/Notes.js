class Notes {
    //Construtor de notas
    constructor() {
        this.notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];


    }
    
    //obter notas
    getNotes() {
        return this.notes;
    }
    
    //atribuir valor para notas
    setNotes(notes) {
        this.notes = notes;
    }
    
    //obter o índice através da nota
    findIndexByKey(key) {
        let index = 0;
        for (var i = 0; i < notes.length; i++) {
            if (this.notes[i] == key) {
                return i;
            }
        }


    }
    
    //obter a nota através do índice
    findKeyByIndex(index) {
        return this.notes[index];
    }
    
    //arrumar do index 
    fixIndex(index, size) {
        if (index > size) {
            index = index % size;
            return index
        } else {
            return index;
        }
    }

}

