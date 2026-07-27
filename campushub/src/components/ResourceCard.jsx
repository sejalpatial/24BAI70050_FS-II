function ResourceCard({ resource, onDelete }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "15px",
        marginBottom: "15px",
        borderRadius: "5px",
        backgroundColor: "var(--bg-card)"
      }}
    >
      <h3>{resource.title}</h3>
      {resource.category && <p><strong>Category:</strong> {resource.category}</p>}
      {resource.body && <p>{resource.body}</p>}
      {resource.url && (
        <p>
          <strong>URL:</strong>{" "}
          <a href={resource.url.startsWith("http") ? resource.url : `https://${resource.url}`} target="_blank" rel="noreferrer">
            {resource.url}
          </a>
        </p>
      )}

      {onDelete && (
        <button onClick={() => onDelete(resource.id)} className="btn-danger">
          Delete Resource
        </button>
      )}
    </div>
  );
}

export default ResourceCard;