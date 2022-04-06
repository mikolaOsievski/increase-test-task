(() => {
  const target = document.querySelector(".footer-section_left ul");

  const btnBurger = document.querySelector("button.button-burger");
  const menuBurger = document.querySelector(".header__box");

  btnBurger.addEventListener("click", () => {
    let expanded = btnBurger.getAttribute("aria-expanded") === "true" || false;
    btnBurger.setAttribute("aria-expanded", !expanded);
    btnBurger.classList.toggle("button-burger_open");
    menuBurger.classList.toggle("header__box_open");
  });

  const setCountRows = (target) => {
    const countRow = Math.round(target.children.length / 2);
    target.style = `grid-template-rows: repeat(${countRow}, 1fr);`;
  };

  setCountRows(target);

  const callback = function (mutationsList, observer) {
    for (let mutation of mutationsList) {
      if (mutation.type === "childList") {
        setCountRows(target);
      }
    }
  };

  const observer = new MutationObserver(callback);
  observer.observe(target, { childList: true });
})();
