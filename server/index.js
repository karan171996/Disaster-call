import server from "./config/server";

const PORT = process.env.PORT || 3030;
server.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
