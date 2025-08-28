console.log('connected')
const callHistoryData = [];

// function to get Innertext
function getInnerText(id){
    const element = document.getElementById(id);
    const elementText = element.innerText;
    const elementTextValue = parseInt(elementText);
    return elementTextValue;
}
// function to set Innertext
function setInnerText(id,value){
    document.getElementById(id).innerText = value;
}

// function to call history features
// document.getElementById('btn-call-emergency').addEventListener('click',function(){
function countCallHistory(id){
const callHistoryContainer = document.getElementById('call-history-container');
callHistoryContainer.innerText = '';
for(const data of callHistoryData){
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="bg-[#FAFAFA] flex p-3 justify-between items-center rounded-xl my-4">
                <div>
                    <h1 class="font-bold">${data.name}</h2>
                    <p class="text-[#5C5C5C]">${data.number}</p>
                </div>
                <div>
                    <p>${data.date}</p>
                </div>
                </div>
    `
    callHistoryContainer.appendChild(div)
}
}
// })

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
    setInnerText('heart-amount',newHeart);
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

// Call Feature
document.getElementById('btn-call-emergency').addEventListener('click',function(event){
    event.preventDefault();
    console.log('emergency call clicked')

    const currentCoin = getInnerText('coin-amount');
    console.log('coin is: ',currentCoin);

    if(currentCoin >=20 ){
        alert('📞 National Emergency 999');
        const newCoin = currentCoin - 20;
        console.log(newCoin);
        setInnerText('coin-amount',newCoin);
        // taking call input and it's date
        const data = {
            name: 'National Emergency Number',
            number: 999,
            date: new Date().toLocaleTimeString()
        }
        callHistoryData.push(data);
        countCallHistory('btn-call-emergency')
    }
    else{
        alert("You don't have enough coins. You need at least 20 coins to make a call.")
    }

    
})
