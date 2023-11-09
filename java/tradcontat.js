//M: botão de tradução (Favor NÃO mexer sem perguntar)
var translations = {
    'portuguese': {
      'botao-mudar-idioma': 'Mudar Idioma',
      'lojah' : 'Loja',
      'inicioh':'Início',
      'blogh' : 'Blog',
      'sobreh': 'Sobre',
      'contatoh' : 'Contato',
      'textocontat1': '#Vamos_Conversar',
      'textocontat2': 'DEIXE UMA MENSAGEM. Adoramos escutar você',
      'textocontat3': 'ENTRAR EM CONTATO',
      'textocontat4': 'Visite uma de nossas agências ou entre em contato conosco hoje mesmo',
      'textocontat5': 'Sede',
      'textocontat6': 'Segunda a Sábado: 7:00 am - 22:00 pm',
      'textoforms1': 'DEIXE UMA MENSAGEM',
      'textoforms2': 'Preencha com seus dados',
      
      //tradução em português acima
    },
    'english': {
      'botao-mudar-idioma': 'Change Language',
      'lojah': 'Shop',
      'inicioh': 'Home',
      'blogh': 'Blog', //duh
      'sobreh': 'About',
      'contatoh' : 'Contact',
      'textocontat1': '#Let\'s_talk',
      'textocontat2': 'LEAVE A MESSAGE. We love listening to you',
      'textocontat3': 'GET IN TOUCH',
      'textocontat4': 'Visit one of our agency locations or contact us today',
      'textocontat5': 'Head Office',
      'textocontat6': 'Monday to Saturday: 7:00 am - 22:00 pm',
      'textoforms1': 'LEAVE A MESSAGE',
      'textoforms2': 'Fill in with your information',
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
    document.getElementById('textocontat1').textContent = translations[currentLanguage]['textocontat1'];
    document.getElementById('textocontat2').textContent = translations[currentLanguage]['textocontat2'];
    document.getElementById('textocontat3').textContent = translations[currentLanguage]['textocontat3'];
    document.getElementById('textocontat4').textContent = translations[currentLanguage]['textocontat4'];
    document.getElementById('textocontat5').textContent = translations[currentLanguage]['textocontat5'];
    document.getElementById('textocontat6').textContent = translations[currentLanguage]['textocontat6'];
    document.getElementById('textoforms1').textContent = translations[currentLanguage]['textoforms1'];
    document.getElementById('textoforms2').textContent = translations[currentLanguage]['textoforms2'];
  }
  
  document.getElementById('botao-mudar-idioma').addEventListener('click', changeLanguage);
  