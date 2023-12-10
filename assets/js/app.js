// Welcome Script
anime({
    targets: '#weckum2 path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    delay: 2000,
    direction: 'forward',
    loop: false
  });

  // Welcome Script Fill
  setTimeout(function() {
    // Find the SVG element by its class
    var svgElements = document.getElementsByClassName("weckum-2");

    // Loop through all elements with the specified class
    for (var i = 0; i < svgElements.length; i++) {
        // Change the fill color from "none" to "#d74c4e"
        svgElements[i].style.fill = "#d74c4e";
    }
}, 2500); // 2000 milliseconds (2 seconds)


// Bouncing Gumballs
tsParticles.load("tsparticles", {
    detectRetina: true,
    fpsLimit: 60,
    interactivity: {
      detectsOn: "canvas",
      events: {
        onClick: {
          enable: true,
          mode: "push"
        },
        onDiv: {
          elementId: "repulse-div",
          enable: false,
          mode: "repulse"
        },
      
        resize: true
      },
      modes: {
        bubble: {
          distance: 400,
          duration: 2,
          opacity: 1,
          size: 40,
          speed: 3
        },
        connect: {
          distance: 80,
          lineLinked: {
            opacity: 0.5
          },
          radius: 60
        },
        grab: {
          distance: 400,
          lineLinked: {
            opacity: 1
          }
        },
        push: {
          quantity: 4
        },
        remove: {
          quantity: 2
        },
        repulse: {
          distance: 200,
          duration: 0.4
        }
      }
    },
    particles: {
      color: {
        value: "#ffffff"
      },
      lineLinked: {
        blink: false,
        color: "#000",
        consent: false,
        distance: 150,
        enable: false,
        opacity: 0,
        width: 0
      },
      rotate: {
        value: 0,
        random: true,
        direction: "clockwise",
        animation: {
          enable: true,
          speed: 5,
          sync: false
        }
      },
      move: {
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        },
        bounce: false,
        direction: "none",
        enable: true,
        outMode: "bounce",
        random: false,
        speed: 2,
        straight: false
      },
      number: {
        density: {
          enable: true,
          area: 800
        },
        limit: 0,
        value: 80
      },
      opacity: {
        animation: {
          enable: false,
          minimumValue: 0.1,
          speed: 1,
          sync: false
        },
        random: false,
        value: 0.8
      },
      shape: {
        character: {
          fill: false,
          font: "Verdana",
          style: "",
          value: "*",
          weight: "400"
        },
        image: [
          {
            src: "/Users/berkleybenton/Documents/Creative/CODE/benton_christmas_card/assets/imgs/gold snowflake small.png",
            width: 32,
            height: 32
          },
          {
            src: "/Users/berkleybenton/Documents/Creative/CODE/benton_christmas_card/assets/imgs/snowflake dark green.png",
            width: 38,
            height: 38
          },
          {
            src: "/Users/berkleybenton/Documents/Creative/CODE/benton_christmas_card/assets/imgs/snowflake green small.png",
            width: 22,
            height: 22
          },
          {
            src: "/Users/berkleybenton/Documents/Creative/CODE/benton_christmas_card/assets/imgs/snowflake green.png",
            width: 38,
            height: 38
          },
          {
            src: "/Users/berkleybenton/Documents/Creative/CODE/benton_christmas_card/assets/imgs/large gold snowflake.png",
            width: 38,
            height: 38
          },
          {
            src: "/Users/berkleybenton/Documents/Creative/CODE/benton_christmas_card/assets/imgs/snowflake red small.png",
            width: 22,
            height: 22
          },
          {
            src: "/Users/berkleybenton/Documents/Creative/CODE/benton_christmas_card/assets/imgs/snowflake tan.png",
            width: 38,
            height: 38
          },
          
        ],
        polygon: {
          nb_sides: 5
        },
        stroke: {
          color: "#000000",
          width: 0
        },
        type: "image"
      },
      size: {
        animation: {
          enable: false,
          minimumValue: 0.1,
          speed: 40,
          sync: false
        },
        random: false,
        value: 16
      }
    },
    polygon: {
      draw: {
        enable: false,
        lineColor: "#ffffff",
        lineWidth: 0.5
      },
      move: {
        radius: 10
      },
      scale: 1,
      type: "none",
      url: ""
    }
  });
