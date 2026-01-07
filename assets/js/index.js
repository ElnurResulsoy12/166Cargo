document
  .querySelectorAll("div.asideContainer > ul > li")
  .forEach((listElement) => {
    if (listElement.querySelector("div.xidmetlerSecenekler")) {
      listElement.classList.add("options");
    }
  });

document
  .querySelectorAll("div.asideContainer > ul > li")
  .forEach((listElement) => {
    listElement
      .querySelector("div.xidmetlerBasliq > button")
      .addEventListener("click", () => {
        listElement.classList.toggle("open");

        document
          .querySelectorAll("div.asideContainer > ul > li")
          .forEach((check) => {
            if (check !== listElement) {
              check.classList.remove("open");
            }
          });
      });
  });