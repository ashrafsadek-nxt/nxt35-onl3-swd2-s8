import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
const products = [
    { id: 1, name: "Red Sneakers", price: "$59", desc: "Comfortable everyday sneakers", img: "https://via.placeholder.com/240x160?text=Sneakers" },
    { id: 2, name: "Blue Jacket", price: "$89", desc: "Lightweight water-resistant jacket", img: "https://via.placeholder.com/240x160?text=Jacket" },
    { id: 3, name: "Classic Watch", price: "$129", desc: "Minimalist analog watch", img: "https://via.placeholder.com/240x160?text=Watch" },
    { id: 4, name: "Leather Bag", price: "$149", desc: "Small crossbody leather bag", img: "https://via.placeholder.com/240x160?text=Bag" },
    { id: 5, name: "Sunglasses", price: "$29", desc: "UV-protection sunglasses", img: "https://via.placeholder.com/240x160?text=Sunglasses" },
    { id: 6, name: "Headphones", price: "$79", desc: "Over-ear comfortable headphones", img: "https://via.placeholder.com/240x160?text=Headphones" }
];
export default function App() {
    return (_jsxs("div", { className: "app", children: [_jsx("style", { children: `
        .app { font-family: Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; color: #222; min-height: 100vh; display: flex; flex-direction: column; }
        .header { background: #f8f9fb; padding: 18px 24px; border-bottom: 1px solid #e6e9ee; display:flex; align-items:center; justify-content:space-between; }
        .brand { font-weight:700; font-size:1.1rem; letter-spacing:0.4px }
        .search { border:1px solid #e1e6ef; padding:8px 12px; border-radius:8px; min-width:200px }

        .layout { display: grid; grid-template-columns: 220px 1fr; gap: 24px; padding: 20px; flex:1; }
        .sidebar { background:#fff; border:1px solid #eef1f6; border-radius:10px; padding:16px; height: fit-content; }
        .nav { display:flex; flex-direction:column; gap:8px }
        .nav button { background:transparent; border:none; text-align:left; padding:8px; border-radius:6px; cursor:pointer }
        .nav button:hover { background:#f3f6fb }

        .main { }
        .main h2 { margin:0 0 12px 0 }
        .cards { display:grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap:16px }

        .card { background:#fff; border:1px solid #e9edf2; border-radius:10px; padding:12px; box-shadow: 0 1px 2px rgba(16,24,40,0.03); display:flex; flex-direction:column; }
        .card img { width:100%; height:140px; object-fit:cover; border-radius:8px }
        .card .meta { display:flex; justify-content:space-between; align-items:center; margin-top:10px }
        .card .title { font-weight:600 }
        .card .desc { color:#5b6b7a; font-size:0.9rem; margin-top:6px }
        .price { background:#f3faf4; color:#097a3f; padding:6px 8px; border-radius:6px; font-weight:600 }
        .actions { margin-top:12px; display:flex; gap:8px }
        .btn { padding:8px 10px; border-radius:8px; border:1px solid #e1e6ef; background:transparent; cursor:pointer }
        .btn.primary { background:#2563eb; color:white; border-color:transparent }

        .footer { padding:14px 20px; border-top:1px solid #e6e9ee; background:#fbfdff; text-align:center; font-size:0.95rem }

        @media (max-width: 760px) {
          .layout { grid-template-columns: 1fr; padding:12px }
          .sidebar { order:2 }
          .main { order:1 }
        }
      ` }), _jsxs("header", { className: "header", children: [_jsx("div", { className: "brand", children: "MyShop" }), _jsx("input", { className: "search", placeholder: "Search products..." })] }), _jsxs("div", { className: "layout", children: [_jsxs("aside", { className: "sidebar", children: [_jsx("h3", { style: { marginTop: 0 }, children: "Filters" }), _jsxs("div", { className: "nav", children: [_jsx("button", { children: "All products" }), _jsx("button", { children: "Clothing" }), _jsx("button", { children: "Accessories" }), _jsx("button", { children: "Electronics" }), _jsx("button", { children: "On sale" })] }), _jsx("div", { style: { height: 12 } }), _jsx("h4", { style: { margin: '12px 0 6px' }, children: "Price" }), _jsxs("div", { style: { display: 'flex', gap: 8 }, children: [_jsx("input", { placeholder: "Min", style: { flex: 1, padding: 8, borderRadius: 6, border: '1px solid #e6edf3' } }), _jsx("input", { placeholder: "Max", style: { flex: 1, padding: 8, borderRadius: 6, border: '1px solid #e6edf3' } })] })] }), _jsxs("main", { className: "main", children: [_jsx("h2", { children: "Products" }), _jsx("div", { className: "cards", children: products.map(p => (_jsxs("article", { className: "card", children: [_jsx("img", { src: p.img, alt: p.name }), _jsxs("div", { className: "meta", children: [_jsxs("div", { children: [_jsx("div", { className: "title", children: p.name }), _jsx("div", { className: "desc", children: p.desc })] }), _jsx("div", { className: "price", children: p.price })] }), _jsxs("div", { className: "actions", children: [_jsx("button", { className: "btn", children: "Details" }), _jsx("button", { className: "btn primary", children: "Add to cart" })] })] }, p.id))) })] })] }), _jsxs("footer", { className: "footer", children: ["\u00A9 ", new Date().getFullYear(), " MyShop \u2014 Simple React product page"] })] }));
}
//# sourceMappingURL=App.js.map