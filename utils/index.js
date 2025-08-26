export function createPageUrl(pageName) {
  return `/${pageName.toLowerCase().replace(/\s+/g, '-')}`;
}

export function formatDate(date) {
  return new Intl.DateTimeFormat('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(new Date(date));
}

export function truncateText(text, maxLength = 100) {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
}

export async function getDailyVerse() {
  try {
    // Usar a API real da Bíblia
    const response = await fetch('https://www.abibliadigital.com.br/api/verses/aa/random');
    if (!response.ok) {
      throw new Error('Erro ao buscar versículo do dia');
    }
    const data = await response.json();
    
    // Formatar o versículo retornado
    const reference = `${data.book.name} ${data.chapter}:${data.number}`;
    return `${data.text} - ${reference}`;
  } catch (error) {
    console.error('Erro ao buscar versículo do dia:', error);
    // Versículo padrão em caso de erro
    return "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna. - João 3:16";
  }
}

// Função para buscar versículo específico (simulação de API do bibliaon.com)
export async function searchBibleVerse(query) {
  try {
    // Simulação de busca na Bíblia
    // Em produção, isso seria uma chamada real para a API do bibliaon.com
    const mockResults = [
      {
        reference: "João 3:16",
        text: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.",
        book: "João",
        chapter: 3,
        verse: 16
      },
      {
        reference: "Salmo 23:1",
        text: "O Senhor é o meu pastor; nada me faltará.",
        book: "Salmo",
        chapter: 23,
        verse: 1
      },
      {
        reference: "Filipenses 4:13",
        text: "Posso todas as coisas em Cristo que me fortalece.",
        book: "Filipenses",
        chapter: 4,
        verse: 13
      }
    ];
    
    // Simula busca baseada na query
    const filteredResults = mockResults.filter(result => 
      result.text.toLowerCase().includes(query.toLowerCase()) ||
      result.reference.toLowerCase().includes(query.toLowerCase())
    );
    
    return filteredResults.length > 0 ? filteredResults : mockResults;
  } catch (error) {
    console.error('Erro ao buscar versículos:', error);
    return [];
  }
}
