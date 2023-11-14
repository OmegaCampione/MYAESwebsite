//botão de tradução (Favor NÃO mexer sem perguntar)

var botaoMain = document.getElementById("botaomain");

botaoMain.addEventListener("click", function() {
    // Redirecione para a página loja.html
    window.location.href = "loja.html";
  });

  var bannerwdbutton = document.getElementById("bannerwdbutton");

  bannerwdbutton.addEventListener("click", function() {
    // Redirecione para a página loja.html
    window.location.href = "loja.html";
  });

  

var translations = {
    'portuguese': {
      'botao-mudar-idioma': 'Mudar Idioma',
      'lojah' : 'Loja',
      'inicioh':'Início',
      'blogh' : 'Blog',
      'sobreh': 'Sobre',
      'contatoh' : 'Contato',
      'textomain1': 'Ofertas do balacobaco',
      'textomain2': 'Barganhas de alto valor',
      'textomain3': 'Em todos os produtos',
      'textomain4': 'Economize mais com o cupom "EXPOTECH" para 20% de desconto',
      'botaomain': 'Compre Agora',
      'textofeat1' : 'Frete Grátis',
      'textofeat2' : 'Pedido On-line',
      'textofeat3' : 'Economize dinheiro',
      'textofeat4' : 'Promoções',
      'textofeat5' : 'Garantia de satisfação',
      'textofeat6' : 'Suporte 24/7',
      'destaquepro' : 'Produtos em Destaque',
      'anuncio1' : 'Coleção de Design Aesthetic',
      'bannerwddesc': 'Até <span class="highlight">70% de Desconto</span> - Todas as Camisas e Acessórios',
      'bannerwdbutton' :'Ver Mais',
      'novidadespro' : 'Novidades',
      'anuncio2' : 'Nova Coleção de Design',
      'bmmain' : 'Ofertas Imperdíveis',
      'bmdesc' : 'Pague 2 Leve 1!' ,
      'bmspan' : 'A melhor coleção está em desconto!',
      'bmbutton' : 'Saiba Mais',
      'bmmain2' : 'Ofertas Perdíveis',
      'bmdesc2' : 'Pague 1 Leve 2' ,
      'bmspan2' : 'A coleção está em desconto!',
      'bmbutton2' : 'Saiba Mais',
      'b3main' : 'OFERTA SEMANAL',
      'b3desc' : 'Oferta da Semana - 50% de desconto',
      'b3main2' : 'NOVA COLEÇÃO DE ITENS',
      'b3desc2' : 'Natal Legal 2023',
      'b3main3' : 'CAMISETAS',
      'b3desc3' : 'Novas Camisetas',
      'notmain' : 'Se Inscreva para Receber Novidades',
      'notdesc': 'Receba atualizações por email sobre nossos mais novos produtos e <span class="highlight">ofertas especiais</span>',
      'notbutton' : 'Inscreva-se',
      'emailInput': 'Seu email',
      'ftcont': 'Contato',
      'ftendere': 'Endereço:',
      'ftfone': 'Telefone:',
      'ftsiga': 'Siga-nos!',
      'ftsobre': 'Sobre',
      'ftsobrenos': 'Sobre Nós',
      'ftpolit': 'Política de Privacidade',
      'fttermos': 'Termos e Condições',
      'ftcontate': 'Contate-nos',
      'ftconta': 'Minha Conta',
      'ftlogin': 'Login',
      'ftcarrinho': 'Ver Carrinho',
      'ftdesejos': 'Lista de Desejos',
      'ftajuda': 'Ajuda',
      'ftcopyright': '© 2023, MYstic Aesthetic',


    },

    'english': {
      'botao-mudar-idioma': 'Change Language',
      'lojah': 'Shop',
      'inicioh': 'Home',
      'blogh': 'Blog', //duh
      'sobreh': 'About',
      'contatoh' : 'Contact',
      'textomain1': 'Balacobaco\'s offers',
      'textomain2': 'High value bargains',
      'textomain3': 'On every product',
      'textomain4': 'Save more with the "EXPOTECH" Coupon for 20% Off',
      'botaomain' : 'Buy Now',
      'textofeat1' : 'Free Shipping',
      'textofeat2' : 'Online Order',
      'textofeat3' : 'Save Money',
      'textofeat4' : 'Offers',
      'textofeat5' : 'Satisfaction Guarantee',
      'textofeat6' : '24/7 Support',
      'destaquepro' : 'Featured Products',
      'anuncio1' : 'Aesthetic Design Collection',
      'bannerwddesc': 'Up to <span class="highlight">70% Off</span> - All Shirts and Accessories',
      'bannerwdbutton' :'Explore More',
      'novidadespro' : 'New Arrivals',
      'anuncio2' : 'New Design Collection',
      'bmmain' : 'Unmissable Offers!',
      'bmdesc' : '1 For The Price of 2!' ,
      'bmspan' : 'The Best Collection is on sale!',
      'bmbutton' : 'Learn More',
      'bmmain2' : 'Missable Offers',
      'bmdesc2' : 'Buy One, Get One Free' ,
      'bmspan2' : 'The Collection is On Sale!',
      'bmbutton2' : 'Learn More',
      'b3main' : 'WEEKLY OFFER',
      'b3desc' : 'Weekly Offer - 50% Off',
      'b3main2' : 'NEW COLLECTION OF ITEMS',
      'b3desc2' : 'Cool Christmas 2023',
      'b3main3' : 'T-Shirts',
      'b3desc3' : 'New T-Shirts',
      'notmain' : 'Sign Up For Newsletters',
      'notdesc': 'Receive email updates about our latest products and <span class="highlight">special offers</span>',
      'notbutton' : 'Subscribe',
      'emailInput': 'Your e-mail',
      'ftcont': 'Contact',
      'ftendere': 'Address:',
      'ftfone': 'Phone:',
      'ftsiga': 'Follow Us!',
      'ftsobre': 'About',
      'ftsobrenos': 'About Us',
      'ftpolit': 'Privacy Policy',
      'fttermos': 'Terms and Conditions',
      'ftcontate': 'Contact Us',
      'ftconta': 'My Account',
      'ftlogin': 'Login',
      'ftcarrinho': 'View Cart',
      'ftdesejos': 'Wishlist',
      'ftajuda': 'Help',
      'ftcopyright': '© 2023, MYstic Aesthetic',
  
      //tradução em inglês acima
    },
   
  };
  
  var currentLanguage = 'portuguese';
  
  function changeLanguage() {
    if (currentLanguage === 'portuguese') {
      currentLanguage = 'english';
    } else {
      currentLanguage = 'portuguese';
    }
  //só segue o padrão
    document.getElementById('botao-mudar-idioma').textContent = translations[currentLanguage]['botao-mudar-idioma'];
    document.getElementById('lojah').textContent = translations[currentLanguage]['lojah'];
    document.getElementById('inicioh').textContent = translations[currentLanguage]['inicioh'];
    document.getElementById('blogh').textContent = translations[currentLanguage]['blogh'];
    document.getElementById('sobreh').textContent = translations[currentLanguage]['sobreh'];
    document.getElementById('contatoh').textContent = translations[currentLanguage]['contatoh'];
    document.getElementById('textomain1').textContent = translations[currentLanguage]['textomain1'];
    document.getElementById('textomain2').textContent = translations[currentLanguage]['textomain2'];
    document.getElementById('textomain3').textContent = translations[currentLanguage]['textomain3'];
    document.getElementById('textomain4').textContent = translations[currentLanguage]['textomain4'];
    document.getElementById('botaomain').textContent = translations[currentLanguage]['botaomain'];
    document.getElementById('textofeat1').textContent = translations[currentLanguage]['textofeat1'];
    document.getElementById('textofeat2').textContent = translations[currentLanguage]['textofeat2'];
    document.getElementById('textofeat3').textContent = translations[currentLanguage]['textofeat3'];
    document.getElementById('textofeat4').textContent = translations[currentLanguage]['textofeat4'];
    document.getElementById('textofeat5').textContent = translations[currentLanguage]['textofeat5'];
    document.getElementById('textofeat6').textContent = translations[currentLanguage]['textofeat6'];
    document.getElementById('destaquepro').textContent = translations[currentLanguage]['destaquepro'];
    document.getElementById('anuncio1').textContent = translations[currentLanguage]['anuncio1'];
    document.getElementById('bmmain').textContent = translations[currentLanguage]['bmmain'];
    document.getElementById('bmdesc').textContent = translations[currentLanguage]['bmdesc'];
    document.getElementById('bmspan').textContent = translations[currentLanguage]['bmspan'];
    document.getElementById('bmbutton').textContent = translations[currentLanguage]['bmbutton2'];
    document.getElementById('bmmain2').textContent = translations[currentLanguage]['bmmain2'];
    document.getElementById('bmdesc2').textContent = translations[currentLanguage]['bmdesc2'];
    document.getElementById('bmspan2').textContent = translations[currentLanguage]['bmspan2'];
    document.getElementById('bmbutton2').textContent = translations[currentLanguage]['bmbutton2'];
    document.getElementById('b3main').textContent = translations[currentLanguage]['b3main'];
    document.getElementById('b3desc').textContent = translations[currentLanguage]['b3desc'];
    document.getElementById('b3main2').textContent = translations[currentLanguage]['b3main2'];
    document.getElementById('b3desc2').textContent = translations[currentLanguage]['b3desc2'];
    document.getElementById('b3main3').textContent = translations[currentLanguage]['b3main3'];
    document.getElementById('b3desc3').textContent = translations[currentLanguage]['b3desc3'];
    var bannerwddesc = document.getElementById('bannerwddesc');
    bannerwddesc.innerHTML = translations[currentLanguage]['bannerwddesc'];
    document.getElementById('bannerwdbutton').textContent = translations[currentLanguage]['bannerwdbutton'];
    document.getElementById('novidadespro').textContent = translations[currentLanguage]['novidadespro'];
    document.getElementById('anuncio2').textContent = translations[currentLanguage]['anuncio2'];
    document.getElementById('notmain').textContent = translations[currentLanguage]['notmain'];
    var notdesc = document.getElementById('notdesc');
    notdesc.innerHTML = translations[currentLanguage]['notdesc'];
    document.getElementById('notbutton').textContent = translations[currentLanguage]['notbutton'];
    var emailInput = document.getElementById('emailInput');
    emailInput.placeholder = translations[currentLanguage]['emailInput'];
    document.getElementById('ftcont').textContent = translations[currentLanguage]['ftcont'];
    document.getElementById('ftendere').textContent = translations[currentLanguage]['ftendere'];
    document.getElementById('ftfone').textContent = translations[currentLanguage]['ftfone'];
    document.getElementById('ftsiga').textContent = translations[currentLanguage]['ftsiga'];
    document.getElementById('ftsobre').textContent = translations[currentLanguage]['ftsobre'];
    document.getElementById('ftsobrenos').textContent = translations[currentLanguage]['ftsobrenos'];
    document.getElementById('ftpolit').textContent = translations[currentLanguage]['ftpolit'];
    document.getElementById('fttermos').textContent = translations[currentLanguage]['fttermos'];
    document.getElementById('ftcontate').textContent = translations[currentLanguage]['ftcontate'];
    document.getElementById('ftconta').textContent = translations[currentLanguage]['ftconta'];
    document.getElementById('ftlogin').textContent = translations[currentLanguage]['ftlogin'];
    document.getElementById('ftcarrinho').textContent = translations[currentLanguage]['ftcarrinho'];
    document.getElementById('ftajuda').textContent = translations[currentLanguage]['ftajuda'];
    document.getElementById('ftcopyright').textContent = translations[currentLanguage]['ftcopyright'];


  }


  document.getElementById('botao-mudar-idioma').addEventListener('click', changeLanguage);