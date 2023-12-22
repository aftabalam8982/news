import "./App.css";
import NavBar from "./components/nav-component";
import NewsList from "./components/news-list.component";

function App() {
  return (
    <div className="w-1440px">
      <h1 className="text-3xl text-center py-5">See The Latest News</h1>
      <div className=" text-center py-8">
        <NavBar />
      </div>

      <NewsList />
    </div>
  );
}

export default App;
