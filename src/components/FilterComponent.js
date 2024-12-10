const FilterComponent = ({ setFilter }) => {
  return (
    <>
      <div>
        <button onClick={() => setFilter("All")}>All</button>
        <button onClick={() => setFilter("completed")}>completed</button>
        <button onClick={() => setFilter("Pending")}>Pending</button>
      </div>
    </>
  );
};
export default FilterComponent;
