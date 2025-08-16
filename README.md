# Paróquia São João Batista IA e Bíblia 
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bíblia Paróquia São João Batista</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            background-color: #f9f9f9;
            color: #333;
        }
        header {
            text-align: center;
            margin-bottom: 40px;
        }
        header img {
            max-width: 150px;
            margin-bottom: 20px;
        }
        h1 {
            color: #2c3e50;
        }
        h2 {
            color: #34495e;
        }
        code {
            background-color: #eee;
            padding: 2px 6px;
            border-radius: 4px;
        }
        pre {
            background-color: #eee;
            padding: 10px;
            border-radius: 6px;
            overflow-x: auto;
        }
        section {
            margin-bottom: 30px;
        }
        ul {
            list-style: disc;
            margin-left: 20px;
        }
        footer {
            margin-top: 50px;
            text-align: center;
            font-size: 0.9em;
            color: #777;
        }
    </style>
</head>
<body>
    <header>
        <img src="logo_paroquia.png" alt="Logo da Paróquia">
        <h1>Bíblia Paróquia São João Batista</h1>
    </header>

    <section>
        <h2>Sobre o Projeto</h2>
        <p>
            <strong>Bíblia Paróquia São João Batista</strong> é um aplicativo interativo desenvolvido para a paróquia
            <strong>São João Batista – Sertãozinho/SP</strong>, com o objetivo de:
        </p>
        <ul>
            <li>Responder perguntas sobre a Bíblia e o <strong>Catecismo da Igreja Católica</strong> usando APIs do Gemini.</li>
            <li>Permitir a leitura de diversas versões da Bíblia, incluindo:
                <ul>
                    <li>Septuaginta</li>
                    <li>Vulgata</li>
                    <li>Ave Maria</li>
                    <li>Bíblia Pastoral</li>
                    <li>Bíblia de Jerusalém</li>
                </ul>
            </li>
            <li>Funcionar localmente em um <strong>Raspberry Pi</strong> (ou computador acessível) com interface em <strong>tablet</strong>.</li>
        </ul>
        <p><strong>Motivação:</strong> Este projeto nasce da <strong>fé em Jesus Cristo</strong> e do <strong>mandamento de ajudar a espalhar o Evangelho</strong>, tornando a Palavra de Deus acessível e interativa para todos na comunidade da paróquia.</p>
    </section>

    <section>
        <h2>Arquitetura do Projeto</h2>
        <ul>
            <li><strong>Backend/API:</strong> Python (<code>Flask</code> ou <code>FastAPI</code>) para processar perguntas e consultas à Bíblia/Catecismo.</li>
            <li><strong>Frontend/UI:</strong> Java (<code>JavaFX</code>) para interface gráfica interativa no tablet.</li>
            <li>Comunicação entre backend e frontend via <strong>requisições HTTP/JSON</strong>.</li>
        </ul>
    </section>

    <section>
        <h2>Instalação</h2>
        <pre>
git clone https://github.com/SeuUsuario/Biblia-Paroquia-SJB.git

pip install -r requirements.txt
        </pre>
        <p>Configure a UI Java com <code>JavaFX</code> e conecte ao backend Python.</p>
    </section>

    <section>
        <h2>Uso</h2>
        <ul>
            <li>Abra o backend Python (<code>app.py</code>) no Raspberry Pi.</li>
            <li>Abra a UI Java no tablet ou na tela conectada.</li>
            <li>Digite perguntas sobre a Bíblia ou Catecismo e receba respostas instantâneas.</li>
            <li>Navegue pelas versões da Bíblia disponíveis e leia os textos diretamente no app.</li>
        </ul>
    </section>

    <section>
        <h2>Contribuidores</h2>
        <ul>
            <li><strong>Davi</strong> – Desenvolvimento da arquitetura e frontend.</li>
            <li><strong>Antônio A. Meloni</strong> – Integração com APIs e backend.</li>
        </ul>
    </section>

    <section>
        <h2>Licença</h2>
        <p>Este projeto é para <strong>uso exclusivo da Paróquia São João Batista</strong> e não deve ser comercializado.</p>
    </section>

    <footer>
        &copy; 2025 Bíblia Paróquia São João Batista
    </footer>
</body>
</html>
