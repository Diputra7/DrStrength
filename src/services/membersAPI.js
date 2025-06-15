 // src/services/membersAPI.js
import axios from "axios";

// Ganti dengan URL dan API Key Supabase kamu
const API_URL = "https://gholaralqfcupadfpknx.supabase.co/rest/v1/members";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdob2xhcmFscWZjdXBhZGZwa254Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5MTg4OTcsImV4cCI6MjA2NTQ5NDg5N30.MFMeX2MeOUn3DHcrqrmDcVXSuXliShtQUtvqG0kmkXI";

// Header Supabase
const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
};

export const membersAPI = {
  async fetchMembers() {
    const response = await axios.get(`${API_URL}?select=*`, { headers });
    return response.data;
  },

  async createMember(data) {
    // data harus objek biasa, bukan FormData, karena Supabase REST tidak bisa handle multipart/form-data
    const response = await axios.post(API_URL, data, { headers });
    return response.data;
  },

  async deleteMember(id) {
    await axios.delete(`${API_URL}?id=eq.${id}`, { headers });
  },
};
