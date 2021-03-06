export const refs = {
  body: document.querySelector('body'),
  searchForm: document.querySelector('#search-form'),
  input: document.querySelector('[name="query"]'),
  btnReset: document.querySelector('[data-action="reset"]'),
  currentSearchQuery: '',
  imgList: document.querySelector('.img-list'),
  tempImgURLs: [],
  modal: document.querySelector('.js-modal'),
  modalContent: document.querySelector('.modal__content'),
  modalCloser: document.querySelector('button[data-action="close-modal"]'),
  modalOverlay: document.querySelector('.modal__overlay'),
  modalImage: document.querySelector('.img-card__image'),
  pnotifyOverlay: document.querySelector('.pnotify-overlay'),
  xMousePosition: 0,
  toTopBtn: document.querySelector('[data-action="to-top"]'),
  formOrientation: document.querySelector('.js-orientation'),
  formImgType: document.querySelector('.js-img-type'),
  formInfiniteScroll: document.querySelector('.js-infinite-scroll'),
  optionBox: document.querySelector('.option-box'),
  doneBtn: document.querySelector('.js-done-btn'),
  infiniteScrollOn: 'off',
  endedScroll: true
}