function initFaq() {

  const perguntas = document.querySelectorAll('th')
  const respostas = document.querySelectorAll('td')

  const faq = {
    removeAtivo() {
      perguntas.forEach((pergunta) => {
        pergunta.classList.remove('ativo')
      })
      respostas.forEach((resposta) => {
        resposta.classList.remove('ativo')
      })
    },
    openResposta(event) {
      if (event.target.classList.contains('ativo') === true) {
        faq.removeAtivo()
      } else {
        faq.removeAtivo()
        event.target.classList.add('ativo')
        event.target.nextElementSibling.classList.add('ativo')
      }
    },
  }

  perguntas.forEach((pergunta) => {
    pergunta.addEventListener('click', faq.openResposta)
  })

}

initFaq()

function initConteudo() {

  const buttonsAula = document.querySelectorAll('[data-btn]')
  const boxConteudo = document.querySelector('.box-conteudo')
  const conteudos = document.querySelectorAll('[data-conteudo]')

  const conteudoAulas = {
    removeAtivo() {
      buttonsAula.forEach((aula) => {
        aula.classList.remove('ativo')
      })
      conteudos.forEach((conteudo) => {
        conteudo.classList.remove('ativo')
      })
    },
    showConteudo(event) {
      event.preventDefault()
      if (event.target.classList.contains('ativo') === true) {
        conteudoAulas.removeAtivo()
      } else {
        let conteudoBtn = event.target.dataset.btn
        let conteudoBox = document.querySelector(`[data-conteudo="${conteudoBtn}"]`)
        conteudoAulas.removeAtivo()
        event.target.classList.add('ativo')
        conteudoBox.classList.add('ativo')
      }
    },
  }

  buttonsAula.forEach((aula) => {
    aula.addEventListener('click', conteudoAulas.showConteudo)
  })

}

initConteudo()

function initMenuMobile() {

  const menuMobile = document.querySelector('button')
  const ulMenu = document.querySelector('ul')

  function ativarMenu() {
    ulMenu.classList.toggle('ativo')
  }

  menuMobile.addEventListener('click', ativarMenu)
}

initMenuMobile()