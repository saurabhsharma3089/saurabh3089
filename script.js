// Sample gallery images data
const galleryImages = [
    {
        src: 'images/image4.jpg',
       
   },
    {
        src: 'images/image2.jpg', 
       
    },
    {
        src: 'images/image3.jpg',
       
    },
    {
        src: 'images/image1.jpg',
       
    },
    {   
        src: 'images/image5.jpg',
      
    },
    {
        src: 'images/image6.jpg',
      
    },
    {
        src: 'images/image7.jpg',
    
    },
    {
        src: 'images/image8.jpg',
     
    },
    {
        src: 'images/image9.jpg',
      
    },
    {
        src: 'images/image10.jpg',
       
    },
    {
        src: 'images/image11.jpg',
      
    },
    {
        src: 'images/12.jpg',
      
    },
    {
        src: 'images/image13.jpg',
       
    },
    {
        src: 'images/image14.jpg',
       
    },
    {
        src: 'images/image15.jpg',
       
    },
    {
        src: 'images/image16.jpg',
       
    },
    {
        src: 'images/image17.jpg',
       
    },
    {
        src: 'images/image18.jpg',
       
    },
    {
        src: 'images/image19.jpg',
       
    },
    {
        src: 'images/image20.jpg',
       
    },
    {
        src: 'images/image21.jpg',
       
    },
    {
        src: 'images/image22.jpg',
       
    },
        {
            src: 'images/image23.jpg',
            
        },
        {
            src: 'images/image24.jpg',
            
        },  
        {
            src: 'images/image25.jpg',
            
        },

  
    {
        src: 'images/image26.jpg',
       
    },
    {
        src: 'images/image27.jpg',
       
    },
    {
        src: 'images/image30.jpg',
       
    },
    {
        src: 'images/image29.jpg',
       
    },
    {
        src: 'images/image28.jpg',
       
    },
    {
        src: 'images/image32.jpg',
       
    },
    {
        src: 'images/image33.jpg',
       
    },
    



    
];

const projects = [
    { image: "coffee.jpg", link: "https://coffeeprojectbysaurabh.netlify.app/", name: " Project 1" },
    { image: "amazonclone.jpg", link: "https://amazonclonebysaurabhsharma.netlify.app/", name: "Project 2" },
    { image: "profile.jpg", link: "https://saurabh3089.netlify.app/", name: "Project 3" }
];


// Sample activity data
const activities = [
    {
        title: 'Photography Exhibition📸',
        date: 'March 15, 2024',
        description: 'Participated in a local photography exhibition showcasing my work.'
    },
    {
        title: 'Nature Hike🏞️',
        date: 'March 10, 2024',
        description: 'Explored new trails and captured stunning landscape photos.'
    },
    {
        title: 'Modeling🕴️',
        date: 'March 5, 2024',
        description: 'Modeling for a local fashion brand.'
    },
 
];


const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
menuOpenButton.addEventListener("click", () => {
  // Toggle mobile menu visibility
  document.body.classList.toggle("show-mobile-menu");
});
// Close menu when the close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click());
// Close menu when nav link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (document.body.classList.contains('show-mobile-menu')) {
            menuCloseButton.click();
        }
    });
});


// Function to populate gallery
function populateGallery() {
    const galleryGrid = document.querySelector('.gallery-grid');
    
    galleryImages.forEach(image => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        
        galleryItem.innerHTML = `
            <img src="${image.src}" alt="${image.title}">
            <div class="gallery-item-info">

            </div>
        `;
        
        galleryGrid.appendChild(galleryItem);
    });
}

// Function to populate activity timeline
function populateActivity() {
    const activityTimeline = document.querySelector('.activity-timeline');
    
    activities.forEach(activity => {
        const activityItem = document.createElement('div');
        activityItem.className = 'activity-item';
        
        activityItem.innerHTML = `
            <h3>${activity.title}</h3>
            <div class="date">${activity.date}</div>
            <p>${activity.description}</p>
        `;
        
        activityTimeline.appendChild(activityItem);
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.8)';
        navbar.style.boxShadow = 'none';
    }
});

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    populateGallery();
    populateActivity();
}); 
const audio = document.getElementById('backgroundMusic');
const volumeControlBtn = document.getElementById('volumeControl');

document.addEventListener('DOMContentLoaded', () => {
    audio.volume = 0.5; // Default volume
    audio.play().catch(error => {
        console.log("Autoplay blocked. User interaction needed.");
    });
});

volumeControlBtn.addEventListener('click', () => {
    if (audio.muted) {
        // If muted, unmute and set volume to 50%
        audio.muted = false;
        audio.volume = 0.5;
        volumeControlBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
    } else if (audio.volume > 0.5) {
        // Lower the volume if it's above 50%
        audio.volume = 0.3;
        volumeControlBtn.innerHTML = '<i class="fas fa-volume-down"></i>';
    } else if (audio.volume > 0) {
        // Mute if volume is low
        audio.volume = 0;
        audio.muted = true;
        volumeControlBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
    } else {
        // Reset to full volume
        audio.muted = false;
        audio.volume = 1;
        volumeControlBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
    }
});
const container = document.getElementById("projects");

// Loop through projects and add them to the page
projects.forEach(project => {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");

    const projectLink = document.createElement("a");
    projectLink.href = project.link;
    projectLink.target = "_blank";

    const projectImg = document.createElement("img");
    projectImg.src = project.image;
    projectImg.alt = project.name;

    const projectName = document.createElement("p");
    projectName.textContent = project.name;
    projectLink.href = project.link;
    // projectLink.target = "_blank";

    projectLink.appendChild(projectImg);
    projectDiv.appendChild(projectLink);
    projectLink.appendChild(projectName);
    container.appendChild(projectDiv);
});












