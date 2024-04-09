$(document).ready(
    function(){
        $(".nagyon_nem").click(
            function(event)
        {
            $(this).addClass("kivalasztva").siblings().removeClass("kivalasztva");
        }
        );
    }
);

$(document).ready(
    function(){
        $(".félig_nem").click(
            function(event)
        {
            $(this).addClass("kivalasztva").siblings().removeClass("kivalasztva");
        }
        );
    }
);

$(document).ready(
    function(){
        $(".kicsit_nem").click(
            function(event)
        {
            $(this).addClass("kivalasztva").siblings().removeClass("kivalasztva");
        }
        );
    }
);

$(document).ready(
    function(){
        $(".semleges").click(
            function(event)
        {
            $(this).addClass("kivalasztva").siblings().removeClass("kivalasztva");
        }
        );
    }
);

$(document).ready(
    function(){
        $(".kicsit_igaz").click(
            function(event)
        {
            $(this).addClass("kivalasztva").siblings().removeClass("kivalasztva");
        }
        );
    }
);

$(document).ready(
    function(){
        $(".félig_igaz").click(
            function(event)
        {
            $(this).addClass("kivalasztva").siblings().removeClass("kivalasztva");
        }
        );
    }
);

$(document).ready(
    function(){
        $(".nagyon_igaz").click(
            function(event)
            {
                $(this).addClass("kivalasztva").siblings().removeClass("kivalasztva");
            }
        );
    }
);

$(document).ready(
    function(){
        $(".menu_gomb").click(
            function(event){
                $(this).addClass("valtozas")

            }
        )
    }
)

$(document).ready(
    function(){
        $(".menu_gomb").dblclick(
            function(event){
                $(this).removeClass("valtozas")
            }
        )
    }
)