const database = 'BD3-AV4-PEDRO-VASQUE';
const collection = 'Chat';

use(database);

db[collection].insertMany(
    [
        {
            "contato": "Pedro",
            "data_hora": "2024-11-17T09:30:00Z",
            "msg": "Bruna, você já pensou sobre como encontrar alegria nas pequenas coisas do dia a dia?"
        },
        {
            "contato": "Bruna",
            "data_hora": "2024-11-17T09:32:00Z",
            "msg": "A verdadeira alegria está nas coisas simples. Às vezes, os momentos mais felizes estão nas pequenas conquistas e no contato genuíno com as pessoas."
        },
        {
            "contato": "Pedro",
            "data_hora": "2024-11-17T09:34:00Z",
            "msg": "Mas como podemos manter a alegria, especialmente quando a vida parece nos sobrecarregar?"
        },
        {
            "contato": "Bruna",
            "data_hora": "2024-11-17T09:36:00Z",
            "msg": "A chave está em cultivar a gratidão. Mesmo nas dificuldades, podemos encontrar algo pelo qual ser gratos, e isso ajuda a nos mantermos conectados com a alegria."
        },
        {
            "contato": "Pedro",
            "data_hora": "2024-11-17T09:38:00Z",
            "msg": "E quando o cansaço e o estresse tomam conta, como podemos nos recarregar?"
        },
        {
            "contato": "Bruna",
            "data_hora": "2024-11-17T09:40:00Z",
            "msg": "É importante tirar um tempo para nós mesmos, fazer algo que nos dê prazer, como ler, caminhar ao ar livre ou simplesmente descansar. A autocompaixão é essencial para nossa saúde mental e emocional."
        },
        {
            "contato": "Pedro",
            "data_hora": "2024-11-17T09:42:00Z",
            "msg": "Às vezes, parece que estamos buscando constantemente aprovação externa. Como podemos aprender a ser mais autênticos?"
        },
        {
            "contato": "Bruna",
            "data_hora": "2024-11-17T09:44:00Z",
            "msg": "Ser autêntico começa com o autoconhecimento. Quando aprendemos a nos conhecer e a aceitar nossas imperfeições, deixamos de buscar validação e passamos a viver de acordo com nossos próprios valores."
        },
        {
            "contato": "Pedro",
            "data_hora": "2024-11-17T09:46:00Z",
            "msg": "Então, qual conselho você daria para alguém que quer encontrar equilíbrio entre trabalho, vida pessoal e bem-estar?"
        },
        {
            "contato": "Bruna",
            "data_hora": "2024-11-17T09:48:00Z",
            "msg": "O equilíbrio vem quando aprendemos a definir nossas prioridades e a estabelecer limites. A vida não é sobre ser perfeito em tudo, mas sobre fazer escolhas conscientes que promovam o bem-estar geral."
        }
    ]
)    