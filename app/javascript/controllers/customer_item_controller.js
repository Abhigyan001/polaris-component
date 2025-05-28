import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["container"];

  toggleSelection(event) {
    const isChecked = event.target.checked;
    if (isChecked) {
      this.containerTarget.classList.add("bg-gray-100");
    } else {
      this.containerTarget.classList.remove("bg-gray-100");
    }
  }
}
