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

// app/routes/_layout.reviews.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_layout.reviews.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_layout.reviews.tsx"
  );
  import.meta.hot.lastModified = "1734268904286.5688";
}
function Reviews() {
  _s();
  const [reviews, setReviews] = (0, import_react.useState)([{
    id: 1,
    productId: 1,
    rating: 4,
    author: "John D.",
    content: "Great product for pain management",
    date: "2024-03-20",
    condition: "Chronic Pain",
    verified: true
  }]);
  const [isAddingReview, setIsAddingReview] = (0, import_react.useState)(false);
  const [error, setError] = (0, import_react.useState)(null);
  const handleAddReview = (review) => {
    try {
      if (!review.content?.trim()) {
        throw new Error("Review content is required");
      }
      if (review.rating < 1 || review.rating > 5) {
        throw new Error("Rating must be between 1 and 5");
      }
      const newReview = {
        ...review,
        id: reviews.length + 1,
        date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
      };
      setReviews((prev) => [...prev, newReview]);
      setIsAddingReview(false);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to add review");
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container py-12 fade-in", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl font-bold text-center mb-8", children: "Patient Reviews" }, void 0, false, {
      fileName: "app/routes/_layout.reviews.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this),
    error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4", children: error }, void 0, false, {
      fileName: "app/routes/_layout.reviews.tsx",
      lineNumber: 61,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-6", children: reviews.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-center text-gray-600", children: "No reviews yet" }, void 0, false, {
      fileName: "app/routes/_layout.reviews.tsx",
      lineNumber: 65,
      columnNumber: 33
    }, this) : reviews.map((review) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-start mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-medium text-gray-900", children: review.author }, void 0, false, {
            fileName: "app/routes/_layout.reviews.tsx",
            lineNumber: 68,
            columnNumber: 19
          }, this),
          review.verified && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-2 text-sm text-green-600", children: "(Verified Purchase)" }, void 0, false, {
            fileName: "app/routes/_layout.reviews.tsx",
            lineNumber: 69,
            columnNumber: 39
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-yellow-400 mt-1", children: [
            "\u2605".repeat(review.rating),
            "\u2606".repeat(5 - review.rating)
          ] }, void 0, true, {
            fileName: "app/routes/_layout.reviews.tsx",
            lineNumber: 70,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_layout.reviews.tsx",
          lineNumber: 67,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm text-gray-500", children: review.date }, void 0, false, {
          fileName: "app/routes/_layout.reviews.tsx",
          lineNumber: 75,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_layout.reviews.tsx",
        lineNumber: 66,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-700", children: review.content }, void 0, false, {
        fileName: "app/routes/_layout.reviews.tsx",
        lineNumber: 77,
        columnNumber: 15
      }, this),
      review.condition && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 text-sm text-gray-600", children: [
        "Condition: ",
        review.condition
      ] }, void 0, true, {
        fileName: "app/routes/_layout.reviews.tsx",
        lineNumber: 78,
        columnNumber: 36
      }, this)
    ] }, review.id, true, {
      fileName: "app/routes/_layout.reviews.tsx",
      lineNumber: 65,
      columnNumber: 117
    }, this)) }, void 0, false, {
      fileName: "app/routes/_layout.reviews.tsx",
      lineNumber: 64,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setIsAddingReview(true), className: "mt-8 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors", children: "Write a Review" }, void 0, false, {
      fileName: "app/routes/_layout.reviews.tsx",
      lineNumber: 83,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_layout.reviews.tsx",
    lineNumber: 59,
    columnNumber: 10
  }, this);
}
_s(Reviews, "gt8At3XxJIwLAD3+jWPtDl7emdU=");
_c = Reviews;
var _c;
$RefreshReg$(_c, "Reviews");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Reviews as default
};
//# sourceMappingURL=/build/routes/_layout.reviews-2ZQSUHZC.js.map
