import apiClient from '@/api/apiClient';
import { MY_SPECS_API_PATH } from '../../path';

export const mySpecsApi = {
  getMySpecs: async () => {
    return await apiClient.get(`${MY_SPECS_API_PATH.specs}`);
  },

  postMySpecs: async () => {
    return await apiClient.post(`${MY_SPECS_API_PATH.specs}`);
  },

  getMySpecsDetail: async (specId: number) => {
    return await apiClient.post(`${MY_SPECS_API_PATH.specs}/${specId}`);
  },

  patchMySpecs: async (specId: number) => {
    return await apiClient.patch(`${MY_SPECS_API_PATH.specs}/${specId}`);
  },

  deleteMySpecs: async () => {
    async (specId: number) => {
      return await apiClient.delete(`${MY_SPECS_API_PATH.specs}/${specId}`);
    };
  },
};
