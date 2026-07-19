const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const root = __dirname;
const port = Number(process.env.PORT || 4173);
const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".pdf": "application/pdf",
  ".docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
};

const server = http.createServer((request, response) => {
  const pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
  const requested = pathname === "/" ? "index.html" : pathname.replace(/^\/+/, "");
  const filePath = path.resolve(root, requested);

  if (!filePath.startsWith(path.resolve(root))) {
    response.writeHead(403).end("Forbidden");
    return;
  }

  fs.stat(filePath, (error, stats) => {
    const finalPath = !error && stats.isDirectory() ? path.join(filePath, "index.html") : filePath;
    fs.readFile(finalPath, (readError, content) => {
      if (readError) {
        response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" }).end("Không tìm thấy tệp.");
        return;
      }
      response.writeHead(200, {
        "Content-Type": mime[path.extname(finalPath).toLowerCase()] || "application/octet-stream",
        "Cache-Control": "no-cache"
      });
      response.end(content);
    });
  });
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Portfolio đang chạy tại http://127.0.0.1:${port}`);
  console.log("Nhấn Ctrl+C để dừng server.");
});
