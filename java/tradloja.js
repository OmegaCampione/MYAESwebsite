//M: botão de tradução (Favor NÃO mexer sem perguntar)
var translations = {
    'portuguese': {
      'botao-mudar-idioma': 'Mudar Idioma',
      'lojah' : 'Loja',
      'inicioh':'Início',
      'blogh' : 'Blog',
      'sobreh': 'Sobre',
      'contatoh' : 'Contato',
      'textoloja1': '#PRODUTOSDOBALACOBACO',

      //tradução em português acima
    },
    'english': {
      'botao-mudar-idioma': 'Change Language',
      'lojah': 'Shop',
      'inicioh': 'Home',
      'blogh': 'Blog', //duh
      'sobreh': 'About',
      'contatoh' : 'Contact',
      'textoloja1': '#BALACOBACO\'SPRODUCTS'
  
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
    document.getElementById('textoloja1').textContent = translations[currentLanguage]['textoloja1'];
  }
  
  document.getElementById('botao-mudar-idioma').addEventListener('click', changeLanguage);
  