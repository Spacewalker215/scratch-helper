export default class LoudnessHandler {
    private connectionState;
    private audioStream;
    private analyser;
    private micDataArray;
    private _lastValue;
    constructor();
    private get audioContext();
    private connect;
    private get loudness();
    getLoudness(): number;
}
