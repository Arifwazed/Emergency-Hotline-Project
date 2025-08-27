console.log('connected')

// function to get Innertext
function getInnerText(id){
    const element = document.getElementById(id);
    const elementText = element.innerText;
    const elementTextValue = parseInt(elementText);
    return elementTextValue;
}
// function to set Innertext
function setInnerText(value){
    document.getElementById('heart-amount').innerText = value;
}

// Heart Feature
// document.getElementById('btn-heart').addEventListener('click',function(event){
//     event.preventDefault();
//     console.log('Heart clicked');

//     const currentHeart = getInnerText('heart-amount');
//     console.log(currentHeart);

//     const newHeart = currentHeart + 1;
//     console.log(newHeart);
//     setInnerText(newHeart);
// })
// function to count heart
function heartCount(id){
document.getElementById(id).addEventListener('click',function(event){
    event.preventDefault();
    console.log('Heart clicked');

    const currentHeart = getInnerText('heart-amount');
    console.log(currentHeart);

    const newHeart = currentHeart + 1;
    console.log(newHeart);
    setInnerText(newHeart);
})
}
heartCount('btn-heart')
heartCount('btn-heart2')
heartCount('btn-heart3')
heartCount('btn-heart4')
heartCount('btn-heart5')
heartCount('btn-heart6')
heartCount('btn-heart7')
heartCount('btn-heart8')
heartCount('btn-heart9')