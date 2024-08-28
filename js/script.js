// #  Fase di Preparazione
//creo l'array di oggetti
const ourTeam = [
    //creo gli oggetti...
    {
        //...contenenti le infomrazioni delle singole persone
        nome: 'Wayne Barnett',
        profession: 'Founder & CEO',
        profilePic: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        nome: 'Angela Caroll',
        profession: 'Chief Editor',
        profilePic: 'angela-caroll-chief-editor.jpg'
    },
    {
        nome: 'Walter Gordon',
        profession: 'Office Manager',
        profilePic: 'walter-gordon-office-manager.jpg'
    },
    {
        nome: 'Angela Lopez',
        profession: 'Social Media Manager',
        profilePic: 'angela-lopez-social-media-manager.jpg'
    },
    {
        nome: 'Scott Estrada',
        profession: 'Developer',
        profilePic: 'scott-estrada-developer.jpg'
    },
    {
        nome: 'Barbara Ramos',
        profession: 'Graphic Designer',
        profilePic: 'barbara-ramos-graphic-designer.jpg'
    }
];

//Per ogni elemento dell'array...
for (let i = 0; i < ourTeam.length; i++) {
    //...recupero il singolo oggetto
    const person = ourTeam[i];
    //Stampo in console i campi degli oggetti
    console.log(`Full-Name: `, person.nome); //loggo il nome e cognome della persona
    console.log('Profession: ', person.profession); //loggo la professione della persona
    console.log('Profile Picture: ', person.profilePic); //stampo la foto come stringa
}