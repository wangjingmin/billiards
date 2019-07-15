import { BeginEvent } from "../events/beginevent";
import { RackEvent } from "../events/rackevent";
import { Controller } from "./controller";
import { Aim } from "./aim";
import { AbortEvent } from "../events/abortevent"
import { End } from "./end";

/**
 * Initial state of controller.
 *
 * Transitions into active player and watcher.
 */
export class Init extends Controller {

    handleBegin(event: BeginEvent): Controller {
        console.log("handling " + event)
        this.container.broadcast(new RackEvent(this.container.table))
        return new Aim(this.container)
    }

    handleInput(_) { return this }
    handleAim(_) { return this }
    handleHit(_) { return this }
        handleAbort(_: AbortEvent): Controller {
        return new End(this.container)
    }

}