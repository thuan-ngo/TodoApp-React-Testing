const mockResponse = {
  data: {
    results: [
      {
        name: {
          first: "Kevin",
          last: "Ngo",
        },
        picture: {
          large:
            "https://images.unsplash.com/photo-1559981421-3e0c0d712e3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2822&q=80",
        },
        login: {
          username: "ngothuan",
        },
      },
    ],
  },
};

export default {
  get: jest.fn().mockResolvedValue(mockResponse),
};
