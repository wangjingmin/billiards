import { Input } from "../events/input"
import { GameEvent } from "../events/gameevent"
import { Controller } from "./controller"
import { Table } from "../model/table";
import { View } from "../view/view";
import { Init } from "./init";
import { Rack } from "../utils/rack";

/**
 * Model, View, Controller container.
 */
export class Container {

    table: Table
    view: View
    controller: Controller

    inputQueue: Input[] = []
    eventQueue: GameEvent[] = []

    last = performance.now()
    step = 0.01

    broadcast: (event: GameEvent) => void
    log: (text: string) => void

    constructor(element, log) {
        this.log = log
        this.table = new Table(Rack.diamond())
        if (element != "") {
            this.view = new View(element)
            this.table.balls.forEach(b => this.view.addMesh(b.mesh.mesh))
            this.view.addMesh(this.table.cue.mesh)
        }
        this.setController(new Init(this))
    }


    advance(elapsed) {
        let steps = Math.max(15, Math.floor(elapsed / this.step))
        for (var i = 0; i < steps; i++) {
            this.table.advance(this.step)
        }
        this.view.update(steps * this.step)
    }

    animate(timestamp): void {
        this.advance((timestamp - this.last) / 1000.0)
        this.view.render()
        this.last = timestamp

        let inputEvent = this.inputQueue.pop()
        if (inputEvent != null) {
            this.setController(this.controller.handleInput(inputEvent))
        }

        let event = this.eventQueue.pop()
        if (event != null) {
            this.setController(event.applyToController(this.controller))
        }
        requestAnimationFrame(t => { this.animate(t) })
    }

    setController(controller) {
        if (controller != this.controller) {
            this.log("Transition to " + controller.constructor.name)
        }
        this.controller = controller
    }
}