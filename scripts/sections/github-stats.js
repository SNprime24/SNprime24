function buildGitHubStatsSection({ github, hero, theme }) {
  return `## 📊 GitHub Stats

<div align="center">

![${hero.name}'s GitHub stats](https://github-readme-stats.vercel.app/api?username=${github.username}&show_icons=true&theme=${theme}&hide_border=true)
![GitHub Streak](https://streak-stats.demolab.com?user=${github.username}&theme=${theme}&hide_border=true)

</div>`;
}

module.exports = { buildGitHubStatsSection };
