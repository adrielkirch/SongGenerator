class RandomNotes {
    constructor(probability, scale) {
        this.probability = probability; // next note, previous Note, ThirdDegree, Fith degree
        this.scale = scale;
        this.size = scale.length;
    }

    generateRandomNoteSequence(amount) {
        var array = [];
        var result = [];
        var notes = [];
        for (var i = 0; i < this.probability.length; i++) {
            var p = Math.floor(this.probability[i] * 100);
            console.log(p);
            for (var j = 0; j < p; j++) {
                array.push(i);

            }

        }
        for (var k = 0; k < amount - 1; k++) {
            var index = Math.floor(Math.random() * 100);
            result.push(array[index]);
        }
        var currentNote = this.scale.tonic;
        notes.push(currentNote);
        for (var l = 0; l < result.length; l++) {
            var index = result[l];
            if (index == 0 ) {
                currentNote = this.scale.getNextNote(currentNote);
                notes.push(currentNote);
            } else if (index == 1) {
                currentNote = this.scale.getPreviousNote(currentNote);
                notes.push(currentNote);
            } else if (index == 2) {
                 currentNote = this.scale.getThreeNote(currentNote);
                notes.push(currentNote);
            } else if (index == 3) {
                currentNote = this.scale.getFiveNote(currentNote);
                notes.push(currentNote);
            }
            
        }
        return notes;
    }

    setProbability(value)
    {
        this.probability = value;
    }

    getProbability() {
        return this.probability;
    }

}

