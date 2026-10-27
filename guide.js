"use strict";

document.querySelectorAll("video").forEach((video) => {
  const notice = video.closest(".screen").querySelector(".video-error");
  const showError = () => { notice.hidden = false; };
  video.addEventListener("error", showError);
  video.querySelectorAll("source").forEach((source) => {
    source.addEventListener("error", showError);
  });
  if (video.error) showError();
});
