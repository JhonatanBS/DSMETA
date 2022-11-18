import { Header } from "./components/Header";
import { SalesCard } from "./components/SalesCard";

import "./index.css";

export function App() {
  return (
    <>
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard />
          </div>
        </section>
      </main>
    </>
  )
}
