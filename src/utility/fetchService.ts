type FetchOptions = {
  method?: string;
  headers?: HeadersInit;
  body?: any;
};

const fetchService = async (url: string, options: FetchOptions = {}) => {
  const defaultHeaders = {
    "Content-Type": "application/json",
  };

  const mergedOptions = {
    method: "GET", // Default method is GET
    headers: { ...defaultHeaders, ...options.headers },
    body: options.body ? JSON.stringify(options.body) : undefined,
    ...options,
  };

  try {
    const response = await fetch(url, mergedOptions);

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error; // Re-throw the error to be handled in the calling function
  }
};

export default fetchService;
