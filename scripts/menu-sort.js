const menuContainer = document.getElementById("menu-container");
for (const [categoryTitle, categoryData] of Object.entries(products)) {
    //.title-container
    const titleContainer = document.createElement("div");
    titleContainer.className="title-container";

    const title = document.createElement("h1");
    title.textContent = categoryTitle;
    title.id = categoryData.categoryID;
    titleContainer.appendChild(title);

    const sortNajEvtBtn = document.createElement("button");
    sortNajEvtBtn.textContent = "⬆️ Price";
    sortNajEvtBtn.className = "sort-button";
    titleContainer.appendChild(sortNajEvtBtn);

    const sortNajSkpBtn = document.createElement("button");
    sortNajSkpBtn.textContent = "⬇️ Price";
    sortNajSkpBtn.className = "sort-button";
    titleContainer.appendChild(sortNajSkpBtn);

    menuContainer.appendChild(titleContainer);

    const foodContainer = document.createElement("div");
    foodContainer.className = `food-container ${categoryData.containerClass}`;
    menuContainer.appendChild(foodContainer);

    //grupiranje po podkategorija
    const groupedItems = {};
    categoryData.items.forEach(product => {
        const group = product.podkategorija || "others";
        if (!groupedItems[group]) {
            groupedItems[group] = [];
        }
        groupedItems[group].push(product);
    });

    const renderItems = (itemsByGroup) => {
        foodContainer.innerHTML = "";

        for (const [groupName, items] of Object.entries(itemsByGroup)) {
            if (Object.keys(itemsByGroup).length > 1) {
                const subtitle = document.createElement("h2");
                subtitle.textContent = groupName;
                foodContainer.appendChild(subtitle);
            }

            items.forEach(product => {
                const item = document.createElement("div");
                item.className = "pojadok-item";
                item.setAttribute("data-vege", product.vege);

                if (product.podkategorija === "Non-Alcoholic") {
                    item.classList.add("bezalkoholni");
                }

                item.innerHTML = `
                    <div class="pojadok-item-img">
                        <img src="${product.image}" />
                    </div>
                    <div class="pojadok-item-text">
                        <h6 class="name">${product.name}</h6>
                        <p class="sostojki">${product.sostojki}</p>
                        <p class="cena">${product.cena}</p>
                    </div>
                    <button class="add-to-cart-btn">Add to Cart</button>
                `;

                item.querySelector(".add-to-cart-btn").addEventListener("click", () => {
                    addToCart(product);
                });

                foodContainer.appendChild(item);
            });
        }
    };

    renderItems(groupedItems);

    // sort
    sortNajEvtBtn.addEventListener("click", () => {
        const sortedGroups = {};
        for (const [groupName, items] of Object.entries(groupedItems)) {
            sortedGroups[groupName] = [...items].sort((a, b) => parseFloat(a.cena) - parseFloat(b.cena));
        }
        renderItems(sortedGroups);
    });

    sortNajSkpBtn.addEventListener("click", () => {
        const sortedGroups = {};
        for (const [groupName, items] of Object.entries(groupedItems)) {
            sortedGroups[groupName] = [...items].sort((a, b) => parseFloat(b.cena) - parseFloat(a.cena));
        }
        renderItems(sortedGroups);
    });
}


// vege button
document.getElementById("vegetarian-button").addEventListener("click", function () {
    this.classList.toggle("active");

    const items = document.querySelectorAll(".pojadok-item");
    items.forEach(item => {
        const isVege = item.getAttribute("data-vege") === "true";
        if (isVege) {
            item.classList.toggle("vegetarian-js");
        }
    });
});

//active za scrollmenu
window.addEventListener('scroll', () => {
    const headers = document.querySelectorAll('#menu-container h1');
    const navLinks = document.querySelectorAll('.scrollmenu a');

    let currentID = '';

    headers.forEach((header, index) => {
        const offsetTop = header.offsetTop - 160;
        const nextHeader = headers[index + 1];
        const nextOffset = nextHeader ? nextHeader.offsetTop - 160 : Infinity;

        if (window.scrollY >= offsetTop && window.scrollY < nextOffset) {
            currentID = header.id;
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentID}`) {
            link.classList.add('active');
        }
    });
});