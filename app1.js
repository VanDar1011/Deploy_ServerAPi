// Common JS
const http = require("http");
const server = http.createServer((req, res) => {
  //   console.log(req.url);
  //   res.writeHead(200, { "Content-Type": "text/html", });
  //   res.setHeader("Content-Type", "text/html;charset=UTF-8");
  //   console.log(req);
  console.log(req.body);
  const apiKey = req.headers["x-api-key"];
  res.setHeader("Content-Type", "application/json;charset=UTF-8");
  res.setHeader(
    "Set-Cookie",
    "name=vandat;path=/;httpOnly;expires=Wed, 17-Dec-2026 00:00:00 GMT"
  );
  const user = {
    name: "Đạt",
    age: 10,
    apiKey,
  };
  //   res.statusCode = 404;
  res.end(JSON.stringify(user));
});
server.listen(4000, "localhost", () => {
  console.log("Listening on localhost:4000");
});
