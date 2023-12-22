import { BlogSchema } from "@/lib/schema";
import type { NextApiRequest, NextApiResponse } from "next";
import * as fs from "fs";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    const newBlog = (await req.body.json()) as BlogSchema;

    //get the data from the json file
    const dataPath = process.cwd() + "/app/data.json";
    const rawData = fs.readFileSync(dataPath, "utf8");
    const dbData = await JSON.parse(rawData);

    //add the new blog to the data
    dbData.blogs.push(newBlog);

    // Convert the updated data back to JSON
    const updatedData = JSON.stringify(dbData, null, 2);

    // Write the updated data back to the JSON file
    fs.writeFileSync(dataPath, updatedData, "utf8");

    return res.json({
      status: "success",
      message: "Your new blog has been uploaded! Hurray!",
    });
  } catch (err) {
    return res.json({
      status: "error",
      error: "Bad request. Something went wrong",
    });
  }
}
