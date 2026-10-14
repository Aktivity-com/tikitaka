import {Suspense} from 'react';
import {cookies} from 'next/headers';
import {redirect} from 'next/navigation';
import {CorporateShell} from '@/components/corporate-shell';
import {PlayerPortal} from '@/components/player-portal';
import {demoPlayer,demoRoster,demoRankings,demoFixtures,demoStandings} from '@/lib/player-demo';
export const metadata={title:'Mi competición · Tiki Taka'};
async function ScopedPortal(){const session=(await cookies()).get('tikitaka-player-demo');if(session?.value!=='sample-player-4547')redirect('/acceso-jugadores');return <PlayerPortal player={demoPlayer} roster={demoRoster} rankings={demoRankings} fixtures={demoFixtures} standings={demoStandings}/>}
export default function Page(){return <CorporateShell><Suspense fallback={<section className="site-portal">Preparando tu competición…</section>}><ScopedPortal/></Suspense></CorporateShell>}
