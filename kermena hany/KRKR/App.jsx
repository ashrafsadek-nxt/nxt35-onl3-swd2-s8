// import React from "react";
// import Navbar from "./layouts/navbar/Navbar";

// function App() {
  
//   return (
//     <>
//     <Navbar></Navbar>
//       <Navbar />

     
//     </>
//   );
// }

// export default App;
import React from "react";
import Navbar from "./layouts/navbar/Navbar";
import Sidebar from "./layouts/sidebar/Sidebar";
import Main from "./content/main";
import Greeting from "./prop/Greeting";
import X from "./X";
import Counter from "./hooks/use-state/Counter";
import AttendanceTracker from "./hooks/use-state/AttendanceTracker";
import TodoApp from "./hooks/use-state/TodoApp";
import Chat from "./hooks/use-state/Chat";
import Title from "./hooks/use-state/Title"; // ✅ 1st useEffect Example
import TitleTwo from "./hooks/use-state/TitleTwo"; // ✅ 2nd useEffect Example
import UserProfile from "./hooks/use-state/UserProfile"; // ✅ 3rd useEffect Example
import { ThemeProvider } from "./hooks/use-context/ThemeContext"; // ✅ Context
import Header from "./components/Header"; // ✅ Header فيه الزرار
import "./App.css";

function App() {
  const handleHello = (name) => {
    alert(`How are you ${name}?`);
  };

  return (
    // ✅ نغلف كل التطبيق بـ ThemeProvider علشان الثيم يشتغل في كل المكونات
    <ThemeProvider>
      <div className="app">
        {/* ✅ الهيدر الجديد اللي فيه الزرار لتبديل الثيم */}
        <Header />

        {/* ✅ الشريط العلوي */}
        <Navbar />

        <div className="main-area">
          {/* ✅ القائمة الجانبية */}
          <Sidebar />

          <main className="main-content">
            {/* ✅ المحتوى الأساسي */}
            <Main />

            {/* ✅ التحية */}
            <Greeting name="Ahmed Aly Amr" onHello={handleHello} />

            {/* ✅ مكون X */}
            <X />

            {/* ✅ عداد الأزرار */}
            <div style={{ marginTop: "40px" }}>
              <Counter />
            </div>

            {/* ✅ مكون المهام */}
            <div style={{ marginTop: "40px" }}>
              <TodoApp />
            </div>

            {/* ✅ مكون الدردشة */}
            <div style={{ marginTop: "40px" }}>
              <Chat />
            </div>

            {/* ✅ نظام الحضور والغياب */}
            <div style={{ marginTop: "40px" }}>
              <AttendanceTracker />
            </div>

            {/* ✅ 1st useEffect Example */}
            <div style={{ marginTop: "40px" }}>
              <Title />
            </div>

            {/* ✅ 2nd useEffect Example */}
            <div style={{ marginTop: "40px" }}>
              <TitleTwo />
            </div>

            {/* ✅ 3rd useEffect Example */}
            <div style={{ marginTop: "40px" }}>
              <UserProfile userId={1} />
            </div>
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;