let renderRamen = (menuItem) =>{
    let menu = document.getElementById('ramen-menu');
    let ol = document.createElement('ol');
    let li = document.createElement('li');
    let img = document.createElement('img');

    // console.log(menuItem.image)
    img.src = menuItem.image;

    menu.append(li);
    li.append(img)

    let createRamen = () => {
        let details = document.getElementById('ramen-detail')
        let img = document.querySelector('#ramen-detail img')
        let name = document.querySelector('#ramen-detail h2')
        let restaurant= document.querySelector('#ramen-detail h3')
        let ratingNum = document.getElementById('rating-display')
        let ratingComment = document.getElementById('comment-display')

        console.log(details)
        
        img.src = menuItem.image;
        name.innerText = menuItem.name
        restaurant.innerText = menuItem.restaurant
        ratingNum.innerText = menuItem.rating
        ratingComment.innerText = menuItem.comment
    }

    img.addEventListener('click', createRamen)
}

let ramenForm = document.getElementById('new-ramen');

ramenForm.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e.target)
    console.log(e.target.name.value)
    console.log(e.target.restaurant.value)
    console.log(e.target.image.value)
    console.log(e.target.rating.value)
    console.log(e.target['new-comment'].value)

    const ramen ={
        name: e.target.name.value,
        restaurant: e.target.restaurant.value,
        image: e.target.image.value,
        rating: e.target.rating.value,
        comment: e.target['new-comment'].value
    }

    renderRamen(ramen);
})



fetch('http://localhost:3000/ramens')
.then(res => res.json())
.then(data => {
    data.forEach(renderRamen);
    
})