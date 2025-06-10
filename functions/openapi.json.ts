import spec from '../public/openapi.json';

export const onRequest: PagesFunction = async () => {
  return new Response(JSON.stringify(spec), {
    headers: { 'Content-Type': 'application/json' },
  });
};
