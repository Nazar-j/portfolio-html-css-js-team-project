function init() {
  import("./index.catalogs-carousel.js");
  import("./index.section-image-gallery.partial.js");
  import("./global.cursor-animation.js");
  import("./index.services.js");
  import("./index.subscribe-form.js");
  import("./global.burger-menu.js");
  import("./index.lighting-solutions.partial.js");
  import("./global.footer.js")
}

const totalPartials = document.querySelectorAll(
  '[hx-trigger="load"], [data-hx-trigger="load"]'
).length;
let loadedPartialsCount = 0;

document.body.addEventListener("htmx:afterOnLoad", () => {
  loadedPartialsCount++;
  if (loadedPartialsCount === totalPartials) init();
});
