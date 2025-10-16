document.addEventListener('DOMContentLoaded', () => {
            const navButtons = document.querySelectorAll('.nav-btn');
            const contentSections = document.querySelectorAll('.content-section');

            // Function to show the selected section and hide others
            const showSection = (targetId) => {
                contentSections.forEach(section => {
                    section.classList.remove('active');
                });
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.classList.add('active');
                }

                // Update navigation button active state
                navButtons.forEach(btn => {
                    if (btn.getAttribute('data-target') === targetId) {
                        btn.classList.add('active');
                        btn.classList.add('shadow-inner'); /* Visual feedback */
                    } else {
                        btn.classList.remove('active');
                        btn.classList.remove('shadow-inner');
                    }
                });
            };

            // Event listener for the main navigation buttons (Kits, About, Contact/Text)
            navButtons.forEach(button => {
                button.addEventListener('click', (e) => {
                    const targetId = e.currentTarget.getAttribute('data-target');
                    showSection(targetId);
                    window.scrollTo(0, 0); // Scroll to top when switching main views
                });
            });

            // Initial setup: Ensure the "Kits" section is active
            showSection('kits');

            // Handle anchor links inside the Kits section (smooth scroll)
            document.querySelectorAll('#kits .nav-button').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    const href = this.getAttribute('href');
                    if (href && href.startsWith('#')) {
                        e.preventDefault();
                        const target = document.querySelector(href);
                        if (target) {
                            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                    }
                });
            });

            // Cart click feedback
            document.querySelector('.cart').addEventListener('click', () => {
                alert('Opening the shopping cart...');
            });
        });
    </script>
</body>
</html>
