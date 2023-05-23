/* $(document).ready(function () {
  $(".gallery").mauGallery({
    columns: {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 3,
      xl: 3,
    },
    lightBox: true,
    lightboxId: "myAwesomeLightbox",
    showTags: true,
    tagsPosition: "top",
  });
});
*/

// Suppression du code en jQuery
document.addEventListener("DOMContentLoaded", function () {
  let gallery = document.querySelectorAll(".gallery");
  let mauGalleryOptions = {
    columns: {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 3,
      xl: 3,
    },
    lightBox: true,
    lightboxId: "myAwesomeLightbox",
    showTags: true,
    tagsPosition: "top",
  };

  for (let i = 0; i < gallery.length; i++) {
    mauGallery(gallery[i], mauGalleryOptions);
  }
});
