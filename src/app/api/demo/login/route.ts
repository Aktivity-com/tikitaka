import {NextResponse} from 'next/server';
export async function POST(request:Request){const url=new URL(request.url);const host=request.headers.get('host')??url.host;url.host=host;const origin=request.headers.get('origin');if(origin&&new URL(origin).host!==host)return new NextResponse('Origen no permitido',{status:403});const response=NextResponse.redirect(new URL('/competiciones',url),303);response.cookies.set('tikitaka-player-demo','sample-player-4547',{httpOnly:true,secure:url.protocol==='https:',sameSite:'lax',path:'/',maxAge:60*60*8});return response}

