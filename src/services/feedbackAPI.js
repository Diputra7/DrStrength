import axios from 'axios'

const API_URL = " https://gholaralqfcupadfpknx.supabase.co/rest/v1/feedback"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdob2xhcmFscWZjdXBhZGZwa254Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5MTg4OTcsImV4cCI6MjA2NTQ5NDg5N30.MFMeX2MeOUn3DHcrqrmDcVXSuXliShtQUtvqG0kmkXI";
const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
};

export const feedbackAPI = {
  async fetchFeedback() {
    const response = await axios.get(API_URL, { headers });
    return response.data;
  },

  async createFeedback(data) {
    const response = await axios.post(API_URL, data, { headers });
    return response.data;
  },

  async deleteFeedback(id) {
    await axios.delete(`${API_URL}?id=eq.${id}`, { headers });
  },
};
