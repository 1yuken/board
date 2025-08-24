const recommendationsData = [
  {
    id: 1,
    image: "/img/ads/1.png",
    title: "Гитара Fender",
    price: "20 000 ₽",
    location: "Москва",
    date: "Сегодня 14:12",
    link: "#",
  },
  {
    id: 2,
    image: "/img/ads/2.png",
    title: "Ford Mustang 5.0 AT, 2019, 66 000 км",
    price: "3 500 000 ₽",
    location: "Симферополь",
    date: "Вчера 19:59",
    link: "#",
  },
  {
    id: 3,
    image: "/img/ads/3.png",
    title: "iPhone 13 mini, 128 ГБ",
    price: "13 990 ₽",
    location: "Севастополь",
    date: "21 августа 10:03",
    link: "#",
  },
  {
    id: 4,
    image: "/img/ads/4.png",
    title: "Кофемашина De'Longhi",
    price: "35 000 ₽",
    location: "Санкт-Петербург",
    date: "Сегодня 09:45",
    link: "#",
  },
  {
    id: 5,
    image: "/img/ads/5.png",
    title: "Sony PlayStation 5",
    price: "45 000 ₽",
    location: "Казань",
    date: "Сегодня 11:30",
    link: "#",
  },
  {
    id: 6,
    image: "/img/ads/6.png",
    title: "Смартфон Samsung Galaxy S22, 256 ГБ",
    price: "65 000 ₽",
    location: "Екатеринбург",
    date: "Сегодня 15:20",
    link: "#",
  },
  {
    id: 7,
    image: "/img/ads/7.png",
    title: "Компьютер Apple MacBook Pro 2021",
    price: "150 000 ₽",
    location: "Новосибирск",
    date: "Вчера 21:15",
    link: "#",
  },
  {
    id: 8,
    image: "/img/ads/8.png",
    title: "Часы Rolex Submariner",
    price: "350 000 ₽",
    location: "Москва",
    date: "Вчера 17:05",
    link: "#",
  },
  {
    id: 9,
    image: "/img/ads/9.png",
    title: "Мотоцикл Kawasaki Ninja 2020",
    price: "550 000 ₽",
    location: "Ростов-на-Дону",
    date: "21 августа 14:25",
    link: "#",
  },
  {
    id: 10,
    image: "/img/ads/1.png",
    title: "Гитара Fender",
    price: "20 000 ₽",
    location: "Москва",
    date: "Сегодня 14:12",
    link: "#",
  },
  {
    id: 11,
    image: "/img/ads/2.png",
    title: "Ford Mustang 5.0 AT, 2019, 66 000 км",
    price: "3 500 000 ₽",
    location: "Симферополь",
    date: "Вчера 19:59",
    link: "#",
  },
  {
    id: 12,
    image: "/img/ads/3.png",
    title: "iPhone 13 mini, 128 ГБ",
    price: "13 990 ₽",
    location: "Севастополь",
    date: "21 августа 10:03",
    link: "#",
  },
  {
    id: 13,
    image: "/img/ads/4.png",
    title: "Кофемашина De'Longhi",
    price: "35 000 ₽",
    location: "Санкт-Петербург",
    date: "Сегодня 09:45",
    link: "#",
  },
  {
    id: 14,
    image: "/img/ads/5.png",
    title: "Sony PlayStation 5",
    price: "45 000 ₽",
    location: "Казань",
    date: "Сегодня 11:30",
    link: "#",
  },
  {
    id: 15,
    image: "/img/ads/6.png",
    title: "Смартфон Samsung Galaxy S22, 256 ГБ",
    price: "65 000 ₽",
    location: "Екатеринбург",
    date: "Сегодня 15:20",
    link: "#",
  },
  {
    id: 16,
    image: "/img/ads/7.png",
    title: "Компьютер Apple MacBook Pro 2021",
    price: "150 000 ₽",
    location: "Новосибирск",
    date: "Вчера 21:15",
    link: "#",
  },
];

function createRecommendationItem(item) {
  return `
    <li class="recommendations__item">
      <a href="${item.link}" class="recommendations__link">
        <div class="recommendations__item-img">
          <img src="${item.image}" alt="${item.title}" />
        </div>
        <div class="recommendations__item-content">
          <h3 class="recommendations__item-title">${item.title}</h3>
          <div class="recommendations__item-info">
            <span class="recommendations__item-price">${item.price}</span>
            <span class="recommendations__item-location">${item.location}</span>
            <span class="recommendations__item-date">${item.date}</span>
          </div>
        </div>
      </a>
    </li>
  `;
}

function renderRecommendations() {
  const recommendationsContainer = document.querySelector(
    ".recommendations__list"
  );

  if (recommendationsContainer) {
    const recommendationsHTML = recommendationsData
      .map((item) => createRecommendationItem(item))
      .join("");

    recommendationsContainer.innerHTML = recommendationsHTML;
  }
}

function initCategoriesDropdown() {
  const categoriesBtn = document.getElementById("categoriesBtn");
  const categoriesList = document.getElementById("categoriesList");

  if (categoriesBtn && categoriesList) {
    categoriesBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      categoriesList.classList.toggle("active");
      categoriesBtn.classList.toggle("active");
    });

    document.addEventListener("click", (e) => {
      if (
        !categoriesBtn.contains(e.target) &&
        !categoriesList.contains(e.target)
      ) {
        categoriesList.classList.remove("active");
        categoriesBtn.classList.remove("active");
      }
    });

    const categoryLinks = categoriesList.querySelectorAll("a");
    categoryLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const category = link.getAttribute("data-category");
        const categoryName = link.textContent;

        categoriesList.classList.remove("active");
        categoriesBtn.classList.remove("active");

        const btnText = categoriesBtn.querySelector("span");
        if (btnText) {
          btnText.textContent = categoryName;
        }
      });
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderRecommendations();
  initCategoriesDropdown();
});

window.recommendationsData = recommendationsData;
window.renderRecommendations = renderRecommendations;
