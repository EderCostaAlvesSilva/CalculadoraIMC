function calculo(){
    let nome = document.getElementById('nome').value
    let altura = document.getElementById('altura').value
    let peso = document.getElementById('peso').value

    if(nome == '' || altura == '' || peso == ''){
      //da pra usar tento textcontent quanto innertext n sei qual a diferença '-'
      return document.getElementById('saida').textContent = 'Insira todos os dados!'
    }

    let imc = Math.round(peso / (altura*altura))

    if(imc < 16){
        return document.getElementById('saida').innerText = nome + ' seu IMC é de ' + imc + ' e você esta com Baixo peso muito grave'
    } 
    else if(imc >= 16 && imc <= 16.99){
        return document.getElementById('saida').innerText = nome + ' seu IMC é de  ' + imc + ' e você esta com Baixo peso grave'
    }
    else if(imc >= 17 && imc <=18.49){
        return document.getElementById('saida').innerText = nome + ' seu IMC é de  ' + imc + ' e você esta com Baixo peso'
    }
    else if(imc >= 18.50 && imc <= 24.99){
        return  document.getElementById('saida').innerText = nome + ' seu IMC é de ' + imc + ' e você esta com Baixo peso'
    }
    else if(imc >= 25 && imc <= 29.99){
      return  document.getElementById('saida').innerText = nome + ' seu IMC é de ' + imc + ' e você esta com Sobrepeso'
    }
    else if(imc>= 30 && imc <= 34.99){
      return  document.getElementById('saida').innerText = nome + ' seu IMC é de ' + imc + ' e você esta com Obesidade grau I'
    }
    else if(imc >= 35 && imc <= 39.99){
      return  document.getElementById('saida').innerText = nome + ' seu IMC é de ' + imc + ' e você esta com Obesidade grau II'
    }
    else if(imc > 40){
      return  document.getElementById('saida').innerText = nome + ' seu IMC é de ' + imc + ' e você esta com Obesidade grau III'
    }
}