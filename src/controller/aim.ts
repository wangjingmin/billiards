import { Input } from "../events/input"
import { Controller } from "./controller";
import { PlayShot } from "./playshot";
import { AbortEvent } from "../events/abortevent"
import { End } from "./end";

/**
 * Aim using input events.
 *
 * Transitions to PlayShot.
 * Game events are ignored besides chat and abort messages.
 */
export class Aim extends Controller {

    readonly scale = 0.000001

    constructor(container) {
        super(container)
        this.container.table.cue.moveTo(this.container.table.balls[0].pos)
    }

    handleInput(input: Input): Controller {
        switch (input.key) {
            case "ArrowLeft":
                this.container.table.cue.rotateAim(-input.t * this.scale)
                break
            case "ArrowRight":
                this.container.table.cue.rotateAim(input.t * this.scale)
                break
            case "ArrowDown":
                this.container.table.cue.adjustHeight(-input.t * this.scale)
                break
            case "ArrowUp":
                this.container.table.cue.adjustHeight(input.t * this.scale)
                break
            case "ShiftArrowLeft":
                this.container.table.cue.adjustSide(-input.t * this.scale)
                break
            case "ShiftArrowRight":
                this.container.table.cue.adjustSide(input.t * this.scale)
                break
            case "Space":
                this.container.table.cue.adjustPower(input.t * this.scale)
                break
            case "SpaceUp":
                return this.hit()
                break
            default:
                console.log(JSON.stringify(input))
        }
        return this
    }

    hit() {
        // broadcast hit
        // return new state
        return new PlayShot(this.container)
    }

    handleBegin(_) { return this }
    handleAim(_) { return this }
    handleHit(_) { return this }
    handleAbort(_: AbortEvent): Controller {
        return new End(this.container)
    }

}