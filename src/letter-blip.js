import './letter-blip.css';
class TextAnimator {
  constructor(selector, options) {
    this.text = document.querySelector(selector);
    this.strText = this.text.textContent.trim();
    this.splitText = this.strText.split('');
    this.text.textContent = '';
    this.options = options || {};
    this.margin = this.options.margin || '0px';
    this.delay = this.options.delay || 0;
    this.class = this.options.class || 'text-span';
  }

  animate() {
    for (let i = 0; i < this.splitText.length; i++) {
      if (this.splitText[i] === ' ') {
        this.text.innerHTML += '&nbsp;';
      } else {
        this.text.innerHTML +=
          "<span class='" +
          this.class +
          "' style='margin-right:" +
          this.margin +
          ';animation-delay:' +
          i * this.delay +
          "ms;'><span class='fade-in' style='animation-delay:" +
          i * this.delay +
          "ms;'>" +
          this.splitText[i] +
          '</span></span>';
      }
    }
  }
}

export function letterBlip(className) {
  return new TextAnimator(className, {
    margin: '5px',
    delay: 100,
    class: 'text-blob__letter',
  });
}
