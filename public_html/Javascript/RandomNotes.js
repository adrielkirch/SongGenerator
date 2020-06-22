class RandomNotes {
    constructor(probability,scale) {
        this.probability = probability; // next note, previous Note, ThirdDegree, Fith degree
        this.scale = scale;
        this.size = scale.length;       
    }


 getRandom (key,total) {
var results  = this.scale.getScaleByKey(key);
    var num = Math.random(),
        s = 0,
        lastIndex = this.probability.length - 1;

    for (var i = 0; i < total; ++i) {
        s += this.probability[i];
        if (num < s) {
            return results[i];
        }
    }

    return results[lastIndex];
};
    
    set probability (value) {
        this.probability = value;
    }

}

