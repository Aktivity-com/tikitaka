import data from './apuntamelo-catalog.json';
export type Team={id:string;name:string};
export type Group={id:string;name:string;url:string;teams:Team[]};
export type Installation={id:string;name:string;url:string;divisions:{name:string;url:string;groups:Group[]}[];groups:Group[]};
export const installations:Installation[]=data.installations;
export const catalogGroups=installations.flatMap(installation=>[...installation.divisions.flatMap(d=>d.groups.map(g=>({...g,installation:installation.name,division:d.name,sport:sportFor(installation.name)}))),...installation.groups.map(g=>({...g,installation:installation.name,division:'Sin división',sport:sportFor(installation.name)}))]);
export function sportFor(name:string){return name.includes('(F5)')?'Fútbol 5':name.includes('(F7)')?'Fútbol 7':'Fútbol';}
export const catalogTeams=catalogGroups.flatMap(g=>g.teams.map(t=>({...t,groupId:g.id,group:g.name,division:g.division,installation:g.installation,sport:g.sport,source:`https://apuntamelo.com/equipo/${t.id}`})));
export type Player={key:string;id:string|null;name:string;dorsal:string|null;team:string;groupId:string;position:string|null;points:string|null;average:string|null;mvp:string|null;gameValue:string|null;recent:string[];photo:string|null;source:string;metrics:{category:string;value:string;rank:string|null;source:string}[]};
