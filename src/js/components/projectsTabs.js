export const projectsTabsWork = function () {
  const tabsLinks = document.querySelectorAll(".descr__tabs-link");
  const cardBlocks = document.querySelectorAll('.cards')

  tabsLinks.forEach((tabLink) => {
    tabLink.addEventListener('click', event => {
      event.preventDefault();
      const tabId = tabLink.getAttribute('data-tab');
      const currentTab = document.querySelector(tabId);

      tabsLinks.forEach((link) => {
        link.classList.remove("descr__tabs-link_active");
      });

      cardBlocks.forEach((cardBlock) => {
          cardBlock.classList.remove("cards_active");
      });

      tabLink.classList.add("descr__tabs-link_active");
      
      currentTab.classList.add('cards_active');
    })
  })

  tabsLinks[0].click();
}