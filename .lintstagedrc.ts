/** @format */

import { relative } from 'path';

// Define the buildEslintCommand function
const buildEslintCommand = (filenames: string[]) =>
  `next lint --fix --file ${filenames
    .map((f) => relative(process.cwd(), f))
    .join(' --file ')}`;

// Assign the configuration object to a variable
const eslintConfig = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
};

// Export the config variable
export default eslintConfig;
