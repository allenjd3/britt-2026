export type GraphQLResponse<T> = {
  data?: T;
  errors?: unknown;
};

export async function graphqlFetch<T>(
  query: string,
  variables?: Record<string, unknown>
): Promise<T> {
  const response = await fetch(import.meta.env.API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
  });

  if (!response.ok) throw new Error(`GraphQL error: ${response.status}`);

  const json = (await response.json()) as GraphQLResponse<T>;
  if (json.errors) {
    console.error(json.errors);
    throw new Error("GraphQL query failed");
  }

  return json.data!;
}