function separateItens(list, listFigure, listFrames){    

    for(let i = 0; i < list.length; i++){  

        let check = list[i].tipo

        if(check == "Action Figure"){
            listFigure.push(list[i])
        }else{listFrames.push(list[i])}
    }

    for(let i = 0; i < listFigure.length; i++){

        let secaoListFigure = document.getElementsByClassName('actionFigures')[0]

        let objeto = listFigure[i]

        let li = document.createElement('li')
        li.classList.add("actionFigureStats")

        let p1 = document.createElement('p')
        p1.innerText = objeto.nome
        p1.classList.add("actionFigureName")

        let p2 = document.createElement('p')
        p2.innerText = objeto.preco
        p2.classList.add("actionFigurePreco")

        let img = document.createElement('img')
        img.src = objeto.imagem
        img.alt = objeto.nome
        img.classList.add("capa")
        
        li.appendChild(img)
        li.appendChild(p1)
        li.appendChild(p2)
        secaoListFigure.appendChild(li)

    }

    for(let i = 0; i < listFrames.length; i++){

        let secaoListFrames = document.getElementsByClassName('decorativeFrames')[0]

        let objeto = listFrames[i]

        let li = document.createElement('li')
        li.classList.add("decorativeFrameStats")

        let p1 = document.createElement('p')
        p1.innerText = objeto.nome
        p1.classList.add("decorativeFrameName")

        let p2 = document.createElement('p')
        p2.innerText = objeto.preco
        p2.classList.add("decorativeFramePreco")

        let img = document.createElement('img')
        img.src = objeto.imagem
        img.alt = objeto.nome
        img.classList.add("capa")
        
        li.appendChild(img)
        li.appendChild(p1)
        li.appendChild(p2)
        secaoListFrames.appendChild(li)

    }

}

separateItens(list, listFigure, listFrames)