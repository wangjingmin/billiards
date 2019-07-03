import { AbortEvent } from "../events/abortevent";
import { AimEvent } from "../events/aimevent";
import { BeginEvent } from "../events/beginevent";
import { RackEvent } from "../events/rackevent";
import { Controller } from "./controller";
import { PlaceBall } from "./placeball";
import { End } from "./end";
import { View } from "../view/view";
import { Rack } from "../utils/rack";
import { Table } from "../model/table";

/**
 * Initial state of controller.
 *
 * Transitions into active player and watcher.
 */
export class Init extends Controller {

    constructor(element) {
        super()
        this.container.view = new View(element)
    }

    advance(t: number): void {
        console.log(t)
    }

    handleBegin(event: BeginEvent): Controller {
        console.log("handling " + event)
        this.container.table = new Table(Rack.testSpin())
        this.container.broadcast(new RackEvent(this.container.table))
        return new PlaceBall()
    }

    handleAim(event: AimEvent): Controller {
        console.log("handling " + event)
        return this
    }

    handleAbort(event: AbortEvent): Controller {
        console.log("ignoring " + event)
        return new End()
    }
}