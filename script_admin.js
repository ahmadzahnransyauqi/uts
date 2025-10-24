document.addEventListener('DOMContentLoaded', () => {
    const sidebarLinks = document.querySelectorAll('.sidebar-nav a');
    const contentSections = document.querySelectorAll('.content-section');
    const pageTitle = document.getElementById('page-title');
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    const mainHeader = document.querySelector('.main-header');

    const showSection = (sectionId) => {
        contentSections.forEach(section => {
            if (section.id === sectionId) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    };

    sidebarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); 

            sidebarLinks.forEach(item => item.classList.remove('active'));
            link.classList.add('active');

            const sectionId = link.dataset.section;
            let sectionName = '';

            const linkSpan = link.querySelector('span');
            if (linkSpan) {
                sectionName = linkSpan.textContent.trim();
            } else {
                sectionName = link.textContent.trim();
            }
            
            if (sectionId === 'dashboard') {
                pageTitle.textContent = 'Dashboard Overview';
            } else {
                pageTitle.textContent = sectionName;
            }

            showSection(sectionId);
        });
    });

    const dashboardLink = document.querySelector('.sidebar-nav a[data-section="dashboard"]');
    if (dashboardLink) {
        dashboardLink.click();
    }
    
    const updateLayoutPadding = () => {
        if (window.innerWidth <= 992 && window.innerWidth > 768) {
            const sidebarWidth = sidebar.offsetWidth;
            mainHeader.style.margin = `-30px -30px 30px -${sidebarWidth}px`;
        } else if (window.innerWidth <= 768) {
             mainHeader.style.margin = `0 0 20px 0`;
        } else {
            mainHeader.style.margin = `-30px -30px 30px -30px`;
        }
    };

    window.addEventListener('resize', updateLayoutPadding);
    updateLayoutPadding(); 
});