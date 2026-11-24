import { mkdirSync, writeFileSync } from "node:fs";

// One deadpan one-star review of gravity, an everyday essential.
// It complains in earnest about a thing that cannot be fixed,
// and the sting lands in the last few words.
const review =
  "One star for gravity. It pulls everything down all day, every day, with no breaks, no refunds, and no regard for my knees.";

if (review.length > 160) {
  throw new Error(`review is ${review.length} characters, over the 160 limit`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", review, "utf8");
console.log(review);
