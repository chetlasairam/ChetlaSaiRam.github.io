document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Navigation Toggle ---
    const navbarToggler = document.getElementById('navbar-toggler-btn');
    const navbarMenu = document.getElementById('navbar-menu');

    navbarToggler.addEventListener('click', () => {
        navbarMenu.classList.toggle('active');
    });
    
    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (navbarMenu.classList.contains('active')) {
                navbarMenu.classList.remove('active');
            }
        });
    });


    // --- Project Filtering and Modal ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const modal = document.getElementById('project-modal');
    const closeButton = document.querySelector('.close-button');
    const modalBody = document.getElementById('modal-body');

    // Project Details Data
    const projectDetails = {
        'walking-robot': {
            title: 'Autonomous Walking Robot',
            description: 'This project features a hexapod robot capable of autonomous navigation. It uses various sensors to perceive its environment and avoid obstacles. The core of the project is its complex gait algorithm that ensures stability on uneven terrains.',
            technologies: 'Arduino, C++, Ultrasonic Sensors, Servo Motors',
            image: './img/intro_pic/walkingrobot.jpg',
            link: 'projects/walking_robot_page.html'
        },
        'pain-pointer': {
            title: 'Pain Pointer Device',
            description: 'An IoT device designed for non-verbal patients to communicate the location and intensity of pain to healthcare providers. It features a simple interface and sends real-time data to a central dashboard.',
            technologies: 'ESP32, MicroPython, MQTT, IoT Dashboard',
            image: './img/intro_pic/painpointer.jpg',
            link: 'projects/painpointer.html'
        },
        'smart-switchboard': {
            title: 'Smart Home Switchboard',
            description: 'A retrofittable smart switchboard that allows users to control home appliances remotely via a mobile application. It also supports voice commands through integration with popular voice assistants.',
            technologies: 'Raspberry Pi, Python, Flutter, Firebase',
            image: './img/intro_pic/switchboard.png',
            link: 'projects/smartswitchboard.html'
        },
        'husk-app': {
            title: 'Husk - Real-time Chatting App',
            description: 'A modern, real-time chatting application built with Flutter. It supports one-on-one messaging, group chats, and media sharing, all powered by a scalable backend.',
            technologies: 'Flutter, Dart, Firebase Firestore, Firebase Storage',
            image: './img/intro_pic/husk.png',
            link: 'projects/husk.html'
        },
        'kent-connects': {
            title: 'KentConnects - Social Website',
            description: 'A social networking platform for students of Kent State University to connect, share updates, and find events. It features a news feed, user profiles, and a private messaging system.',
            technologies: 'HTML, CSS, JavaScript, PHP, MySQL',
            image: './img/intro_pic/kentconnects.png',
            link: 'projects/kentconnects.html'
        },
        'face-mask': {
            title: 'Face Mask Detection System',
            description: 'An AI-powered system that uses computer vision to detect whether individuals in a video stream are wearing face masks. This model is optimized for real-time performance on edge devices.',
            technologies: 'Python, OpenCV, TensorFlow, Keras',
            image: './img/intro_pic/facemask.png',
            link: 'projects/facemaskdetection.html'
        },
        'get-dish': {
            title: 'GetDish - Food Delivery App',
            description: 'A complete food delivery application that allows users to browse restaurants, place orders, and track deliveries in real-time. The app focuses on a clean and intuitive user experience.',
            technologies: 'Flutter, Dart, Google Maps API, Stripe API',
            image: './img/intro_pic/getdish.png',
            link: 'projects/getdish.html'
        },
         'sudoku-solver': {
            title: 'Sudoku Solver',
            description: 'A computer vision-based Sudoku solver that can read a Sudoku puzzle from an image, solve it using a backtracking algorithm, and display the solution.',
            technologies: 'Python, OpenCV, NumPy',
            image: './img/intro_pic/sudokusolver.jpg',
            link: 'projects/sudoku_solver.html'
        },
        'hey-arvin': {
            title: 'Hey Arvin - AI Voice Assistant',
            description: 'A personal voice assistant capable of performing tasks like setting reminders, answering questions, and controlling smart home devices, all through voice commands.',
            technologies: 'Python, SpeechRecognition, gTTS, AI APIs',
            image: './img/intro_pic/heyarvin.jpg',
            link: '#' // Add link if available
        }
    };

    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filter = button.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                card.style.display = 'none'; // Hide all cards initially
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block'; // Show only matching cards
                }
            });
        });
    });

    // Modal functionality
    document.querySelectorAll('.btn-view-details').forEach(button => {
        button.addEventListener('click', (e) => {
            const projectId = e.target.getAttribute('data-project-id');
            const details = projectDetails[projectId];
            
            if (details) {
                modalBody.innerHTML = `
                    <img src="${details.image}" alt="${details.title}">
                    <h2>${details.title}</h2>
                    <p>${details.description}</p>
                    <p><strong>Technologies:</strong> ${details.technologies}</p>
                    <a href="${details.link}" target="_blank" class="btn-primary">Visit Project Page</a>
                `;
                modal.style.display = 'block';
            }
        });
    });
    
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.style.display = 'none';
        }
    });

});