var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { RemixServer } from "@remix-run/react";
import { renderToString } from "react-dom/server";
import { jsx } from "react/jsx-runtime";
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = renderToString(
    /* @__PURE__ */ jsx(RemixServer, { context: remixContext, url: request.url })
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  meta: () => meta
});
import { Links, LiveReload, Meta, Outlet, Scripts } from "@remix-run/react";

// app/styles/global.css
var global_default = "/build/_assets/global-55DNWN2R.css";

// app/root.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var BASE_URL = "/ausbud", meta = () => [
  { title: "Ausbud - Australian Medical Cannabis Reviews" },
  { name: "description", content: "Find and review medical cannabis products in Australia." },
  { name: "viewport", content: "width=device-width,initial-scale=1" },
  { name: "theme-color", content: "#10B981" },
  { name: "og:title", content: "Ausbud - Australian Medical Cannabis Reviews" },
  { name: "og:description", content: "Find and review medical cannabis products in Australia." },
  { name: "og:type", content: "website" }
], links = () => [
  { rel: "stylesheet", href: `${BASE_URL}${global_default}` },
  { rel: "icon", href: `${BASE_URL}/favicon.ico` },
  { rel: "apple-touch-icon", href: `${BASE_URL}/apple-touch-icon.png` }
];
function App() {
  return /* @__PURE__ */ jsxs("html", { lang: "en", className: "h-full", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx2("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx2(Meta, {}),
      /* @__PURE__ */ jsx2(Links, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { className: "h-full", children: [
      /* @__PURE__ */ jsx2(Outlet, {}),
      /* @__PURE__ */ jsx2(Scripts, {}),
      /* @__PURE__ */ jsx2(LiveReload, {})
    ] })
  ] });
}
function ErrorBoundary() {
  return /* @__PURE__ */ jsxs("html", { lang: "en", className: "h-full", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx2("title", { children: "Error - Ausbud" }),
      /* @__PURE__ */ jsx2(Meta, {}),
      /* @__PURE__ */ jsx2(Links, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { className: "h-full", children: [
      /* @__PURE__ */ jsx2("div", { className: "min-h-screen flex items-center justify-center p-4", children: /* @__PURE__ */ jsxs("div", { className: "container max-w-lg text-center fade-in", children: [
        /* @__PURE__ */ jsx2("h1", { className: "text-4xl font-bold text-gray-900 mb-4", children: "Oops! Something went wrong" }),
        /* @__PURE__ */ jsx2("p", { className: "text-gray-600 mb-8", children: "We apologize for the inconvenience. Our team has been notified and is working to fix the issue." }),
        /* @__PURE__ */ jsx2(
          "a",
          {
            href: "/",
            className: `inline-block bg-gradient-to-r from-primary to-primary-light text-white px-6 py-3 rounded-xl 
                hover:from-[#059669] hover:to-primary transition-all duration-300 
                focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 
                shadow-md hover:shadow-lg`,
            children: "Return to Homepage"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsx2(Scripts, {})
    ] })
  ] });
}

// app/routes/_layout.products.tsx
var layout_products_exports = {};
__export(layout_products_exports, {
  default: () => Products
});
import { useState } from "react";
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var ProductCard = ({ product }) => /* @__PURE__ */ jsxs2(
  "div",
  {
    className: "bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col",
    children: [
      /* @__PURE__ */ jsxs2("div", { className: "flex justify-between items-start mb-4", children: [
        /* @__PURE__ */ jsxs2("div", { children: [
          /* @__PURE__ */ jsx3("h3", { className: "text-xl font-bold text-gray-900", children: product.name }),
          /* @__PURE__ */ jsx3("p", { className: "text-gray-600 text-sm mt-1", children: product.brand })
        ] }),
        /* @__PURE__ */ jsxs2("span", { className: "text-lg font-bold text-primary whitespace-nowrap", children: [
          "$",
          product.price
        ] })
      ] }),
      /* @__PURE__ */ jsxs2("div", { className: "flex flex-wrap gap-2 mb-4", children: [
        /* @__PURE__ */ jsxs2("span", { className: "px-3 py-1 bg-primary/10 text-primary rounded-lg text-sm font-medium", children: [
          "THC: ",
          product.thc
        ] }),
        /* @__PURE__ */ jsxs2("span", { className: "px-3 py-1 bg-secondary/10 text-secondary rounded-lg text-sm font-medium", children: [
          "CBD: ",
          product.cbd
        ] }),
        /* @__PURE__ */ jsx3("span", { className: "px-3 py-1 bg-gray-100 text-gray-600 rounded-lg text-sm font-medium", children: product.weight })
      ] }),
      /* @__PURE__ */ jsxs2("div", { className: "flex items-center gap-2 mt-auto", children: [
        /* @__PURE__ */ jsx3("span", { className: "text-accent", children: "\u2605" }),
        /* @__PURE__ */ jsx3("span", { className: "font-medium", children: product.rating }),
        /* @__PURE__ */ jsxs2("span", { className: "text-gray-600 text-sm", children: [
          "(",
          product.reviewCount,
          " reviews)"
        ] })
      ] })
    ]
  }
), INITIAL_PRODUCTS = [
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  }
];
function Products() {
  let [products] = useState(INITIAL_PRODUCTS), [selectedCategory, setSelectedCategory] = useState("All"), categories = ["All", ...new Set(products.map((p) => p.category))], filteredProducts = selectedCategory === "All" ? products : products.filter((p) => p.category === selectedCategory);
  return /* @__PURE__ */ jsxs2("div", { className: "container py-12 fade-in bg-gradient-to-b from-emerald-50 to-white", children: [
    /* @__PURE__ */ jsxs2("div", { className: "text-center mb-16 relative", children: [
      /* @__PURE__ */ jsx3("div", { className: "absolute -top-20 left-1/2 -translate-x-1/2 w-40 h-40 bg-primary/10 rounded-full blur-3xl" }),
      /* @__PURE__ */ jsx3("h1", { className: "text-5xl font-bold mb-8 bg-gradient-to-r from-primary via-emerald-500 to-teal-500 bg-clip-text text-transparent animate-gradient-x", children: "Discover Natural Relief" }),
      /* @__PURE__ */ jsx3("p", { className: "text-gray-600 max-w-2xl mx-auto mb-12 text-lg leading-relaxed", children: "Explore Australia's finest medical cannabis products, carefully curated for your wellbeing" }),
      /* @__PURE__ */ jsx3("div", { className: "flex flex-wrap justify-center gap-4 mb-12", children: categories.map((category) => /* @__PURE__ */ jsx3(
        "button",
        {
          onClick: () => setSelectedCategory(category),
          className: `px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-105
                ${selectedCategory === category ? "bg-gradient-to-r from-primary to-emerald-500 text-white shadow-lg hover:shadow-emerald-200" : "bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg border border-gray-100"}`,
          children: category
        },
        category
      )) }),
      /* @__PURE__ */ jsxs2("p", { className: "text-sm text-gray-500 bg-white/80 backdrop-blur-sm rounded-full px-6 py-2 inline-block shadow-sm", children: [
        "\u2728 Showing ",
        filteredProducts.length,
        " premium products"
      ] })
    ] }),
    /* @__PURE__ */ jsxs2("div", { className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 relative", children: [
      /* @__PURE__ */ jsx3("div", { className: "absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-primary/5 via-transparent to-emerald-100/5 blur-3xl rounded-full" }),
      filteredProducts.map((product) => /* @__PURE__ */ jsx3("div", { className: "transform hover:scale-[1.02] transition-all duration-300", children: /* @__PURE__ */ jsx3(ProductCard, { product }) }, product.id))
    ] })
  ] });
}

// app/routes/_layout.profile.tsx
var layout_profile_exports = {};
__export(layout_profile_exports, {
  default: () => Profile
});
import { useState as useState2 } from "react";
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
function Profile() {
  let [user] = useState2({
    name: "John Doe",
    email: "john@example.com",
    reviews: 5,
    joinDate: "2024-01-01"
  });
  return /* @__PURE__ */ jsxs3("div", { className: "profile", children: [
    /* @__PURE__ */ jsx4("h2", { children: "My Profile" }),
    /* @__PURE__ */ jsxs3("div", { className: "profile-info", children: [
      /* @__PURE__ */ jsxs3("div", { className: "profile-section", children: [
        /* @__PURE__ */ jsx4("h3", { children: "Personal Information" }),
        /* @__PURE__ */ jsxs3("p", { children: [
          "Name: ",
          user.name
        ] }),
        /* @__PURE__ */ jsxs3("p", { children: [
          "Email: ",
          user.email
        ] }),
        /* @__PURE__ */ jsxs3("p", { children: [
          "Member since: ",
          user.joinDate
        ] }),
        /* @__PURE__ */ jsxs3("p", { children: [
          "Reviews written: ",
          user.reviews
        ] })
      ] }),
      /* @__PURE__ */ jsx4("div", { className: "profile-section", children: /* @__PURE__ */ jsx4("h3", { children: "My Reviews" }) })
    ] })
  ] });
}

// app/routes/_layout.reviews.tsx
var layout_reviews_exports = {};
__export(layout_reviews_exports, {
  default: () => Reviews
});
import { useState as useState3 } from "react";
import { jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
function Reviews() {
  let [reviews, setReviews] = useState3([
    {
      id: 1,
      productId: 1,
      rating: 4,
      author: "John D.",
      content: "Great product for pain management",
      date: "2024-03-20",
      condition: "Chronic Pain",
      verified: !0
    }
  ]), [isAddingReview, setIsAddingReview] = useState3(!1), [error, setError] = useState3(null), handleAddReview = (review) => {
    try {
      if (!review.content?.trim())
        throw new Error("Review content is required");
      if (review.rating < 1 || review.rating > 5)
        throw new Error("Rating must be between 1 and 5");
      let newReview = {
        ...review,
        id: reviews.length + 1,
        date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
      };
      setReviews((prev) => [...prev, newReview]), setIsAddingReview(!1), setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to add review");
    }
  };
  return /* @__PURE__ */ jsxs4("div", { className: "container py-12 fade-in", children: [
    /* @__PURE__ */ jsx5("h2", { className: "text-3xl font-bold text-center mb-8", children: "Patient Reviews" }),
    error && /* @__PURE__ */ jsx5("div", { className: "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4", children: error }),
    /* @__PURE__ */ jsx5("div", { className: "grid gap-6", children: reviews.length === 0 ? /* @__PURE__ */ jsx5("p", { className: "text-center text-gray-600", children: "No reviews yet" }) : reviews.map((review) => /* @__PURE__ */ jsxs4(
      "div",
      {
        className: "bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow",
        children: [
          /* @__PURE__ */ jsxs4("div", { className: "flex justify-between items-start mb-4", children: [
            /* @__PURE__ */ jsxs4("div", { children: [
              /* @__PURE__ */ jsx5("span", { className: "font-medium text-gray-900", children: review.author }),
              review.verified && /* @__PURE__ */ jsx5("span", { className: "ml-2 text-sm text-green-600", children: "(Verified Purchase)" }),
              /* @__PURE__ */ jsxs4("div", { className: "text-yellow-400 mt-1", children: [
                "\u2605".repeat(review.rating),
                "\u2606".repeat(5 - review.rating)
              ] })
            ] }),
            /* @__PURE__ */ jsx5("span", { className: "text-sm text-gray-500", children: review.date })
          ] }),
          /* @__PURE__ */ jsx5("p", { className: "text-gray-700", children: review.content }),
          review.condition && /* @__PURE__ */ jsxs4("div", { className: "mt-2 text-sm text-gray-600", children: [
            "Condition: ",
            review.condition
          ] })
        ]
      },
      review.id
    )) }),
    /* @__PURE__ */ jsx5(
      "button",
      {
        onClick: () => setIsAddingReview(!0),
        className: "mt-8 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors",
        children: "Write a Review"
      }
    )
  ] });
}

// app/routes/_layout._index.tsx
var layout_index_exports = {};
__export(layout_index_exports, {
  default: () => Index
});
import { jsx as jsx6, jsxs as jsxs5 } from "react/jsx-runtime";
function Index() {
  return /* @__PURE__ */ jsxs5("div", { className: "home", children: [
    /* @__PURE__ */ jsx6("h1", { children: "Welcome to Ausbud" }),
    /* @__PURE__ */ jsx6("p", { children: "Your trusted source for medicinal cannabis reviews in Australia" }),
    /* @__PURE__ */ jsxs5("div", { className: "features", children: [
      /* @__PURE__ */ jsxs5("div", { className: "feature", children: [
        /* @__PURE__ */ jsx6("h3", { children: "Browse Products" }),
        /* @__PURE__ */ jsx6("p", { children: "Explore available medicinal cannabis products" })
      ] }),
      /* @__PURE__ */ jsxs5("div", { className: "feature", children: [
        /* @__PURE__ */ jsx6("h3", { children: "Read Reviews" }),
        /* @__PURE__ */ jsx6("p", { children: "Learn from other patients' experiences" })
      ] }),
      /* @__PURE__ */ jsxs5("div", { className: "feature", children: [
        /* @__PURE__ */ jsx6("h3", { children: "Share Experience" }),
        /* @__PURE__ */ jsx6("p", { children: "Help others by sharing your own reviews" })
      ] })
    ] })
  ] });
}

// app/routes/_layout.learn.tsx
var layout_learn_exports = {};
__export(layout_learn_exports, {
  default: () => layout_learn_default
});
import { jsx as jsx7, jsxs as jsxs6 } from "react/jsx-runtime";
var Learn = () => /* @__PURE__ */ jsxs6("div", { className: "container py-12 fade-in bg-gradient-to-b from-emerald-50 to-white", children: [
  /* @__PURE__ */ jsxs6("div", { className: "text-center mb-16 relative", children: [
    /* @__PURE__ */ jsx7("div", { className: "absolute -top-20 left-1/2 -translate-x-1/2 w-40 h-40 bg-primary/10 rounded-full blur-3xl" }),
    /* @__PURE__ */ jsx7("h1", { className: "text-5xl font-bold mb-8 bg-gradient-to-r from-primary via-emerald-500 to-teal-500 bg-clip-text text-transparent animate-gradient-x", children: "Learn About Medical Cannabis" }),
    /* @__PURE__ */ jsx7("p", { className: "text-gray-600 max-w-2xl mx-auto mb-12 text-lg leading-relaxed", children: "Discover evidence-based information about medical cannabis in Australia, including benefits, legal requirements, and safe usage guidelines." })
  ] }),
  /* @__PURE__ */ jsxs6("div", { className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8", children: [
    /* @__PURE__ */ jsxs6("div", { className: "bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]", children: [
      /* @__PURE__ */ jsx7("div", { className: "text-primary/10 text-6xl mb-4", children: "\u{1F33F}" }),
      /* @__PURE__ */ jsx7("h2", { className: "text-2xl font-semibold text-primary mb-4", children: "Benefits & Effects" }),
      /* @__PURE__ */ jsx7("p", { className: "text-gray-600", children: "Learn about the therapeutic benefits and potential effects of medical cannabis treatments." }),
      /* @__PURE__ */ jsx7("button", { className: "mt-6 text-primary font-medium hover:underline", children: "Learn more \u2192" })
    ] }),
    /* @__PURE__ */ jsxs6("div", { className: "bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]", children: [
      /* @__PURE__ */ jsx7("div", { className: "text-primary/10 text-6xl mb-4", children: "\u2696\uFE0F" }),
      /* @__PURE__ */ jsx7("h2", { className: "text-2xl font-semibold text-primary mb-4", children: "Legal Framework" }),
      /* @__PURE__ */ jsx7("p", { className: "text-gray-600", children: "Understand the current legal status and requirements for accessing medical cannabis in Australia." }),
      /* @__PURE__ */ jsx7("button", { className: "mt-6 text-primary font-medium hover:underline", children: "Learn more \u2192" })
    ] }),
    /* @__PURE__ */ jsxs6("div", { className: "bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]", children: [
      /* @__PURE__ */ jsx7("div", { className: "text-primary/10 text-6xl mb-4", children: "\u{1F4D6}" }),
      /* @__PURE__ */ jsx7("h2", { className: "text-2xl font-semibold text-primary mb-4", children: "Usage Guidelines" }),
      /* @__PURE__ */ jsx7("p", { className: "text-gray-600", children: "Get informed about proper usage, dosing, and administration methods for medical cannabis." }),
      /* @__PURE__ */ jsx7("button", { className: "mt-6 text-primary font-medium hover:underline", children: "Learn more \u2192" })
    ] })
  ] }),
  /* @__PURE__ */ jsx7("div", { className: "mt-16 bg-white p-8 rounded-2xl shadow-md", children: /* @__PURE__ */ jsxs6("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ jsxs6("div", { children: [
      /* @__PURE__ */ jsx7("h2", { className: "text-2xl font-semibold text-primary mb-2", children: "Need More Information?" }),
      /* @__PURE__ */ jsx7("p", { className: "text-gray-600", children: "Our comprehensive guides and resources are here to help you make informed decisions." })
    ] }),
    /* @__PURE__ */ jsx7("button", { className: "px-6 py-3 bg-gradient-to-r from-primary to-emerald-500 text-white rounded-xl font-medium shadow-lg hover:shadow-emerald-200 transition-all duration-300 transform hover:scale-105", children: "Browse Resources" })
  ] }) })
] }), layout_learn_default = Learn;

