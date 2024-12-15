import {
  Link,
  NavLink,
  Outlet,
  init_dist
} from "/build/_shared/chunk-KJIC5NSH.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  Products
} from "/build/_shared/chunk-5LBRYOUZ.js";
import {
  createHotContext
} from "/build/_shared/chunk-IKJ3I24Q.js";
import "/build/_shared/chunk-MZF3CFPM.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/Header.tsx
var import_react = __toESM(require_react(), 1);
init_dist();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Header.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Header.tsx"
  );
  import.meta.hot.lastModified = "1734268475309.6545";
}
var Header = () => {
  _s();
  const [isMenuOpen, setIsMenuOpen] = (0, import_react.useState)(false);
  const [scrolled, setScrolled] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: `header ${scrolled ? "scrolled" : ""}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: `nav ${isMenuOpen ? "mobile-open" : ""}`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "logo", children: [
      "Ausbud",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "hidden sm:inline-block ml-2 text-sm font-light tracking-wider text-gray-600", children: "Australian Cannabis Reviews" }, void 0, false, {
        fileName: "app/components/Header.tsx",
        lineNumber: 40,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Header.tsx",
      lineNumber: 38,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "nav-links", children: ["Home", "Products", "Reviews", "Learn"].map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: item === "Home" ? "/" : `/${item.toLowerCase()}`, className: ({
      isActive
    }) => `nav-link ${isActive ? "active" : ""}`, children: item }, item, false, {
      fileName: "app/components/Header.tsx",
      lineNumber: 46,
      columnNumber: 67
    }, this)) }, void 0, false, {
      fileName: "app/components/Header.tsx",
      lineNumber: 45,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "auth-buttons", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/login", className: "auth-button primary", children: "Sign In" }, void 0, false, {
        fileName: "app/components/Header.tsx",
        lineNumber: 54,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/register", className: "auth-button secondary", children: "Register" }, void 0, false, {
        fileName: "app/components/Header.tsx",
        lineNumber: 57,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Header.tsx",
      lineNumber: 53,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setIsMenuOpen(!isMenuOpen), className: "menu-button", "aria-label": "Toggle menu", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: isMenuOpen ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }, void 0, false, {
      fileName: "app/components/Header.tsx",
      lineNumber: 64,
      columnNumber: 29
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 6h16M4 12h16M4 18h16" }, void 0, false, {
      fileName: "app/components/Header.tsx",
      lineNumber: 64,
      columnNumber: 126
    }, this) }, void 0, false, {
      fileName: "app/components/Header.tsx",
      lineNumber: 63,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/Header.tsx",
      lineNumber: 62,
      columnNumber: 11
    }, this),
    isMenuOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "nav-links mobile fade-in", children: [
      ["Home", "Products", "Reviews", "Learn"].map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: item === "Home" ? "/" : `/${item.toLowerCase()}`, className: "nav-link", onClick: () => setIsMenuOpen(false), children: item }, item, false, {
        fileName: "app/components/Header.tsx",
        lineNumber: 69,
        columnNumber: 69
      }, this)),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "auth-buttons mobile", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/login", className: "auth-button primary", onClick: () => setIsMenuOpen(false), children: "Sign In" }, void 0, false, {
          fileName: "app/components/Header.tsx",
          lineNumber: 73,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/register", className: "auth-button secondary", onClick: () => setIsMenuOpen(false), children: "Register" }, void 0, false, {
          fileName: "app/components/Header.tsx",
          lineNumber: 76,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Header.tsx",
        lineNumber: 72,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Header.tsx",
      lineNumber: 68,
      columnNumber: 26
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Header.tsx",
    lineNumber: 37,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/Header.tsx",
    lineNumber: 36,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Header.tsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
};
_s(Header, "OuTyq8NkCg/NO/ioVShif1OcFTc=");
_c = Header;
var Header_default = Header;
var _c;
$RefreshReg$(_c, "Header");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/styles/app.css
var app_default = "/build/_assets/app-AHQKGZPK.css";

// app/routes/_layout.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_layout.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_layout.tsx"
  );
}
var links = () => [{
  rel: "stylesheet",
  href: app_default
}];
var Layout = () => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "min-h-screen flex flex-col bg-gray-50", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Header_default, {}, void 0, false, {
      fileName: "app/routes/_layout.tsx",
      lineNumber: 33,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("main", { className: "flex-grow pt-20 pb-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Products, {}, void 0, false, {
        fileName: "app/routes/_layout.tsx",
        lineNumber: 37,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/routes/_layout.tsx",
        lineNumber: 38,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_layout.tsx",
      lineNumber: 36,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/_layout.tsx",
      lineNumber: 35,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("footer", { className: "bg-white border-t py-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col md:flex-row justify-between items-center gap-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-center md:text-left space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "text-xl font-semibold text-primary", children: "Ausbud" }, void 0, false, {
          fileName: "app/routes/_layout.tsx",
          lineNumber: 45,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-gray-600", children: [
          "\xA9 ",
          currentYear,
          " Australian Medical Cannabis Reviews"
        ] }, void 0, true, {
          fileName: "app/routes/_layout.tsx",
          lineNumber: 46,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-sm text-gray-500", children: "Helping patients make informed decisions" }, void 0, false, {
          fileName: "app/routes/_layout.tsx",
          lineNumber: 47,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_layout.tsx",
        lineNumber: 44,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-center md:text-right space-y-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "inline-flex items-center justify-center px-4 py-2 bg-primary/10 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-sm text-primary font-medium", children: "For registered medical cannabis patients only" }, void 0, false, {
          fileName: "app/routes/_layout.tsx",
          lineNumber: 53,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/_layout.tsx",
          lineNumber: 52,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-sm text-gray-500", children: "Always consult your healthcare provider before making changes to your treatment" }, void 0, false, {
          fileName: "app/routes/_layout.tsx",
          lineNumber: 57,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_layout.tsx",
        lineNumber: 51,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_layout.tsx",
      lineNumber: 43,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/_layout.tsx",
      lineNumber: 42,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/_layout.tsx",
      lineNumber: 41,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_layout.tsx",
    lineNumber: 32,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_layout.tsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
};
_c2 = Layout;
var layout_default = Layout;
var _c2;
$RefreshReg$(_c2, "Layout");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  layout_default as default,
  links
};
//# sourceMappingURL=/build/routes/_layout-DP273KTD.js.map
