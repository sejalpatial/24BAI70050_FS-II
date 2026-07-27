import ResourceCard from "./ResourceCard";

function ResourceList({ resources, onDelete }) {
  if (!resources || resources.length === 0) {
    return <h3>No Resources Found</h3>;
  }

  return (
    <div>
      {resources.map((resource) => (
        <ResourceCard
          key={resource.id}
          resource={resource}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default ResourceList;