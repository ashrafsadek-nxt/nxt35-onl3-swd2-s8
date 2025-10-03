import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
// Single-file React app (app.jsx) with simple CSS included.
// Default export is the App component.
export default function App() {
    const products = [
        { id: 1, name: "Classic Watch", price: "$99", img: "https://via.placeholder.com/200x140?text=Watch" },
        { id: 2, name: "Leather Wallet", price: "$45", img: "https://via.placeholder.com/200x140?text=Wallet" },
        { id: 3, name: "Running Shoes", price: "$120", img: "https://via.placeholder.com/200x140?text=Shoes" },
        { id: 4, name: "Sunglasses", price: "$60", img: "https://via.placeholder.com/200x140?text=Shades" },
        { id: 5, name: "Backpack", price: "$80", img: "https://via.placeholder.com/200x140?text=Backpack" },
        { id: 6, name: "Headphones", price: "$150", img: "https://via.placeholder.com/200x140?text=Headphones" }
    ];
    return (_jsxs("div", { className: "app-root", children: [_jsxs("header", { className: "header", children: [_jsx("div", { className: "logo", children: "MyStore" }), _jsxs("nav", { className: "nav", children: [_jsx("a", { href: "#", children: "Home" }), _jsx("a", { href: "#", children: "Products" }), _jsx("a", { href: "#", children: "About" })] })] }), _jsxs("div", { className: "container", children: [_jsxs("aside", { className: "sidebar", children: [_jsx("h3", { children: "Categories" }), _jsxs("ul", { children: [_jsx("li", { children: _jsx("button", { children: "All" }) }), _jsx("li", { children: _jsx("button", { children: "Accessories" }) }), _jsx("li", { children: _jsx("button", { children: "Footwear" }) }), _jsx("li", { children: _jsx("button", { children: "Bags" }) }), _jsx("li", { children: _jsx("button", { children: "Electronics" }) })] }), _jsxs("div", { className: "filter", children: [_jsx("h4", { children: "Price" }), _jsxs("div", { className: "range-row", children: [_jsx("input", { type: "range", min: "0", max: "200", defaultValue: "120" }), _jsx("span", { children: "Up to $120" })] })] })] }), _jsxs("main", { className: "main", children: [_jsx("h2", { children: "Products" }), _jsx("div", { className: "cards", children: products.map(p => (_jsxs("article", { className: "card", children: [_jsx("img", { src: p.img, alt: p.name }), _jsxs("div", { className: "card-body", children: [_jsx("h3", { children: p.name }), _jsx("p", { className: "price", children: p.price }), _jsxs("div", { className: "card-actions", children: [_jsx("button", { className: "btn primary", children: "Add to Cart" }), _jsx("button", { className: "btn", children: "Details" })] })] })] }, p.id))) })] })] }), _jsx("footer", { className: "footer", children: _jsxs("p", { children: ["\u00A9 ", new Date().getFullYear(), " MyStore \u2014 Built with React"] }) }), _jsx("style", { children: `
        :root{
          --bg: #f6f7fb;
          --card: #ffffff;
          --muted: #6b7280;
          --accent: #2563eb;
          --radius: 8px;
        }

        *{box-sizing: border-box}
        body,html,#root{height:100%}
        .app-root{
          min-height:100vh;
          display:flex;
          flex-direction:column;
          background:var(--bg);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
          color:#111827;
        }

        .header{
          display:flex;
          justify-content:space-between;
          align-items:center;
          padding:1rem 1.25rem;
          background:linear-gradient(90deg, #fff, #f8fafc);
          border-bottom:1px solid #e6edf3;
          position:sticky;
          top:0;
          z-index:10;
        }
        .logo{font-weight:700;font-size:1.15rem;color:var(--accent)}
        .nav a{margin-left:1rem;text-decoration:none;color:var(--muted);font-size:0.95rem}

        .container{
          display:grid;
          grid-template-columns:240px 1fr;
          gap:1rem;
          width:100%;
          max-width:1200px;
          margin:1.25rem auto;
          padding:0 1rem;
          flex:1 0 auto;
        }

        .sidebar{
          background:var(--card);
          padding:1rem;
          border-radius:var(--radius);
          border:1px solid #e9eef5;
          height:fit-content;
        }
        .sidebar h3{margin-top:0}
        .sidebar ul{list-style:none;padding:0;margin:0 0 1rem 0}
        .sidebar li{margin-bottom:0.5rem}
        .sidebar button{background:transparent;border:1px solid #e6eef8;padding:0.4rem 0.65rem;border-radius:6px;cursor:pointer}

        .filter{margin-top:1rem}
        .range-row{display:flex;align-items:center;gap:0.5rem}
        .range-row input{flex:1}

        .main{
          min-height:300px;
        }
        .main h2{margin-top:0}

        .cards{
          display:grid;
          grid-template-columns:repeat(auto-fill, minmax(200px, 1fr));
          gap:1rem;
        }

        .card{
          background:var(--card);
          border-radius:10px;
          overflow:hidden;
          box-shadow:0 1px 3px rgba(16,24,40,0.04);
          border:1px solid #eef3fb;
          display:flex;
          flex-direction:column;
        }
        .card img{width:100%;height:140px;object-fit:cover;display:block}
        .card-body{padding:0.8rem 0.9rem;display:flex;flex-direction:column;gap:0.6rem}
        .card-body h3{margin:0;font-size:1rem}
        .price{color:var(--accent);font-weight:600}
        .card-actions{margin-top:auto;display:flex;gap:0.5rem}

        .btn{padding:0.45rem 0.6rem;border-radius:8px;border:1px solid #d1dbe9;background:transparent;cursor:pointer}
        .btn.primary{background:var(--accent);color:#fff;border-color:transparent}

        .footer{
          padding:1rem 1.25rem;
          text-align:center;
          font-size:0.9rem;
          color:var(--muted);
          border-top:1px solid #e6edf3;
          background:#fff;
        }

        /* Responsive */
        @media (max-width:880px){
          .container{grid-template-columns:1fr;padding:0 0.75rem}
          .sidebar{order:2}
          .main{order:1}
        }

      ` })] }));
}
//# sourceMappingURL=App.js.map
//# sourceMappingURL=App.js.map