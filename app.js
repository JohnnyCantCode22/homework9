$(document).ready(function () {
  const skills = [];
  const projects = [
    {
      title: "Blackbox Web Application Penetration Testing",
      description: "Conducted blackbox assessments on internal web applications to identify authentication bypass, XSS, and insecure session handling vulnerabilities.",
      deadline: new Date("2024-12-13"),
      imageURL: "https://placehold.co/600x200/007bff/ffffff?text=Blackbox+Testing"
    },
    {
      title: "Internal Network Vulnerability Scanning",
      description: "Performed scheduled scans using tools like Nessus and OpenVAS to uncover misconfigurations and exposed services.",
      deadline: new Date("2024-10-31"),
      imageURL: "https://placehold.co/600x200/6c757d/ffffff?text=Internal+Scan"
    },
    {
      title: "Data Analysis Dashboard for Vulnerability Trends",
      description: "Built dashboards to visualize vulnerability data, categorize severity, and prioritize patching.",
      deadline: new Date("2024-10-09"),
      imageURL: "https://placehold.co/600x200/28a745/ffffff?text=Vulnerability+Dashboard"
    },
    {
      title: "Automated Reconnaissance Pipeline for External Assets",
      description: "Integrated tools like amass, nmap, and httpx for recon of external IP ranges and subdomains.",
      deadline: new Date("2024-09-14"),
      imageURL: "https://placehold.co/600x200/f0ad4e/ffffff?text=Recon+Automation"
    },
    {
      title: "Cloud Misconfiguration Assessment Toolkit",
      description: "Developed scripts for detecting open buckets, permissive IAM roles, and cloud misconfigurations.",
      deadline: new Date("2024-08-19"),
      imageURL: "https://placehold.co/600x200/6610f2/ffffff?text=Cloud+Toolkit"
    },
    {
      title: "Social Engineering Simulation Reporting Tool",
      description: "Created a reporting tool to track phishing/vishing test results with Slack and email integration.",
      deadline: new Date("2024-07-29"),
      imageURL: "https://placehold.co/600x200/d63384/ffffff?text=Social+Engineering+Tool"
    }
  ];

  const navItems = ["Skills", "Projects", "Education"];

  navItems.forEach(section => {
    $('#navMenu').append(`<a href="#${section.toLowerCase()}Section">${section}</a> `);
  });

  $('#navMenu a').on('click', function (e) {
    e.preventDefault();
    const target = $($(this).attr('href'));
    $('html, body').animate({ scrollTop: target.offset().top }, 500);
  });

  function renderSkills() {
    $('#skillsList').empty();
    skills.forEach((skill, index) => {
      $('#skillsList').append(`
        <li>
          <span class="skillItem" data-index="${index}">${skill}</span>
          <button class="editSkillBtn" data-index="${index}">Edit</button>
          <button class="deleteSkillBtn" data-index="${index}">Delete</button>
        </li>
      `);
    });
  }

  $('#addSkillBtn').on('click', function () {
    const skill = $('#skillInput').val().trim();
    if (skill && !skills.includes(skill)) {
      skills.push(skill);
      $('#skillInput').val('');
      renderSkills();
    }
  });

  $('#skillInput').on('keydown', function (e) {
    if (e.key === "Enter") {
      $('#addSkillBtn').click();
    } else if (e.key === "Escape") {
      $(this).val('');
    }
  });

  $('#skillsList').on('click', '.editSkillBtn', function () {
    const index = $(this).data('index');
    const newSkill = prompt("Edit skill:", skills[index]);
    if (newSkill && !skills.includes(newSkill)) {
      skills[index] = newSkill;
      renderSkills();
    }
  });

  $('#skillsList').on('click', '.deleteSkillBtn', function () {
    const index = $(this).data('index');
    skills.splice(index, 1);
    renderSkills();
  });

  $('#skillSearch').on('input', function () {
    const query = $(this).val().toLowerCase();
    $('#skillsList li').each(function () {
      const skillText = $(this).find('.skillItem').text().toLowerCase();
      $(this).toggle(skillText.includes(query));
    });
  });

  function renderProjects() {
    $('#projectsContainer').empty();
    for (let i = 0; i < projects.length; i++) {
      $('#projectsContainer').append(`
        <div class="projectCard">
          <img src="${projects[i].imageURL}" alt="${projects[i].title}" />
          <h3>${projects[i].title}</h3>
          <p>${projects[i].description}</p>
          <small>Deadline: ${projects[i].deadline.toDateString()}</small>
        </div>
      `);
    }
  }

  $('#sortProjectsBtn').on('click', function () {
    projects.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
    renderProjects();
  });

  renderProjects();
});
