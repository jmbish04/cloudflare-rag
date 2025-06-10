import { drizzle } from 'drizzle-orm/d1';
import { chatSessions } from '../../schema';

export const onRequest: PagesFunction<Env> = async (ctx) => {
  if (ctx.request.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  const auth = ctx.request.headers.get('Authorization');
  if (!auth || !auth.startsWith('Bearer ')) {
    return new Response('Unauthorized', { status: 401 });
  }

  try {
    const body = await ctx.request.json();
    const db = drizzle(ctx.env.DB);
    await db.insert(chatSessions).values({
      sessionId: body.sessionId,
      mainTopic: body.mainTopic,
      userPrompt: body.userPrompt,
      vectorResultsJson: body.vectorResultsJson,
      r2OutputUrl: body.r2OutputUrl,
    });
    return new Response(JSON.stringify({ ok: true }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (e) {
    console.error(e);
    return new Response('Bad Request', { status: 400 });
  }
};
