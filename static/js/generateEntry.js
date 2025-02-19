document.addEventListener("DOMContentLoaded", function() {
    // Function to generate a random path
    function generateRandomPath(seed) {
        let points = Math.floor(Math.random() * (9 - 6 + 1)) + 6;;
        let radius = 90;
        let pathData = [];
        for (let i = 0; i < points; i++) {
            let angle = (i / points) * (2 * Math.PI);
            let x = radius * Math.cos(angle) + Math.random() * 20 - 10;
            let y = radius * Math.sin(angle) + Math.random() * 20 - 10;
            pathData.push(`${x},${y}`);
        }
        return `M${pathData.join('L')}Z`;
    }

    // Function to generate random position within the parent box
    function generateRandomPosition(parentWidth, parentHeight) {
        let x = Math.random() * (parentWidth - 200) - (parentWidth / 2 - 100);
        let y = Math.random() * (parentHeight - 200) - (parentHeight / 2 - 100);
        return { x, y };
    }

    const posts = document.querySelectorAll('.post-entry');
    posts.forEach((post, index) => {
        const shapePath = generateRandomPath(index);
        const position = generateRandomPosition(300, 300);
        const svgElement = `
            <svg viewBox="-100 -100 200 200" xmlns="http://www.w3.org/2000/svg" style="transform: translate(${position.x}px, ${position.y}px);">
                <path fill="white" stroke="black" stroke-width="1" d="${shapePath}" class="svg-path" />
            </svg>`;
        const shapeContainer = post.querySelector('.organic-shape');
        shapeContainer.innerHTML = svgElement;

        // Center the post content within the shape
        const content = post.querySelector('.post-content');
        content.style.position = 'absolute';
        content.style.top = '50%';
        content.style.left = '50%';
        content.style.transform = 'translate(-50%, -50%)';

        // Hover effect
        post.addEventListener('mouseenter', function() {
            const svgPath = post.querySelector('.svg-path');
            svgPath.style.fill = 'black';
            const title = post.querySelector('.post-title');
            title.style.color = 'var(--colour-highlight)';
            const subtitle = post.querySelector('.post-subtitle');
            subtitle.style.display = 'block'; // Show subtitle on hover
        });

        post.addEventListener('mouseleave', function() {
            const svgPath = post.querySelector('.svg-path');
            svgPath.style.fill = 'white';
            const title = post.querySelector('.post-title');
            title.style.color = 'black';
            const subtitle = post.querySelector('.post-subtitle');
            subtitle.style.display = 'none';
        });
    });
});