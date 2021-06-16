import { createMeme } from './deps.ts';

const [text] = Deno.args;

const meme = await createMeme(text);

await Deno.writeFile('./meme.jpeg', new Uint8Array(meme));

console.log('Meme created');