var emoji = document.getElementById('emoji');
var mood = document.getElementById('mood');
var slider = document.getElementById('range');

        slider.oninput = function () {
            var value = parseInt(this.value);

            if (value <= 20)
             {
                emoji.innerHTML = '&#128525;'; 
                mood.innerHTML = 'Love';
             } 

            else if (value > 20 && value <= 40)
             {
                emoji.innerHTML = '&#128526;';
                mood.innerHTML = 'Aggressive';
             }

              else if (value > 40 && value <= 60) {
                emoji.innerHTML = '&#128520;';
                mood.innerHTML = 'Attitude';
             }

              else if (value > 60 && value <= 80) {
                emoji.innerHTML = '&#128564;'; 
                mood.innerHTML = 'Sleepy';
             } 


             else if (value > 80 && value <= 100) {
                emoji.innerHTML = '&#128514;'; 
                mood.innerHTML = 'Happy';
             }
        };