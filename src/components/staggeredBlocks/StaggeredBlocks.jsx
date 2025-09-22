const StaggeredBlocks = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-12">
      {["Block 1", "Block 2", "Block 3", "Block 4", "Block 5"].map((text, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg shadow-lg text-center"
        >
          {text}
        </div>
      ))}
    </div>
  );
};

export default StaggeredBlocks;
