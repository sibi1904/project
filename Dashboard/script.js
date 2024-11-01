document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector(".sidebar");
    const mainContent = document.querySelector(".main-content");
    const collapseBtn = document.querySelector(".collapse-btn");
    const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
    const menuItems = document.querySelectorAll(".menu-item");
    const themeToggle = document.querySelector(".theme-toggle");
  
    function toggleTheme() {
      document.body.classList.toggle("dark-mode");
      const isDark = document.body.classList.contains("dark-mode");
      const themeIcon = themeToggle.querySelector("i");
      themeIcon.className = isDark ? "fas fa-moon" : "fas fa-sun";
      localStorage.setItem("theme", isDark ? "dark" : "light");
    }
  
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark-mode");
      themeToggle.querySelector("i").className = "fas fa-moon";
    }
  
    function toggleSidebar() {
      sidebar.classList.toggle("collapsed");
      mainContent.classList.toggle("expanded");
  
      // Close all open submenus and hide arrows when sidebar is collapsed
      if (sidebar.classList.contains("collapsed")) {
        menuItems.forEach((item) => {
          item.classList.remove("active"); // Close all submenus
          const submenu = item.querySelector(".submenu");
          if (submenu) submenu.style.display = "none"; // Hide the submenu
        });
      } else {
        menuItems.forEach((item) => {
          const submenu = item.querySelector(".submenu");
          if (submenu) submenu.style.display = ""; // Show submenus when expanded
        });
      }
    }
  
    function toggleMobileMenu() {
      sidebar.classList.toggle("mobile-show");
    }
  
    function toggleSubmenu(menuItem) {
      const isActive = menuItem.classList.contains("active");
  
      menuItems.forEach((item) => {
        if (item !== menuItem) {
          item.classList.remove("active");
          const arrow = item.querySelector(".arrow");
          if (arrow) arrow.style.transform = "rotate(0deg)";
        }
      });
  
      menuItem.classList.toggle("active");
      const arrow = menuItem.querySelector(".arrow");
      if (arrow) {
        arrow.style.transform = isActive ? "rotate(0deg)" : "rotate(180deg)";
      }
    }
  
    themeToggle.addEventListener("click", toggleTheme);
    collapseBtn.addEventListener("click", toggleSidebar);
    mobileMenuBtn.addEventListener("click", toggleMobileMenu);
  
    menuItems.forEach((menuItem) => {
      const menuHeader = menuItem.querySelector(".menu-header");
      const hasSubmenu = menuItem.querySelector(".submenu");
  
      if (hasSubmenu && menuHeader) {
        menuHeader.addEventListener("click", () => toggleSubmenu(menuItem));
      }
    });
  });
  