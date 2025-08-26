const GEMINI_API_KEY = 'AizaSyDjI-Rh-8grXim9eDruf2WOly9Wv2AI0sw';
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

export async function InvokeLLM(prompt, options = {}) {
  try {
    const response = await fetch(GEMINI_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-goog-api-key': GEMINI_API_KEY
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: prompt
              }
            ]
          }
        ]
      })
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    
    // Extrair o texto da resposta do Gemini
    if (data.candidates && data.candidates[0] && data.candidates[0].content) {
      const text = data.candidates[0].content.parts[0].text;
      return {
        text: text,
        confidence: 0.9,
        tokens: prompt.length + text.length
      };
    } else {
      throw new Error('Invalid response format from Gemini API');
    }
  } catch (error) {
    console.error('Erro na chamada da API Gemini:', error);
    
    // Fallback para resposta simulada em caso de erro
    return {
      text: "Desculpe, não consegui processar sua solicitação no momento. Por favor, tente novamente mais tarde.",
      confidence: 0.5,
      tokens: prompt.length,
      error: error.message
    };
  }
}

export async function generatePrayer(topic) {
  const prompt = `Gere uma oração católica sobre: ${topic}. 
  A oração deve ser:
  - Em português brasileiro
  - Com tom reverente e católico
  - Com aproximadamente 4-6 linhas
  - Focada no tema solicitado
  - Terminando com "Amém"`;
  
  return await InvokeLLM(prompt);
}

export async function generateDevotional(date) {
  const prompt = `Gere um devocional católico para a data: ${date}. 
  O devocional deve incluir:
  - Uma reflexão espiritual de 3-4 parágrafos
  - Um versículo bíblico relacionado
  - Uma oração de agradecimento
  - Em português brasileiro
  - Com tom católico tradicional`;
  
  return await InvokeLLM(prompt);
}

export async function generateBibleInsight(verse, question) {
  const prompt = `Analise o seguinte versículo bíblico: "${verse}"
  
  Pergunta do usuário: ${question}
  
  Forneça:
  - Uma explicação clara e católica do versículo
  - Como aplicar essa mensagem na vida diária
  - Uma oração relacionada ao tema
  - Em português brasileiro
  - Com tom reverente e edificante`;
  
  return await InvokeLLM(prompt);
}

export async function generateSpiritualGuidance(topic) {
  const prompt = `Forneça orientação espiritual católica sobre: ${topic}
  
  A orientação deve incluir:
  - Princípios bíblicos relacionados
  - Conselhos práticos para a vida cristã
  - Uma oração de intercessão
  - Em português brasileiro
  - Baseada na doutrina católica
  - Com tom amoroso e acolhedor`;
  
  return await InvokeLLM(prompt);
}

export async function generateSaintPrayer(saintName) {
  const prompt = `Gere uma oração para ${saintName} baseada em sua vida e virtudes.
  
  A oração deve:
  - Ser específica para este santo
  - Mencionar suas principais virtudes
  - Incluir uma petição relacionada à sua intercessão
  - Ser em português brasileiro
  - Ter aproximadamente 4-6 linhas
  - Terminar com "Amém"`;
  
  return await InvokeLLM(prompt);
}
