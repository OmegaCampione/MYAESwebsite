//botão de tradução (Favor NÃO mexer sem perguntar)

var translations = {
    'portuguese': {
      'botao-mudar-idioma': 'Mudar Idioma',
      'lojah' : 'Loja',
      'inicioh':'Início',
      'blogh' : 'Blog',
      'sobreh': 'Sobre',
      'contatoh' : 'Contato',
      'textocartheader1': '#Finalizando_Compras',
      'textocartheader2': 'Confira seus produtos e finalize suas compras',
      'textocart1': "Remover",
      'textocart2': "Imagem",
      'textocart3': "Produto",
      'textocart4': "Preço",
      'textocart5': "Quantidade",
      'textocart6': "Subtotal",
      'textocupom': "Aplicar Cupom",
      'placeholdercupom': "Insira seu cupom",
      'textocupom2': "Aplicar",
      

      //tradução em português acima
    },
    'english': {
      'botao-mudar-idioma': 'Change Language',
      'lojah': 'Shop',
      'inicioh': 'Home',
      'blogh': 'Blog', //duh
      'sobreh': 'About',
      'contatoh' : 'Contact',
      'textocartheader1': '#Checking_Out',
      'textocartheader2': 'Review your items and complete your purchase.',
      'textocart1': "Remove",
      'textocart2': "Image",
      'textocart3': "Product",
      'textocart4': "Price",
      'textocart5': "Quantity",
      'textocart6': "Subtotal",
      'textocupom': "Apply Coupon",
      'placeholdercupom': "Enter your coupon",
      'textocupom2': "Apply",


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
    document.getElementById('textocartheader1').textContent = translations[currentLanguage]['textocartheader1'];
    document.getElementById('textocartheader2').textContent = translations[currentLanguage]['textocartheader2'];
    document.getElementById('textocart1').textContent = translations[currentLanguage]['textocart1'];
    document.getElementById('textocart2').textContent = translations[currentLanguage]['textocart2'];
    document.getElementById('textocart3').textContent = translations[currentLanguage]['textocart3'];
    document.getElementById('textocart4').textContent = translations[currentLanguage]['textocart4'];
    document.getElementById('textocart5').textContent = translations[currentLanguage]['textocart5'];
    document.getElementById('textocart6').textContent = translations[currentLanguage]['textocart6'];
    var placeholdernome = document.getElementById('placeholdercupom');
    placeholdernome.placeholder = translations[currentLanguage]['placeholdercupom'];
    document.getElementById('textocupom').textContent = translations[currentLanguage]['textocupom'];

  }
  
  document.getElementById('botao-mudar-idioma').addEventListener('click', changeLanguage);