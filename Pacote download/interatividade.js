function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('nasc')
  var res = document.getElementById('res')

  if(fano.value.length == 0 || Number(fano.value) > ano)
  {
    window.alert('[ERROR] Verificar dados digitados!')
  } else 
  {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id','foto')

    if(fsex[0].checked) 
    {
      genero = 'Homem'
      if(idade > 0 && idade <= 10) 
      { //criança
          img.setAttribute('src','nome da imagem')
      } else if (idade <= 20) 
      { //adolescente
          img.setAttribute('src','nome da imagem')
      } else if (idade <= 59)
      { //adulto
          img.setAttribute('src','nome da imagem')
      } else
      { //idoso 
          img.setAttribute('src','nome da imagem')
      }
    } else if (fsex[1].checked)
    {
        genero = 'Mulher'
        if(idade > 0 && idade <= 10)
        { //criança
            img.setAttribute('src','nome da imagem')
        } else if (idade <= 20)
        { //adolescente
            img.setAttribute('src','nome da imagem')
        } else if (idade <= 59)
        { //adulto
            img.setAttribute('src','nome da imagem')
        } else
        { //idoso
            img.setAttribute('src', 'nome da imagem')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos<br>`
    res.appendChild('img')
  }

}