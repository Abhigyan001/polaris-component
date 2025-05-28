import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["selectAllCheckbox", "selectionText", "actionButtons"];
  static values = { totalCustomers: Number };

  connect() {
    this.updateSelectionCount();

    document.addEventListener(
      "change",
      this.handleCustomerCheckboxChange.bind(this)
    );
  }

  disconnect() {
    document.removeEventListener(
      "change",
      this.handleCustomerCheckboxChange.bind(this)
    );
  }

  toggleSelectAll() {
    const isChecked = this.selectAllCheckboxTarget.checked;
    const customerCheckboxes = document.querySelectorAll(
      'input[name="selected_customers[]"]'
    );

    customerCheckboxes.forEach((checkbox) => {
      checkbox.checked = isChecked;

      const customerItemContainer = checkbox.closest(
        '[data-customer-item-target="container"]'
      );
      if (customerItemContainer) {
        if (isChecked) {
          customerItemContainer.classList.add("bg-gray-100");
        } else {
          customerItemContainer.classList.remove("bg-gray-100");
        }
      }
    });

    this.updateSelectionCount();
  }

  handleCustomerCheckboxChange(event) {
    if (event.target.name === "selected_customers[]") {
      this.updateSelectionCount();
      this.updateSelectAllState();
    }
  }

  updateSelectionCount() {
    const selectedCheckboxes = document.querySelectorAll(
      'input[name="selected_customers[]"]:checked'
    );
    const selectedCount = selectedCheckboxes.length;

    if (selectedCount === 0) {
      this.selectionTextTarget.textContent = `Showing ${this.totalCustomersValue} customers`;
      this.actionButtonsTarget.classList.add("hidden");
    } else {
      this.selectionTextTarget.textContent = `${selectedCount} selected`;
      this.actionButtonsTarget.classList.remove("hidden");
    }
  }

  updateSelectAllState() {
    const customerCheckboxes = document.querySelectorAll(
      'input[name="selected_customers[]"]'
    );
    const checkedCheckboxes = document.querySelectorAll(
      'input[name="selected_customers[]"]:checked'
    );

    if (checkedCheckboxes.length === 0) {
      this.selectAllCheckboxTarget.checked = false;
      this.selectAllCheckboxTarget.indeterminate = false;
    } else if (checkedCheckboxes.length === customerCheckboxes.length) {
      this.selectAllCheckboxTarget.checked = true;
      this.selectAllCheckboxTarget.indeterminate = false;
    } else {
      this.selectAllCheckboxTarget.checked = false;
      this.selectAllCheckboxTarget.indeterminate = true;
    }
  }
}
