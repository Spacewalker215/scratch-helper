import type { Sprite, Stage } from "./Sprite";
type TriggerOption = number | string | boolean | ((target: Sprite | Stage) => number | string | boolean);
type TriggerOptions = Partial<Record<string, TriggerOption>>;
export default class Trigger {
    trigger: symbol;
    private options;
    private _script;
    private _runningScript;
    done: boolean;
    private stop;
    constructor(trigger: symbol, options: TriggerOptions, script?: GeneratorFunction);
    constructor(trigger: symbol, script: GeneratorFunction);
    get isEdgeActivated(): boolean;
    option(option: string, target: Sprite | Stage): number | string | boolean | undefined;
    matches(trigger: Trigger["trigger"], options: Trigger["options"] | undefined, target: Sprite | Stage): boolean;
    start(target: Sprite | Stage): Promise<void>;
    step(): void;
    clone(): Trigger;
    static readonly GREEN_FLAG: unique symbol;
    static readonly KEY_PRESSED: unique symbol;
    static readonly BROADCAST: unique symbol;
    static readonly CLICKED: unique symbol;
    static readonly CLONE_START: unique symbol;
    static readonly LOUDNESS_GREATER_THAN: unique symbol;
    static readonly TIMER_GREATER_THAN: unique symbol;
    static readonly BACKDROP_CHANGED: unique symbol;
}
export type { TriggerOption, TriggerOptions };
