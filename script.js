// Enigma
function contaPalavras(texto) {
    if (texto.length <= 250) {
        let criaPalavras = ''
        let criaListaPalavras = []
        const letters = /[a-z]+/

        function identificaPalavras(A) {
            for (let i = 0; i < A.length; i++) {
                if (A[i].match(letters))  {     
                    criaPalavras += A[i]
                    if (i === A.length -1) {
                        criaListaPalavras.push(criaPalavras)
                    }
                } else { 
                    criaListaPalavras.push(criaPalavras)
                    criaPalavras = ''
                }                
                for (let i = 0; i < criaListaPalavras.length; i++) {
                if (criaListaPalavras[i] === '') {
                    criaListaPalavras.splice(i,1)
                }
            }
            }

            console.log(criaListaPalavras)
            return criaListaPalavras
        }
        let ArrayDePalavras = identificaPalavras(texto)
        console.log(texto.length)
        return ArrayDePalavras.length
    } else {
        return 'Texto inválido'
    }
}
txt = 'sss.aasd.sss'
console.log(contaPalavras(txt))