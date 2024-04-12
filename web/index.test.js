import { describe, expect, it } from "vitest";
import { readFileSync } from "fs";
import { JSDOM } from "jsdom";

let html, dom, document;

try {
  html = readFileSync("./index.html", "utf8");
  dom = new JSDOM(html);
  document = dom.window.document;
} catch (error) {
  console.error("Error reading the HTML file: ", error);
}

describe("Index HTML", () => {
  it("should have a recipe image with the correct class", () => {
    // Arrange & Act
    const img = document.querySelector("img.recipe-image");
    // Assert
    expect(img).not.toBeNull();
    expect(img.alt).toBe("Omelette");
    expect(img.src).toBe("./assets/images/image-omelette.jpeg");
    console.log(img);
  });

  it("should contain an h1 tag with the title and the correct class", () => {
    // Arrange & Act
    const h1 = document.querySelector("h1.recipe-title");
    // Assert
    expect(h1).not.toBeNull();
    expect(h1.textContent).toBe("Simple Omelette Recipe");
  });

  it("should have a p tag with intro text with correct lcass", () => {
    // Arrange & Act
    const p = document.querySelector("p.intro-text");
    // Assert
    expect(p).not.toBeNull();
    const text = p.textContent.trim();
    expect(text).toBe(
      "An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats."
    );
  });
});
