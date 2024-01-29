function getDepartmentFromName(name) {
    var apiUrl = 'https://geo.api.gouv.fr/communes?nom=' + encodeURIComponent(name) + '&fields=departement&format=json';

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        if (data.length > 0 && data[0].departement) {
            var departmentCode = data[0].departement.code;
            var departmentName = data[0].departement.nom;
            console.log(name + ' est dans le département ' + departmentCode + ' - ' + departmentName);
        } else {
            console.log('Aucun résultat trouvé pour ' + name);
        }
    })
    .catch(error => {
        console.error('Erreur lors de la récupération des données:', error);
    });
}


