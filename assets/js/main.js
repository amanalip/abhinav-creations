/**
 * ABHINAV CREATIONS — SHARED WEBSITE BEHAVIOR
 * ------------------------------------------------------------------
 * This file provides five small, independent features:
 *   1. a light/dark theme toggle,
 *   2. an accessible narrow-screen navigation menu,
 *   3. persistent navigation on the two long comparison pages,
 *   4. a manual portfolio carousel on the Home page, and
 *   5. a reading-friendly back-to-top button.
 *
 * The website's core content remains ordinary HTML. If JavaScript is
 * unavailable, visitors can still read the pages and follow normal
 * links. Only these enhanced controls lose their interactive behavior.
 */

"use strict";

/**
 * Store all selectors and storage keys in one object.
 * This avoids scattering important strings throughout the file.
 */
const SITE_CONFIG = {
  themeStorageKey: "abhinav-creations-theme",
  darkTheme: "dark",
  lightTheme: "light",
  wideNavigationQuery: "(min-width: 68.001rem)",
  backToTopRevealOffset: 700,
  backToTopHideDelay: 2500,
};

/**
 * Read a value from localStorage without assuming storage is available.
 * Browsers may block storage because of privacy settings or private mode.
 * Returning null gives the caller a safe, predictable fallback.
 *
 * @param {string} key - Name of the saved browser value.
 * @returns {string|null} The saved value or null when unavailable.
 */
function safelyReadStorage(key) {
  try {
    return window.localStorage.getItem(key);
  } catch (_error) {
    return null;
  }
}

/**
 * Save a value without allowing a storage error to break the page.
 * The theme still changes for the current page even when persistence fails.
 *
 * @param {string} key - Name of the browser value.
 * @param {string} value - Value to save.
 */
function safelyWriteStorage(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch (_error) {
    // Storage is an optional enhancement; no visible error is necessary.
  }
}

/**
 * Work out which theme the visitor currently sees.
 * Priority: explicit HTML attribute -> device preference -> light fallback.
 *
 * @returns {"light"|"dark"} The resolved theme name.
 */
function getCurrentTheme() {
  const explicitTheme = document.documentElement.dataset.theme;

  if (explicitTheme === SITE_CONFIG.darkTheme || explicitTheme === SITE_CONFIG.lightTheme) {
    return explicitTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? SITE_CONFIG.darkTheme
    : SITE_CONFIG.lightTheme;
}

/**
 * Keep the theme button's icon and accessible label synchronized.
 * The label describes what pressing the button will do next.
 *
 * @param {HTMLButtonElement} button - The theme toggle button.
 * @param {"light"|"dark"} currentTheme - Currently active theme.
 */
function updateThemeButton(button, currentTheme) {
  const darkIsActive = currentTheme === SITE_CONFIG.darkTheme;
  const icon = button.querySelector(".theme-icon");

  button.setAttribute("aria-pressed", String(darkIsActive));
  button.setAttribute("aria-label", darkIsActive ? "Switch to light mode" : "Switch to dark mode");
  button.title = darkIsActive ? "Switch to light mode" : "Switch to dark mode";

  if (icon) {
    icon.textContent = darkIsActive ? "☀" : "☾";
  }
}

/**
 * Initialize the site-wide theme toggle.
 * A saved visitor choice overrides the device preference. If storage is
 * blocked, the toggle still works for the current page.
 */
function initializeThemeToggle() {
  const button = document.querySelector("[data-theme-toggle]");

  if (!button) {
    return;
  }

  const savedTheme = safelyReadStorage(SITE_CONFIG.themeStorageKey);

  if (savedTheme === SITE_CONFIG.darkTheme || savedTheme === SITE_CONFIG.lightTheme) {
    document.documentElement.dataset.theme = savedTheme;
  }

  updateThemeButton(button, getCurrentTheme());

  button.addEventListener("click", () => {
    const nextTheme = getCurrentTheme() === SITE_CONFIG.darkTheme
      ? SITE_CONFIG.lightTheme
      : SITE_CONFIG.darkTheme;

    document.documentElement.dataset.theme = nextTheme;
    safelyWriteStorage(SITE_CONFIG.themeStorageKey, nextTheme);
    updateThemeButton(button, nextTheme);
  });

  // When no explicit choice exists, reflect device theme changes live.
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
    if (!document.documentElement.dataset.theme) {
      updateThemeButton(button, getCurrentTheme());
    }
  });
}

/**
 * Initialize the collapsible navigation used when the header is narrow.
 * The code manages aria-expanded, supports Escape, closes after choosing
 * a link, and resets when the viewport becomes wide again.
 */
