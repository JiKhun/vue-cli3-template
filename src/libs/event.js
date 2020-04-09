class Event {
    constructor() {
        this.clientList = {}
    }
    listen(key, handler) {
        if (!this.clientList[key]) {
            this.clientList[key] = []
        }
        this.clientList[key].push(handler)
    }
    trigger() {
        const key = Array.prototype.shift.call(arguments)
        const handlers = this.clientList[key]
        if (!handlers || handlers.length === 0) {
            return false
        }

        for (let i = 0; i < handlers.length; i++) {
            const handler = handlers[i]
            handler.apply(null, arguments)
        }
    }
    remove(key, handler) {
        const handlers = this.clientList[key]

        if (!handlers) {
            return false
        }

        if (!handler) {
            handlers && (handlers.length = 0)
        } else {
            for (let i = 0; i < handlers.length; i++) {
                const _handler = handlers[i]
                _handler === handler && handlers.splice(i, 1)
            }
        }
    }
}

export default new Event()
