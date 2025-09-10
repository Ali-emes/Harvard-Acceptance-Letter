let confettiContainer = null;

tsParticles.load({
    id: "tsparticles",
    options: {
        fullScreen: { zIndex: 1 },
        particles: {
            color: { value: ["#A51C30", "#C4961A", "#000000"] },
            move: {
                direction: "bottom",
                enable: true,
                outModes: { default: "out" },
                size: true,
                speed: { min: 1, max: 3 },
            },
            number: {
                value: 150,
                density: { enable: true, area: 800 },
            },
            opacity: {
                value: 1,
                animation: {
                    enable: false,
                    startValue: "max",
                    destroy: "min",
                    speed: 0.3,
                    sync: true,
                },
            },
            rotate: {
                value: { min: 0, max: 360 },
                direction: "random",
                move: true,
                animation: { enable: true, speed: 60 },
            },
            tilt: {
                direction: "random",
                enable: true,
                move: true,
                value: { min: 0, max: 360 },
                animation: { enable: true, speed: 60 },
            },
            shape: {
                type: ["square", "image"],
                options: {
                    image: [
                        {
                            src: "logo1.png",
                            width: 32,
                            height: 32,
                            particles: {
                                size: { value: 5 }
                            }
                        }
                    ]
                }
            },
            size: { value: { min: 2, max: 4 } },
            roll: {
                darken: { enable: true, value: 30 },
                enlighten: { enable: true, value: 30 },
                enable: true,
                speed: { min: 15, max: 25 }
            },
            wobble: {
                distance: 30,
                enable: true,
                move: true,
                speed: { min: -15, max: 15 }
            }
        }
    }
}).then((container) => {
    confettiContainer = container;

    // ✅ After 5 seconds, stop new confetti and start fade out
    setTimeout(() => {
        container.options.particles.number.value = 0; // stop spawning new ones
        container.refresh(); // IMPORTANT: you must call refresh() to apply the change!

        // Make existing particles fade naturally
        container.options.particles.opacity.animation = {
            enable: true,
            speed: 0.5,
            startValue: "max",
            destroy: "min",
            sync: false
        };
        container.refresh(); // refresh again to apply the fade-out
    }, 8000);
});
