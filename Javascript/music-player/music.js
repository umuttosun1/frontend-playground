class Music {
  constructor(title, singer, img, file) {
    this.title = title;
    this.singer = singer;
    this.img = img;
    this.file = file;
  }

  getName() {
    return this.title + " - " + this.singer;
  }
}

const musicList = [
  new Music("Humble", "Kendrick Lamar", "1.jpeg", "1.mp3"),
  new Music("Can't Stop", "Red Hot Chili Peppers", "2.jpeg", "2.mp3"),
  new Music("Ride", "twenty one pilots", "3.jpeg", "3.mp3"),
  new Music("Big Dawgs", "Hanumankind", "4.jpeg", "4.mp3"),
  new Music("Tiryakinim", "Bayhan", "5.jpeg", "5.mp3"),
];
