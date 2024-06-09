import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ylmhtwqadjatbsuaqqej.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlsbWh0d3FhZGphdGJzdWFxcWVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUxMjY2MjQsImV4cCI6MjAzMDcwMjYyNH0.BftSLYf0hud4n2uOd2MEK04qW8pEIzFHhw1fGNornPc' // Substitua 'sua_chave_aqui' pela sua chave Supabase

const supabase = createClient(supabaseUrl, supabaseKey)

async function api() {
  const { data, error } = await supabase
  .from('projectsData')
  .select(`id, project_name, project_long_description, project_short_description`)

  if (error) {
    console.error('Erro ao buscar dados:', error);
    return [];
  }

  return data;
}

export default api;
