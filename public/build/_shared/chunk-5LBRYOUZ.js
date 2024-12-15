import {
  createHotContext
} from "/build/_shared/chunk-IKJ3I24Q.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/_layout.products.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_layout.products.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_layout.products.tsx"
  );
  import.meta.hot.lastModified = "1734269594928.876";
}
var ProductCard = ({
  product
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-start mb-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-bold text-gray-900", children: product.name }, void 0, false, {
          fileName: "app/routes/_layout.products.tsx",
          lineNumber: 30,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 text-sm mt-1", children: product.brand }, void 0, false, {
          fileName: "app/routes/_layout.products.tsx",
          lineNumber: 31,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_layout.products.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-lg font-bold text-primary whitespace-nowrap", children: [
        "$",
        product.price
      ] }, void 0, true, {
        fileName: "app/routes/_layout.products.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_layout.products.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap gap-2 mb-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "px-3 py-1 bg-primary/10 text-primary rounded-lg text-sm font-medium", children: [
        "THC: ",
        product.thc
      ] }, void 0, true, {
        fileName: "app/routes/_layout.products.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "px-3 py-1 bg-secondary/10 text-secondary rounded-lg text-sm font-medium", children: [
        "CBD: ",
        product.cbd
      ] }, void 0, true, {
        fileName: "app/routes/_layout.products.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "px-3 py-1 bg-gray-100 text-gray-600 rounded-lg text-sm font-medium", children: product.weight }, void 0, false, {
        fileName: "app/routes/_layout.products.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_layout.products.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-2 mt-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-accent", children: "\u2605" }, void 0, false, {
        fileName: "app/routes/_layout.products.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-medium", children: product.rating }, void 0, false, {
        fileName: "app/routes/_layout.products.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-gray-600 text-sm", children: [
        "(",
        product.reviewCount,
        " reviews)"
      ] }, void 0, true, {
        fileName: "app/routes/_layout.products.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_layout.products.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_layout.products.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
};
_c = ProductCard;
var INITIAL_PRODUCTS = [{
  id: 1,
  name: "ANTG Rocky",
  category: "Flower",
  brand: "Australian Natural Therapeutics Group",
  thc: "30%",
  cbd: "<1%",
  price: "215",
  weight: "10g",
  rating: 4.5,
  reviewCount: 124
}, {
  id: 2,
  name: "Cannatrek T25 Topaz",
  category: "Flower",
  brand: "Cannatrek",
  thc: "25%",
  cbd: "<1%",
  price: "195",
  weight: "10g",
  rating: 4.7,
  reviewCount: 236
}, {
  id: 3,
  name: "Kind Medical Stella",
  category: "Flower",
  brand: "Kind Medical",
  thc: "18%",
  cbd: "<1%",
  price: "165",
  weight: "10g",
  rating: 4.3,
  reviewCount: 89
}, {
  id: 4,
  name: "Beacon Medical Pink Kush",
  category: "Flower",
  brand: "Beacon Medical",
  thc: "25%",
  cbd: "<1%",
  price: "175",
  weight: "10g",
  rating: 4.6,
  reviewCount: 156
}, {
  id: 5,
  name: "Medcan CC01",
  category: "Flower",
  brand: "Medcan",
  thc: "23%",
  cbd: "<1%",
  price: "185",
  weight: "7g",
  rating: 4.4,
  reviewCount: 203
}, {
  id: 6,
  name: "Sativite Kannbi",
  category: "Flower",
  brand: "Sativite",
  thc: "25%",
  cbd: "<1%",
  price: "195",
  weight: "7g",
  rating: 4.8,
  reviewCount: 167
}, {
  id: 7,
  name: "Little Green Pharma Desert Flame",
  category: "Flower",
  brand: "Little Green Pharma",
  thc: "22%",
  cbd: "<1%",
  price: "170",
  weight: "10g",
  rating: 4.5,
  reviewCount: 142
}, {
  id: 8,
  name: "Little Green Pharma Topaz",
  category: "Flower",
  brand: "Little Green Pharma",
  thc: "25%",
  cbd: "<1%",
  price: "195",
  weight: "10g",
  rating: 4.6,
  reviewCount: 178
}, {
  id: 9,
  name: "Tasmanian Botanics T25 Amethyst",
  category: "Flower",
  brand: "Tasmanian Botanics",
  thc: "25%",
  cbd: "<1%",
  price: "190",
  weight: "10g",
  rating: 4.5,
  reviewCount: 95
}, {
  id: 10,
  name: "Tasmanian Botanics Emerald",
  category: "Flower",
  brand: "Tasmanian Botanics",
  thc: "22%",
  cbd: "<1%",
  price: "180",
  weight: "10g",
  rating: 4.4,
  reviewCount: 82
}, {
  id: 11,
  name: "ANTG Solace",
  category: "Flower",
  brand: "Australian Natural Therapeutics Group",
  thc: "22%",
  cbd: "<1%",
  price: "195",
  weight: "10g",
  rating: 4.3,
  reviewCount: 76
}, {
  id: 12,
  name: "Cannatrek T20 Daylesford",
  category: "Flower",
  brand: "Cannatrek",
  thc: "20%",
  cbd: "<1%",
  price: "175",
  weight: "10g",
  rating: 4.4,
  reviewCount: 112
}, {
  id: 13,
  name: "Sativite Eucla",
  category: "Flower",
  brand: "Sativite",
  thc: "28%",
  cbd: "<1%",
  price: "200",
  weight: "7g",
  rating: 4.7,
  reviewCount: 89
}, {
  id: 14,
  name: "ANTG Mariposa",
  category: "Flower",
  brand: "Australian Natural Therapeutics Group",
  thc: "14%",
  cbd: "<1%",
  price: "165",
  weight: "10g",
  rating: 4.2,
  reviewCount: 65
}, {
  id: 15,
  name: "Tasmanian Botanics Royale",
  category: "Flower",
  brand: "Tasmanian Botanics",
  thc: "26%",
  cbd: "<1%",
  price: "195",
  weight: "10g",
  rating: 4.6,
  reviewCount: 71
}, {
  id: 16,
  name: "Cannatrek T24 Narooma",
  category: "Flower",
  brand: "Cannatrek",
  thc: "24%",
  cbd: "<1%",
  price: "185",
  weight: "10g",
  rating: 4.5,
  reviewCount: 92
}, {
  id: 17,
  name: "Kind Medical Azure",
  category: "Flower",
  brand: "Kind Medical",
  thc: "20%",
  cbd: "<1%",
  price: "170",
  weight: "10g",
  rating: 4.3,
  reviewCount: 64
}, {
  id: 18,
  name: "Medcan Ultra01",
  category: "Flower",
  brand: "Medcan",
  thc: "28%",
  cbd: "<1%",
  price: "195",
  weight: "7g",
  rating: 4.6,
  reviewCount: 108
}, {
  id: 19,
  name: "Sativite Jerrawah",
  category: "Flower",
  brand: "Sativite",
  thc: "26%",
  cbd: "<1%",
  price: "195",
  weight: "7g",
  rating: 4.7,
  reviewCount: 86
}, {
  id: 20,
  name: "ANTG Eve",
  category: "Flower",
  brand: "Australian Natural Therapeutics Group",
  thc: "<1%",
  cbd: "14%",
  price: "155",
  weight: "10g",
  rating: 4.4,
  reviewCount: 58
}, {
  id: 21,
  name: "Cannatrek T18 Jasmin",
  category: "Flower",
  brand: "Cannatrek",
  thc: "18%",
  cbd: "<1%",
  price: "165",
  weight: "10g",
  rating: 4.2,
  reviewCount: 73
}, {
  id: 22,
  name: "Kind Medical Iris",
  category: "Flower",
  brand: "Kind Medical",
  thc: "22%",
  cbd: "<1%",
  price: "175",
  weight: "10g",
  rating: 4.4,
  reviewCount: 67
}, {
  id: 23,
  name: "Medcan SC01",
  category: "Flower",
  brand: "Medcan",
  thc: "21%",
  cbd: "<1%",
  price: "180",
  weight: "7g",
  rating: 4.3,
  reviewCount: 94
}, {
  id: 24,
  name: "Sativite Nula Nula",
  category: "Flower",
  brand: "Sativite",
  thc: "27%",
  cbd: "<1%",
  price: "200",
  weight: "7g",
  rating: 4.8,
  reviewCount: 112
}, {
  id: 25,
  name: "Tasmanian Botanics Midlands",
  category: "Flower",
  brand: "Tasmanian Botanics",
  thc: "24%",
  cbd: "<1%",
  price: "185",
  weight: "10g",
  rating: 4.5,
  reviewCount: 83
}, {
  id: 26,
  name: "Beacon Medical GSC",
  category: "Flower",
  brand: "Beacon Medical",
  thc: "23%",
  cbd: "<1%",
  price: "175",
  weight: "10g",
  rating: 4.4,
  reviewCount: 89
}, {
  id: 27,
  name: "ANTG Solace",
  category: "Flower",
  brand: "Australian Natural Therapeutics Group",
  thc: "22%",
  cbd: "<1%",
  price: "180",
  weight: "10g",
  rating: 4.5,
  reviewCount: 76
}, {
  id: 28,
  name: "Cannatrek T24 Narooma",
  category: "Flower",
  brand: "Cannatrek",
  thc: "24%",
  cbd: "<1%",
  price: "190",
  weight: "10g",
  rating: 4.6,
  reviewCount: 92
}];
function Products() {
  _s();
  const [products] = (0, import_react.useState)(INITIAL_PRODUCTS);
  const [selectedCategory, setSelectedCategory] = (0, import_react.useState)("All");
  const categories = ["All", ...new Set(products.map((p) => p.category))];
  const filteredProducts = selectedCategory === "All" ? products : products.filter((p) => p.category === selectedCategory);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container py-12 fade-in bg-gradient-to-b from-emerald-50 to-white", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center mb-16 relative", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute -top-20 left-1/2 -translate-x-1/2 w-40 h-40 bg-primary/10 rounded-full blur-3xl" }, void 0, false, {
        fileName: "app/routes/_layout.products.tsx",
        lineNumber: 373,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-5xl font-bold mb-8 bg-gradient-to-r from-primary via-emerald-500 to-teal-500 bg-clip-text text-transparent animate-gradient-x", children: "Discover Natural Relief" }, void 0, false, {
        fileName: "app/routes/_layout.products.tsx",
        lineNumber: 374,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 max-w-2xl mx-auto mb-12 text-lg leading-relaxed", children: "Explore Australia's finest medical cannabis products, carefully curated for your wellbeing" }, void 0, false, {
        fileName: "app/routes/_layout.products.tsx",
        lineNumber: 377,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap justify-center gap-4 mb-12", children: categories.map((category) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setSelectedCategory(category), className: `px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-105
                ${selectedCategory === category ? "bg-gradient-to-r from-primary to-emerald-500 text-white shadow-lg hover:shadow-emerald-200" : "bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg border border-gray-100"}`, children: category }, category, false, {
        fileName: "app/routes/_layout.products.tsx",
        lineNumber: 382,
        columnNumber: 39
      }, this)) }, void 0, false, {
        fileName: "app/routes/_layout.products.tsx",
        lineNumber: 381,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-500 bg-white/80 backdrop-blur-sm rounded-full px-6 py-2 inline-block shadow-sm", children: [
        "\u2728 Showing ",
        filteredProducts.length,
        " premium products"
      ] }, void 0, true, {
        fileName: "app/routes/_layout.products.tsx",
        lineNumber: 388,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_layout.products.tsx",
      lineNumber: 372,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 relative", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-primary/5 via-transparent to-emerald-100/5 blur-3xl rounded-full" }, void 0, false, {
        fileName: "app/routes/_layout.products.tsx",
        lineNumber: 394,
        columnNumber: 9
      }, this),
      filteredProducts.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "transform hover:scale-[1.02] transition-all duration-300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProductCard, { product }, void 0, false, {
        fileName: "app/routes/_layout.products.tsx",
        lineNumber: 396,
        columnNumber: 13
      }, this) }, product.id, false, {
        fileName: "app/routes/_layout.products.tsx",
        lineNumber: 395,
        columnNumber: 42
      }, this))
    ] }, void 0, true, {
      fileName: "app/routes/_layout.products.tsx",
      lineNumber: 393,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_layout.products.tsx",
    lineNumber: 371,
    columnNumber: 10
  }, this);
}
_s(Products, "4wiAxqMSPmCEMJv+0srx1sgLmW8=");
_c2 = Products;
var _c;
var _c2;
$RefreshReg$(_c, "ProductCard");
$RefreshReg$(_c2, "Products");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Products
};
//# sourceMappingURL=/build/_shared/chunk-5LBRYOUZ.js.map
