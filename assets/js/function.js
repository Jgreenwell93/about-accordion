const headers = document.querySelectorAll(".accordion-header");

headers.forEach(header => {
  header.addEventListener("click", () => {
    const targetId = header.getAttribute("data-target");
    const targetPanel = document.getElementById(targetId);
    const isOpen = targetPanel.classList.contains("open");

    // close all panels
    document.querySelectorAll(".accordion-panel").forEach(panel => {
      panel.classList.remove("open");
      panel.style.maxHeight = null;
    });

    // if clicked panel not open, open it
    if (!isOpen) {
      targetPanel.classList.add("open");
      targetPanel.style.maxHeight = targetPanel.scrollHeight + "px";
    }
  });
});
