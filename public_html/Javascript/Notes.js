class Notes {
    constructor() {
        this.notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];


    }

    getNotes() {
        return this.notes;
    }

    setNotes(notes) {
        this.notes = notes;
    }

    findIndexByKey(key) {
        let index = 0;
        for (var i = 0; i < notes.length; i++) {
            if (this.notes[i] == key) {
                return i;
            }
        }


    }

    findKeyByIndex(index) {
        return this.notes[index];
    }

    fixIndex(index, size) {
        if (index > size) {
            index = index % size;
            return index
        } else {
            return index;
        }
    }

}

