import { SearchResult, PolishResult, GrindResult, EpoxyResult } from "@shared/schema";
import { apiRequest } from "./queryClient";

export async function searchSheetData(blockNo: string, partNo?: string, thickness?: string): Promise<SearchResult[]> {
  const params = new URLSearchParams();
  params.append('blockNo', blockNo);
  if (partNo) params.append('partNo', partNo);
  if (thickness) params.append('thickness', thickness);

  const response = await apiRequest('GET', `/api/search?${params}`);
  return response.json();
}

export async function getPolishData(blockNo: string, partNo?: string, thickness?: string): Promise<PolishResult[]> {
  const params = new URLSearchParams();
  params.append('blockNo', blockNo);
  if (partNo) params.append('partNo', partNo);
  if (thickness) params.append('thickness', thickness);

  const response = await apiRequest('GET', `/api/polish?${params}`);
  return response.json();
}

export async function getGrindData(blockNo: string, partNo?: string, thickness?: string): Promise<GrindResult[]> {
  const params = new URLSearchParams();
  params.append('blockNo', blockNo);
  if (partNo) params.append('partNo', partNo);
  if (thickness) params.append('thickness', thickness);

  const response = await apiRequest('GET', `/api/grind?${params}`);
  return response.json();
}

export async function getEpoxyData(blockNo: string, partNo?: string, thickness?: string): Promise<EpoxyResult[]> {
  const params = new URLSearchParams();
  params.append('blockNo', blockNo);
  if (partNo) params.append('partNo', partNo);
  if (thickness) params.append('thickness', thickness);

  const response = await apiRequest('GET', `/api/epoxy?${params}`);
  return response.json();
}