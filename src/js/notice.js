export default class Notice {
  #notice = {};

  constructor(parent) {
    this.parent = document.querySelector(parent);
  }

  addNoticeListItem(newValue, activeElement) {
    const keyObj = activeElement.textContent;

    if (this.#notice.hasOwnProperty(keyObj)) {
      if (this.#notice[keyObj].includes(newValue)) {
        console.log('value is in list');
        return '';
      }

      this.#notice[keyObj].push(newValue);
    } else {
      this.#notice[keyObj] = [newValue];
    }

    this.renderList(keyObj);
  }

  renderList(id) {
    this.clearNoticeList();

    if (this.#notice.hasOwnProperty(id)) {
      this.parent.innerHTML = [...this.#notice[id]];
    }
  }

  clearNoticeList() {
    this.parent.innerHTML = 'no items of list';
  }
}
