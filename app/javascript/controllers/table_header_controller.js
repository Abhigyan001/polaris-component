import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = [
    "selectAllCheckbox",
    "selectionText",
    "actionButtons",
    "customerItem"
  ];

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

      const customerItemContainer = event.target.closest(
        '[data-customer-item-target="container"]'
      );
      if (customerItemContainer) {
        if (event.target.checked) {
          customerItemContainer.classList.add("bg-gray-100");
        } else {
          customerItemContainer.classList.remove("bg-gray-100");
        }
      }
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
