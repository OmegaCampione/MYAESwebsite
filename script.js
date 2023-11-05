const bar = document.getElementById('bar');
const fechar = document.getElementById('fechar');
const nav = document.getElementById('navbar');

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  })
};

if (fechar) {
  fechar.addEventListener('click', () => {
    nav.classList.remove('active');
  })
};

//M: botão de tradução (Favor NÃO mexer sem perguntar)
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
    'textomain4': 'Economize mais com cupons & até 70% de desconto!',
    'botaomain': 'Compre Agora',
    'textofeat1' : 'Frete Grátis',
    'textofeat2' : 'Pedido On-line',
    'textofeat3' : 'Economize dinheiro',
    'textofeat4' : 'Promoções',
    'textofeat5' : 'Garantia de satisfação',
    'textofeat6' : 'Suporte 24/7',
    'destaquepro' : 'Produtos em Destaque',
    'anuncio1' : 'Coleção de Design Aesthetic',

    //tradução em português acima
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
    'textomain4': 'Save more with coupons $ up to 70% Off!',
    'botaomain' : 'Buy Now',
    'textofeat1' : 'Free Shipping',
    'textofeat2' : 'Online Order',
    'textofeat3' : 'Save Money',
    'textofeat4' : 'Offers',
    'textofeat5' : 'Satisfaction Guarantee',
    'textofeat6' : '24/7 Support',
    'destaquepro' : 'Featured Products',
    'anuncio1' : 'Aesthetic Design Collection',

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

  
}

document.getElementById('botao-mudar-idioma').addEventListener('click', changeLanguage);