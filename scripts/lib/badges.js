const TECH_BADGES = {
  'c++': { color: '00599C', logo: 'cplusplus', logoColor: 'white' },
  c: { color: '00599C', logo: 'c', logoColor: 'white' },
  python: { color: '3776AB', logo: 'python', logoColor: 'white' },
  javascript: { color: 'F7DF1E', logo: 'javascript', logoColor: 'black' },
  typescript: { color: '3178C6', logo: 'typescript', logoColor: 'white' },
  react: { color: '61DAFB', logo: 'react', logoColor: 'black' },
  'node.js': { color: '339933', logo: 'node.js', logoColor: 'white' },
  'next.js': { color: '000000', logo: 'next.js', logoColor: 'white' },
  java: { color: 'ED8B00', logo: 'openjdk', logoColor: 'white' },
  go: { color: '00ADD8', logo: 'go', logoColor: 'white' },
  git: { color: 'F05032', logo: 'git', logoColor: 'white' },
  html: { color: 'E34F26', logo: 'html5', logoColor: 'white' },
  css: { color: '1572B6', logo: 'css3', logoColor: 'white' },
  sql: { color: '4479A1', logo: 'mysql', logoColor: 'white' },
  docker: { color: '2496ED', logo: 'docker', logoColor: 'white' },
  linux: { color: 'FCC624', logo: 'linux', logoColor: 'black' },
};

function techBadge(name) {
  const meta = TECH_BADGES[name.toLowerCase()] || {
    color: '333333',
    logo: name.toLowerCase().replace(/[^a-z0-9]/g, ''),
    logoColor: 'white',
  };
  const label = encodeURIComponent(name).replace(/-/g, '--');
  return `![${name}](https://img.shields.io/badge/-${label}-${meta.color}?style=flat&logo=${meta.logo}&logoColor=${meta.logoColor})`;
}

function socialBadge(label, color, logo, url) {
  return `[![${label}](https://img.shields.io/badge/${encodeURIComponent(label)}-${color}?style=flat&logo=${logo}&logoColor=white)](${url})`;
}

module.exports = { techBadge, socialBadge };
