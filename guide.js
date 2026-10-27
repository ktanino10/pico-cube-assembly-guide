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

document.querySelectorAll("[data-video][data-time]").forEach((link) => {
  link.addEventListener("click", (event) => {
    const video = document.getElementById(link.dataset.video);
    const time = Number(link.dataset.time);
    if (!video || video.readyState < 1 || !Number.isFinite(time) || time > video.duration) return;
    event.preventDefault();
    video.pause();
    video.currentTime = time;
    video.focus();
  });
});

const bodyVideo = document.getElementById("body-video");
const chapters = Array.from(document.querySelectorAll('[data-video="body-video"]'));
const updateChapter = () => {
  const active = chapters.findLast((link) => Number(link.dataset.time) <= bodyVideo.currentTime);
  chapters.forEach((link) => {
    if (link === active) link.setAttribute("aria-current", "true");
    else link.removeAttribute("aria-current");
  });
};
bodyVideo.addEventListener("timeupdate", updateChapter);
bodyVideo.addEventListener("loadedmetadata", updateChapter);
if (bodyVideo.readyState >= 1) updateChapter();
