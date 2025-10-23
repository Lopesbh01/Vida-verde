

// Seleciona o campo de CEP

const cepInput=document.getElementById('cep');

cepInput.addEventListener('blur', async() => {

    //remove caracteres não numericos
    const cep = cepInput.value.replace(/\D/g,'');

    if(cep.length !== 8){
        alert("CEP INVÁLIDO.Por favor, digite 8 números.");
        return;
    }
        //Busca na api 
    try {

        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
    

    if(data.erro){
        alert("CEP não encontrado.");
        
        limparFormulario();

        return;
    }

    document.getElementById('logradouro').value= data.logradouro;
    document.getElementById('bairro').value= data.bairro;
    document.getElementById('cidade').value=data.localidade;
    document.getElementById('uf').value= data.uf

    }catch(error){
        console.error("Erro ao buscar CEP", error);
        alert("Não foi possive consultar o CEP. Verifique sua conexão.");
        limparFormulario();
    }

});

    function limparFormulario() {
        document.getElementById('logradouro').value='';
        document.getElementById('bairro').value='';
        document.getElementById('cidade').value='';
        document.getElementById('uf').value='';
};



