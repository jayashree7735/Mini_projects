var emoji = document.getElementById('emoji');
var mood = document.getElementById('mood');
var slidervalue = document.getAnimations('range');

slidervalue.oninput = function()
{
    var value = this.value;

    if(value <= 20)
    {
        emoji.innerHTML = '&#128525;';
        mood.innerHTML = 'Love';
    }

    if(value <= 40)
    {
        emoji.innerHTML = '&#128526;';
        mood.innerHTML = 'Aggresive';
    }

    if(value <= 60)
    {
        emoji.innerHTML = '&#128520;';
        mood.innerHTML = 'Attitude';
    }

    if(value <= 80)
    {
        emoji.innerHTML = '&#128564;';
        mood.innerHTML = 'Sleepy';
    }

    if(value <= 100)
    {
        emoji.innerHTML = '&#128514;';
        mood.innerHTML = 'Happy';
    }
}