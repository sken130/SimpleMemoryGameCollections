class SequenceCounter {
    #sequence;
    constructor() {
        this.#sequence = 0;
    }
    getAndIncrement() {
        let currentSeq = this.#sequence
        this.#sequence++;
        return currentSeq;
    }
}

export default SequenceCounter;
export {SequenceCounter}