//botão de tradução (Favor NÃO mexer sem perguntar)

var translations = {
    'portuguese': {
      'botao-mudar-idioma': 'Mudar Idioma',
      'lojah' : 'Loja',
      'inicioh':'Início',
      'blogh' : 'Blog',
      'sobreh': 'Sobre',
      'contatoh' : 'Contato',
      'textblog1': '#Consulte mais Informações',
      'textblog2': 'Leia todos os estudos de caso sobre os nosso produtos',
      'textblog3': 'O moletom com zíper em jersey de algodão',
      'textblog4': 'CONTINUE LENDO',
      'textblog5': 'Como Estilizar um Topete',
      'textblog6': 'CONTINUE LENDO',
      'textblog7': 'Itens Indispensáveis Para Seus Dates',
      'textblog8': 'CONTINUE LENDO',
      'textblog9': 'Tendências Inspiradas Nas Passarelas',
      'textblog10': 'CONTINUE LENDO',
      'textblog11': 'Tendências de Moda Masculina AW20',
      'textblog12': 'CONTINUE LENDO',
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

      //tradução em português acima
    },
    'english': {
      'botao-mudar-idioma': 'Change Language',
      'lojah': 'Shop',
      'inicioh': 'Home',
      'blogh': 'Blog', //duh
      'sobreh': 'About',
      'contatoh' : 'Contact',
      'textblog1': '#See more information',
      'textblog2': 'Read all case studies about our products',
      'textblog3': 'The zip-up sweatshirt in cotton jersey',
      'textblog4': 'KEEP READING',
      'textblog5': 'How to Style a Topknot',
      'textblog6': 'KEEP READING',
      'textblog7': 'Essential Items for Your Dates',
      'textblog8': 'KEEP READING',
      'textblog9': 'Trends Inspired by the Catwalks',
      'textblog10': 'KEEP READING',
      'textblog11': 'AW20 Men\'s Fashion Trends',
      'textblog12': 'KEEP READING',
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
    document.getElementById('textblog1').textContent = translations[currentLanguage]['textblog1'];
    document.getElementById('textblog2').textContent = translations[currentLanguage]['textblog2'];
    document.getElementById('textblog3').textContent = translations[currentLanguage]['textblog3'];
    document.getElementById('textblog4').textContent = translations[currentLanguage]['textblog4'];
    document.getElementById('textblog5').textContent = translations[currentLanguage]['textblog5'];
    document.getElementById('textblog6').textContent = translations[currentLanguage]['textblog6'];
    document.getElementById('textblog7').textContent = translations[currentLanguage]['textblog7'];
    document.getElementById('textblog8').textContent = translations[currentLanguage]['textblog8'];
    document.getElementById('textblog9').textContent = translations[currentLanguage]['textblog9'];
    document.getElementById('textblog10').textContent = translations[currentLanguage]['textblog10'];
    document.getElementById('textblog11').textContent = translations[currentLanguage]['textblog11'];
    document.getElementById('textblog12').textContent = translations[currentLanguage]['textblog12'];
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