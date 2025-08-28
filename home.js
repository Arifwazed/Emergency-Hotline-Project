console.log('connected')
let callHistoryData = [];

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
// function to count copy
function copyCount(id){
    console.log('Copy clicked');

    const currentCopy = getInnerText('copy-amount');
    console.log(currentCopy);

    const newCopy = currentCopy + 1;
    console.log(newCopy);
    setInnerText('copy-amount',newCopy);
}

// Emergency Call Feature
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
// Police Call Feature
document.getElementById('btn-call-Police').addEventListener('click',function(event){
    event.preventDefault();
    console.log('Police call clicked')

    const currentCoin = getInnerText('coin-amount');
    console.log('coin is: ',currentCoin);

    if(currentCoin >=20 ){
        alert('📞 Police Helpline 999');
        const newCoin = currentCoin - 20;
        console.log(newCoin);
        setInnerText('coin-amount',newCoin);
        // taking call input and it's date
        const data = {
            name: 'Police Helpline Number',
            number: 999,
            date: new Date().toLocaleTimeString()
        }
        callHistoryData.push(data);
        countCallHistory('btn-call-Police')
    }
    else{
        alert("You don't have enough coins. You need at least 20 coins to make a call.")
    }
})
// Fire Service Call Feature
document.getElementById('btn-call-fire-service').addEventListener('click',function(event){
    event.preventDefault();
    console.log('Fire Service clicked')

    const currentCoin = getInnerText('coin-amount');
    console.log('coin is: ',currentCoin);

    if(currentCoin >=20 ){
        alert('📞 Fire Service 999');
        const newCoin = currentCoin - 20;
        console.log(newCoin);
        setInnerText('coin-amount',newCoin);
        // taking call input and it's date
        const data = {
            name: 'Fire Service Number',
            number: 999,
            date: new Date().toLocaleTimeString()
        }
        callHistoryData.push(data);
        countCallHistory('btn-call-fire-service')
    }
    else{
        alert("You don't have enough coins. You need at least 20 coins to make a call.")
    }
})
// Ambulance Service Call Feature
document.getElementById('btn-call-ambulance-service').addEventListener('click',function(event){
    event.preventDefault();
    console.log('Ambulance Service clicked')

    const currentCoin = getInnerText('coin-amount');
    console.log('coin is: ',currentCoin);

    if(currentCoin >=20 ){
        alert('📞 Ambulance Service 1994-999999');
        const newCoin = currentCoin - 20;
        console.log(newCoin);
        setInnerText('coin-amount',newCoin);
        // taking call input and it's date
        const data = {
            name: 'Ambulance Service Number',
            number: '1994-999999',
            date: new Date().toLocaleTimeString()
        }
        callHistoryData.push(data);
        countCallHistory('btn-call-ambulance-service')
    }
    else{
        alert("You don't have enough coins. You need at least 20 coins to make a call.")
    }
})
// Women & Child Call Feature
document.getElementById('btn-call-women-child').addEventListener('click',function(event){
    event.preventDefault();
    console.log('Women & Child clicked')

    const currentCoin = getInnerText('coin-amount');
    console.log('coin is: ',currentCoin);

    if(currentCoin >=20 ){
        alert('📞 Women & Child Helpline 109');
        const newCoin = currentCoin - 20;
        console.log(newCoin);
        setInnerText('coin-amount',newCoin);
        // taking call input and it's date
        const data = {
            name: 'Women & Child Helpline',
            number: 109,
            date: new Date().toLocaleTimeString()
        }
        callHistoryData.push(data);
        countCallHistory('btn-call-women-child')
    }
    else{
        alert("You don't have enough coins. You need at least 20 coins to make a call.")
    }
})
// Anti-Corruption Feature
document.getElementById('btn-call-anti-corruption').addEventListener('click',function(event){
    event.preventDefault();
    console.log('Anti-Corruption clicked')

    const currentCoin = getInnerText('coin-amount');
    console.log('coin is: ',currentCoin);

    if(currentCoin >=20 ){
        alert('📞 Anti-Corruption Helpline 106');
        const newCoin = currentCoin - 20;
        console.log(newCoin);
        setInnerText('coin-amount',newCoin);
        // taking call input and it's date
        const data = {
            name: 'Anti-Corruption Helpline',
            number: 106,
            date: new Date().toLocaleTimeString()
        }
        callHistoryData.push(data);
        countCallHistory('btn-call-anti-corruption')
    }
    else{
        alert("You don't have enough coins. You need at least 20 coins to make a call.")
    }
})
// Electricity Helpline Feature
document.getElementById('btn-call-electricity').addEventListener('click',function(event){
    event.preventDefault();
    console.log('Electricity Helpline clicked')

    const currentCoin = getInnerText('coin-amount');
    console.log('coin is: ',currentCoin);

    if(currentCoin >=20 ){
        alert('📞 Electricity Helpline 16216');
        const newCoin = currentCoin - 20;
        console.log(newCoin);
        setInnerText('coin-amount',newCoin);
        // taking call input and it's date
        const data = {
            name: 'Electricity Helpline',
            number: 16216,
            date: new Date().toLocaleTimeString()
        }
        callHistoryData.push(data);
        countCallHistory('btn-call-electricity')
    }
    else{
        alert("You don't have enough coins. You need at least 20 coins to make a call.")
    }
})
// Brac Helpline Feature
document.getElementById('btn-call-brac').addEventListener('click',function(event){
    event.preventDefault();
    console.log('Brac Helpline clicked')

    const currentCoin = getInnerText('coin-amount');
    console.log('coin is: ',currentCoin);

    if(currentCoin >=20 ){
        alert('📞 Brac Helpline 16445');
        const newCoin = currentCoin - 20;
        console.log(newCoin);
        setInnerText('coin-amount',newCoin);
        // taking call input and it's date
        const data = {
            name: 'Brac Helpline',
            number: 16445,
            date: new Date().toLocaleTimeString()
        }
        callHistoryData.push(data);
        countCallHistory('btn-call-brac')
    }
    else{
        alert("You don't have enough coins. You need at least 20 coins to make a call.")
    }
})
// Bangladesh Railway Helpline Feature
document.getElementById('btn-call-bangladesh-railway').addEventListener('click',function(event){
    event.preventDefault();
    console.log('Bangladesh Railway Helpline clicked')

    const currentCoin = getInnerText('coin-amount');
    console.log('coin is: ',currentCoin);

    if(currentCoin >=20 ){
        alert('📞 Bangladesh Railway Helpline 163');
        const newCoin = currentCoin - 20;
        console.log(newCoin);
        setInnerText('coin-amount',newCoin);
        // taking call input and it's date
        const data = {
            name: 'Bangladesh Railway Helpline',
            number: 163,
            date: new Date().toLocaleTimeString()
        }
        callHistoryData.push(data);
        countCallHistory('btn-call-bangladesh-railway')
    }
    else{
        alert("You don't have enough coins. You need at least 20 coins to make a call.")
    }
})

// clear feature
document.getElementById('btn-clear').addEventListener('click',function(){
    document.getElementById('call-history-container').innerHTML = '';
    callHistoryData = [];
})

// copy feature
const copys = document.querySelectorAll('.btn-copy');
for(const copy of copys){
    copy.addEventListener('click',function(){
        // find roots div of button and text
        let root = this.closest(".card");
        // get the copy text
        let text = root.querySelector(".number").innerText;
        // set to clipboard
        navigator.clipboard.writeText(text)
        .then(function(){
            alert('✅ Number copied: '+ text);
            copyCount('btn-copy-emergency');
        })
        .catch(function(er) {
            console.error("Failed to copy: ", er);
        });
    })
}