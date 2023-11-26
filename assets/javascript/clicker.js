var card        = document.querySelector(".sec_5 .right_side .lower .lower_right .right_photo #menim"),
    text        = document.querySelector(".sec_5 .right_side .lower .lower_right .right_photo #text"),
    text_two    = document.querySelector(".sec_5 .right_side .lower .lower_right .right_photo #text_two")
    links       = document.querySelectorAll('.sec_5 .right_side .lower .lower_left p'),
    link       = document.querySelector('.sec_5 .right_side .lower .lower_left p.second'),
    images      = document.querySelectorAll('.sec_5 .right_side .lower .lower_left p img');

    links.forEach(function(e){
        e.addEventListener('click', function(){ 

            
            if(e.getAttribute("id") == 'first'){
                card.setAttribute('src', "./assets/images/Coverfirst.png");
                text.innerHTML = "jason kwon";
                text_two.innerHTML = "Front-end programmer"
            }else if(e.getAttribute("id") == 'second'){
                card.setAttribute('src', "./assets/images/Coversecond.png");
                text.innerHTML = "alex rose";
                text_two.innerHTML = "UX Designer"
            }else if(e.getAttribute("id") == 'third'){
                card.setAttribute('src', "./assets/images/Coverthird.png");
                text.innerHTML = "lizzie urich";
                text_two.innerHTML = "HR manage";
            }
            
            
        })
    })