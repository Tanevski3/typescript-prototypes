export default {
  isOpen: false,
  open: function(elem: HTMLElement | any) {
    this.isOpen = true;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      /* IE/Edge */
      elem.msRequestFullscreen();
    }
  },
  close: function() {
    this.isOpen = false;
    const doc: any = document;
    if (doc.exitFullscreen) {
      doc.exitFullscreen();
    } else if (doc.mozCancelFullScreen) {
      /* Firefox */
      doc.mozCancelFullScreen();
    } else if (doc.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      doc.webkitExitFullscreen();
    } else if (doc.msExitFullscreen) {
      /* IE/Edge */
      doc.msExitFullscreen();
    }
  }
};
