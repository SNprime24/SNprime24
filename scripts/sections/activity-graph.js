function buildActivityGraphSection({ github, hero }) {
  return `## 📈 Contribution Activity

<div align="center">

![${hero.name}'s GitHub activity graph](https://github-readme-activity-graph.vercel.app/graph?username=${github.username}&theme=tokyo-night&hide_border=true)

</div>`;
}

module.exports = { buildActivityGraphSection };
