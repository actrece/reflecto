document.addEventListener('DOMContentLoaded', () => {
    // 1. Select all navigation buttons and all view containers
    const navButtons = document.querySelectorAll('.nav-button');
    const appViews = document.querySelectorAll('.app-view');
    
    // Define the colors based on the CSS:
    const ACTIVE_COLOR = '#ff8c42';      // Orange for the active button
    const NON_ACTIVE_COLOR = '#ffeb95';  // Light Yellow for non-active buttons

    // --- INITIAL SETUP ---
    // This function ensures the correct color is applied on load
    const initializeNavColors = () => {
        navButtons.forEach(btn => {
            if (btn.classList.contains('active')) {
                btn.style.backgroundColor = ACTIVE_COLOR;
            } else {
                btn.style.backgroundColor = NON_ACTIVE_COLOR;
            }
        });
    };

    // Run the initialization
    initializeNavColors();

    // 2. Attach click listeners to all nav buttons
    navButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const targetViewId = event.currentTarget.getAttribute('data-view');

            // --- A. Handle Button State (Remove active from all, add to clicked) ---
            navButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.style.backgroundColor = NON_ACTIVE_COLOR; // Reset color
            });

            // Set the new active button state
            event.currentTarget.classList.add('active');
            event.currentTarget.style.backgroundColor = ACTIVE_COLOR; // Set active color

            // --- B. Handle Content View Visibility ---
            appViews.forEach(view => {
                view.classList.remove('active-view');
                view.classList.add('hidden-view');
            });

            // Show the TARGET content view
            const targetView = document.getElementById(targetViewId);
            if (targetView) {
                targetView.classList.remove('hidden-view');
                targetView.classList.add('active-view');
            }
        });
    });
});