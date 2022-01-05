let statesBrazil = [
    'Acre',
    'Alagoas',
    'Amapá',
    'Amazonas',
    'Bahia',
    'Ceará',
    'Distrito Federal',
    'Espírito Santo',
    'Goiás',
    'Maranhão',
    'Mato Grosso',
    'Mato Grosso do Sul',
    'Minas Gerais',
    'Pará',
    'Paraíba',
    'Paraná',
    'Pernambuco',
    'Piauí',
    'Rio de Janeiro',
    'Rio Grande do Norte',
    'Rio Grande do Sul',
    'Rondônia',
    'Roraima',
    'Santa Catarina',
    'São Paulo',
    'Sergipe',
    'Tocantins'];

for (let i = 0; i <= 26; i += 1) {
    let statesOption = document.createElement ('option');
    document.querySelector ('#estado-selected').appendChild (statesOption);
    statesOption.value = statesBrazil[i];
    statesOption.innerHTML = statesBrazil[i];
       
}    