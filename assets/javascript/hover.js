var parent = document.querySelector('.sec_4 .left_side');
        var child = document.querySelector(".sec_4 .left_side .link");

        child.addEventListener('mouseover', function(){
            parent.style.filter = "blur(0px)";
            child.style.zIndex = '2';
        });
        child.addEventListener('mouseout', function(){
            child.style.zIndex = '1';
        });


        parent.addEventListener('mouseover', function(){
            if(child.style.zIndex == '2'){
                parent.style.filter = "blur(0px)";
            }else{
                parent.style.filter = "blur(2px)"
            }
            
        })
        parent.addEventListener('mouseout', function(){
            parent.style.filter = "blur(0px)"
        })
        
