import { Outlet } from "react-router-dom";
import TopMenu from "./TopMenu";
import SidePanel from "./SidePanel";

export default function Frame() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <TopMenu />
      <div style={{ display: "flex", flex: 1 }}>
        <SidePanel />
        <main style={{ flex: 1, padding: "30px", backgroundColor: "#fdfdfd" }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
