const mybutton = document.querySelector('button')
const myCircle = document.querySelector('.circle')
const myBody = document.querySelector('body')
let headerh3 = document.querySelector('header h3')
const myContainer2H4 = document.querySelectorAll('.container_top h4')
const allDiv = document.querySelectorAll('.fb_follow, .fb_likes, .fb_views, .insta_follow, .insta_likes, .insta_views, .twitter_follow, .twitter_likes, .twitter_retweets, .ytb_follow, .ytb_likes, .ytb_views')
const allDivText = document.querySelectorAll('.container_top h4, .container_bot h4, container_top h3, container_bot h3')
const myH4Vert = document.querySelectorAll('.fb_views h4, .insta_likes h4, .insta_views h4, .twitter_retweets h4, .twitter_likes h4')
const myH4Red = document.querySelectorAll('.fb_likes h4, .ytb_likes h4, .ytb_views h4')
let mybackgroundTop = document.querySelector('.background-top')

let isLeft = true

mybutton.addEventListener('click', function(){
   if(isLeft){
        mybackgroundTop.style.backgroundColor = '#f8f9fe'
        myCircle.style.float = 'right'
        myCircle.style.backgroundColor = 'white'
        myBody.style.backgroundColor = 'white'
        myBody.style.color = 'black'
        headerh3.textContent = 'Light Mode'
        headerh3.style.color = 'var(--DesaturatedBlue)'
        mybutton.style.background = 'var(--DesaturatedBlue)'
        mybutton.addEventListener('mouseover', function(){
            mybutton.style.background = 'linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))'
            myheaderh3.style.color = 'var(--DesaturatedBlue)'
        })
        mybutton.addEventListener('mouseout', function(){
            mybutton.style.background = 'var(--DesaturatedBlue)'
        })
        myContainer2H4.forEach(container2h4 => {
            container2h4.style.color = 'var(--DarkGrayishBlue)';
        });
        allDiv.forEach(alldiv => {
            alldiv.style.backgroundColor = 'var(--LightGrayishBlue)'
            alldiv.addEventListener('mouseover', function(){
                alldiv.style.backgroundColor = '#e1e3f0'
            })
            alldiv.addEventListener('mouseout', function(){
                alldiv.style.backgroundColor = 'var(--LightGrayishBlue)'
            })
        });
        myH4Vert.forEach(h4vert => {
            h4vert.style.color = 'var(--LimeGreen)'
        });
        myH4Red.forEach(h4red => {
            h4red.style.color = 'var(--BrightRed)';
        });
        
   }else{
    mybackgroundTop.style.backgroundColor = 'var(--VeryDarkBlue2)'
    myContainer2H4.forEach(container2h4 => {
        if(container2h4.style.color === 'white'){
        container2h4.style.color = 'var(--LightGrayishBlue)'
        }else{
            container2h4.style.color = 'white'
        }
    });
        myCircle.style.float = 'left'
        myBody.style.backgroundColor = 'var(--VeryDarkBlue1)'
        headerh3.textContent = 'Dark Mode'
        myBody.style.color = 'white'
        myCircle.style.backgroundColor = 'var(--DarkDesaturatedBlue)'
        mybutton.addEventListener('mouseover', function(){
            const myheaderh3 = document.querySelector('header h3')
            if(myBody.style.backgroundColor === 'white'){
                myheaderh3.style.color = 'var(--DesaturatedBlue)'
            }else{
                myheaderh3.style.color = 'white'
            }
        })
        mybutton.addEventListener('mouseout', function(){
            const myheaderh3 = document.querySelector('header h3')
            mybutton.style.background = 'linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))'
            myheaderh3.style.color = 'var(--DesaturatedBlue)'
        })

        allDiv.forEach(alldiv => {
            alldiv.style.backgroundColor = 'var(--DarkDesaturatedBlue)'
            alldiv.addEventListener('mouseover', function(){
                alldiv.style.backgroundColor = 'var(--DarkGrayishBlue)'
            })
            alldiv.addEventListener('mouseout', function(){
                alldiv.style.backgroundColor = 'var(--DarkDesaturatedBlue)'
            })

        });
        allDivText.forEach(alldivtext => {
            alldivtext.style.color = 'white'
        });
        myH4Vert.forEach(h4vert => {
            h4vert.style.color = 'var(--LimeGreen)'
        });
        myH4Red.forEach(h4red => {
            h4red.style.color = 'var(--BrightRed)';
        });
   }

   isLeft = !isLeft
})