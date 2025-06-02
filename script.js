document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    hamburger.addEventListener('click', () => {
    sidebar.classList.add('active');
    overlay.classList.add('active');
    hamburger.style.display = 'none';
    });

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
