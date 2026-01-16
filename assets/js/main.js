(function () {
  ("use strict");

 // header links update
 const navList = document.getElementById("navmenu");
 navList && (navList.innerHTML = `   
        <ul class="icon-header">
          <!-- <li><a href="https://domgys.in" class="active">Home</a></li> -->
          <li class="dropdown">
            <a href="#"><span>Domain & Hosting </span> <i class="bi bi-chevron-down toggle-dropdown"></i>
            </a>
            <ul>
              <li><a href="https://domgys.in/register-a-domain.html">Register A
                  Domain </a></li>
              <li><a href="https://domgys.in/shared-hosting.html">CPanel
                  shared Hosting</a></li>
              <li><a href="https://domgys.in/window-shared-hosting.html">Plesk
                  Shared Hosting
                </a></li>
              <li><a href="https://domgys.in/wordpress-hosting.html">
                  Wordpress
                  Hosting</a></li>
              <li><a href="https://domgys.in/business-hosting.html">
                  Business Hosting Service
                </a></li>
              <li>
                <a href="https://domgys.in/transfer-your-domain.html">Transfer
                  Your Domain </a>
              </li>
              <li>
                <a href="https://domgys.in/domain-pricing.php">
                  Domain Pricing</a>
              </li>
              <li><a href="https://domgys.in/reseller-hosting.html">Shared
                  cloud Linux
                  Hosting</a></li>
            </ul>
          </li>
          <li>
            <a href="https://domgys.in/websitebuildertool.html">Website Builder Tool</a>
          </li>
          <li class="dropdown">
            <a href="#"><span>Servers & Cloud</span> <i class="bi bi-chevron-down toggle-dropdown"></i>
            </a>
            <ul>
              <li><a href="https://domgys.in/dedicated-hosting.html">Dedicated
                  Hosting</a></li>
              <li><a href="https://domgys.in/vps-hosting.html">VPS Hosting</a>
              </li>
            </ul>
          </li>
          <!-- dropdown menu -->
          <li class="dropdown">
            <a href="#"><span>Email</span> <i class="bi bi-chevron-down toggle-dropdown"></i>
            </a>
            <ul>
              <li><a href="https://domgys.in/business-email.html">Business
                  Email</a>
              </li>
              <li><a href="https://domgys.in/Enterprise-Email.html">Enterprise
                  Email</a></li>
              <li><a href="https://domgys.in/Hostedemail.html">Hosted E-mail</a>
              </li>
              <li><a href="https://domgys.in/anti-spam.html">Anti Spam</a>
              </li>
            </ul>
          </li>
          <!-- dropdown menu -->
          <li class="dropdown">
            <a href="#"><span>Backup & Security</span> <i class="bi bi-chevron-down toggle-dropdown"></i>
            </a>
            <ul>
              <li><a href="https://domgys.in/web-security.html">Web Security</a>
              </li>
              <li class="dropdown " id="deep_menu"><a href="#"><span>SSL</span> <i
                    class="bi bi-chevron-down toggle-dropdown"></i></a>
                <ul>
                  <li><a href="https://domgys.in/digicert-SSL.html">DigiCert SSL</a></li>
                  <li><a href="https://domgys.in/symantec-SSL.html">Symantec SSL</a></li>
                  <li><a href="https://domgys.in/geotrust-SSL.html">GeoTrust SSL</a></li>
                  <li><a href="https://domgys.in/rapid-SSL.html">RapidSSL</a></li>
                  <li><a href="https://domgys.in/Sectigo-SSL.html">Sectigo SSL</a></li>
                  <li><a href="https://domgys.in/thawte-SSL.html">Thawte SSL</a></li>
                  <li><a href="https://domgys.in/trustwave-SSL.html">Trustwave SSL</a></li>
                  <li><a href="https://domgys.in/encryption-everywhere.html">Encryption Everywhere</a></li>
                </ul>
              </li>
              <li><a href="https://domgys.in/cloud-backup-solutions.html">
                  Acronis- Cyber Backup Solutions</a>
              </li>
              <li><a href="https://domgys.in/pc-backup-solutions.html">
                  PC-Backup Solutions</a>
              </li>
              <li class="dropdown " id="deep_menu"><a href="#"><span>Cyber Security</span> <i
                    class="bi bi-chevron-down toggle-dropdown"></i></a>
                <ul>
                  <li><a href="https://domgys.in/edr.html">EDR</a></li>
                  <li><a href="https://domgys.in/xdr.html">XDR</a></li>
                  <li><a href="https://domgys.in/mdr.html">MDR</a></li>
                </ul>
              </li>

            </ul>
          </li>
          <li class="dropdown">
            <a href="#"><span>Domains</span> <i class="bi bi-chevron-down toggle-dropdown"></i>
            </a>
            <ul>
              <li><a href="https://domgys.in/in-domain.html">Book .In domain</a></li>
              <li><a href="https://domgys.in/com-domain.html">Book .Com domain</a></li>
              <li><a href="https://domgys.in/bank-domain.html">Book .Bank domain </a></li>
              <li><a href="https://domgys.in/insurance-domain.html">Book .insurance domain</a></li>
            </ul>
          </li>
          <li class="close-md-screen">
            <a href="https://domgys.in/Become-Our-Partner.html" aria-current="page">
              Become Our Partner</a>
          </li>
          <!-- <li class="becom-partner">
            <a class="becom-partner" href="https://domgys.in/Become-Our-Partner.html" aria-current="page">
              Sign In</a>
          </li> -->

          <li class="close-md-screen">
            <a href="https://clients.domgys.in/contact.php" aria-current="page">Contact
              us</a>
          </li>
          <li class="dropdown open-md-screen">
            <a href="#"> <i class="bi bi-three-dots toggle-dropdown"></i>
            </a>
            <ul>
              <li><a href="https://domgys.in/Blog-Domgys.html" aria-current="page">Blogs</a></li>
              <li><a href="https://clients.domgys.in/contact.php" aria-current="page">Contact
                  us</a></li>
              <li><a href="https://domgys.in/Become-Our-Partner.html" aria-current="page">
                  Become Our Partner</a></li>
            </ul>
          </li>
          <li class="close-md-screen">
            <a href="https://domgys.in/Blog-Domgys.html" aria-current="page">Blogs</a>
          </li>
        </ul>
        <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
      `);
 
  //  validation form
  const forms = document.querySelectorAll(".needs-validation");
  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });

  let currYear = document.querySelector(".year");

  if (currYear) {
    currYear.textContent = new Date().getFullYear();
  } else {
    currYear.textContent = 2021;
  }
  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector("body");
    const selectHeader = document.querySelector("#header");

    if (
      !selectHeader.classList.contains("scroll-up-sticky") &&
      !selectHeader.classList.contains("sticky-top") &&
      !selectHeader.classList.contains("fixed-top")
    )
      return;
    window.scrollY > 100
      ? selectBody.classList.add("scrolled")
      : selectBody.classList.remove("scrolled");
  }

  document.addEventListener("scroll", toggleScrolled);
  window.addEventListener("load", toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");

  function mobileNavToogle() {
    document.querySelector("body").classList.toggle("mobile-nav-active");
    mobileNavToggleBtn.classList.toggle("bi-list");
    mobileNavToggleBtn.classList.toggle("bi-x");
  }
  mobileNavToggleBtn.addEventListener("click", mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll("#navmenu a").forEach((navmenu) => {
    navmenu.addEventListener("click", () => {
      if (document.querySelector(".mobile-nav-active")) {
        mobileNavToogle();
      }
    });
  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll(".navmenu .toggle-dropdown").forEach((navmenu) => {
    navmenu.addEventListener("click", function (e) {
      e.preventDefault();
      this.parentNode.classList.toggle("active");
      this.parentNode.nextElementSibling.classList.toggle("dropdown-active");
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector("#preloader");
  if (preloader) {
    preloader.remove();
    // window.addEventListener('load', () => {
    //   preloader.remove();
    // });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector(".scroll-top");
  let whatsap = document.querySelector(".fix-button a.chat-btn");

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100
        ? scrollTop.classList.add("active")
        : scrollTop.classList.remove("active");
    }
    if (whatsap) {
      window.scrollY > 100
        ? whatsap.classList.add("showbtn")
        : whatsap.classList.remove("showbtn");
    }
  }
  scrollTop &&
    scrollTop.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });

  window.addEventListener("load", toggleScrollTop);
  document.addEventListener("scroll", toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }
  window.addEventListener("load", aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: ".glightbox",
  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function (swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }
  if (document.querySelector(".init-swiper")) {
    window.addEventListener("load", initSwiper);
  }

  /**
   * Frequently Asked Questions Toggle
   */
  document
    .querySelectorAll(".faq-item h3, .faq-item .faq-toggle")
    .forEach((faqItem) => {
      faqItem.addEventListener("click", () => {
        faqItem.parentNode.classList.toggle("faq-active");
      });
    });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll(".isotope-layout").forEach(function (isotopeItem) {
    let layout = isotopeItem.getAttribute("data-layout") ?? "masonry";
    let filter = isotopeItem.getAttribute("data-default-filter") ?? "*";
    let sort = isotopeItem.getAttribute("data-sort") ?? "original-order";

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector(".isotope-container"), function () {
      initIsotope = new Isotope(
        isotopeItem.querySelector(".isotope-container"),
        {
          itemSelector: ".isotope-item",
          layoutMode: layout,
          filter: filter,
          sortBy: sort,
        }
      );
    });

    isotopeItem
      .querySelectorAll(".isotope-filters li")
      .forEach(function (filters) {
        filters.addEventListener(
          "click",
          function () {
            isotopeItem
              .querySelector(".isotope-filters .filter-active")
              .classList.remove("filter-active");
            this.classList.add("filter-active");
            initIsotope.arrange({
              filter: this.getAttribute("data-filter"),
            });
            if (typeof aosInit === "function") {
              aosInit();
            }
          },
          false
        );
      });
  });

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener("load", function (e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: "smooth",
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll(".navmenu a");

  function navmenuScrollspy() {
    navmenulinks.forEach((navmenulink) => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        document
          .querySelectorAll(".navmenu a.active")
          .forEach((link) => link.classList.remove("active"));
        navmenulink.classList.add("active");
      } else {
        navmenulink.classList.remove("active");
      }
    });
  }
  window.addEventListener("load", navmenuScrollspy);
  document.addEventListener("scroll", navmenuScrollspy);

})();