function initializeNavigation() {
  const menuButton = document.querySelector("[data-menu-toggle]");
  const navigation = document.querySelector("[data-site-navigation]");

  if (!menuButton || !navigation) {
    return;
  }

  /*
   * The backdrop is created by JavaScript because it is useful only when
   * the JavaScript-controlled menu can open. Keeping it out of the HTML
   * also means there is no empty decorative element when scripts are off.
   */
  const backdrop = document.createElement("div");
  backdrop.className = "menu-backdrop";
  backdrop.hidden = true;
  backdrop.setAttribute("aria-hidden", "true");
  document.body.append(backdrop);

  /**
   * Open or close every part of the mobile-navigation experience together.
   * The page-scroll lock and backdrop must never get out of sync with the
   * navigation panel's visible and accessible state.
   *
   * @param {boolean} isOpen - Whether the mobile navigation should be open.
   * @param {boolean} restoreFocus - Whether focus should return to its button.
   */
  const setMenuState = (isOpen, restoreFocus = false) => {
    const backToTopButton = document.querySelector("[data-back-to-top]");

    navigation.classList.toggle("is-open", isOpen);
    document.documentElement.classList.toggle("menu-is-open", isOpen);
    document.body.classList.toggle("menu-is-open", isOpen);
    backdrop.hidden = !isOpen;
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");

    /* The visually hidden Top button must not remain in the Tab sequence. */
    if (backToTopButton) {
      const topButtonShouldBeAvailable = !isOpen && backToTopButton.classList.contains("is-visible");
      backToTopButton.tabIndex = topButtonShouldBeAvailable ? 0 : -1;
      backToTopButton.setAttribute("aria-hidden", String(!topButtonShouldBeAvailable));
    }

    if (!isOpen && restoreFocus) {
      menuButton.focus();
    }
  };

  menuButton.addEventListener("click", () => {
    setMenuState(menuButton.getAttribute("aria-expanded") !== "true");
  });

  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      setMenuState(false);
    }
  });

  /*
   * A pointer press anywhere outside both the panel and its toggle closes the
   * menu. This covers the shaded page, the brand, and the theme control.
   */
  document.addEventListener("click", (event) => {
    const menuIsOpen = menuButton.getAttribute("aria-expanded") === "true";
    const selectedInsideMenu = navigation.contains(event.target);
    const selectedMenuButton = menuButton.contains(event.target);

    if (menuIsOpen && !selectedInsideMenu && !selectedMenuButton) {
      setMenuState(false, true);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
      setMenuState(false, true);
    }
  });

  window.matchMedia(SITE_CONFIG.wideNavigationQuery).addEventListener("change", (event) => {
    if (event.matches) {
      setMenuState(false);
    }
  });
}

/**
 * Add a back-to-top button without repeating markup on every HTML page.
 *
 * The button appears only after a meaningful amount of scrolling. It hides
 * after scrolling stops so that it does not cover text while someone reads.
 * Hover and keyboard focus pause that timer so the control does not disappear
 * while a visitor is trying to use it.
 */
function initializeBackToTopButton() {
  const button = document.createElement("button");
  const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  let hideTimer = null;

  button.className = "back-to-top";
  button.type = "button";
  button.tabIndex = -1;
  button.dataset.backToTop = "";
  button.setAttribute("aria-label", "Back to top");
  button.setAttribute("aria-hidden", "true");
  button.title = "Back to top";
  button.innerHTML = '<span aria-hidden="true">↑</span>';
  document.body.append(button);

  /** Hide the button completely from pointing and keyboard interaction. */
  const hideButton = () => {
    window.clearTimeout(hideTimer);
    button.classList.remove("is-visible");
    button.tabIndex = -1;
    button.setAttribute("aria-hidden", "true");
  };

  /** Start the inactivity timer unless the visitor is using the button. */
  const scheduleHide = () => {
    window.clearTimeout(hideTimer);

    if (button.matches(":hover") || document.activeElement === button) {
      return;
    }

    hideTimer = window.setTimeout(hideButton, SITE_CONFIG.backToTopHideDelay);
  };

  /** Show the button temporarily only when the page is sufficiently scrolled. */
  const respondToScroll = () => {
    const mobileMenuIsOpen = document.documentElement.classList.contains("menu-is-open");

    if (window.scrollY < SITE_CONFIG.backToTopRevealOffset || mobileMenuIsOpen) {
      hideButton();
      return;
    }

    button.classList.add("is-visible");
    button.tabIndex = 0;
    button.setAttribute("aria-hidden", "false");
    scheduleHide();
  };

  window.addEventListener("scroll", respondToScroll, { passive: true });
  button.addEventListener("pointerenter", () => window.clearTimeout(hideTimer));
  button.addEventListener("pointerleave", scheduleHide);
  button.addEventListener("focus", () => window.clearTimeout(hideTimer));
  button.addEventListener("blur", scheduleHide);

  button.addEventListener("click", () => {
    const heading = document.querySelector("h1");

    window.scrollTo({
      top: 0,
      behavior: reducedMotionQuery.matches ? "auto" : "smooth",
    });

    /*
     * Move keyboard focus to the page heading after scrolling. This prevents
     * focus from remaining on a control that becomes hidden near the top.
     */
    if (heading) {
      window.setTimeout(() => {
        heading.tabIndex = -1;
        heading.focus({ preventScroll: true });
        heading.addEventListener("blur", () => heading.removeAttribute("tabindex"), { once: true });
      }, reducedMotionQuery.matches ? 0 : 450);
    }
  });

  /* Handle a restored browser scroll position after a reload. */
  respondToScroll();
}

