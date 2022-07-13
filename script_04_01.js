(function(){
    "use strict";

    const min_img = 1;
    const max_img = 5;
    let cur_img01 = min_img;
    const my_next01 = document.getElementById("next");
    const my_prev01 = document.getElementById("previous");
    const my_container01 = document.getElementById("content");
  
    function move_photo01(var01){
        const old_cur_img01 = cur_img01;
        cur_img01 += var01;

        if (cur_img01 < min_img) {
            cur_img01 = max_img;
        }
        else if (cur_img01 > max_img){
            cur_img01 = min_img;
        }  
        if (cur_img01 != old_cur_img01){
            const new_slide01 = document.createElement('img');
            new_slide01.src =  `slides/image${cur_img01}.jpg`;
            new_slide01.className = "fadeinimg";
            my_container01.appendChild(new_slide01);

            if (my_container01.children.length >2){
                my_container01.replaceChild(my_container01.firstElementChild);
            }
        }
    };

    my_next01.addEventListener("click", function(my_event01) {
        my_event01.preventDefault();
        move_photo01(1);
    });

    my_prev01.addEventListener("click", function(my_event01) {
       my_event01.preventDefault();
        move_photo01(-1);
    });
})();