// app/routes/_layout.tsx
var layout_exports = {};
__export(layout_exports, {
  default: () => layout_default,
  links: () => links2
});
import { Outlet as Outlet2, Navigate } from "react-router-dom";

// app/components/Header.tsx
import { useState as useState4, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { jsx as jsx8, jsxs as jsxs7 } from "react/jsx-runtime";
var Header = () => {
  let [isMenuOpen, setIsMenuOpen] = useState4(!1), [scrolled, setScrolled] = useState4(!1);
  return useEffect(() => {
    let handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    return window.addEventListener("scroll", handleScroll), () => window.removeEventListener("scroll", handleScroll);
  }, []), /* @__PURE__ */ jsx8("header", { className: `header ${scrolled ? "scrolled" : ""}`, children: /* @__PURE__ */ jsx8("div", { className: "container", children: /* @__PURE__ */ jsxs7("nav", { className: `nav ${isMenuOpen ? "mobile-open" : ""}`, children: [
    /* @__PURE__ */ jsxs7(Link, { to: "/", className: "logo", children: [
      "Ausbud",
      /* @__PURE__ */ jsx8("span", { className: "hidden sm:inline-block ml-2 text-sm font-light tracking-wider text-gray-600", children: "Australian Cannabis Reviews" })
    ] }),
    /* @__PURE__ */ jsx8("div", { className: "nav-links", children: ["Home", "Products", "Reviews", "Learn"].map((item) => /* @__PURE__ */ jsx8(
      NavLink,
      {
        to: item === "Home" ? "/" : `/${item.toLowerCase()}`,
        className: ({ isActive }) => `nav-link ${isActive ? "active" : ""}`,
        children: item
      },
      item
    )) }),
    /* @__PURE__ */ jsxs7("div", { className: "auth-buttons", children: [
      /* @__PURE__ */ jsx8(
        Link,
        {
          to: "/login",
          className: "auth-button primary",
          children: "Sign In"
        }
      ),
      /* @__PURE__ */ jsx8(
        Link,
        {
          to: "/register",
          className: "auth-button secondary",
          children: "Register"
        }
      )
    ] }),
    /* @__PURE__ */ jsx8(
      "button",
      {
        onClick: () => setIsMenuOpen(!isMenuOpen),
        className: "menu-button",
        "aria-label": "Toggle menu",
        children: /* @__PURE__ */ jsx8(
          "svg",
          {
            className: "w-6 h-6",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: isMenuOpen ? /* @__PURE__ */ jsx8("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) : /* @__PURE__ */ jsx8("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 6h16M4 12h16M4 18h16" })
          }
        )
      }
    ),
    isMenuOpen && /* @__PURE__ */ jsxs7("div", { className: "nav-links mobile fade-in", children: [
      ["Home", "Products", "Reviews", "Learn"].map((item) => /* @__PURE__ */ jsx8(
        NavLink,
        {
          to: item === "Home" ? "/" : `/${item.toLowerCase()}`,
          className: "nav-link",
          onClick: () => setIsMenuOpen(!1),
          children: item
        },
        item
      )),
      /* @__PURE__ */ jsxs7("div", { className: "auth-buttons mobile", children: [
        /* @__PURE__ */ jsx8(
          Link,
          {
            to: "/login",
            className: "auth-button primary",
            onClick: () => setIsMenuOpen(!1),
            children: "Sign In"
          }
        ),
        /* @__PURE__ */ jsx8(
          Link,
          {
            to: "/register",
            className: "auth-button secondary",
            onClick: () => setIsMenuOpen(!1),
            children: "Register"
          }
        )
      ] })
    ] })
  ] }) }) });
}, Header_default = Header;

// app/styles/app.css
var app_default = "/build/_assets/app-ZN26WJJ6.css";

// app/routes/_layout.tsx
import { Fragment, jsx as jsx9, jsxs as jsxs8 } from "react/jsx-runtime";
var links2 = () => [
  { rel: "stylesheet", href: app_default }
], Layout = () => /* @__PURE__ */ jsx9(Navigate, { to: "/login", replace: !0 }), layout_default = Layout;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-W2MXRGNQ.js", imports: ["/build/_shared/chunk-CDG3HGHW.js", "/build/_shared/chunk-DWFMXSZ6.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-CHKT2KIL.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !0 }, "routes/_layout": { id: "routes/_layout", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/_layout-X3QY4NAL.js", imports: ["/build/_shared/chunk-R77Q3AIY.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_layout._index": { id: "routes/_layout._index", parentId: "routes/_layout", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_layout._index-BLK5PMMZ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_layout.learn": { id: "routes/_layout.learn", parentId: "routes/_layout", path: "learn", index: void 0, caseSensitive: void 0, module: "/build/routes/_layout.learn-Q575PCBM.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_layout.products": { id: "routes/_layout.products", parentId: "routes/_layout", path: "products", index: void 0, caseSensitive: void 0, module: "/build/routes/_layout.products-7EORPA6B.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_layout.profile": { id: "routes/_layout.profile", parentId: "routes/_layout", path: "profile", index: void 0, caseSensitive: void 0, module: "/build/routes/_layout.profile-UA4A25MB.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_layout.reviews": { id: "routes/_layout.reviews", parentId: "routes/_layout", path: "reviews", index: void 0, caseSensitive: void 0, module: "/build/routes/_layout.reviews-6IUNIP3W.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 } }, version: "55a87198", hmr: void 0, url: "/build/manifest-55A87198.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "production", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/_layout.products": {
    id: "routes/_layout.products",
    parentId: "routes/_layout",
    path: "products",
    index: void 0,
    caseSensitive: void 0,
    module: layout_products_exports
  },
  "routes/_layout.profile": {
    id: "routes/_layout.profile",
    parentId: "routes/_layout",
    path: "profile",
    index: void 0,
    caseSensitive: void 0,
    module: layout_profile_exports
  },
  "routes/_layout.reviews": {
    id: "routes/_layout.reviews",
    parentId: "routes/_layout",
    path: "reviews",
    index: void 0,
    caseSensitive: void 0,
    module: layout_reviews_exports
  },
  "routes/_layout._index": {
    id: "routes/_layout._index",
    parentId: "routes/_layout",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: layout_index_exports
  },
  "routes/_layout.learn": {
    id: "routes/_layout.learn",
    parentId: "routes/_layout",
    path: "learn",
    index: void 0,
    caseSensitive: void 0,
    module: layout_learn_exports
  },
  "routes/_layout": {
    id: "routes/_layout",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: layout_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
