(function () {
  "use strict";

  function isSubPage() {
    const path = window.location.pathname.replace(/\\/g, "/").toLowerCase();
    return path.includes("/pages/");
  }

  function getCurrentPageKey() {
    const path = window.location.pathname.replace(/\\/g, "/").toLowerCase();
    if (path.endsWith("about.html")) return "about";
    if (path.endsWith("events.html")) return "events";
    if (path.endsWith("adventure.html")) return "adventure";
    if (path.endsWith("blog.html")) return "blog";
    if (path.endsWith("contact.html")) return "contact";
    if (path.endsWith("login.html")) return "login";
    if (path.endsWith("register.html")) return "register";
    if (path.endsWith("404.html")) return "404";
    return "home";
  }

  function get404RedirectUrl() {
    return isSubPage() ? "404.html" : "pages/404.html";
  }

  function isEmptyOrHashHref(rawHref) {
    if (rawHref === null || rawHref === undefined) return true;
    const trimmed = String(rawHref).trim();
    const lower = trimmed.toLowerCase();
    return (
      trimmed === "" ||
      trimmed === "#" ||
      lower === "javascript:void(0)" ||
      lower === "javascript:void(0);" ||
      lower === "javascript:;"
    );
  }

  function normalizeComponentPaths(container) {
    if (!container) return;
    const inPages = isSubPage();
    const prefix = inPages ? "../" : "";

    container.querySelectorAll("[data-asset-src]").forEach(function (el) {
      const raw = el.getAttribute("data-asset-src");
      el.setAttribute("src", prefix + raw);
    });

    container.querySelectorAll("[data-nav-link]").forEach(function (el) {
      const target = el.getAttribute("data-nav-link");
      if (inPages) {
        if (target.startsWith("pages/")) {
          el.setAttribute("href", target.replace(/^pages\//, ""));
        } else {
          el.setAttribute("href", "../" + target);
        }
      } else {
        el.setAttribute("href", target);
      }
    });

    const activeKey = getCurrentPageKey();
    container.querySelectorAll("[data-page]").forEach(function (link) {
      if (link.getAttribute("data-page") === activeKey) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  async function loadComponent(targetId, relPathFromRoot, relPathFromPages) {
    const host = document.getElementById(targetId);
    if (!host) return;
    const url = isSubPage() ? relPathFromPages : relPathFromRoot;
    try {
      const res = await fetch(url);
      if (res.ok) {
        host.innerHTML = await res.text();
        normalizeComponentPaths(host);
      }
    } catch (err) {
      console.error("Error loading component:", url, err);
    }
  }

  function showToast(message) {
    let toast = document.getElementById("stacklyGlobalToast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "stacklyGlobalToast";
      toast.className = "stackly-toast";
      document.body.appendChild(toast);
    }
    toast.innerHTML =
      '<i class="fa-solid fa-circle-check text-main fs-5"></i><span>' +
      message +
      "</span>";
    toast.classList.add("show");
    clearTimeout(toast._hideTimer);
    toast._hideTimer = setTimeout(function () {
      toast.classList.remove("show");
    }, 4000);
  }

  function initHeaderAndFooterUI() {
    const mainHeader = document.getElementById("mainHeader");
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    const progressCircle = document.getElementById("scrollProgressCircle");
    const circumference = 2 * Math.PI * 23;

    function handleScroll() {
      const scrollY = window.scrollY || window.pageYOffset;
      if (mainHeader) {
        if (scrollY > 70) {
          mainHeader.classList.add("fixed-header");
        } else {
          mainHeader.classList.remove("fixed-header");
        }
      }
      if (scrollToTopBtn) {
        if (scrollY > 260) {
          scrollToTopBtn.classList.add("visible");
        } else {
          scrollToTopBtn.classList.remove("visible");
        }
      }
      if (progressCircle) {
        const docHeight =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;
        const progress = docHeight > 0 ? scrollY / docHeight : 0;
        const offset = circumference - progress * circumference;
        progressCircle.style.strokeDashoffset = String(
          Math.max(0, Math.min(circumference, offset)),
        );
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    if (scrollToTopBtn) {
      scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    // Full-screen Mobile Menu
    const mobileMenu = document.getElementById("mobileMenu");
    const openMobileBtn = document.getElementById("mobileMenuOpenBtn");
    const closeMobileBtn = document.getElementById("mobileMenuCloseBtn");
    const mobileBackdrop = document.getElementById("mobileMenuBackdrop");

    function closeMobileMenu() {
      if (!mobileMenu) return;
      mobileMenu.classList.remove("open");
      mobileMenu.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
      if (openMobileBtn) openMobileBtn.setAttribute("aria-expanded", "false");
    }

    if (openMobileBtn && mobileMenu) {
      openMobileBtn.addEventListener("click", function () {
        mobileMenu.classList.add("open");
        mobileMenu.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
        openMobileBtn.setAttribute("aria-expanded", "true");
      });
    }
    if (closeMobileBtn)
      closeMobileBtn.addEventListener("click", closeMobileMenu);
    if (mobileBackdrop)
      mobileBackdrop.addEventListener("click", closeMobileMenu);

    // Search Popup
    const searchPopup = document.getElementById("searchPopup");
    const openSearchBtn = document.getElementById("openSearchBtn");
    const closeSearchBtn = document.getElementById("closeSearchBtn");
    const searchBackdrop = document.getElementById("searchBackdrop");
    const headerSearchForm = document.getElementById("headerSearchForm");

    if (openSearchBtn && searchPopup) {
      openSearchBtn.addEventListener("click", function () {
        searchPopup.classList.add("open");
        searchPopup.setAttribute("aria-hidden", "false");
        const input = document.getElementById("headerSearchInput");
        if (input)
          setTimeout(function () {
            input.focus();
          }, 100);
      });
    }
    if (closeSearchBtn && searchPopup) {
      closeSearchBtn.addEventListener("click", function () {
        searchPopup.classList.remove("open");
        searchPopup.setAttribute("aria-hidden", "true");
      });
    }
    if (searchBackdrop && searchPopup) {
      searchBackdrop.addEventListener("click", function () {
        searchPopup.classList.remove("open");
        searchPopup.setAttribute("aria-hidden", "true");
      });
    }
    if (headerSearchForm) {
      headerSearchForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const input = document.getElementById("headerSearchInput");
        if (input && input.value.trim()) {
          showToast(
            'Searching showroom inventory for "' + input.value.trim() + '"...',
          );
          searchPopup.classList.remove("open");
          input.value = "";
        }
      });
    }

    // Offcanvas Sidebar
    const aboutSidebar = document.getElementById("aboutSidebar");
    const openSidebarBtn = document.getElementById("openSidebarBtn");
    const closeSidebarBtn = document.getElementById("closeSidebarBtn");
    const closeSidebarBackdrop = document.getElementById(
      "closeSidebarBackdrop",
    );

    if (openSidebarBtn && aboutSidebar) {
      openSidebarBtn.addEventListener("click", function () {
        aboutSidebar.classList.add("open");
        aboutSidebar.setAttribute("aria-hidden", "false");
      });
    }
    if (closeSidebarBtn && aboutSidebar) {
      closeSidebarBtn.addEventListener("click", function () {
        aboutSidebar.classList.remove("open");
        aboutSidebar.setAttribute("aria-hidden", "true");
      });
    }
    if (closeSidebarBackdrop && aboutSidebar) {
      closeSidebarBackdrop.addEventListener("click", function () {
        aboutSidebar.classList.remove("open");
        aboutSidebar.setAttribute("aria-hidden", "true");
      });
    }
  }

  /* ==========================================================================
	   Strict Form Input Validation (Requirement 14 & 15)
	   - All inputs required
	   - Username/Name field: prevent typing numbers or special chars in field itself, maxlength=16
	   - Number/Phone field: prevent typing alphabets or special chars in field itself, minlength=10, maxlength=10
	   - Date field: prevent past dates
	   ========================================================================== */
  function getTodayISO() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    return year + "-" + month + "-" + day;
  }

  function initStrictForms() {
    const todayStr = getTodayISO();
    const allowedControlKeys = [
      "Backspace",
      "Delete",
      "Tab",
      "Escape",
      "Enter",
      "ArrowLeft",
      "ArrowRight",
      "ArrowUp",
      "ArrowDown",
      "Home",
      "End",
    ];

    // 1. Username / Name inputs: Letters & spaces only, maxlength=16 (excludes .strict-alpha-nospace)
    const usernameInputs = document.querySelectorAll(
      'input[name="username"]:not(.strict-alpha-nospace), input[name="name"]:not(.strict-alpha-nospace), .username-field:not(.strict-alpha-nospace)',
    );
    usernameInputs.forEach(function (input) {
      input.setAttribute("required", "required");
      input.setAttribute("maxlength", "16");

      input.addEventListener("keydown", function (e) {
        if (e.ctrlKey || e.metaKey || e.altKey) return;
        if (allowedControlKeys.indexOf(e.key) !== -1) return;
        if (!/^[a-zA-Z\s]$/.test(e.key)) {
          e.preventDefault();
        }
      });

      input.addEventListener("beforeinput", function (e) {
        if (e.data && /[^a-zA-Z\s]/.test(e.data)) {
          e.preventDefault();
        }
      });

      input.addEventListener("input", function () {
        const cleaned = this.value.replace(/[^a-zA-Z\s]/g, "").slice(0, 16);
        if (this.value !== cleaned) {
          this.value = cleaned;
        }
        this.setCustomValidity("");
      });

      input.addEventListener("paste", function (e) {
        e.preventDefault();
        const pasted =
          (e.clipboardData || window.clipboardData).getData("text") || "";
        const cleaned = pasted.replace(/[^a-zA-Z\s]/g, "");
        const current = this.value;
        this.value = (current + cleaned).slice(0, 16);
      });
    });

    // 2. Phone / Number inputs: Digits only, minlength=10, maxlength=10
    const numberInputs = document.querySelectorAll(
      'input[name="phone"], input[name="number"], input[type="tel"], .number-field',
    );
    numberInputs.forEach(function (input) {
      input.setAttribute("required", "required");
      input.setAttribute("minlength", "10");
      input.setAttribute("maxlength", "10");
      input.setAttribute("pattern", "[0-9]{10}");
      input.setAttribute("inputmode", "numeric");

      input.addEventListener("keydown", function (e) {
        if (e.ctrlKey || e.metaKey || e.altKey) return;
        if (allowedControlKeys.indexOf(e.key) !== -1) return;
        if (!/^[0-9]$/.test(e.key)) {
          e.preventDefault();
        }
      });

      input.addEventListener("beforeinput", function (e) {
        if (e.data && /[^0-9]/.test(e.data)) {
          e.preventDefault();
        }
      });

      input.addEventListener("input", function () {
        const cleaned = this.value.replace(/[^0-9]/g, "").slice(0, 10);
        if (this.value !== cleaned) {
          this.value = cleaned;
        }
        if (this.value.length > 0 && this.value.length < 10) {
          this.setCustomValidity("Phone number must be exactly 10 digits.");
        } else {
          this.setCustomValidity("");
        }
      });

      input.addEventListener("paste", function (e) {
        e.preventDefault();
        const pasted =
          (e.clipboardData || window.clipboardData).getData("text") || "";
        const cleaned = pasted.replace(/[^0-9]/g, "");
        this.value = (this.value + cleaned).slice(0, 10);
      });
    });

    // 3. Date inputs: No past dates allowed
    const dateInputs = document.querySelectorAll(
      'input[type="date"], .date-field',
    );
    dateInputs.forEach(function (input) {
      input.setAttribute("required", "required");
      input.setAttribute("min", todayStr);
      if (!input.value || input.value < todayStr) {
        input.value = todayStr;
      }

      function enforceFutureOrToday() {
        if (input.value && input.value < todayStr) {
          input.value = todayStr;
          showToast(
            "Past dates are not permitted. Date reset to today (" +
              todayStr +
              ").",
          );
        }
        input.setCustomValidity("");
      }

      input.addEventListener("change", enforceFutureOrToday);
      input.addEventListener("blur", enforceFutureOrToday);
    });

    // 4. Form Submissions
    const forms = document.querySelectorAll("form.stackly-validated-form");
    forms.forEach(function (form) {
      // Ensure every input/select/textarea inside is required
      form
        .querySelectorAll("input, select, textarea")
        .forEach(function (field) {
          field.setAttribute("required", "required");
        });

      form.addEventListener("submit", function (e) {
        e.preventDefault();

        const phoneField = form.querySelector(
          'input[name="phone"], input[name="number"], input[type="tel"], .number-field',
        );
        if (phoneField && phoneField.value.length !== 10) {
          phoneField.setCustomValidity(
            "Please enter a valid 10-digit phone number.",
          );
          phoneField.reportValidity();
          return;
        }

        const dateField = form.querySelector('input[type="date"]');
        if (dateField && dateField.value < todayStr) {
          dateField.value = todayStr;
          showToast(
            "Past dates are not permitted. Please choose today or a future date.",
          );
          return;
        }

        if (!form.checkValidity()) {
          form.reportValidity();
          return;
        }

        const userField = form.querySelector(
          'input[name="username"], input[name="name"], .username-field',
        );
        const userName = userField ? userField.value.trim() : "Rider";
        showToast(
          "Thank you, " +
            userName +
            "! Your Stackly Showroom request has been confirmed.",
        );
        form.reset();
        if (dateField) {
          dateField.value = todayStr;
        }
      });
    });
  }

  /* ==========================================================================
	   Interactive UI: Hero Slider, Countdowns, Accordions, Finance Estimator
	   ========================================================================== */
  function initHeroSlider() {
    const slides = document.querySelectorAll(".hero-slide-item");
    const dots = document.querySelectorAll(".hero-dot");
    const prevBtn = document.getElementById("heroPrevBtn");
    const nextBtn = document.getElementById("heroNextBtn");
    if (!slides.length) return;

    let currentIndex = 0;
    let timer = null;

    function showSlide(index) {
      currentIndex = (index + slides.length) % slides.length;
      slides.forEach(function (s, idx) {
        s.classList.toggle("active", idx === currentIndex);
      });
      dots.forEach(function (d, idx) {
        d.classList.toggle("active", idx === currentIndex);
      });
    }

    function startAutoSlide() {
      clearInterval(timer);
      timer = setInterval(function () {
        showSlide(currentIndex + 1);
      }, 6500);
    }

    if (prevBtn) {
      prevBtn.addEventListener("click", function () {
        showSlide(currentIndex - 1);
        startAutoSlide();
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener("click", function () {
        showSlide(currentIndex + 1);
        startAutoSlide();
      });
    }
    dots.forEach(function (dot, idx) {
      dot.addEventListener("click", function () {
        showSlide(idx);
        startAutoSlide();
      });
    });

    startAutoSlide();
  }

  function initCountdowns() {
    const countdowns = document.querySelectorAll(".time-countdown");
    if (!countdowns.length) return;

    // Target 18 days from current time so countdown is always live & active
    const targetTime = Date.now() + 18 * 24 * 60 * 60 * 1000 + 6 * 3600 * 1000;

    function updateClocks() {
      const diff = Math.max(0, targetTime - Date.now());
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const mins = Math.floor((diff / (1000 * 60)) % 60);
      const secs = Math.floor((diff / 1000) % 60);

      countdowns.forEach(function (box) {
        const dEl = box.querySelector('[data-unit="days"]');
        const hEl = box.querySelector('[data-unit="hours"]');
        const mEl = box.querySelector('[data-unit="minutes"]');
        const sEl = box.querySelector('[data-unit="seconds"]');
        if (dEl) dEl.textContent = String(days).padStart(2, "0");
        if (hEl) hEl.textContent = String(hours).padStart(2, "0");
        if (mEl) mEl.textContent = String(mins).padStart(2, "0");
        if (sEl) sEl.textContent = String(secs).padStart(2, "0");
      });
    }

    updateClocks();
    setInterval(updateClocks, 1000);
  }

  function initAccordions() {
    const accBtns = document.querySelectorAll(".accordion-box .acc-btn");
    accBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        const parentBlock = this.closest(".block");
        const parentBox = this.closest(".accordion-box");
        if (!parentBlock || !parentBox) return;

        const isOpen = parentBlock.classList.contains("active-block");
        parentBox.querySelectorAll(".block").forEach(function (blk) {
          blk.classList.remove("active-block");
          const content = blk.querySelector(".acc-content");
          if (content) content.classList.remove("current");
        });

        if (!isOpen) {
          parentBlock.classList.add("active-block");
          const targetContent = parentBlock.querySelector(".acc-content");
          if (targetContent) targetContent.classList.add("current");
        }
      });
    });
  }

  function initFinanceCalculator() {
    const priceRange = document.getElementById("bikePriceRange");
    const depositRange = document.getElementById("depositRange");
    const termRange = document.getElementById("termRange");
    if (!priceRange || !depositRange || !termRange) return;

    const priceVal = document.getElementById("bikePriceVal");
    const depositVal = document.getElementById("depositVal");
    const termVal = document.getElementById("termVal");
    const monthlyResult = document.getElementById("monthlyPaymentResult");
    const loanAmountResult = document.getElementById("totalLoanAmount");

    function calculateEMI() {
      const price = Number(priceRange.value);
      const deposit = Math.min(Number(depositRange.value), price - 2000);
      const months = Number(termRange.value);
      const principal = Math.max(1000, price - deposit);
      const annualRate = 0.059; // 5.9% APR
      const monthlyRate = annualRate / 12;
      const emi =
        (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1);

      if (priceVal) priceVal.textContent = "£" + price.toLocaleString();
      if (depositVal) depositVal.textContent = "£" + deposit.toLocaleString();
      if (termVal) termVal.textContent = months + " Months";
      if (monthlyResult)
        monthlyResult.textContent = "£" + Math.round(emi).toLocaleString();
      if (loanAmountResult)
        loanAmountResult.textContent = "£" + principal.toLocaleString();
    }

    priceRange.addEventListener("input", calculateEMI);
    depositRange.addEventListener("input", calculateEMI);
    termRange.addEventListener("input", calculateEMI);
    calculateEMI();
  }

  function initActionToastTriggers() {
    document.querySelectorAll("[data-toast-msg]").forEach(function (el) {
      if (
        el.tagName &&
        el.tagName.toLowerCase() === "a" &&
        isEmptyOrHashHref(el.getAttribute("href"))
      ) {
        return;
      }
      el.addEventListener("click", function (e) {
        e.preventDefault();
        showToast(this.getAttribute("data-toast-msg"));
      });
    });
  }

  /* ==========================================================================
	   Global Empty Links / '#' Redirection to 404 Page & 404 Go Back Controls
	   ========================================================================== */
  function initEmptyLinksRedirectAnd404Controls() {
    // Redirect any click on an <a> with empty href or href="#" across the entire project to 404.html
    document.addEventListener(
      "click",
      function (e) {
        const link = e.target.closest("a");
        if (!link) return;
        const rawHref = link.getAttribute("href");
        if (isEmptyOrHashHref(rawHref)) {
          e.preventDefault();
          e.stopPropagation();
          window.location.href = get404RedirectUrl();
        }
      },
      true,
    );

    // 404 Page "Go Back" Button Handler
    const goBackBtn = document.getElementById("errorGoBackBtn");
    if (goBackBtn) {
      goBackBtn.addEventListener("click", function (e) {
        e.preventDefault();
        if (window.history.length > 1) {
          window.history.back();
        } else {
          window.location.href = isSubPage() ? "../index.html" : "index.html";
        }
      });
    }
  }

  /* ==========================================================================
	   Authentication Pages (Login & Register) Validation & Flow
	   - All fields required on both pages
	   - Register Username: strictly letters only (no numbers, no special chars, no spaces)
	   - Password weak validation on both Login and Register pages
	   - Register Confirm Password match validation
	   - Redirect to login.html after Register form submit
	   ========================================================================== */
  function evaluatePasswordStrength(pwd) {
    const rules = {
      length: pwd.length >= 8,
      upper: /[A-Z]/.test(pwd),
      lower: /[a-z]/.test(pwd),
      number: /[0-9]/.test(pwd),
      special: /[^A-Za-z0-9\s]/.test(pwd),
    };
    let passedCount = 0;
    Object.keys(rules).forEach(function (k) {
      if (rules[k]) passedCount++;
    });
    const isStrong = passedCount === 5;
    return {
      rules: rules,
      passedCount: passedCount,
      isStrong: isStrong,
    };
  }

  function updatePasswordMeterUI(pwd, badgeId, barsId, rulesListId) {
    const result = evaluatePasswordStrength(pwd);
    const badge = document.getElementById(badgeId);
    const barsWrap = document.getElementById(barsId);
    const rulesList = document.getElementById(rulesListId);

    if (rulesList) {
      Object.keys(result.rules).forEach(function (ruleKey) {
        const li = rulesList.querySelector('[data-rule="' + ruleKey + '"]');
        if (!li) return;
        const icon = li.querySelector("i");
        const met = result.rules[ruleKey];
        li.classList.remove("rule-met", "rule-failed");
        if (pwd.length > 0) {
          li.classList.add(met ? "rule-met" : "rule-failed");
          if (icon) {
            icon.className = met
              ? "fa-solid fa-circle-check"
              : "fa-solid fa-circle-xmark";
          }
        } else if (icon) {
          icon.className = "fa-solid fa-circle-dot";
        }
      });
    }

    if (barsWrap) {
      const segs = barsWrap.querySelectorAll(".strength-bar-seg");
      segs.forEach(function (seg, idx) {
        seg.className = "strength-bar-seg";
        if (pwd.length === 0) return;
        if (result.isStrong) {
          seg.classList.add("active-strong");
        } else if (result.passedCount >= 3) {
          if (idx < 3) seg.classList.add("active-medium");
        } else {
          if (idx < Math.max(1, result.passedCount)) {
            seg.classList.add("active-weak");
          }
        }
      });
    }

    if (badge) {
      badge.className = "strength-badge";
      if (pwd.length === 0) {
        badge.textContent = "Required";
      } else if (result.isStrong) {
        badge.textContent = "Strong";
        badge.classList.add("strong");
      } else if (result.passedCount >= 3) {
        badge.textContent = "Weak (Incomplete)";
        badge.classList.add("medium");
      } else {
        badge.textContent = "Weak Password";
        badge.classList.add("weak");
      }
    }

    return result;
  }

  function setFieldFeedback(inputEl, feedbackId, message, status) {
    const fb = document.getElementById(feedbackId);
    if (inputEl) {
      inputEl.classList.remove("is-invalid-field", "is-valid-field");
      if (status === "error") inputEl.classList.add("is-invalid-field");
      if (status === "success") inputEl.classList.add("is-valid-field");
    }
    if (fb) {
      fb.classList.remove("error", "success");
      if (status === "error") {
        fb.classList.add("error");
        fb.innerHTML =
          '<i class="fa-solid fa-triangle-exclamation"></i> <span>' +
          message +
          "</span>";
      } else if (status === "success") {
        fb.classList.add("success");
        fb.innerHTML =
          '<i class="fa-solid fa-circle-check"></i> <span>' +
          message +
          "</span>";
      } else {
        fb.textContent = message;
      }
    }
  }

  function showAuthAlert(alertId, message, type) {
    const alertBox = document.getElementById(alertId);
    if (!alertBox) return;
    alertBox.className =
      "auth-alert show " +
      (type === "success" ? "alert-success" : "alert-error");
    const icon =
      type === "success"
        ? "fa-solid fa-circle-check"
        : "fa-solid fa-circle-exclamation";
    alertBox.innerHTML =
      '<i class="' + icon + ' fs-5"></i><span>' + message + "</span>";
  }

  function initAuthPages() {
    const allowedControlKeys = [
      "Backspace",
      "Delete",
      "Tab",
      "Escape",
      "ArrowLeft",
      "ArrowRight",
      "ArrowUp",
      "ArrowDown",
      "Home",
      "End",
    ];

    // Password Visibility Toggle Buttons
    document.querySelectorAll("[data-toggle-password]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const targetId = this.getAttribute("data-toggle-password");
        const input = document.getElementById(targetId);
        const icon = this.querySelector("i");
        if (!input) return;
        if (input.type === "password") {
          input.type = "text";
          if (icon) icon.className = "fa-solid fa-eye-slash";
        } else {
          input.type = "password";
          if (icon) icon.className = "fa-solid fa-eye";
        }
      });
    });

    // Strict Register Username Field: NO numbers, NO special characters, NO spaces, NO Enter key
    const strictUsernameInputs = document.querySelectorAll(
      ".strict-alpha-nospace",
    );
    strictUsernameInputs.forEach(function (input) {
      input.setAttribute("required", "required");

      input.addEventListener("keydown", function (e) {
        if (e.ctrlKey || e.metaKey || e.altKey) return;
        // Explicitly prevent Space and Enter as requested in Requirement 7
        if (e.key === " " || e.code === "Space" || e.key === "Enter") {
          e.preventDefault();
          return;
        }
        if (allowedControlKeys.indexOf(e.key) !== -1) return;
        if (!/^[a-zA-Z]$/.test(e.key)) {
          e.preventDefault();
        }
      });

      input.addEventListener("beforeinput", function (e) {
        if (
          e.inputType === "insertLineBreak" ||
          e.inputType === "insertParagraph"
        ) {
          e.preventDefault();
          return;
        }
        if (e.data && /[^a-zA-Z]/.test(e.data)) {
          e.preventDefault();
        }
      });

      input.addEventListener("input", function () {
        const cleaned = this.value.replace(/[^a-zA-Z]/g, "").slice(0, 20);
        if (this.value !== cleaned) {
          this.value = cleaned;
        }
        if (this.value.length >= 3) {
          this.setCustomValidity("");
          setFieldFeedback(
            this,
            "registerUsernameFeedback",
            "Valid rider username (alphabets only).",
            "success",
          );
        } else if (this.value.length > 0) {
          this.setCustomValidity("Username must be at least 3 letters.");
          setFieldFeedback(
            this,
            "registerUsernameFeedback",
            "Username must be at least 3 letters (A–Z only, no spaces).",
            "error",
          );
        } else {
          this.setCustomValidity("Username is required.");
          setFieldFeedback(
            this,
            "registerUsernameFeedback",
            "Letters (A–Z) only. No numbers, symbols, or spaces.",
            "neutral",
          );
        }
      });

      input.addEventListener("paste", function (e) {
        e.preventDefault();
        const pasted =
          (e.clipboardData || window.clipboardData).getData("text") || "";
        const cleaned = pasted.replace(/[^a-zA-Z]/g, "");
        this.value = (this.value + cleaned).slice(0, 20);
        this.dispatchEvent(new Event("input"));
      });
    });

    // =========================================================================
    // LOGIN FORM LOGIC
    // =========================================================================
    const loginForm = document.getElementById("loginAuthForm");
    if (loginForm) {
      const loginRole = document.getElementById("loginRole");
      const loginEmail = document.getElementById("loginEmail");
      const loginPassword = document.getElementById("loginPassword");
      const loginRemember = document.getElementById("loginRemember");

      // Check if redirected from Registration
      const params = new URLSearchParams(window.location.search);
      if (params.get("registered") === "true") {
        const regUser = sessionStorage.getItem("stacklyRegisteredUsername");
        const regEmail = sessionStorage.getItem("stacklyRegisteredEmail");
        const regRole = sessionStorage.getItem("stacklyRegisteredRole");

        if (regEmail && loginEmail) loginEmail.value = regEmail;
        if (regRole && loginRole) loginRole.value = regRole;

        showAuthAlert(
          "loginAlertBox",
          "Registration complete" +
            (regUser ? " for " + regUser : "") +
            "! Please sign in with your credentials.",
          "success",
        );
        showToast("Registration successful! Please sign in to continue.");
      }

      if (loginRole) {
        loginRole.addEventListener("change", function () {
          if (this.value) {
            this.setCustomValidity("");
            setFieldFeedback(
              this,
              "loginRoleFeedback",
              "Role selected: " + this.value,
              "success",
            );
          }
        });
      }

      if (loginEmail) {
        loginEmail.addEventListener("input", function () {
          const emailVal = this.value.trim();
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
          if (emailRegex.test(emailVal)) {
            this.setCustomValidity("");
            setFieldFeedback(
              this,
              "loginEmailFeedback",
              "Valid email format.",
              "success",
            );
          } else if (emailVal.length > 0) {
            this.setCustomValidity("Please enter a valid email address.");
            setFieldFeedback(
              this,
              "loginEmailFeedback",
              "Please enter a valid email address (e.g. rider@domain.com).",
              "error",
            );
          }
        });
      }

      if (loginPassword) {
        loginPassword.addEventListener("input", function () {
          const evalRes = updatePasswordMeterUI(
            this.value,
            "loginStrengthBadge",
            "loginStrengthBars",
            "loginPasswordRules",
          );
          if (evalRes.isStrong) {
            this.setCustomValidity("");
            setFieldFeedback(
              this,
              "loginPasswordFeedback",
              "Strong password verified.",
              "success",
            );
          } else {
            this.setCustomValidity(
              "Weak password detected. Password must be at least 8 characters and include uppercase, lowercase, number, and special character.",
            );
            setFieldFeedback(
              this,
              "loginPasswordFeedback",
              "Weak password: include 8+ chars, uppercase, lowercase, number & special symbol.",
              "error",
            );
          }
        });
      }

      if (loginRemember) {
        loginRemember.addEventListener("change", function () {
          if (this.checked) {
            this.setCustomValidity("");
            setFieldFeedback(
              null,
              "loginRememberFeedback",
              "Session persistence enabled.",
              "success",
            );
          } else {
            this.setCustomValidity("Please check Remember Me to proceed.");
            setFieldFeedback(
              null,
              "loginRememberFeedback",
              "Required: Please check Remember Me to proceed.",
              "error",
            );
          }
        });
      }

      loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // 1. Role check
        if (!loginRole.value) {
          setFieldFeedback(
            loginRole,
            "loginRoleFeedback",
            "Please select your account role.",
            "error",
          );
          showAuthAlert(
            "loginAlertBox",
            "Please select your showroom role to sign in.",
            "error",
          );
          loginRole.focus();
          return;
        }

        // 2. Email check
        const emailVal = loginEmail.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        if (!emailRegex.test(emailVal)) {
          setFieldFeedback(
            loginEmail,
            "loginEmailFeedback",
            "Please enter a valid email address.",
            "error",
          );
          showAuthAlert(
            "loginAlertBox",
            "Please provide a valid showroom email address.",
            "error",
          );
          loginEmail.focus();
          return;
        }

        // 3. Weak Password Check
        const pwdEval = updatePasswordMeterUI(
          loginPassword.value,
          "loginStrengthBadge",
          "loginStrengthBars",
          "loginPasswordRules",
        );
        if (!pwdEval.isStrong) {
          setFieldFeedback(
            loginPassword,
            "loginPasswordFeedback",
            "Weak password rejected! Must contain 8+ chars, uppercase, lowercase, number, and special character.",
            "error",
          );
          showAuthAlert(
            "loginAlertBox",
            "Weak password detected. Please fulfill all 5 password security requirements.",
            "error",
          );
          loginPassword.focus();
          return;
        }

        // 4. Remember Me Check
        if (!loginRemember.checked) {
          setFieldFeedback(
            null,
            "loginRememberFeedback",
            "Required: Please check Remember Me to proceed.",
            "error",
          );
          showAuthAlert(
            "loginAlertBox",
            "All fields are required. Please check 'Remember Me' to continue.",
            "error",
          );
          loginRemember.focus();
          return;
        }

        showAuthAlert(
          "loginAlertBox",
          "Authenticated as " +
            loginRole.value +
            "! Redirecting to Stackly Showroom Home...",
          "success",
        );
        showToast(
          "Welcome back! Signed in as " +
            loginRole.value +
            " (" +
            emailVal +
            ").",
        );

        setTimeout(function () {
          window.location.href = "../index.html";
        }, 1200);
      });
    }

    // =========================================================================
    // REGISTER FORM LOGIC
    // =========================================================================
    const registerForm = document.getElementById("registerAuthForm");
    if (registerForm) {
      const regUsername = document.getElementById("registerUsername");
      const regRole = document.getElementById("registerRole");
      const regEmail = document.getElementById("registerEmail");
      const regPassword = document.getElementById("registerPassword");
      const regConfirm = document.getElementById("registerConfirmPassword");
      const regTerms = document.getElementById("registerTerms");

      function checkPasswordsMatch() {
        if (!regPassword || !regConfirm) return false;
        const p1 = regPassword.value;
        const p2 = regConfirm.value;
        if (p2.length === 0) {
          regConfirm.setCustomValidity("Please confirm your password.");
          setFieldFeedback(
            regConfirm,
            "registerConfirmFeedback",
            "Must match your password exactly.",
            "neutral",
          );
          return false;
        }
        if (p1 !== p2) {
          regConfirm.setCustomValidity("Passwords do not match.");
          setFieldFeedback(
            regConfirm,
            "registerConfirmFeedback",
            "Passwords do not match! Please re-enter.",
            "error",
          );
          return false;
        }
        regConfirm.setCustomValidity("");
        setFieldFeedback(
          regConfirm,
          "registerConfirmFeedback",
          "Passwords match!",
          "success",
        );
        return true;
      }

      if (regRole) {
        regRole.addEventListener("change", function () {
          if (this.value) {
            this.setCustomValidity("");
            setFieldFeedback(
              this,
              "registerRoleFeedback",
              "Selected role: " + this.value,
              "success",
            );
          }
        });
      }

      if (regEmail) {
        regEmail.addEventListener("input", function () {
          const emailVal = this.value.trim();
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
          if (emailRegex.test(emailVal)) {
            this.setCustomValidity("");
            setFieldFeedback(
              this,
              "registerEmailFeedback",
              "Valid email address.",
              "success",
            );
          } else if (emailVal.length > 0) {
            this.setCustomValidity("Please enter a valid email address.");
            setFieldFeedback(
              this,
              "registerEmailFeedback",
              "Enter a valid email address (e.g. oliver@domain.co.uk).",
              "error",
            );
          }
        });
      }

      if (regPassword) {
        regPassword.addEventListener("input", function () {
          const evalRes = updatePasswordMeterUI(
            this.value,
            "registerStrengthBadge",
            "registerStrengthBars",
            "registerPasswordRules",
          );
          if (evalRes.isStrong) {
            this.setCustomValidity("");
            setFieldFeedback(
              this,
              "registerPasswordFeedback",
              "Strong password accepted.",
              "success",
            );
          } else {
            this.setCustomValidity(
              "Weak password. Must include 8+ chars, uppercase, lowercase, number, and special character.",
            );
            setFieldFeedback(
              this,
              "registerPasswordFeedback",
              "Weak password: include 8+ chars, upper, lower, number & symbol.",
              "error",
            );
          }
          if (regConfirm && regConfirm.value.length > 0) {
            checkPasswordsMatch();
          }
        });
      }

      if (regConfirm) {
        regConfirm.addEventListener("input", checkPasswordsMatch);
      }

      if (regTerms) {
        regTerms.addEventListener("change", function () {
          if (this.checked) {
            this.setCustomValidity("");
            setFieldFeedback(
              null,
              "registerTermsFeedback",
              "Terms & Conditions accepted.",
              "success",
            );
          } else {
            this.setCustomValidity(
              "You must accept the Terms & Conditions to register.",
            );
            setFieldFeedback(
              null,
              "registerTermsFeedback",
              "Required: You must accept the Terms & Conditions.",
              "error",
            );
          }
        });
      }

      registerForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // 1. Validate Username (strictly letters only, no spaces/numbers/symbols)
        const cleanUser = (regUsername.value || "").replace(/[^a-zA-Z]/g, "");
        if (cleanUser.length < 3 || regUsername.value !== cleanUser) {
          setFieldFeedback(
            regUsername,
            "registerUsernameFeedback",
            "Username is required (min 3 letters, alphabets only, no spaces or numbers).",
            "error",
          );
          showAuthAlert(
            "registerAlertBox",
            "Please enter a valid Username using letters only (no numbers, special characters, or spaces).",
            "error",
          );
          regUsername.focus();
          return;
        }

        // 2. Validate Role
        if (!regRole.value) {
          setFieldFeedback(
            regRole,
            "registerRoleFeedback",
            "Please select your account role.",
            "error",
          );
          showAuthAlert(
            "registerAlertBox",
            "Please select your role in the showroom portal.",
            "error",
          );
          regRole.focus();
          return;
        }

        // 3. Validate Email
        const emailVal = regEmail.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        if (!emailRegex.test(emailVal)) {
          setFieldFeedback(
            regEmail,
            "registerEmailFeedback",
            "Please enter a valid email address.",
            "error",
          );
          showAuthAlert(
            "registerAlertBox",
            "Please enter a valid email address.",
            "error",
          );
          regEmail.focus();
          return;
        }

        // 4. Validate Weak Password
        const pwdEval = updatePasswordMeterUI(
          regPassword.value,
          "registerStrengthBadge",
          "registerStrengthBars",
          "registerPasswordRules",
        );
        if (!pwdEval.isStrong) {
          setFieldFeedback(
            regPassword,
            "registerPasswordFeedback",
            "Weak password rejected! Fulfill all 5 rules below.",
            "error",
          );
          showAuthAlert(
            "registerAlertBox",
            "Weak password detected. Password must have at least 8 characters, uppercase, lowercase, number, and special character.",
            "error",
          );
          regPassword.focus();
          return;
        }

        // 5. Validate Password & Confirm Password Match
        if (!checkPasswordsMatch()) {
          showAuthAlert(
            "registerAlertBox",
            "Password and Confirm Password do not match!",
            "error",
          );
          regConfirm.focus();
          return;
        }

        // 6. Validate Terms & Conditions
        if (!regTerms.checked) {
          setFieldFeedback(
            null,
            "registerTermsFeedback",
            "Required: You must accept the Terms & Conditions.",
            "error",
          );
          showAuthAlert(
            "registerAlertBox",
            "Please accept the Terms & Conditions to complete registration.",
            "error",
          );
          regTerms.focus();
          return;
        }

        // Save registered user details for seamless pre-fill on login page
        try {
          sessionStorage.setItem("stacklyRegisteredUsername", cleanUser);
          sessionStorage.setItem("stacklyRegisteredEmail", emailVal);
          sessionStorage.setItem("stacklyRegisteredRole", regRole.value);
        } catch (err) {
          // Ignore storage errors in private browsing
        }

        showAuthAlert(
          "registerAlertBox",
          "Account created for " + cleanUser + "! Redirecting to Login Page...",
          "success",
        );
        showToast(
          "Welcome to Stackly, " + cleanUser + "! Redirecting to Login page...",
        );

        // Requirement 8: Redirect to login page after register submit
        setTimeout(function () {
          window.location.href = "login.html?registered=true";
        }, 1000);
      });
    }
  }

  /* ==========================================================================
	   Scroll Reveal Animations for Home Page & All Sub-Pages (All Sections)
	   ========================================================================== */
  function initScrollRevealAnimations() {
    function markReveal(el, direction, delaySec) {
      if (!el || el.classList.contains("reveal-on-scroll")) return;
      el.classList.add("reveal-on-scroll");
      const dir = el.getAttribute("data-reveal") || direction || "up";
      el.classList.add("reveal-" + dir);
      if (!el.getAttribute("data-reveal")) {
        el.setAttribute("data-reveal", dir);
      }
      if (typeof delaySec === "number" && delaySec > 0) {
        el.style.setProperty("--reveal-delay", delaySec.toFixed(2) + "s");
      }
    }

    // 1. Honor any explicit [data-reveal] attributes already in HTML
    document.querySelectorAll("[data-reveal]").forEach(function (el) {
      const dir = el.getAttribute("data-reveal") || "up";
      const customDelay = el.getAttribute("data-reveal-delay");
      markReveal(el, dir, customDelay ? parseFloat(customDelay) : undefined);
    });

    // 2. Configure every <section> across Home & all Sub-Pages
    const allSections = document.querySelectorAll("section");
    allSections.forEach(function (section) {
      section.setAttribute("data-scroll-section", "true");

      // A. Hero Showroom Slider (.slider-one)
      if (section.classList.contains("slider-one")) {
        const activeSlide =
          section.querySelector(".hero-slide-item.active") ||
          section.querySelector(".hero-slide-item");
        if (activeSlide) {
          const title = activeSlide.querySelector(".slider-one_title");
          const heading = activeSlide.querySelector(".slider-one_heading");
          const text = activeSlide.querySelector(".slider-one_text");
          const buttons = activeSlide.querySelector(".slider-one_button");
          const events = activeSlide.querySelector(".slider-one_events");
          const imgCol = activeSlide.querySelector(".slider-one_image-column");
          markReveal(title, "down", 0.05);
          markReveal(heading, "left", 0.14);
          markReveal(text, "left", 0.22);
          markReveal(buttons, "up", 0.3);
          markReveal(events, "up", 0.38);
          markReveal(imgCol, "right", 0.18);
        }
        const controls = section.querySelector(".hero-slider-controls");
        markReveal(controls, "up", 0.42);
        return;
      }

      // B. Inner Page Banner (.page-banner)
      if (section.classList.contains("page-banner")) {
        const breadcrumb = section.querySelector(".breadcrumb-nav");
        const title = section.querySelector(".page-banner_title");
        const desc = section.querySelector(".page-banner_desc");
        markReveal(breadcrumb, "down", 0.05);
        markReveal(title, "up", 0.14);
        markReveal(desc, "up", 0.24);
        return;
      }

      // C. Auth Pages (.auth-section) & 404 Page (.error-404-section)
      if (
        section.classList.contains("auth-section") ||
        section.classList.contains("error-404-section")
      ) {
        const topBar = section.querySelector(".auth-top-bar, .error-top-bar");
        const mainCard = section.querySelector(".auth-card, .error-vault-card");
        const leftStage = section.querySelector(
          ".auth-showcase, .error-visual-stage",
        );
        const rightPanel = section.querySelector(
          ".auth-form-panel, .error-command-panel",
        );
        markReveal(topBar, "down", 0.05);
        markReveal(mainCard, "zoom", 0.12);
        markReveal(leftStage, "left", 0.2);
        markReveal(rightPanel, "right", 0.26);
        return;
      }

      // D. Section Titles (.sec-title)
      section.querySelectorAll(".sec-title").forEach(function (secTitle) {
        markReveal(secTitle, "up", 0.05);
      });

      // E. Featured Spotlight Containers
      section
        .querySelectorAll(
          ".featured-event-card, .featured-article-box, .finance-box, .vlog-block_one-image, .newsletter-one .inner-container",
        )
        .forEach(function (box) {
          markReveal(box, "zoom", 0.12);
        });

      // F. Rows & Columns Inside Each Section
      const rows = section.querySelectorAll(".row");
      rows.forEach(function (row) {
        // Skip rows inside forms so form inputs aren't individually delayed
        if (row.closest("form")) return;

        const directCols = Array.from(row.children).filter(function (child) {
          return (
            child.classList &&
            Array.from(child.classList).some(function (cls) {
              return cls.startsWith("col-") || cls === "column";
            })
          );
        });

        if (directCols.length === 2) {
          // 2-Column Split Layout: Left & Right Directional Reveal
          markReveal(directCols[0], "left", 0.1);
          markReveal(directCols[1], "right", 0.2);
        } else if (directCols.length > 2) {
          // Multi-Column Grid (3, 4, or 6 cards): Staggered Upward / Zoom Reveal
          const perRow = directCols.length >= 4 ? 4 : 3;
          directCols.forEach(function (col, idx) {
            const staggerDelay = 0.08 + (idx % perRow) * 0.1;
            const hasZoomCard = col.querySelector(
              ".category-card, .milestone-card, .pass-tier-card",
            );
            markReveal(col, hasZoomCard ? "zoom" : "up", staggerDelay);
          });
        }
      });

      // G. Stacked Timeline Nodes, Schedule Cards & Accordion Blocks
      section
        .querySelectorAll(
          ".schedule-row-card, .timeline-node, .accordion-box .block, .tech-feature-box",
        )
        .forEach(function (item, idx) {
          markReveal(item, "up", 0.08 + (idx % 5) * 0.08);
        });
    });

    // 3. Common Footer Component (#mainFooter)
    const footer = document.getElementById("mainFooter");
    if (footer) {
      footer.querySelectorAll(".footer_column").forEach(function (col, idx) {
        markReveal(col, "up", 0.08 + idx * 0.1);
      });
      const footerBottom = footer.querySelector(".footer-bottom");
      markReveal(footerBottom, "fade", 0.25);
    }

    // 4. Observe all .reveal-on-scroll elements with IntersectionObserver
    const revealTargets = document.querySelectorAll(".reveal-on-scroll");
    if (!revealTargets.length) return;

    if (!("IntersectionObserver" in window)) {
      revealTargets.forEach(function (el) {
        el.classList.add("is-revealed");
      });
      return;
    }

    const revealObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -45px 0px",
        threshold: 0.12,
      },
    );

    revealTargets.forEach(function (el) {
      revealObserver.observe(el);
    });
  }

  document.addEventListener("DOMContentLoaded", async function () {
    await Promise.all([
      loadComponent(
        "header-component",
        "pages/components/header.html",
        "components/header.html",
      ),
      loadComponent(
        "footer-component",
        "pages/components/footer.html",
        "components/footer.html",
      ),
    ]);
    initHeaderAndFooterUI();
    initStrictForms();
    initAuthPages();
    initHeroSlider();
    initCountdowns();
    initAccordions();
    initFinanceCalculator();
    initActionToastTriggers();
    initEmptyLinksRedirectAnd404Controls();
    initScrollRevealAnimations();
  });
})();
