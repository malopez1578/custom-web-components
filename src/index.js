import "./styles.css";

export default class migueComp extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        .btn {
          font.size: 200%;
          color=red;
        }
      </style>
      <button class="btn">
        hello ${this.getAttribute("name") || "world as "}
      </button>
    
    `;
  }
}

if (!customElements.get("migue-comp")) {
  customElements.define("migue-comp", migueComp);
}
