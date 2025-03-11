
    function loadCars() {
        $.get("cars.json", function(data) {
            const carObjects = data.map(car => ({
                    carname: car.carname,
                    price: car.price,
                    image: car.image,
                    description: car.description,
                    details: car.details,
            }));
            displayCars(carObjects);
        })
    }
    
    function displayCars(cars) {
        const carGrid = document.getElementById('car-grid');
        carGrid.innerHTML = '';
    
        cars.forEach(car => {
            const carCard = document.createElement('div');
            carCard.classList.add('car-card');
            carCard.innerHTML = `
                <img src="${car.image}" alt="${car.description}">
                <h2>${car.carname}</h2>
                <p class="price">${car.price}</p>
            `;
    
            carCard.addEventListener('click', () => openCar(car));
            carGrid.appendChild(carCard);
        });
    }
    
    function openCar(car) {
        const box = document.getElementById('car-box');
        document.getElementById('box-image').src = car.image;
        document.getElementById('box-description').textContent = car.carname;
        document.getElementById('box-price').textContent = `Price: ${car.price}`;
        document.getElementById('box-details').textContent = car.details || 'More details not available.';
        box.style.display = 'flex';
    }
    
    function closeCar() {
        document.getElementById('car-box').style.display = 'none';
    }
    
    document.getElementById('car-box').addEventListener('click', (event) => {
        if (event.target.classList.contains('car-box')) {
            closeCar();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === "Escape") {
            closeCar();
        }
    });

    
    document.getElementsByClassName('close-btn')[0].addEventListener('click', closeCar);
    
    window.onload = loadCars;
    