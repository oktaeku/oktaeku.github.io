const gallery = document.getElementById("gallery");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeBtn = document.getElementById("closeBtn");

// 加载 JSON 文件
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(item => {
      const img = document.createElement("img");
      img.src = item.thumb;
      img.alt = item.title;
      img.dataset.full = item.full;
      img.classList.add("thumb");
      gallery.appendChild(img);

      img.addEventListener("click", () => {
        lightboxImg.src = img.dataset.full;
        lightbox.style.display = "flex";
      });
    });
  });

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});
