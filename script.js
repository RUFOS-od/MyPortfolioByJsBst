

let lastScrollTop = 0;
navbar = document.getElementById('navbar');

window.addEventListener('scroll',function (){
  const scrollTop = window.pageTOffset||
  this.document.documentElement.scrollTop;

  if(scrollTop > lastScrollTop){
    navbar.style.top="-50px";
  } else {
    navbar.style.top="0";
  }
  lastScrollTop=scrollTop;
});


var typed = new Typed('.typed',{                                       
    strings: ["Bonjour cher visiteur! \n\ Je suis <strong><em>Rufos Odetoki</em></strong> \n\ \t\ Après des mon paccours au <strong>Lycée Classique d'Abidjan</strong> , je me suis orienté en <em>Informatique des Sciences Numériques</em> où ma Spécialité est les <strong>Bases de Données</strong> à L'<strong>Université Virtuelle de CI</strong> \n\ \b\ Pour renforcer mes acquis et exceller dans le domaine du Numérique, je suis tourner vers <strong>Ivoire Geek School</strong> pour apprendre la <strong><em>DATA IA</em></strong> \n\ \n\ \t\ <strong>Là je sors <mark>Développeur DATA IA</mark></strong>"],              
    typeSpeed: 20
  
  });

  // compeur live

  let compteur = 0;

  $(window).scroll(function(){
    const top = $('.counter').offset().top - window.innerHeight;

    if(compteur== 0 && $(window).scrollTop() > top){
      $('.counter-value').each(function(){
        let $this = $(this),
          countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate({
          countNum : countTo
        },
        {
          duration:10000,
          easing:'swing',
          step:function(){
            $this.text(Math.floor(this.countNum));
          },
          complete:function(){
            $this.text(this.countNum);
          }
        });
      });
      compteur = 1;
    }
  });

  // AOS
  AOS.init();