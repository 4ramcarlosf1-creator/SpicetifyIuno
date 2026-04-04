// Furina Theme — by Café
// Carga el fondo y la imagen de liked_songs


waitForElement(['img[src="https://misc.scdn.co/liked-songs/liked-songs-300.jpg"]'], (imgs) => {
  for (const img of document.querySelectorAll('img[src="https://misc.scdn.co/liked-songs/liked-songs-300.jpg"]')) {
    img.removeAttribute("srcset");
    img.setAttribute("src", "https://raw.githubusercontent.com/4ramcarlosf1-creator/SpicetifyIuno/main/assets/Purple/liked_songs.png");
  }
});

const likedObserver = new MutationObserver(() => {
  for (const img of document.querySelectorAll('img[src="https://misc.scdn.co/liked-songs/liked-songs-300.jpg"]')) {
    img.removeAttribute("srcset");
    img.setAttribute("src", "https://raw.githubusercontent.com/4ramcarlosf1-creator/SpicetifyIuno/main/assets/Purple/liked_songs.png");
  }
});
likedObserver.observe(document.body, { childList: true, subtree: true });

waitForElement([".Root__top-container"], ([el]) => {
  el.style.backgroundImage = "url(\"https://raw.githubusercontent.com/4ramcarlosf1-creator/SpicetifyIuno/assets/Purple/background.png\")";
})

/**
 * @returns {"Purple" | "Green"}
 */

function getTheme() {
  return "Purple";
  if (window.getComputedStyle(el).getPropertyValue("--spice-button-active") == "#b693ce") {
    return "Green"
  }
}

/**
 * @param {(els: HTMLElement[]) => void} func 
 */

function waitForElement(els, func, timeout = 100) {
  const queries = els.map((el) => document.querySelector(el));
  if (queries.every((a) => a)) {
    func(queries);
  } else if (timeout > 0) {
    setTimeout(waitForElement, 300, els, func, --timeout);
  }
}
