import Trigger, { TriggerOptions } from "./Trigger";
import Renderer from "./Renderer";
import Input from "./Input";
import type { Stage, Sprite } from "./Sprite";
type TriggerWithTarget = {
    target: Sprite | Stage;
    trigger: Trigger;
};
export default class Project {
    stage: Stage;
    sprites: Partial<Record<string, Sprite>>;
    renderer: Renderer;
    input: Input;
    private loudnessHandler;
    private _cachedLoudness;
    runningTriggers: TriggerWithTarget[];
    answer: string | null;
    private timerStart;
    /**
     * Used to keep track of what edge-activated trigger predicates evaluted to
     * on the previous step.
     */
    private _prevStepTriggerPredicates;
    constructor(stage: Stage, sprites?: {}, { frameRate }?: {
        frameRate?: number | undefined;
    });
    attach(renderTarget: string | HTMLElement): void;
    greenFlag(): void;
    private _matchingTriggers;
    private _stepEdgeActivatedTriggers;
    private step;
    private render;
    private _renderLoop;
    fireTrigger(trigger: symbol, options?: TriggerOptions): Promise<void>;
    _startTriggers(triggers: TriggerWithTarget[]): Promise<void>;
    get spritesAndClones(): Sprite[];
    get spritesAndStage(): (Sprite | Stage)[];
    changeSpriteLayer(sprite: Sprite, layerDelta: number, relativeToSprite?: Sprite): void;
    stopAllSounds(): void;
    get timer(): number;
    restartTimer(): void;
    askAndWait(question: string): Promise<void>;
    get loudness(): number;
}
export {};
