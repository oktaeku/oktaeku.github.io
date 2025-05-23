const gallery = document.getElementById("gallery");
const mainContent = document.querySelector(".main-content");

let images = [];
let currentIndex = 0;

// 加载 JSON 文件
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    images = data;
    renderGallery();
  });

function renderGallery() {
  gallery.innerHTML = "";
  images.forEach((item, idx) => {
    const img = document.createElement("img");
    img.src = item.thumb;
    img.alt = item.title;
    img.classList.add("thumb");
    img.addEventListener("click", () => {
      currentIndex = idx;
      showPreview();
    });
    gallery.appendChild(img);
  });
}

function showPreview() {
  // 创建预览层
  const previewDiv = document.createElement("div");
  previewDiv.className = "preview";
  previewDiv.innerHTML = `
    <div class="preview-img-wrapper" style="position:relative; display:inline-block;">
      <span id="prevBtn" class="arrow" style="position:absolute;left:10px;top:50%;transform:translateY(-50%);z-index:2;font-size:2.5em;cursor:pointer;">&#8592;</span>
      <img id="previewImg" src="${images[currentIndex].full}" alt="大图预览" style="max-width:80vw;max-height:80vh;display:block;" />
      <span id="nextBtn" class="arrow" style="position:absolute;right:10px;top:50%;transform:translateY(-50%);z-index:2;font-size:2.5em;cursor:pointer;">&#8594;</span>
    </div>
  `;
  // 替换 gallery
  mainContent.replaceChild(previewDiv, gallery);

  // 事件绑定
  previewDiv.querySelector("#prevBtn").onclick = (e) => {
    e.stopPropagation();
    if (currentIndex > 0) {
      currentIndex--;
      previewDiv.querySelector("#previewImg").src = images[currentIndex].full;
    }
  };
  previewDiv.querySelector("#nextBtn").onclick = (e) => {
    e.stopPropagation();
    if (currentIndex < images.length - 1) {
      currentIndex++;
      previewDiv.querySelector("#previewImg").src = images[currentIndex].full;
    }
  };
  // 点击图片非箭头区域关闭预览
  previewDiv.querySelector(".preview-img-wrapper").onclick = (e) => {
    if (
      e.target.id !== "prevBtn" &&
      e.target.id !== "nextBtn"
    ) {
      // 恢复瀑布流
      mainContent.replaceChild(gallery, previewDiv);
    }
  };
}
