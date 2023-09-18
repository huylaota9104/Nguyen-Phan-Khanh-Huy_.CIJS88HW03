
import './App.css'
import Aside from './component/Aside';
import BoxList from './component/BoxList';
import Header from './component/Header';
import Headline from './component/Headline';
import hotTrend from './data';

function App() {
  return (
    <div id="layout">
      <Header />

      <main>
        <section id="content">
          <Headline />
        </section>
        <Aside />
        <p>Top 10 dien thoai duoc yeu Thich Nhat</p>
        <BoxList hotTrendData={hotTrend} />
      </main>
    </div>
  )
}

export default App
