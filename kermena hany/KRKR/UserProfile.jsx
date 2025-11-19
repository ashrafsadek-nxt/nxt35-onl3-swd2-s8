import { useState, useEffect } from "react";

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!userId) return;

    // إنشاء AbortController لإلغاء الطلب عند إلغاء المكون
    const controller = new AbortController();
    const signal = controller.signal;
    let mounted = true;

    setLoading(true);
    setError(null);

    (async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`,
          { signal }
        );

        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        const data = await response.json();

        if (mounted) setUser(data);
      } catch (err) {
        if (err.name === "AbortError") {
          // تجاهل الإلغاء
        } else {
          if (mounted) setError(err.message || "Unknown error");
        }
      } finally {
        if (mounted) setLoading(false);
      }
    })();

    // تنظيف عند إلغاء المكون
    return () => {
      mounted = false;
      controller.abort();
    };
  }, [userId]);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h3>3rd useEffect Example</h3>

      {loading && <p>Loading user...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {user && (
        <div
          style={{
            margin: "20px auto",
            width: "300px",
            padding: "15px",
            borderRadius: "8px",
            background: "#f8f9fa",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          }}
        >
          <h4>{user.name}</h4>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Website: {user.website}</p>
        </div>
      )}
    </div>
  );
}

export default UserProfile;