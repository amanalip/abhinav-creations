/**
 * ABHINAV CREATIONS — SHARED WEBSITE BEHAVIOR
 * ------------------------------------------------------------------
 * This file provides three small, independent features:
 *   1. a light/dark theme toggle,
 *   2. an accessible narrow-screen navigation menu, and
 *   3. a manual portfolio carousel on the Home page.
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

  const setMenuState = (isOpen) => {
    navigation.classList.toggle("is-open", isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
  };

  menuButton.addEventListener("click", () => {
    setMenuState(menuButton.getAttribute("aria-expanded") !== "true");
  });

  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      setMenuState(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
      setMenuState(false);
      menuButton.focus();
    }
  });

  window.matchMedia(SITE_CONFIG.wideNavigationQuery).addEventListener("change", (event) => {
    if (event.matches) {
      setMenuState(false);
    }
  });
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
  initializeCarousels();
});
