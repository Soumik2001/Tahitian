document.addEventListener("DOMContentLoaded", function () {
  const coll = document.querySelectorAll(".collapsible");
  const images = document.querySelectorAll(".image-container .background");
  const contents = document.querySelectorAll(".content");

  coll.forEach((button, index) => {
    button.addEventListener("click", function () {

      const activeButtons = Array.from(coll).filter(btn => btn.classList.contains("active"));
      if (activeButtons.length === 1 && this.classList.contains("active")) {
        return true; 
coll.style.cursor="default";
      }


      coll.forEach((btn, btnIndex) => {
        if (btnIndex !== index) {
          btn.classList.remove("active");
          contents[btnIndex].style.maxHeight = null;
        }
      });

      this.classList.toggle("active");
      const content = contents[index];
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + 8.5 + "px";
      }


      images.forEach(img => img.classList.remove("showing"));
      images[index].classList.add("showing");
    });
  });

  coll[0].classList.add("active");
  contents[0].style.maxHeight = contents[0].scrollHeight + 8.5 + "px";
  images[0].classList.add("showing");
});
