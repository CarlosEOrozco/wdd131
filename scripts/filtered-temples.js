document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.getElementById('year');
    const lastModifiedSpan = document.getElementById('last-modified');
    const hamburgerButton = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');
    const gallery = document.querySelector('.gallery');

    const temples = [
        {
            templeName: "Aba Nigeria",
            location: "Aba, Nigeria",
            dedicated: "2005, August, 7",
            area: 11500,
            imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
            templeName: "Manti Utah",
            location: "Manti, Utah, United States",
            dedicated: "1888, May, 21",
            area: 74792,
            imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
            templeName: "Payson Utah",
            location: "Payson, Utah, United States",
            dedicated: "2015, June, 7",
            area: 96630,
            imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
        {
            templeName: "Yigo Guam",
            location: "Yigo, Guam",
            dedicated: "2020, May, 2",
            area: 6861,
            imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        },
        {
            templeName: "Washington D.C.",
            location: "Kensington, Maryland, United States",
            dedicated: "1974, November, 19",
            area: 156558,
            imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
        },
        {
            templeName: "Lima Perú",
            location: "Lima, Perú",
            dedicated: "1986, January, 10",
            area: 9600,
            imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
        },
        {
            templeName: "Mexico City Mexico",
            location: "Mexico City, Mexico",
            dedicated: "1983, December, 2",
            area: 116642,
            imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
        },
        {
            templeName: "Tokyo Japan",
            location: "Tokyo, Japan",
            dedicated: "1980, October, 27",
            area: 52490,
            imageUrl:
            "https://www.churchofjesuschrist.org/imgs/97b5478acf438f4cd6320fd9b4b17051ea281990/full/1280%2C/0/default"
        },
        {
            templeName: "Paris France",
            location: "Le Chesnay, France",
            dedicated: "2017, May, 21",
            area: 44000,
            imageUrl:
            "https://www.churchofjesuschrist.org/imgs/76b9cf4bbdfaa0c5ac83e1ad129854da057c37d9/full/1280%2C/0/default"
        }
    ];

    // Function to display temples
    const displayTemples = (filteredTemples) => {
        gallery.innerHTML = "";
        filteredTemples.forEach(temple => {
            const templeCard = document.createElement('figure');
            templeCard.innerHTML = `
                <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
                <figcaption>
                    <h3>${temple.templeName}</h3>
                    <p><strong>Location:</strong> ${temple.location}</p>
                    <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                    <p><strong>Size:</strong> ${temple.area.toLocaleString()} sq ft</p>
                </figcaption>
            `;
            gallery.appendChild(templeCard);
        });
    };

    // Display all temples by default
    displayTemples(temples);

    // Filter temples based on navigation click
    navMenu.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            const filter = e.target.getAttribute('data-filter');
            let filteredTemples;
            switch (filter) {
                case 'old':
                    filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
                    break;
                case 'new':
                    filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
                    break;
                case 'large':
                    filteredTemples = temples.filter(temple => temple.area > 90000);
                    break;
                case 'small':
                    filteredTemples = temples.filter(temple => temple.area < 10000);
                    break;
                case 'all':
                default:
                    filteredTemples = temples;
                    break;
            }
            displayTemples(filteredTemples);
            e.preventDefault();
        }
    });

    // Set current year
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;

    // Set last modified date
    const lastModifiedDate = new Date(document.lastModified);
    lastModifiedSpan.textContent = lastModifiedDate.toLocaleDateString();

    // Toggle hamburger menu
    hamburgerButton.addEventListener('click', () => {
        navMenu.classList.toggle('show');
        if (navMenu.classList.contains('show')) {
            hamburgerButton.textContent = '✖';
        } else {
            hamburgerButton.textContent = '☰';
        }
    });
});
