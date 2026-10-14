/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import {notFound} from 'next/navigation';
import {CorporateShell} from '@/components/corporate-shell';
import {ContactForm} from '@/components/contact-form';
import {leagues,photo} from '@/lib/corporate';
export function generateStaticParams(){return leagues.map(l=>({slug:l.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const league=leagues.find(l=>l.slug===slug);return {title:(league?.name??'Liga')+' · Tiki Taka'}}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const l=leagues.find(l=>l.slug===slug);if(!l)notFound();return <CorporateShell><section className="site-detail-hero"><img src={photo(l.image)} alt="Instalación Tiki Taka"/><div><Link href="/#ligas" className="site-text-link">← Todas las ligas</Link><p className="site-kicker">{l.tag}</p><h1>{l.name}</h1><p>{l.description}</p><a className="site-button" href="#informacion">Solicita información ↗</a></div></section><section className="site-section site-league-detail"><div><p className="site-kicker">TU EQUIPO TIENE UN LUGAR</p><h2>Ven a jugar.<br/>Quédate por la liga.</h2><p>{l.detail}</p></div><div>{l.features.map((f,i)=><article key={f}><span>0{i+1}</span><h3>{f}</h3></article>)}<p className="site-muted">Consulta plazas, horarios y condiciones de la próxima temporada con Tiki Taka.</p></div></section><section className="site-section site-contact" id="informacion"><div><p className="site-kicker">DA EL PRIMER PASO</p><h2>Hablemos<br/>de tu equipo.</h2><p>Solicita información sobre {l.name.toLowerCase()}.</p></div><ContactForm initialLeague={l.name}/></section></CorporateShell>}
