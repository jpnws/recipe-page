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
  it("should contain an h1 tag with the title and the correct class", () => {
    // Arrange & Act
    const h1 = document.querySelector("h1.recipe-title");
    // Assert
    expect(h1).not.toBeNull();
    expect(h1.textContent).toBe("Simple Omelette Recipe");
  });
});
