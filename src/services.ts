import api from "./api";
import { API_ENDPOINTS } from "./apiConstants";

export interface CoverageResponse {
  id: string;
  name: string;
  description: string;
}

// Fetch coverage details with a dynamic ID
export const fetchCoverageById = async (
  id: string | number
): Promise<CoverageResponse> => {
  const response = await api.get<CoverageResponse>(
    API_ENDPOINTS.EDIT_COVERAGE(id)
  );
  return response.data;
};
