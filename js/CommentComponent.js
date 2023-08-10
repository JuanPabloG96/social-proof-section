import { useFetch } from "./useFetch.js";

const commentSection = document.querySelector('.comments-section');
const URL = 'json/data.json';

const CommentTemplate = (id, profileImg, username, verified, comment) => {
  let verifiedText = verified ? 'Verified Buyer' : 'Purchase Not Verified';

  return `<article class="comment-container comment-container-${id}">
  <section class="profile-info">
    <img src="${profileImg}" alt="${username} profile image" class="profileImg">
    <div class="user-info">
      <h4 class="username">${username}</h4>
      <span class="verified-buyer">${verifiedText}</span>
    </div>
  </section>
  <p class="comment">"${comment}"</p>
</article>`
}

(async () => {
  let data = await useFetch(URL);
  let commentsHtml = '';

  data?.comments.map((info) => {
    commentsHtml += CommentTemplate(info.id, info.avatar, info.username, info.verified, info.comment);
  })

  commentSection.innerHTML = commentsHtml;
})();