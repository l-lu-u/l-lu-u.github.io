document.addEventListener("DOMContentLoaded", function() {
    
    // Helper to create a smooth, closed organic path
    function generateOrganicContour(radius, jitter, seed) {
        const points = [];
        const numPoints = Math.floor(Math.random() * (18 - 8) + 8); // Enough for detail, few enough to stay smooth
        
        // 1. Generate random points in a circle with jitter
        for (let i = 0; i < numPoints; i++) {
            let angle = (i / numPoints) * (2 * Math.PI);
            // Use a bit of Math.sin/cos with seed to make layers look related
            let dynamicJitter = (Math.sin(i + seed) * jitter);
            let r = radius + dynamicJitter;
            points.push({
                x: r * Math.cos(angle),
                y: r * Math.sin(angle)
            });
        }

        // 2. Build the SVG path using Quadratic Curves (Q)
        // find the midpoint between points to use as the curve anchor
        let d = `M ${(points[0].x + points[numPoints - 1].x) / 2},${(points[0].y + points[numPoints - 1].y) / 2}`;
        
        for (let i = 0; i < numPoints; i++) {
            let next = (i + 1) % numPoints;
            let midX = (points[i].x + points[next].x) / 2;
            let midY = (points[i].y + points[next].y) / 2;
            // Q [control point] [end point]
            d += ` Q ${points[i].x},${points[i].y} ${midX},${midY}`;
        }
        return d + "Z";
    }

    const posts = document.querySelectorAll('.post-entry');
    
    posts.forEach((post, index) => {
        const shapeContainer = post.querySelector('.organic-shape');
        const seed = index * 10; // Ensures each post has a unique but stable shape
        
        let svgContent = `<svg viewBox="-150 -150 300 300" xmlns="http://www.w3.org/2000/svg">`;
        
        // Draw 4 layers of contours
        // We decrease radius AND decrease jitter for the "peak" (inner circles)
        const layers = [
            { rad: 120, jit: 25, op: 1.0 },
            // { rad: 95,  jit: 20, op: 0 },
            // { rad: 70,  jit: 15, op: 0 },
            // { rad: 45,  jit: 10, op: 0 } 
        ];

        layers.forEach((layer) => {
            const pathData = generateOrganicContour(layer.rad, layer.jit, seed);
            svgContent += `
                <path d="${pathData}" 
                      fill="white" 
                      stroke="black" 
                      stroke-width="1" 
                      opacity="${layer.op}" 
                      class="contour-line" />`;
        });

        svgContent += `</svg>`;
        shapeContainer.innerHTML = svgContent;
        
        const imageUrl = post.getAttribute('data-image');
        console.log(imageUrl);
        console.log(window.siteConfig.baseUrl);
        const hoverImg = document.createElement('img');
        hoverImg.className = 'hover-preview-image';
        if (imageUrl!== 'none' ) {
            hoverImg.src = window.siteConfig.baseUrl + imageUrl;;
            post.prepend(hoverImg);
        } 
        
        post.addEventListener('mouseenter', () => {
            hoverImg.style.display = 'block';
            hoverImg.style.transform = 'translate(-50%, -50%) scale(1.1)';
            const subtitle = post.querySelector('.post-subtitle');
            subtitle.style.display = 'block';
            post.style.zIndex = "10"; // Bring hovered item to front
        });

        post.addEventListener('mouseleave', () => {
            hoverImg.style.display = 'none';
            hoverImg.style.transform = 'translate(-50%, -50%) scale(1)';
            const subtitle = post.querySelector('.post-subtitle');
            subtitle.style.display = 'none';
            post.style.zIndex = "1";
        });
    });
});