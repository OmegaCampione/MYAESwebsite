//botão de tradução (Favor NÃO mexer sem perguntar)

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
      'placeholdernome': 'Seu nome',
      'placeholderemail': 'E-mail',
      'placeholderassunto': 'Assunto',
      'placeholdermensagem': 'Sua mensagem',
      'mathdesc': '<span>Matheus Benjamim</span> Estudante Universitário CCO <br> Telefone: 081 00000-0000 <br> Email: exemplodeemail@gmail.com',
      'yuridesc': '<span>Yuri Bezerra</span> Estudante Universitário CCO <br> Telefone: 081 00000-0000 <br> Email: exemplodeemail@gmail.com',
      'inutildesc': '<span>Vinicius Tenório</span> Estudante Universitário CCO <br> Telefone: 081 00000-0000 <br> Email: exemplodeemail@gmail.com',
      'formenviar': 'Enviar',
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
      'textocontat1': '#Let\'s_talk',
      'textocontat2': 'LEAVE A MESSAGE. We love listening to you',
      'textocontat3': 'GET IN TOUCH',
      'textocontat4': 'Visit one of our agency locations or contact us today',
      'textocontat5': 'Head Office',
      'textocontat6': 'Monday to Saturday: 7:00 am - 22:00 pm',
      'textoforms1': 'LEAVE A MESSAGE',
      'textoforms2': 'Fill in with your information',
      'placeholdernome': 'Your name',
      'placeholderemail': 'E-mail',
      'placeholderassunto': 'Subject',
      'placeholdermensagem': 'Your message',
      'mathdesc': '<span>Matheus Benjamim</span> University Student CCO <br> Phone: 081 00000-0000 <br> Email: exampleemail@gmail.com',
      'yuridesc': '<span>Yuri Bezerra</span> University Student CCO <br> Phone: 081 00000-0000 <br> Email: exampleemail@gmail.com',
      'inutildesc': '<span>Vinicius Tenório</span> University Student CCO <br> Phone: 081 00000-0000 <br> Email: exampleemail@gmail.com',
      'formenviar': 'Submit',  
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
    document.getElementById('textocontat1').textContent = translations[currentLanguage]['textocontat1'];
    document.getElementById('textocontat2').textContent = translations[currentLanguage]['textocontat2'];
    document.getElementById('textocontat3').textContent = translations[currentLanguage]['textocontat3'];
    document.getElementById('textocontat4').textContent = translations[currentLanguage]['textocontat4'];
    document.getElementById('textocontat5').textContent = translations[currentLanguage]['textocontat5'];
    document.getElementById('textocontat6').textContent = translations[currentLanguage]['textocontat6'];
    document.getElementById('textoforms1').textContent = translations[currentLanguage]['textoforms1'];
    document.getElementById('textoforms2').textContent = translations[currentLanguage]['textoforms2'];
    var placeholdernome = document.getElementById('placeholdernome');
    placeholdernome.placeholder = translations[currentLanguage]['placeholdernome'];
    var placeholderemail = document.getElementById('placeholderemail');
    placeholderemail.placeholder = translations[currentLanguage]['placeholderemail'];
    var placeholderassunto = document.getElementById('placeholderassunto');
    placeholderassunto.placeholder = translations[currentLanguage]['placeholderassunto'];
    var placeholdermensagem = document.getElementById('placeholdermensagem');
    placeholdermensagem.placeholder = translations[currentLanguage]['placeholdermensagem'];
    var mathdesc = document.getElementById('mathdesc');
    mathdesc.innerHTML = translations[currentLanguage]['mathdesc'];
    var yuridesc = document.getElementById('yuridesc');
    yuridesc.innerHTML = translations[currentLanguage]['yuridesc'];
    var inutildesc = document.getElementById('inutildesc');
    inutildesc.innerHTML = translations[currentLanguage]['inutildesc'];
    document.getElementById('formenviar').textContent = translations[currentLanguage]['formenviar'];
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