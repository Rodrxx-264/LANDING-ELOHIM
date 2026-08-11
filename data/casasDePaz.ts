export type CasaDePaz={id:number;nombre:string;mapsUrl:string;whatsapp:string;lat:number;lng:number;horario:string;nueva?:boolean;image:string};
export const casasDePaz:CasaDePaz[]=[
{id:1,nombre:'Casa de Paz 01',mapsUrl:'https://maps.app.goo.gl/fUHxMcHo4xJi7UBP9',whatsapp:'59955937',lat:14.519681,lng:-90.544808,horario:'Martes · 7:00 PM',image:'/photos/casa-01.webp'},
{id:2,nombre:'Casa de Paz 02',mapsUrl:'https://maps.app.goo.gl/G2g7hDngXav1bXAp6',whatsapp:'44347809',lat:14.51956,lng:-90.550032,horario:'Martes · 7:00 PM',image:'/photos/casa-02.webp'},
{id:3,nombre:'Casa de Paz 03',mapsUrl:'https://maps.app.goo.gl/aSkBzcTi5ERaVEXK7',whatsapp:'48826340',lat:14.5166673,lng:-90.5487354,horario:'Martes · 7:00 PM',nueva:true,image:'/photos/casa-03.webp'}];
export const versiculoDelDia={texto:'Porque donde están dos o tres congregados en mi nombre, allí estoy yo en medio de ellos.',referencia:'Mateo 18:20',fecha:'2026-08-11'};
export const whatsappMessage='Hola, me gustaría recibir más información sobre las Casas de Paz de Red Elohim.';
export function whatsappUrl(numero:string){return `https://wa.me/${numero}?text=${encodeURIComponent(whatsappMessage)}`;}
