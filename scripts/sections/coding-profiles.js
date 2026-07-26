function buildCodingProfilesSection({ platforms }) {
  return `## 🧠 Coding Profiles

<div align="center">

![LeetCode stats for ${platforms.leetcode.username}](https://leetcard.jacoblin.cool/${platforms.leetcode.username}?theme=dark&font=Baloo%202&ext=heatmap)
![Codeforces stats for ${platforms.codeforces.username}](https://codeforces-readme-stats.vercel.app/api/card?username=${platforms.codeforces.username}&theme=dark)
![CodeChef stats for ${platforms.codechef.username}](https://codechef-readme-stats.onrender.com/${platforms.codechef.username}?v=1)

</div>`;
}

module.exports = { buildCodingProfilesSection };
