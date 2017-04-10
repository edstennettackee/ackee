/* Particles.js  */

/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 90,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#000000",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);


/*
 * Canvas Based Material Design Button
 * 2015 by Kevin Gimbel <http://kevingimbel.com>
 */

function drawCircle(data) {
  var canvas = event.target;
  canvas.width =  150;
  canvas.height =  50;
  var context = canvas.getContext('2d');
	var centerX = data.X || canvas.width / 2;
  var centerY =  data.Y || canvas.height / 2;
  var radius = data.radius || 70;
  var i = 1;
  var iterations = 25;
  var resetColor = data.bg || '#fff';
  /*
   * This animation will be repeated until i is bigger than 50 
   */
  var makeCircle = function() {    
    context.beginPath();
    context.arc(centerX, centerY, radius + (i * 10), 0, 2 * Math.PI, false);
    context.fillStyle = data.color || 'green';
    context.fill();
    
    if(i === iterations) {
    	context.fillStyle = resetColor;
    	context.fill();
  	}
    
    if(i++ < iterations) {
       window.requestAnimationFrame(makeCircle);
    }
  }
  window.requestAnimationFrame(makeCircle);
}

/*
 * Function to shade or blend colors.
 * via http://stackoverflow.com/a/13542669
 * I've no idea what exactly happens here to be honest. 
 */
function shadeBlend(p,c0,c1) {
    var n=p<0?p*-1:p,u=Math.round,w=parseInt;
    if(c0.length>7){
        var f=c0.split(","),t=(c1?c1:p<0?"rgb(0,0,0)":"rgb(255,255,255)").split(","),R=w(f[0].slice(4)),G=w(f[1]),B=w(f[2]);
        return "rgb("+(u((w(t[0].slice(4))-R)*n)+R)+","+(u((w(t[1])-G)*n)+G)+","+(u((w(t[2])-B)*n)+B)+")"
    }else{
        var f=w(c0.slice(1),16),t=w((c1?c1:p<0?"#000000":"#FFFFFF").slice(1),16),R1=f>>16,G1=f>>8&0x00FF,B1=f&0x0000FF;
        return "#"+(0x1000000+(u(((t>>16)-R1)*n)+R1)*0x10000+(u(((t>>8&0x00FF)-G1)*n)+G1)*0x100+(u(((t&0x0000FF)-B1)*n)+B1)).toString(16).slice(1)
    }
}

/*
 * turn rgb into a hex string. Taken from SO.
 * via http://stackoverflow.com/a/5624139
 */
function rgbToHex(rgb) {
  var r,g,b;
  if(typeof rgb === 'string') {
    // match all numbers inside the RGB string.
    rgb = rgb.match(/\d+/g);
   	r = +rgb[0];
    g = +rgb[1];
    b = +rgb[2];
  } else {
    r = rgb.r;
    g = rgb.g;
    b = rgb.b;
  }
  color = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  return color;
}

document.addEventListener('click', function(event) {
  // check if this click is on a canvas
  var isCanvas = (event.toElement.nodeName.toLowerCase() === 'canvas');
  // and see if it's a canvas with the class md-button!
  var isMdButtonCanvas = (event.toElement.classList.toString().indexOf('md-button-canvas') > -1);
  
  if(isCanvas && isMdButtonCanvas) {
    // prevent default only for testing!
    event.preventDefault();
    // If this is one of the canvas button, draw the circle!
    var styles = window.getComputedStyle(event.target.parentNode);
  	var bgColor = rgbToHex(styles['background-color']);
    console.log(bgColor);
  	drawCircle({
      el: event.target,
      X: event.offsetX,
      Y: event.offsetY,
      bg: bgColor,
      color: shadeBlend(-0.08,bgColor),
      radius: 15
    });
  }
});

console.log("Hello");