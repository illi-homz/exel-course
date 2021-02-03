export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error('no $root provided for DomListener')
    }

    this.$root = $root
    this.listeners = listeners
  }

  initDOMListeners() {
  	this.listeners.forEach(listener => {
  		// console.log(this.$root)
  	})
  }

  removeDOMListeners() {}
}
