debounce = function(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this,
            args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};


(function() {
    var $target = $('.anime'),
        animationClass = 'anime-start',
        offset = $(window).height() * 3 / 4;

    function animeScroll() {
        var documentTop = $(document).scrollTop();

        $target.each(function() {
            var itemTop = $(this).offset().top;
            if (documentTop > itemTop - offset) {
                $(this).addClass(animationClass);
            } else {
                $(this).removeClass(animationClass);
            }
        });
    }

    animeScroll();

    $(document).scroll(debounce(function() {
        animeScroll();
    }, 2000));
})();

const ulSquares = document.querySelector("ul.squares");

for (let i = 0; i < 11; i++) {

    // Estilização
    const random = (min, max) => Math.random() * (max - min) + min; // criando tam randomicos - evitando a repetição no cod

    const li = document.createElement("li");

    const size = Math.floor(random(10, 120));

    const position = random(1, 99);

    li.style.width = `${size}px`;
    li.style.height = `${size}px`;
    li.style.bottom = `-${size}px`;

    li.style.left = `${position}%`;


    // Animação
    const delay = random(0.1, 5);
    const duration = random(24, 12);

    li.style.animationDelay = `${delay}s`;
    li.style.animationDuration = `${duration}s`;
    li.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`; // cada li ficará com o tempo diferente uma da outra

    // criando li's
    ulSquares.appendChild(li);
}