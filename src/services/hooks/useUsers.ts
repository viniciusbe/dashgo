import { useQuery, UseQueryOptions } from "react-query";
import { User } from "../../types/user";
import { api } from "../api";

export type GetUsersResponse = {
  totalCount: number;
  users: User[];
};

export async function getUsers(page: number): Promise<GetUsersResponse> {
  const { data, headers } = await api.get("users", { params: { page } });

  const totalCount = Number(headers["x-total-count"]);

  const users = data.users.map((user) => ({
    ...user,
    createdAt: new Date(user.created_at).toLocaleDateString("en", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }),
  }));
  return { users, totalCount };
}

export function useUsers(
  page: number,
  options: UseQueryOptions<GetUsersResponse>
) {
  return useQuery<GetUsersResponse>(["users", page], () => getUsers(page), {
    staleTime: 1000 * 60 * 5, // 5 minutes
    ...options,
  });
}
