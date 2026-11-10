# Contributing to DevAtlas

Thanks for making developer knowledge more accessible.

## Add or correct a catalog entry

1. Open `dist/data.js`.
2. Find the relevant `groups` entry and add a `|`-separated technology name to its `items` string.
3. If the language belongs to multiple areas, add it to each relevant group. Entries are deduplicated automatically by case-insensitive name.
4. For well-known technologies, add a `featured` object with an accurate tagline, common use, learning guidance, and an official docs URL.
5. Run `npm test` and check the UI in a browser.

Categorize frameworks, runtimes, and libraries as tools; do not suggest they're languages. Don't invent rankings, benchmarks, salaries, or usage statistics. Keep labels short and accessible.

## Suggest a learning path

Edit the `paths` array in `dist/data.js`. Every named skill must exist in the catalog. A path should end in a realistic, small project that can be completed and shared.

## Pull requests

Describe what you changed and why. For visible UI changes, include before/after screenshots. Test responsive and keyboard interaction where possible.

By contributing, you agree that your changes are licensed under the project's MIT License.
