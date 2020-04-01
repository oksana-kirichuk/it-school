document.addEventListener("DOMContentLoaded", function() {
    // === tabs
  
    const tabsBlock = document.querySelector(".tabs__block");
    const inner = document.querySelectorAll(".tabs__inner");
    const tabListItem = document.querySelectorAll(".tabs__list_item");
  
    Array.from(tabListItem, el =>
      el.addEventListener("click", e => {
        const dataTab = el.dataset.tab;
        const tabInner = document.querySelector(
          `.tabs__inner[data-tab='${dataTab}']`
        );
  
        Array.from(inner, elInner => {
          elInner.classList.remove("active");
        });
  
        tabInner.classList.add("active");
  
        Array.from(tabListItem, item => {
          item.classList.remove("active");
        });
  
        el.classList.add("active");
      })
    );
  
    // === button
  
    const toggleButton = document.querySelector(".show_tabs");
  
    toggleButton.addEventListener("click", e => {
      tabsBlock.classList.toggle("active");
    });
  });
  