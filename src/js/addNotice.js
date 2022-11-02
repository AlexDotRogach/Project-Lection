import Notice from './notice';
import calendarState from './calendarState';

export default function addNotice() {
  const refs = {
    btnAdd: document.querySelector('submit'),
    form: document.querySelector('form'),
  };

  const noticeList = new Notice('.info-text');

  calendarState(noticeList);

  refs.form.addEventListener('submit', addNoticeValue);

  function addNoticeValue(e) {
    e.preventDefault();

    const { value } = e.target.firstElementChild;

    const activeElement = document.querySelector('.active');

    activeElement
      ? noticeList.addNoticeListItem(value, document.querySelector('.active'))
      : noticeList.clearNoticeList();
  }
}
