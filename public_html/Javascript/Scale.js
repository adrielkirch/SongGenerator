class Scale {
    //construtor da escala
    constructor(sequence, name, tonic) {
        this.sequence = sequence;
        this.name = name;
        this.notes = new Notes();
        this.currentPosition = 0;
        this.tonic = tonic;

    }

//obter escala atraves de uma tonica @parm:key representa a tonalidade
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
    // retorna a proxima nota da escala, @parm:currentNote representa a nota atual
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
    //retorna a nota anterior da escala, @parm:currentNote representa a nota atual
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
    //obter a terceira nota
    getThreeNote(currentNote) {
        var next = this.getNextNote(currentNote);
        return this.getNextNote(next);
    }
    //obter a quinta nota
    getFiveNote(currentNote) {
        var next = this.getNextNote(currentNote);
        next = this.getNextNote(next);
        next = this.getNextNote(next);
        return this.getNextNote(next);
    }
    //obter nota por indice
    getNoteByIndex(index) {
        return this.notes.findKeyByIndex(index);
    }

    //adiciona a nota atual o valor @param:value
    addCurrentPosition(value) {
        this.currentPosition += value;
        if (this.currentPosition < 0) {
            this.currentPosition += this.sequence.length;
        } else if (this.currentPosition >= this.sequence.length) {
            this.currentPosition -= this.sequence.length;
        }
    }
    //obter sequencia de intervalos
    setSequence(sequence) {
        this.sequence = sequence;
    }
    //Setar nome
    setName(name) {
        this.name = name;
    }
    //Obter nome
    getName() {
        return this.name;
    }
    //Obter sequencia
    getSequence() {
        return this.sequence;
    }

}

