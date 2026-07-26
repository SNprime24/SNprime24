#!/usr/bin/env node
// Reads profile-config.json and writes README.md so the profile is
// updated by editing config values instead of hand-editing README.md.
// Run: node scripts/generate-readme.js

const fs = require('fs');
const path = require('path');

const { buildHeroSection } = require('./sections/hero');
const { buildGitHubStatsSection } = require('./sections/github-stats');
const { buildCodingProfilesSection } = require('./sections/coding-profiles');
const { buildActivityGraphSection } = require('./sections/activity-graph');
const { buildRepoShowcaseSection } = require('./sections/repo-showcase');
const { buildTechStackSection } = require('./sections/tech-stack');

const ROOT = path.join(__dirname, '..');
const config = JSON.parse(fs.readFileSync(path.join(ROOT, 'profile-config.json'), 'utf8'));

async function main() {
  const sections = [
    buildHeroSection(config),
    buildGitHubStatsSection(config),
    buildCodingProfilesSection(config),
    buildActivityGraphSection(config),
    await buildRepoShowcaseSection(config),
    buildTechStackSection(config),
  ];

  const markdown = `${sections.join('\n\n---\n\n')}\n`;

  fs.writeFileSync(path.join(ROOT, 'README.md'), markdown);
  console.log('README.md generated from profile-config.json.');
}

main().catch((err) => {
  console.error('Failed to generate README:', err.message);
  process.exit(1);
});
