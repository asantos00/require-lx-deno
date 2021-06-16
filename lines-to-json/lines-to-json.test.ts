import { assertEquals } from "https://deno.land/std@0.99.0/testing/asserts.ts";
import { linesToJSON } from "./lines-to-json.ts";

Deno.test("it converts lines to json", () => {
  const result = linesToJSON(
    `Alexandre\nPofirio\nJosé`,
    "test",
  );

  assertEquals(result.test[0], "Alexandre");
  assertEquals(result.test[2], "José");
});
