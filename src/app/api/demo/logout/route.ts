import {NextResponse} from 'next/server';
export async function POST(request:Request){const url=new URL(request.url);const host=request.headers.get('host')??url.host;url.host=host;const origin=request.headers.get('origin');if(origin&&new URL(origin).host!==host)return new NextResponse('Origen no permitido',{status:403});const response=NextResponse.redirect(new URL('/acceso-jugadores',url),303);response.cookies.delete('tikitaka-player-demo');return response}

