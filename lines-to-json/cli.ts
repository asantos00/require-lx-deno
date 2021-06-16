import { linesToJSON } from "./lines-to-json.ts";

const [filePath] = Deno.args;

if (!filePath) {
  throw new Error("filePath not present");
}

const fileContent = await Deno.readTextFile(filePath);

console.log(
  JSON.stringify(
    linesToJSON(fileContent),
    null,
    4,
  ),
);

console.log(
  Deno.env.get("PATH"),
);
