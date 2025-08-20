const APP_VERSION = 'v0.1.1-beta';

// Update version displays when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Update sidebar footer version
    const sidebarFooter = document.querySelector('.sidebar-footer p');
    if (sidebarFooter) {
        sidebarFooter.textContent = `24SmartCharts ${APP_VERSION}`;
    }
    
    // Update modal version displays
    const modalTitle = document.getElementById('update-title');
    const modalVersion = document.getElementById('update-version');
    if (modalTitle) {
        modalTitle.textContent = `Update ${APP_VERSION}`;
    }
    if (modalVersion) {
        modalVersion.textContent = `Version: ${APP_VERSION}`;
    }
});

// Export version for other scripts
window.APP_VERSION = APP_VERSION;