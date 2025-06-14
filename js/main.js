onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('🎂 Happy Birthday to the bravest heart I know.🪖 Happy Father’s Day to my eternal protector.Thank you for your service, your love, and your life lessons.
I’m endlessly proud ').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300); // 1000ms delay
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};
