
        document.addEventListener('DOMContentLoaded', (event) => {
            const timelineSpots = document.querySelectorAll('.timeline .spot');
            const eventSummaries = document.querySelectorAll('.event-summary');
            const firstSummary = document.getElementById('event1-summary');

            // 1. Initial State: Show the first event summary on load
            if (firstSummary) {
                firstSummary.style.display = 'block';
                // Add a class to the first spot to indicate it's active/selected
                if (timelineSpots.length > 0) {
                    timelineSpots[0].classList.add('active-spot');
                }
            }

            // 2. Add mouseenter event to each timeline spot
            timelineSpots.forEach((spot) => {
                spot.addEventListener('mouseenter', function() {
                    let eventId = this.getAttribute('data-event');
                    
                    // Hide all summaries
                    eventSummaries.forEach((summary) => {
                        summary.style.display = 'none';
                    });
                    
                    // Remove active class from all spots
                    timelineSpots.forEach((s) => {
                        s.classList.remove('active-spot');
                    });
                    
                    // Show the corresponding summary
                    const targetSummary = document.getElementById(eventId + '-summary');
                    if (targetSummary) {
                        targetSummary.style.display = 'block';
                    }
                    
                    // Add active class to the current spot (optional, but good for visual feedback)
                    this.classList.add('active-spot');
                });
            });
        });
