import { drizzle } from 'drizzle-orm/d1';
import { sql } from 'drizzle-orm';

export const onRequest: PagesFunction<Env> = async (ctx) => {
  const db = drizzle(ctx.env.DB);
  const { results } = (await db.run(
    sql`SELECT main_topic FROM email_threads UNION SELECT main_topic FROM email_docs`
  )) as { results: { main_topic: string | null }[] };

  const topics = results
    .map(r => r.main_topic)
    .filter((t): t is string => !!t)
    .sort();

  return new Response(JSON.stringify({ topics }), {
    headers: { 'Content-Type': 'application/json' },
  });
};
