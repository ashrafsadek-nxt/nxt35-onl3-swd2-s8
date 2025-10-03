import React from "react";

const products = [
  { id: 1, name: "Red Sneakers", price: "$59", desc: "Comfortable everyday sneakers", img: "" },
  { id: 2, name: "Blue Jacket", price: "$89", desc: "Lightweight water-resistant jacket", img: "" },
  { id: 3, name: "Classic Watch", price: "$129", desc: "Minimalist analog watch", img: "" },
  { id: 4, name: "Leather Bag", price: "$149", desc: "Small crossbody leather bag", img: "" },
  { id: 5, name: "Sunglasses", price: "$29", desc: "UV-protection sunglasses", img: "" },
  { id: 6, name: "Headphones", price: "$79", desc: "Over-ear comfortable headphones", img: "" }
];

export default function App() {
  return (
    <div className="app">
      <style>{`
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
      `}</style>

      <header className="header">
        <div className="brand">MyShop</div>
        <input className="search" placeholder="Search products..." />
      </header>

      <div className="layout">
        <aside className="sidebar">
          <h3 style={{marginTop:0}}>Filters</h3>
          <div className="nav">
            <button>All products</button>
            <button>Clothing</button>
            <button>Accessories</button>
            <button>Electronics</button>
            <button>On sale</button>
          </div>

          <div style={{height:12}} />

          <h4 style={{margin:'12px 0 6px'}}>Price</h4>
          <div style={{display:'flex',gap:8}}>
            <input placeholder="Min" style={{flex:1,padding:8,borderRadius:6,border:'1px solid #e6edf3'}} />
            <input placeholder="Max" style={{flex:1,padding:8,borderRadius:6,border:'1px solid #e6edf3'}} />
          </div>
        </aside>

        <main className="main">
          <h2>Products</h2>
          <div className="cards">
            {products.map(p => (
              <article key={p.id} className="card">
                <img src={p.img} alt={p.name} />
                <div className="meta">
                  <div>
                    <div className="title">{p.name}</div>
                    <div className="desc">{p.desc}</div>
                  </div>
                  <div className="price">{p.price}</div>
                </div>

                <div className="actions">
                  <button className="btn">Details</button>
                  <button className="btn primary">Add to cart</button>
                </div>
              </article>
            ))}
          </div>
        </main>
      </div>

      <footer className="footer">© {new Date().getFullYear()} MyShop — Simple React product page</footer>
    </div>
  );
}
