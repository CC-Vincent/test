import path from "path";
import fs, { promises } from "fs";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const { id } = req.query;

      const dir = path.join(process.cwd(), "CherryCat/metadata");
      const filePath = path.join(dir, `${id}.json`);

      if (fs.existsSync(filePath)) {
        const fileContents = await promises.readFile(filePath, "utf8");

        const data = JSON.parse(fileContents);

        res.status(200).json(data);
        res.end();
      } else {
        res.status(404).json({ message: "Not Found" });
        res.end();
      }
    } catch (err) {
      res.status(400).json({ message: err });
      res.end();
    }
  }

  res.status(405);
  res.end();
}
