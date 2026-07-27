import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ResourceList from "../components/ResourceList";
import useFetch from "../hooks/useFetch";
import useLocalStorage from "../hooks/useLocalStorage";
import { validateResource } from "../utils/validation";

function Resources({ theme, toggleTheme }) {
  const [resources, setResources] = useLocalStorage("resources", [
    { id: 1, title: "React Docs", category: "Documentation", url: "https://react.dev" },
    { id: 2, title: "JS Info", category: "Tutorial", url: "https://javascript.info" }
  ]);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Documentation");
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [catFilter, setCatFilter] = useState("all");

  const { data: posts, loading, error: apiError } = useFetch("https://jsonplaceholder.typicode.com/posts");

  function handleAdd(e) {
    e.preventDefault();
    const err = validateResource(title, category, url);
    if (err) return setError(err);

    setResources([...resources, { id: Date.now(), title, category, url }]);
    setTitle(""); setUrl(""); setError("");
  }

  const list = resources.filter((r) =>
    r.title.toLowerCase().includes(search.toLowerCase()) &&
    (catFilter === "all" ? true : r.category.toLowerCase() === catFilter.toLowerCase())
  );

  return (
    <div className="app-container">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <div className="main-layout">
        <Sidebar />
        <main className="page-content">
          <h1>Resource Library</h1>
          <div className="container-box">
            <h3>Add Resource</h3>
            {error && <p className="error-text">{error}</p>}
            <form onSubmit={handleAdd}>
              <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
              <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="Documentation">Documentation</option><option value="Tutorial">Tutorial</option><option value="Video">Video</option>
              </select>
              <input type="text" placeholder="URL" value={url} onChange={(e) => setUrl(e.target.value)} />
              <button type="submit">Add</button>
            </form>
          </div>

          <div className="controls-bar">
            <input type="text" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
            <select value={catFilter} onChange={(e) => setCatFilter(e.target.value)}>
              <option value="all">All Categories</option><option value="Documentation">Documentation</option><option value="Tutorial">Tutorial</option>
            </select>
          </div>

          <ResourceList resources={list} onDelete={(id) => setResources(resources.filter(r => r.id !== id))} />

          <h3>API Posts (useFetch)</h3>
          {loading && <p>Loading...</p>}
          {apiError && <p className="error-text">{apiError}</p>}
          {!loading && posts.map(p => (
            <div key={p.id} className="container-box">
              <h4>{p.id}. {p.title}</h4>
              <p>{p.body}</p>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}

export default Resources;