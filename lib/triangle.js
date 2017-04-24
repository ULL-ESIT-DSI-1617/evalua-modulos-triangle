'use strict'

let Figura = require('@chinegua/ull-shape')

class Triangle extends Figura {
    constructor(options) {
      Figura.Shapes.Triangle = Triangle;
      super("Triangle", options)
      this.width = options.width;
      this.height = options.height;
    }
    getArea() {
      return 0.5 * this.width * this.height;
    }
}


module.exports = Triangle; 