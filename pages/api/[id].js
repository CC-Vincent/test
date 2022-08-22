import path from "path";
import fs from "fs";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const dev = process.env.NODE_ENV !== "production";
      const server = dev
        ? "http://localhost:3000"
        : "https://test-inky-alpha-86.vercel.app";

      const { id } = req.query;

      const response = await fetch(`${server}/api/metadata/${id}`);

      if (response.status != 200) {
        res.status(response.status).json({ message: response.statusText });
      }

      const data = await response.json();

      const filename = data.image;
      var contentType = undefined;
      var fileType = filename.slice(-3);

      switch (fileType) {
        case "mp4":
          contentType = "video/mp4";
          break;
        case "png":
          contentType = "image/png";
          break;
      }

      if (!contentType) {
        res.status(404).json({ message: "Not Found" });
      }

      const filePath = path.join(process.cwd(), `public/${filename}`);
      const buffer = fs.readFileSync(filePath);

      res.setHeader("Content-Type", contentType);
      res.send(buffer);
    } catch (err) {
      res.status(400).json({ message: err });
    }
  }

  res.status(405);
  res.end();
}
