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
      this.triggerTarget.classList.add("focus:border-b-gray-300");
      this.triggerTarget.classList.add("focus:border-b-1");
      this.triggerTarget.classList.add("focus:translate-y-px");
      this.triggerTarget.classList.add(
        "focus:shadow-[inset_0_2px_rgba(0,0,0,0.3)]"
      );
    } else {
      this.hide();
      this.triggerTarget.classList.remove("focus:border-b-gray-300");
      this.triggerTarget.classList.remove("focus:border-b-1");
      this.triggerTarget.classList.remove("focus:translate-y-px");
      this.triggerTarget.classList.remove(
        "focus:shadow-[inset_0_2px_rgba(0,0,0,0.3)]"
      );
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
