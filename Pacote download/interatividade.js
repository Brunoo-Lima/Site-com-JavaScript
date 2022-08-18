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
          img.setAttribute('src','h-criança-.jpg')
      } else if (idade <= 20) 
      { //adolescente
          img.setAttribute('src','h-adolescente-.jpg')
      } else if (idade <= 59)
      { //adulto
          img.setAttribute('src','h-adulto-.jpg')
      } else
      { //idoso 
          img.setAttribute('src','h-idoso-.jpg')
      }
    } else if (fsex[1].checked)
    {
        genero = 'Mulher'
        if(idade > 0 && idade <= 12)
        { //criança
            img.setAttribute('src','m-criança-.jpg')
        } else if (idade <= 21)
        { //adolescente
            img.setAttribute('src','m-adolescente-.jpg')
        } else if (idade <= 59)
        { //adulto
            img.setAttribute('src','m-adulta-.jpg')
        } else
        { //idoso
            img.setAttribute('src', 'm-idosa-.jpg')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.<br>`
    res.appendChild(img)
  }

}