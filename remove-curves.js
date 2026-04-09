const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'app');

const walkSync = (dir, filelist = []) => {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const dirFile = path.join(dir, file);
    const dirent = fs.statSync(dirFile);
    if (dirent.isDirectory()) {
      filelist = walkSync(dirFile, filelist);
    } else {
      if (dirFile.endsWith('.ts') || dirFile.endsWith('.tsx')) {
        filelist.push(dirFile);
      }
    }
  }
  return filelist;
};

const files = walkSync(targetDir);

// Regex to match "rounded", "rounded-md", "rounded-t-lg", "rounded-[1rem]", "rounded-full", etc.
// \brounded(?:-(?:t|r|b|l|tl|tr|br|bl))?(?:-(?:none|sm|md|lg|xl|2xl|3xl|full|\[[a-zA-Z0-9%\.]+\]))?\b
// Alternatively simpler: \brounded(-[a-zA-Z0-9\[\]\.%]+)*\b
// Notice we are matching `rounded` with optional hyphenated suffixes.
const roundedRegex = /\brounded(?:-[a-zA-Z0-9\[\]\.%]+)*\b/g;

let updatedFiles = 0;

for (const file of files) {
  const contents = fs.readFileSync(file, 'utf8');
  if (roundedRegex.test(contents)) {
    const updated = contents.replace(roundedRegex, '');
    
    // As a cleanup, we might leave double spaces behind, like `class="bg-white  shadow"`
    // We can run a space cleanup inside classNames or just globally (safely).
    // The easiest is just leaving the spaces since HTML classes don't care, 
    // but a soft cleanup of multiple spaces inside strings is nice.
    const cleanUpdated = updated.replace(/ {2,}/g, ' ');
    
    fs.writeFileSync(file, cleanUpdated, 'utf8');
    updatedFiles++;
    console.log(`Updated: ${path.relative(__dirname, file)}`);
  }
}

console.log(`Removed curves from ${updatedFiles} files.`);
