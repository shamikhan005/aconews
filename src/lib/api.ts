import axios from "axios";
import { NewsResponse } from "@/types";

export const fetchNews = async (page: number = 1, query: string = ''): Promise<NewsResponse> => {
  const params = new URLSearchParams({ page: page.toString() });

  if (query) {
    params.append('q', query);
  }

  const response = await axios.get<NewsResponse>(`/api/news?${params}`);

  return response.data;
}
