const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.write("🔥 CloudNest DevOps App v2 - CI/CD Working!");
  res.end();
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});