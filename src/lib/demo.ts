export type Match={id:string;home:string;away:string;city:string;sport:string;venue:string;court:string;time:string;league:string;homeOk:boolean;awayOk:boolean;referee:string};
export const seed:Match[]=[
{id:'TT-101',home:'SAD Taxicio',away:'Fear the Buffalos',city:'Barcelona',sport:'Fútbol 7',venue:'Mpal. Vallvidrera (F7)',court:'Campo 1',time:'18:00',league:'ORO · Jueves · Vallvidrera',homeOk:true,awayOk:false,referee:''},
{id:'TT-102',home:'Inter de tu Mami',away:'Stakazo Team',city:'Barcelona',sport:'Fútbol 7',venue:'Mpal. Vallvidrera (F7)',court:'Campo 2',time:'19:00',league:'ORO · Jueves · Vallvidrera',homeOk:true,awayOk:true,referee:'Marc Soler'},
{id:'TT-103',home:'Ruzafa Sport',away:'Turia Club',city:'Valencia',sport:'Fútbol sala',venue:'Polideportivo Benimaclet',court:'Pista 1',time:'19:30',league:'Expansión ficticia · Valencia',homeOk:false,awayOk:false,referee:''},
{id:'TT-104',home:'Chamberí FC',away:'Retiro Athletic',city:'Madrid',sport:'Fútbol 7',venue:'CDM La Elipa',court:'Campo 2',time:'20:00',league:'Expansión ficticia · Madrid',homeOk:true,awayOk:true,referee:'Diego Martín'},
{id:'TT-105',home:'AC Calor',away:'Llesca FC',city:'Barcelona',sport:'Fútbol 7',venue:'Mpal. Vallvidrera (F7)',court:'Campo 2',time:'20:30',league:'ORO · Jueves · Vallvidrera',homeOk:true,awayOk:true,referee:''},
{id:'TT-106',home:'After Hours FC',away:'Atletico Kstf',city:'Barcelona',sport:'Fútbol 7',venue:'Colegio Alemán (F7)',court:'Pista 2',time:'21:00',league:'PLATA · Jueves · Colegio Alemán',homeOk:true,awayOk:true,referee:'Lucía Torres'},
{id:'TT-107',home:'DSB Deutsche Schule Barcelona',away:'Arreplegats FC',city:'Barcelona',sport:'Fútbol 7',venue:'Colegio Alemán (F7)',court:'Campo 1',time:'22:00',league:'PLATA · Jueves · Colegio Alemán',homeOk:true,awayOk:true,referee:''},
{id:'TT-108',home:'Basket Demo Madrid',away:'Basket Demo Retiro',city:'Madrid',sport:'Baloncesto',venue:'Pabellón Demo Madrid',court:'Pista 1',time:'21:00',league:'Expansión ficticia · Basket Madrid',homeOk:true,awayOk:true,referee:''}];
export const referees=[{name:'Marc Soler',city:'Barcelona',sports:['Fútbol 7','Baloncesto']},{name:'Anna Puig',city:'Barcelona',sports:['Fútbol 7']},{name:'Pau Ferrer',city:'Barcelona',sports:['Fútbol 7']},{name:'Lucía Torres',city:'Barcelona',sports:['Fútbol 7','Baloncesto']},{name:'Carlos Vidal',city:'Valencia',sports:['Fútbol sala']},{name:'Diego Martín',city:'Madrid',sports:['Fútbol 7']}];
export type Incident={id:string;match:string;title:string;priority:string;status:string;note:string};
export const initialIncidents:Incident[]=[{id:'INC-01',match:'TT-101',title:'Iluminación del campo 1',priority:'Alta',status:'Abierta',note:''},{id:'INC-02',match:'TT-103',title:'Solicitud de cambio de equipación',priority:'Media',status:'En revisión',note:''}];
export function conflicts(a:Match,b:Match){const minutes=(t:string)=>Number(t.split(':')[0])*60+Number(t.split(':')[1]);return a.id!==b.id&&Math.abs(minutes(a.time)-minutes(b.time))<90;}

// Public names verified on Apúntamelo, 14 October 2026. All operational data is simulated.
export const venueCatalog=[
{name:'Mpal. Vallvidrera (F7)',city:'Barcelona',sport:'Fútbol 7'},
{name:'Colegio Alemán (F7)',city:'Barcelona',sport:'Fútbol 7'},
{name:'Escola Garbí (F7)',city:'Barcelona',sport:'Fútbol 7'},
{name:'Betania Patmos (F5)',city:'Barcelona',sport:'Fútbol 5'},
{name:'Escola FEST (F5)',city:'Barcelona',sport:'Fútbol 5'},
{name:'Futbol Empresas (Xaloc & Promosportive & Garbí )',city:'Barcelona',sport:'Fútbol 7'},
{name:'Futbol Media (Pabellón Mar Bella)',city:'Barcelona',sport:'Fútbol 5'},
{name:'Pabellón C. Alemán (F5)',city:'Barcelona',sport:'Fútbol 5'}];
export const nameSources=['https://apuntamelo.com/organizacion/4/competiciones','https://apuntamelo.com/clasificacion-grupo/4547','https://apuntamelo.com/clasificacion-grupo/4553'];
