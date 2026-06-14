import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import api from "./api";
import type {
  FilterParams,
  PlaceFormValues,
  PlaceResponse,
  PlacesResponse,
} from "../types";
import { toast } from "react-toastify";
import { Navigate, useNavigate } from "react-router-dom";

export const useGetPlaces = (params?: FilterParams) =>
  useQuery({
    queryKey: ["places", params],
    queryFn: () => api.get<PlacesResponse>("/places", { params }),
    select: (res) => res.data.places,
    retry: 2,
    retryDelay: 1000,
  });
export const useCreatePlace = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (values: PlaceFormValues) => api.post("/places", values),
    onSuccess: (res) => {
      toast.success("Yeni konum oluşturuldu.");
      navigate(`/place/${res.data.place.id}`);
      queryClient.invalidateQueries({ queryKey: ["places"] });
    },
    onError: (err) => {
      toast.error(`Bir hata oluştu: ${err.message}`);
    },
  });
};
export const useGetPlace = (id?: string) =>
  useQuery({
    queryKey: ["place", id],
    queryFn: () => api.get<PlaceResponse>(`/place/${id}`),
    select: (res) => res.data.place,
    enabled: !!id,
  });

export const useDeletePlace = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => api.delete(`/place/${id}`),
    onSuccess: () => {
      toast.success("Başarıyla silindi.");
      queryClient.invalidateQueries({ queryKey: ["places"] });
      navigate("/");
    },
    onError: () => {
      toast.error("Bir hata oluştu.");
    },
  });
};
