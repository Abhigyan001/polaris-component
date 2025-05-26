import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["trigger", "menu"];

  connect() {
    this.boundHandleOutsideClick = this.handleOutsideClick.bind(this);
  }

  toggle(event) {
    event.stopPropagation();

    if (this.menuTarget.classList.contains("hidden")) {
      this.show();
    } else {
      this.hide();
    }
  }

  show() {
    this.menuTarget.classList.remove("hidden");
    document.addEventListener("click", this.boundHandleOutsideClick);
  }

  hide() {
    this.menuTarget.classList.add("hidden");
    document.removeEventListener("click", this.boundHandleOutsideClick);
  }

  handleOutsideClick(event) {
    if (!this.element.contains(event.target)) {
      this.hide();
    }
  }

  selectItem(event) {
    this.hide();
  }

  disconnect() {
    document.removeEventListener("click", this.boundHandleOutsideClick);
  }
}
