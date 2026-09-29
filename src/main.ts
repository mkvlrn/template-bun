/** biome-ignore-all lint/suspicious/noConsole: needed, yo */

import { calculate } from "#/lib/calculator";

export function main(argv: readonly string[] = Bun.argv): void {
  const expression = argv[2] ?? "2 + 2";

  console.log(`Calculating: ${expression}`);

  try {
    console.log(`Result: ${calculate(expression)}`);
  } catch (error) {
    console.error(`Error: ${(error as Error).message}`);
  }
}

if (import.meta.main) {
  main();
}
