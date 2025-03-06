document.addEventListener("DOMContentLoaded", function() {
    const projectCards = document.querySelectorAll(".project-card");
    const modalOverlay = document.getElementById("modal-overlay");
    const modalBody = document.getElementById("modal-body");
    const closeButton = document.getElementById("close-button");
  
    const projectDetails = {
      project1: {
        title: "Project One",
        description: "A cool open-source project tackling problem X. Built with Y, it aims to do Z.",
        techStack: ["JavaScript", "Python", "Docker"],
        githubUrl: "https://github.com/fossclub/project1",
        demoUrl: "https://demo.project1.com",
        contributors: ["Alex Smith", "Taylor Jones"],
        screenshots: [
          "assets/projects/project1-1.jpg",
          "assets/projects/project1-2.jpg"
        ],
        status: "Active Development"
      },
      project2: {
        title: "Project Two",
        description: "Another innovative project focusing on collaboration.",
        techStack: ["React", "Node.js", "MongoDB"],
        githubUrl: "https://github.com/fossclub/project2",
        demoUrl: "https://demo.project2.com",
        contributors: ["Jordan Brown", "Morgan Lee"],
        screenshots: [
          "assets/projects/project2-1.jpg",
          "assets/projects/project2-2.jpg"
        ],
        status: "Beta Testing"
      },
      project3: {
        title: "Project Three",
        description: "A social good initiative that leverages open-source to help communities around the globe."
      }
    };
  
    function createProjectCard(projectKey, details) {
      return `
        <div class="project-card" data-project="${projectKey}">
          <div class="project-card-preview">
            <img src="${details.screenshots[0]}" alt="${details.title}">
            <h3>${details.title}</h3>
            <div class="tech-stack">
              ${details.techStack.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
          </div>
          <div class="project-card-expanded">
            <div class="project-details">
              <p>${details.description}</p>
              <div class="project-meta">
                <div class="status">Status: ${details.status}</div>
                <div class="contributors">
                  Contributors: ${details.contributors.join(', ')}
                </div>
              </div>
              <div class="project-links">
                <a href="${details.githubUrl}" class="github-link" target="_blank">View on GitHub</a>
                <a href="${details.demoUrl}" class="demo-link" target="_blank">Live Demo</a>
              </div>
            </div>
            <div class="project-gallery">
              ${details.screenshots.map(src => `
                <img src="${src}" alt="Project Screenshot" class="gallery-img">
              `).join('')}
            </div>
          </div>
        </div>
      `;
    }
  
    // Handle project card clicks
    document.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('click', function(e) {
        // Don't trigger card click if clicking on a link
        if (!e.target.closest('a')) {
          const githubLink = this.querySelector('.github-link');
          if (githubLink) {
            window.open(githubLink.href, '_blank');
          }
        }
      });
    });
  
    // Close expanded cards when clicking outside
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.project-card')) {
        document.querySelectorAll('.project-card.expanded')
          .forEach(card => card.classList.remove('expanded'));
      }
    });
  
    // Dynamic project loading
    const projectsContainer = document.querySelector('.projects-grid');
    if (projectsContainer) {
      projectsContainer.innerHTML = Object.entries(projectDetails)
        .map(([key, details]) => createProjectCard(key, details))
        .join('');
    }
  
    projectCards.forEach(card => {
      card.addEventListener("click", () => {
        const projectKey = card.getAttribute("data-project");
        const details = projectDetails[projectKey];
        if (details) {
          modalBody.innerHTML = `<h2>${details.title}</h2><p>${details.description}</p>`;
        }
        modalOverlay.classList.add("show");
      });
    });
  
    closeButton.addEventListener("click", () => {
      modalOverlay.classList.remove("show");
    });
  
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove("show");
      }
    });

    // Events handling
    const events = {
        event1: {
            title: "Intro to Open Source",
            date: "March 25, 2025",
            time: "2:00 PM - 4:00 PM",
            location: "Main Hall",
            description: "Learn how to contribute to FOSS projects. Perfect for beginners.",
            speakers: ["Alex Smith", "Taylor Jones"],
            topics: ["Git Basics", "Pull Requests", "Code Review"],
            registerUrl: "#",
            type: "workshop",
            capacity: 50,
            currentRegistrations: 32
        },
        event2: {
            title: "Open-Source Hackathon",
            date: "April 10 - April 12, 2025",
            time: "48 Hours",
            location: "Innovation Lab",
            description: "A 48-hour hackathon where teams collaborate on community-driven projects.",
            prizes: ["$1000 First Prize", "$500 Second Prize", "$250 Third Prize"],
            sponsors: ["TechCorp", "DevHub", "OpenSource Inc"],
            registerUrl: "#",
            type: "hackathon",
            capacity: 100,
            currentRegistrations: 75
        }
        // Add more events...
    };

    function createEventCard(eventKey, details) {
        const progressPercentage = (details.currentRegistrations / details.capacity) * 100;
        return `
            <div class="event-card ${details.type}" data-event="${eventKey}">
                <div class="event-header">
                    <div class="event-type-badge">${details.type}</div>
                    <h3>${details.title}</h3>
                    <div class="event-meta">
                        <span class="event-date">${details.date}</span>
                        <span class="event-time">${details.time}</span>
                    </div>
                </div>
                <div class="event-preview">
                    <p>${details.description}</p>
                    <div class="capacity-meter">
                        <div class="capacity-fill" style="width: ${progressPercentage}%"></div>
                        <span>${details.currentRegistrations}/${details.capacity} registered</span>
                    </div>
                </div>
                <div class="event-expanded">
                    <div class="event-details">
                        ${details.speakers ? `
                            <div class="speakers-section">
                                <h4>Speakers</h4>
                                <ul>${details.speakers.map(speaker => `<li>${speaker}</li>`).join('')}</ul>
                            </div>
                        ` : ''}
                        ${details.topics ? `
                            <div class="topics-section">
                                <h4>Topics</h4>
                                <div class="topics-tags">
                                    ${details.topics.map(topic => `<span class="topic-tag">${topic}</span>`).join('')}
                                </div>
                            </div>
                        ` : ''}
                        ${details.prizes ? `
                            <div class="prizes-section">
                                <h4>Prizes</h4>
                                <ul>${details.prizes.map(prize => `<li>${prize}</li>`).join('')}</ul>
                            </div>
                        ` : ''}
                    </div>
                    <a href="${details.registerUrl}" class="register-button">Register Now</a>
                </div>
            </div>
        `;
    }

    // Event cards expansion
    document.addEventListener('click', function(e) {
        const eventCard = e.target.closest('.event-card');
        if (eventCard && !e.target.closest('.register-button')) {
            eventCard.classList.toggle('expanded');
        }
    });

    // Load events
    const eventsContainer = document.querySelector('.events-grid');
    if (eventsContainer) {
        eventsContainer.innerHTML = Object.entries(events)
            .map(([key, details]) => createEventCard(key, details))
            .join('');
    }

    // Filter functionality for both projects and events
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.dataset.filter;
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const items = document.querySelectorAll('.project-card, .event-card');
            items.forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Search functionality
    const searchInput = document.getElementById('project-search');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const items = document.querySelectorAll('.project-card, .event-card');
            
            items.forEach(item => {
                const title = item.querySelector('h3').textContent.toLowerCase();
                const description = item.querySelector('p').textContent.toLowerCase();
                
                if (title.includes(searchTerm) || description.includes(searchTerm)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }

    // Update the team members data structure
    const teamStructure = {
        leader: {
            name: "Alex Smith",
            role: "Club President",
            image: "assets/team/alex.jpg",
            bio: "Leading FOSS initiatives with passion and innovation",
            github: "https://github.com/alexsmith",
            linkedin: "https://linkedin.com/in/alexsmith"
        },
        heads: {
            technical: {
                name: "Taylor Jones",
                role: "Technical Head",
                image: "assets/team/taylor.jpg",
                bio: "Overseeing technical projects and development",
                github: "https://github.com/taylorj"
            },
            documentation: {
                name: "Jordan Brown",
                role: "Documentation Head",
                image: "assets/team/jordan.jpg",
                bio: "Managing project documentation and guides"
            },
            pr: {
                name: "Morgan Lee",
                role: "PR & Outreach Head",
                image: "assets/team/morgan.jpg",
                bio: "Handling community relations and partnerships"
            },
            media: {
                name: "Sam Chen",
                role: "Media Head",
                image: "assets/team/sam.jpg",
                bio: "Leading design and social media initiatives"
            }
        },
        members: {
            technical: [
                {
                    name: "Chris Wilson",
                    role: "Backend Developer",
                    image: "assets/team/chris.jpg"
                },
                {
                    name: "Emma Davis",
                    role: "Frontend Developer",
                    image: "assets/team/emma.jpg"
                }
                // Add more technical team members
            ],
            documentation: [
                {
                    name: "Priya Sharma",
                    role: "Technical Writer",
                    image: "assets/team/priya.jpg"
                }
                // Add more documentation team members
            ],
            pr: [
                {
                    name: "James Kim",
                    role: "Community Manager",
                    image: "assets/team/james.jpg"
                }
                // Add more PR team members
            ],
            media: [
                {
                    name: "Lisa Chen",
                    role: "Graphic Designer",
                    image: "assets/team/lisa.jpg"
                }
                // Add more media team members
            ]
        }
    };

    // Function to create team section HTML
    function createTeamSection() {
        const leaderHTML = `
            <section class="leader-section">
                <h2>Club Leadership</h2>
                <div class="leader-card">
                    <div class="member-image">
                        <img src="${teamStructure.leader.image}" alt="${teamStructure.leader.name}">
                    </div>
                    <div class="member-info">
                        <h3 class="member-name">${teamStructure.leader.name}</h3>
                        <div class="member-role">${teamStructure.leader.role}</div>
                        <p>${teamStructure.leader.bio}</p>
                        <div class="social-links">
                            ${teamStructure.leader.github ? `
                                <a href="${teamStructure.leader.github}" class="social-link" target="_blank">
                                    <i class="fab fa-github"></i>
                                </a>
                            ` : ''}
                            ${teamStructure.leader.linkedin ? `
                                <a href="${teamStructure.leader.linkedin}" class="social-link" target="_blank">
                                    <i class="fab fa-linkedin"></i>
                                </a>
                            ` : ''}
                        </div>
                    </div>
                </div>
            </section>
        `;

        const headsHTML = `
            <section class="heads-section">
                <h2>Department Heads</h2>
                <div class="heads-grid">
                    ${Object.entries(teamStructure.heads).map(([dept, head]) => `
                        <div class="head-card">
                            <div class="member-image">
                                <img src="${head.image}" alt="${head.name}">
                            </div>
                            <div class="member-info">
                                <h3 class="member-name">${head.name}</h3>
                                <div class="member-role">${head.role}</div>
                                <p>${head.bio}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </section>
        `;

        const departmentsHTML = Object.entries(teamStructure.members).map(([dept, members]) => `
            <section class="department-section" id="${dept}-section">
                <h2>${dept.charAt(0).toUpperCase() + dept.slice(1)} Team</h2>
                <div class="members-grid">
                    ${members.map(member => `
                        <div class="member-card">
                            <div class="member-image">
                                <img src="${member.image}" alt="${member.name}">
                            </div>
                            <div class="member-info">
                                <h3 class="member-name">${member.name}</h3>
                                <div class="member-role">${member.role}</div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </section>
        `).join('');

        return leaderHTML + headsHTML + departmentsHTML;
    }

    // Add this to your existing DOMContentLoaded event listener
    const teamContainer = document.querySelector('.team-grid-container');
    if (teamContainer) {
        teamContainer.innerHTML = createTeamSection();
    }

    // Make team cards clickable
    document.querySelectorAll('.team-card').forEach(card => {
        card.addEventListener('click', function(e) {
            // Don't trigger card click if clicking on a social link
            if (!e.target.closest('.social-link')) {
                const githubLink = this.querySelector('.social-link');
                if (githubLink) {
                    window.open(githubLink.href, '_blank');
                }
            }
        });
    });
});
  