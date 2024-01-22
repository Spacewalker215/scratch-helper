import type { Yielding } from "./lib/yielding";
export default class Sound {
    name: string;
    url: string;
    private audioBuffer;
    private source;
    private playbackRate;
    private target;
    private _markDone;
    private _doneDownloading;
    private static _audioContext;
    constructor(name: string, url: string);
    get duration(): number;
    start(): Yielding<boolean>;
    playUntilDone(): Yielding<void>;
    stop(): void;
    downloadMyAudioBuffer(): Promise<AudioBuffer | null>;
    private playMyAudioBuffer;
    connect(target: AudioNode): void;
    setPlaybackRate(value: number): void;
    isConnectedTo(target: AudioNode): boolean;
    static get audioContext(): AudioContext;
}
type EffectDescriptorBase<Name> = {
    name: Name;
    initial: number;
    minimum?: number;
    maximum?: number;
    resetOnStart?: boolean;
    resetOnClone?: boolean;
};
type PatchlessDescriptor<Name> = {
    isPatch: false;
    set: (value: number, sound: Sound) => void;
} & EffectDescriptorBase<Name>;
type PatchDescriptor<Name, Nodes> = {
    isPatch: true;
    makeNodes: () => Nodes & {
        input: AudioNode;
        output: AudioNode;
    };
    set: (value: number, nodes: Nodes & {
        input: AudioNode;
        output: AudioNode;
    }) => void;
} & EffectDescriptorBase<Name>;
type Effects = {
    [x in EffectName]: number;
};
declare const effectDescriptors: readonly [PatchDescriptor<"pan", {
    leftGain: GainNode;
    rightGain: GainNode;
}>, PatchlessDescriptor<"pitch">, PatchDescriptor<"volume", {
    node: GainNode;
}>];
type EffectName = typeof effectDescriptors[number]["name"];
type EffectChainConfig = {
    getNonPatchSoundList: () => Sound[];
};
export declare class EffectChain {
    inputNode: AudioNode;
    private getNonPatchSoundList;
    private effectValues;
    private effectNodes;
    private target?;
    constructor(config: EffectChainConfig);
    resetToInitial(): void;
    private updateAudioEffect;
    connect(target: AudioNode): void;
    setEffectValue(name: EffectName, value: number | string | boolean): void;
    private changeEffectValue;
    private clampEffectValue;
    getEffectValue(name: EffectName): number;
    clone(newConfig: EffectChainConfig): EffectChain;
    applyToSound(sound: Sound): void;
    isTargetOf(sound: Sound): boolean;
    private static getInitialEffectValues;
    private static getEffectDescriptor;
    private static getFirstEffectDescriptor;
    private static getLastEffectDescriptor;
    private static getNextEffectDescriptor;
    private static getPreviousEffectDescriptor;
    static decayDuration: number;
    static decayWait: number;
    static effectDescriptors: readonly [PatchDescriptor<"pan", {
        leftGain: GainNode;
        rightGain: GainNode;
    }>, PatchlessDescriptor<"pitch">, PatchDescriptor<"volume", {
        node: GainNode;
    }>];
}
export declare class AudioEffectMap implements Effects {
    private effectChain;
    pan: number;
    pitch: number;
    volume: number;
    constructor(effectChain: EffectChain);
    clear(): void;
}
export {};
