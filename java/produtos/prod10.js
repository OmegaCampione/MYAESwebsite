//botão de tradução (Favor NÃO mexer sem perguntar)

var translations = {
  'portuguese': {
    'botao-mudar-idioma': 'Mudar Idioma',
    'lojah' : 'Loja',
    'inicioh':'Início',
    'blogh' : 'Blog',
    'sobreh': 'Sobre',
    'contatoh' : 'Contato',
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
    'textoloja8': 'Produtos Em Destaque',
    'textoloja9': 'Nova Coleção de Design',

    //tradução em português acima
  },
  'english': {
    'botao-mudar-idioma': 'Change Language',
    'lojah': 'Shop',
    'inicioh': 'Home',
    'blogh': 'Blog', //duh
    'sobreh': 'About',
    'contatoh' : 'Contact',
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
    'textoloja8': 'Featured Products',
    'textoloja9': 'New Design Collection',

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
  document.getElementById('textoloja8').textContent = translations[currentLanguage]['textoloja8'];
  document.getElementById('textoloja9').textContent = translations[currentLanguage]['textoloja9'];
}

document.getElementById('botao-mudar-idioma').addEventListener('click', changeLanguage);
