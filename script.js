document.addEventListener("DOMContentLoaded", () => {
  const animatedTextElement = document.querySelector(".animated-text");
  if (animatedTextElement) {
    const textToAnimate = animatedTextElement.textContent;
    animatedTextElement.textContent = "";

    let i = 0;
    function typeWriter() {
      if (i < textToAnimate.length) {
        animatedTextElement.textContent += textToAnimate.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
      }
    }
    typeWriter();
  }
});
