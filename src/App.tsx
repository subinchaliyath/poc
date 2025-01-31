import React from "react";
import { useParams } from "react-router-dom";
import { useAPI } from "./useAPI";
import { fetchCoverageById, CoverageResponse } from "./fetchCoverage";

const App: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Extract dynamic `id` from URL
  const { loading, data, error } = useAPI<CoverageResponse>(fetchCoverageById, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-semibold">{data?.name}</h2>
      <p className="text-gray-700">{data?.description}</p>
    </div>
  );
};

export default App;
