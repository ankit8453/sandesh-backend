const corsOptions = {
    origin: [
      "http://localhost:5173",
      "http://localhost:4173",
      "http://127.0.0.1:5173",
      process.env.CLIENT_URL,
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  };
  
  const SANDESH_TOKEN = "sandesh-token";
  
  export { corsOptions, SANDESH_TOKEN };