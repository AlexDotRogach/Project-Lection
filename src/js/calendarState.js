export default function calendarState(noticeList) {
  const calendarRef = document.querySelector('.calendar');

  function onCalendarClick(e) {
    const { target: tar } = e;

    if (tar.tagName !== 'TD' || tar.textContent === '') return '';

    const activeId = document.querySelector('.active');

    if (activeId) {
      activeId.classList.remove('active');
    }

    tar.classList.toggle('active');
    noticeList.renderList(tar.textContent);
  }

  calendarRef.addEventListener('click', onCalendarClick);
}
