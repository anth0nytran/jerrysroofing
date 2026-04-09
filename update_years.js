const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else {
            results.push(file);
        }
    });
    return results;
}

const files = walk('app').filter(f => f.endsWith('.ts') || f.endsWith('.tsx'));

for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // Hardcoded string replacements
    content = content.replace(/30\+\s*years\s*experience/gi, 'dedicated service since 2024');
    content = content.replace(/30\+\s*years\s*serving/gi, 'Serving');
    content = content.replace(/for\s*30\+\s*years/gi, 'since 2024');
    content = content.replace(/30\+\s*years\s*of\s*trusted\s*roofing/gi, 'Trusted roofing');
    content = content.replace(/30\+\s*years\s*of\s*experience/gi, 'Trusted service since 2024');
    content = content.replace(/30\+\s*years\./gi, 'Since 2024.');

    // Dynamic variable replacements
    content = content.replace(/\{siteConfig\.yearsInBusiness\}\+\s*years/gi, 'since 2024');
    content = content.replace(/\{siteConfig\.yearsInBusiness\}\+\s*Years/g, 'Since 2024');
    content = content.replace(/\$\{siteConfig\.yearsInBusiness\}\+\s*Years\s*Experience/g, 'Since 2024');
    content = content.replace(/for\s*over\s*\{siteConfig\.yearsInBusiness\}\s*years/g, 'since 2024');
    
    // Custom specific catch for the About / Home statistics blocks
    content = content.replace(/value:\s*`\$\{siteConfig\.yearsInBusiness\}\+`,\s*label:\s*'Years'/gi, "value: '2024', label: 'Est.'");
    content = content.replace(/value:\s*`\$\{siteConfig\.yearsInBusiness\}\+`,\s*label:\s*'Years in Business'/gi, "value: '2024', label: 'Est.'");
    

    if (content !== original) {
        fs.writeFileSync(file, content);
        console.log(`Updated ${file}`);
    }
}
