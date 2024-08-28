// #  Fase di Preparazione
//recupero la lista dal DOM
const teamList = document.getElementById('team-list');
//creo lista vuota
// let list; // ! se uso questa variabile la prima cosa stampata in pagina da "undefined"
let list = '';
//creo l'array di oggetti
const ourTeam = [
    //creo gli oggetti...
    {
        //...contenenti le infomrazioni delle singole persone
        name: 'Wayne Barnett',
        profession: 'Founder & CEO',
        profilePic: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        profession: 'Chief Editor',
        profilePic: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        profession: 'Office Manager',
        profilePic: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        profession: 'Social Media Manager',
        profilePic: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        profession: 'Developer',
        profilePic: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        profession: 'Graphic Designer',
        profilePic: 'barbara-ramos-graphic-designer.jpg'
    }
];

//Per ogni elemento dell'array...
for (let i = 0; i < ourTeam.length; i++) {
    //...recupero il singolo oggetto
    const person = ourTeam[i];
    console.log(person);
    //Stampo in console i campi degli oggetti
    console.log(`Full-Name: `, person.name); //loggo il nome e cognome della persona
    console.log('Profession: ', person.profession); //loggo la professione della persona
    console.log('Profile Picture: ', person.profilePic); //stampo la foto come stringa
    //creo le variabili per le chiavi dei singoli oggetti
    const name = person.name;
    const profession = person.profession;
    const pic = person.profilePic;
    console.log(name, profession, pic);
    //creo la lista con l'immagine
    list +=
        `<div class="col">
            <div class="card h-100" style="width: 18rem;">
               <img src="img/${pic}" class="card-img-top"> 
               <div class="card-body">
                    <h1 class="text-center">${name}</h1>
                    <p class="text-center">${profession}</p>
                </div>
            </div>
        </div>
    `
}

//inserire gli elementi lista nel DOM
teamList.innerHTML = list;