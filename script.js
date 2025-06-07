document.addEventListener('DOMContentLoaded', () => {
    // 获取元素
    const hamburger = document.getElementById('hamburger');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    // 点击汉堡菜单图标显示侧边栏
    hamburger.addEventListener('click', () => {
    sidebar.classList.add('active');
    overlay.classList.add('active');
    hamburger.style.display = 'none';
    });
    // 点击遮罩层关闭侧边栏
    overlay.addEventListener('click', () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    hamburger.style.display = 'block';
    });
    // 侧边栏链接触摸缩放动画
    const sidebarLinks = document.querySelectorAll('.sidebar .nav a');
    sidebarLinks.forEach(link => {
      link.addEventListener('touchstart', () => {
        link.style.transform = 'scale(1.1)';
        setTimeout(() => {
          link.style.transform = 'scale(1)';
        }, 150);
      });
    });
    });
