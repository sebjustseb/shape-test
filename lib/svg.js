class SVG {
    constructor() {
      this.text = "";
      this.textColor = "";
      this.shape = null;
    }
  
    setText(text, color) {
      if (text.length > 3) {
        throw new Error("Text must not exceed 3 characters.");
      }
      this.text = text;
      this.textColor = color;
    }
  
    setShape(shape) {
      this.shape = shape;
    }
  
    render() {
      if (!this.text) {
        throw new Error("Text is required.");
      }
      if (!this.textColor) {
        throw new Error("Text color is required.");
      }
      if (!this.shape) {
        throw new Error("Shape is required.");
      }
  
      const shapeSvg = this.shape.render();
  
      return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          ${shapeSvg}
          <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
      `;
    }
  }
  
  module.exports = SVG;