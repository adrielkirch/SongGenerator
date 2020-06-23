class Scale {
    constructor(sequence, name, tonic) {
        this.sequence = sequence;
        this.name = name;
        this.notes = new Notes();
        this.currentPosition = 0;
        this.tonic = tonic;

    }

    getScaleByKey(key) {
        var index = this.notes.findIndexByKey(key);
        var scale = [key];
        for (var i = 0; i < this.sequence.length - 1; i++) {
            if (this.sequence.charAt(i) == 'T') {
                var nextIndex = this.notes.fixIndex(index + 2);
                scale.push(notes[nextIndex]);
                index = nextIndex;
            } else if (this.sequence.charAt(i) == 'S') {
                var nextIndex = this.notes.fixIndex(index + 1);
                scale.push(notes[nextIndex]);
                index = nextIndex;
            }
        }
        return scale;
    }

    getNextNote(currentNote) {
        var interval = this.sequence[this.currentPosition];

        var index = this.notes.findIndexByKey(currentNote);
        if (interval == 'T') {
            index += 2;
        } else {
            index += 1;
        }
         if (index >= this.notes.notes.length) {
            index -= this.notes.notes.length;
        }
        this.addCurrentPosition(1);
        return this.notes.notes[index];
    }

    getPreviousNote(currentNote) {
        this.addCurrentPosition(-1);
        var interval = this.sequence[this.currentPosition];

        var index = this.notes.findIndexByKey(currentNote);
        if (interval == 'T') {
            index -= 2;
        } else {
            index -= 1;
        }

        if (index < 0) {
            index += this.notes.notes.length;
        }
        
        return this.notes.notes[index];
    }

    addCurrentPosition(value) {
        this.currentPosition += value;
        if (this.currentPosition < 0) {
            this.currentPosition += this.sequence.length;
        } else if (this.currentPosition >= this.sequence.length) {
            this.currentPosition -= this.sequence.length;
        }
    }

    getThreeNote(currentNote) {
        var next = this.getNextNote(currentNote);
        return this.getNextNote(next);
    }

    getFiveNote(currentNote) {
        var next = this.getNextNote(currentNote);
        next = this.getNextNote(next);
        next = this.getNextNote(next);
        return this.getNextNote(next);
    }

    getNoteByIndex(index) {
        return this.notes.findKeyByIndex(index);
    }

    setSequence(sequence) {
        this.sequence = sequence;
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    getSequence() {
        return this.sequence;
    }

}

