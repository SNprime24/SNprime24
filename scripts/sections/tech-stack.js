const { techBadge } = require('../lib/badges');

function buildTechStackSection({ hero }) {
  const techBadges = hero.techStack.map(techBadge).join('\n');

  return `## 🛠 Tech Stack

<div align="center">

${techBadges}

</div>`;
}

module.exports = { buildTechStackSection };