/**
 * Keep persistent in-page navigation synchronized with the section currently
 * visible on screen.
 *
 * Each enhanced page contains ordinary anchor links plus a native select:
 * - desktop visitors see the anchor links;
 * - mobile visitors see the compact select;
 * - without JavaScript, the ordinary links remain available at every width.
 *
 * The function updates aria-current on the desktop links and the selected
 * mobile option. It deliberately does not rewrite the URL during ordinary
 * scrolling, which avoids filling browser history with passive scroll events.
 */
function initializeSectionNavigation() {
  const navigators = document.querySelectorAll("[data-section-navigation]");
  let atLeastOneNavigatorWasEnhanced = false;

  navigators.forEach((navigator) => {
    const links = Array.from(navigator.querySelectorAll("[data-section-links] a[href^='#']"));
    const select = navigator.querySelector("[data-section-select]");
    const sections = links
      .map((link) => document.querySelector(link.getAttribute("href")))
      .filter(Boolean);

    /* Do not replace the fallback links unless every required part exists. */
    if (!select || links.length === 0 || sections.length !== links.length) {
      return;
    }

    atLeastOneNavigatorWasEnhanced = true;
    let updateRequested = false;

    /** Synchronize both controls without causing navigation or focus changes. */
    const showActiveSection = (activeSection) => {
      const activeHash = `#${activeSection.id}`;

      links.forEach((link) => {
        const isActive = link.getAttribute("href") === activeHash;

        if (isActive) {
          link.setAttribute("aria-current", "location");
        } else {
          link.removeAttribute("aria-current");
        }
      });

      select.value = activeHash;
    };

    /**
     * Select the last heading that has crossed the sticky navigation row.
     * At the bottom of the document the final section remains active even when
     * its heading has moved above the viewport.
     */
    const updateFromScrollPosition = () => {
      const activationLine = navigator.getBoundingClientRect().bottom + 24;
      let activeSection = sections[0];

      sections.forEach((section) => {
        if (section.getBoundingClientRect().top <= activationLine) {
          activeSection = section;
        }
      });

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
        activeSection = sections[sections.length - 1];
      }

      showActiveSection(activeSection);
      updateRequested = false;
    };

    /** Limit repeated scroll calculations to one update per animation frame. */
    const requestPositionUpdate = () => {
      if (!updateRequested) {
        updateRequested = true;
        window.requestAnimationFrame(updateFromScrollPosition);
      }
    };

    /*
     * Assigning the hash provides standard browser history and link behavior.
     * CSS scroll-padding accounts for the combined sticky-control height.
     */
    select.addEventListener("change", () => {
      window.location.hash = select.value;
      requestPositionUpdate();
    });

    window.addEventListener("scroll", requestPositionUpdate, { passive: true });
    window.addEventListener("resize", requestPositionUpdate);
    window.addEventListener("hashchange", requestPositionUpdate);
    requestPositionUpdate();
  });

  if (atLeastOneNavigatorWasEnhanced) {
    document.documentElement.classList.add("section-navigation-enhanced");
  }
}

/**
 * Initialize each manual carousel found on the current page.
 * There is no autoplay because the outline requests a slider but does not
 * request automatic motion. Previous/next buttons and arrow keys work.
 */
function initializeCarousels() {
  document.querySelectorAll("[data-carousel]").forEach((carousel) => {
    const slides = Array.from(carousel.querySelectorAll("[data-carousel-slide]"));
    const previousButton = carousel.querySelector("[data-carousel-previous]");
    const nextButton = carousel.querySelector("[data-carousel-next]");
    const status = carousel.querySelector("[data-carousel-status]");

    if (slides.length === 0 || !previousButton || !nextButton || !status) {
      return;
    }

    let activeIndex = 0;

    /** Render exactly one active slide and update the announced position. */
    const showSlide = (requestedIndex) => {
      activeIndex = (requestedIndex + slides.length) % slides.length;

      slides.forEach((slide, index) => {
        const isActive = index === activeIndex;
        slide.classList.toggle("is-active", isActive);
        slide.setAttribute("aria-hidden", String(!isActive));
      });

      status.textContent = `Item ${activeIndex + 1} of ${slides.length}`;
    };

    previousButton.addEventListener("click", () => showSlide(activeIndex - 1));
    nextButton.addEventListener("click", () => showSlide(activeIndex + 1));

    carousel.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") {
        showSlide(activeIndex - 1);
      }

      if (event.key === "ArrowRight") {
        showSlide(activeIndex + 1);
      }
    });

    showSlide(0);
  });
}

/**
 * Start enhancements only after the HTML has been parsed.
 * Each initializer safely exits when its component is absent from a page.
 */
document.addEventListener("DOMContentLoaded", () => {
  initializeThemeToggle();
  initializeNavigation();
  initializeSectionNavigation();
  initializeCarousels();
  initializeBackToTopButton();
});
