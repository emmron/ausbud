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

// app/routes/_layout.profile.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_layout.profile.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_layout.profile.tsx"
  );
  import.meta.hot.lastModified = "1734264814218.8984";
}
function Profile() {
  _s();
  const [user] = (0, import_react.useState)({
    name: "John Doe",
    email: "john@example.com",
    reviews: 5,
    joinDate: "2024-01-01"
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "profile", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "My Profile" }, void 0, false, {
      fileName: "app/routes/_layout.profile.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "profile-info", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "profile-section", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Personal Information" }, void 0, false, {
          fileName: "app/routes/_layout.profile.tsx",
          lineNumber: 36,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
          "Name: ",
          user.name
        ] }, void 0, true, {
          fileName: "app/routes/_layout.profile.tsx",
          lineNumber: 37,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
          "Email: ",
          user.email
        ] }, void 0, true, {
          fileName: "app/routes/_layout.profile.tsx",
          lineNumber: 38,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
          "Member since: ",
          user.joinDate
        ] }, void 0, true, {
          fileName: "app/routes/_layout.profile.tsx",
          lineNumber: 39,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
          "Reviews written: ",
          user.reviews
        ] }, void 0, true, {
          fileName: "app/routes/_layout.profile.tsx",
          lineNumber: 40,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_layout.profile.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "profile-section", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "My Reviews" }, void 0, false, {
        fileName: "app/routes/_layout.profile.tsx",
        lineNumber: 43,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_layout.profile.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_layout.profile.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_layout.profile.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
}
_s(Profile, "5HxGkDriutdBtWmI+t0TiBBDnsk=");
_c = Profile;
var _c;
$RefreshReg$(_c, "Profile");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Profile as default
};
//# sourceMappingURL=/build/routes/_layout.profile-4Y66JRFA.js.map
