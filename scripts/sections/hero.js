const { techBadge, socialBadge } = require('../lib/badges');

function buildHeroSection({ hero }) {
  const techBadges = hero.techStack.map(techBadge).join('\n');
  const socialBadges = [
    hero.social.linkedin && socialBadge('LinkedIn', '0A66C2', 'linkedin', `https://www.linkedin.com/in/${hero.social.linkedin}`),
    hero.social.twitter && socialBadge('X', '000000', 'x', `https://twitter.com/${hero.social.twitter}`),
    hero.social.portfolio && socialBadge('Portfolio', '000000', 'vercel', hero.social.portfolio),
    hero.social.email && socialBadge('Email', 'D14836', 'gmail', `mailto:${hero.social.email}`),
  ]
    .filter(Boolean)
    .join('\n');

  return `<div align="center">

# Hi 👋, I'm ${hero.name}

### ${hero.role}

**Focus:** ${hero.currentFocus}

${techBadges}

${socialBadges}

</div>`;
}

module.exports = { buildHeroSection };
