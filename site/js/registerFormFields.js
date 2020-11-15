let firstStepContent = {
    title: "Obrigado pela preferência! Vamos começar cadastrando seu callcenter?",
    fields: [
        {
            label: "Razão Social",
            iconName: "file-signature", 
            id: "razaoSocial"
        },
        {
            label: "Nome Fantasia",
            iconName: "tag", 
            id: "nomeFantasia"
        },
        {
            label: "CNPJ",
            iconName: "address-card", 
            id: "cnpj"
        }
        ,
        {
            label: "CEP",
            iconName: "search-location", 
            id: "cep"
        },
        {
            label: "Logradouro",
            iconName: "map-marker-alt", 
            id: "logradouro"
        },
        {
            label: "Número",
            iconName: "building", 
            id: "numero"
        },
        {
            label: "Bairro",
            iconName: "city", 
            id: "bairro"
        },
        {
            label: "Nome do Responsável",
            iconName: "user", 
            id: "nomeResponsavel"
        },
        {
            label: "Email do Responsável",
            iconName: "envelope", 
            id: "emailResponsavel"
        }
    ],
    buttonText: "Continuar"
}

let secondStepContent = {
    title: "Agora, confirme o plano escolhido:",
    fields: [
        {
            label: "Plano",
            iconName: "file-signature", 
            id: "plano",
        }
    ],
    buttonText: "Continuar"
}

let thirdStepContent = {
    title: "Para finalizar, preencha as informações de pagamento:",
    fields: [
        {
            label: "Número do cartão",
            iconName: "credit-card", 
            id: "numeroCartao"
        },
        {
            label: "Validade",
            iconName: "calendar-alt", 
            id: "validade"
        },
        {
            label: "CVV",
            iconName: "lock", 
            id: "cvv"
        },
        {
            label: "Nome impresso:",
            iconName: "user", 
            id: "nomeImpresso"
        },
        {
            label: "CPF",
            iconName: "id-card", 
            id: "cpf"
        }
    ],
    buttonText: "Finalizar"
}