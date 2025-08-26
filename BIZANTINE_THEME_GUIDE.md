# 🎨 Guia do Tema Bizantino - Via Sacra Digital

> **✨ Design Limpo e Elegante**: O tema bizantino usa apenas cores sólidas e bordas douradas, sem sombras de texto para máxima legibilidade e simplicidade visual.

## 🌟 Paleta de Cores Implementada

### **Tema Principal (Base Litúrgica)**
- **Azul Imperial** `#2C3E75` → Fundo de ícones, telas principais, transmite o "céu"
- **Vermelho Carmim** `#8C1C13` → Botões, detalhes de destaque, elementos fortes (símbolo de Cristo e dos mártires)
- **Dourado Ícone** `#C6A550` → Contornos, ícones, títulos
- **Branco Puro** `#FFFFFF` → Leitura clara em contraste
- **Preto Profundo** `#0D0D0D` → Fundos de separação, modo noturno

### **Paleta Secundária (Apoio)**
- **Azul Celeste** `#4A6FA5` → Detalhes suaves, botões secundários
- **Vermelho Escarlate** `#B22222` → Variação para hover ou alertas
- **Dourado Antigo** `#B08D57` → Fundos quentes, caixas de destaque
- **Creme Ícone** `#F5ECD9` → Áreas de respiro, fundos neutros

## 🎯 Classes CSS Disponíveis

### **Botões**
```jsx
// Botão primário (Vermelho Carmim)
<Button variant="primary">Ação Principal</Button>

// Botão secundário (Azul Celeste)
<Button variant="secondary">Ação Secundária</Button>

// Botão outline (Borda Vermelho Carmim)
<Button variant="outline">Ação Outline</Button>
```

### **Cards e Containers**
```jsx
// Container bizantino padrão
<div className="bizantine-container">
  Conteúdo com bordas douradas
</div>

// Seção com borda vermelha à esquerda
<div className="bizantine-section">
  Seção destacada
</div>
```

### **Títulos e Textos**
```jsx
// Título principal (Dourado Ícone)
<h1 className="bizantine-title">Título Principal</h1>

// Subtítulo (Vermelho Carmim)
<h2 className="bizantine-subtitle">Subtítulo</h2>

// Título sobre fundo escuro (Branco)
<h1 className="bizantine-title-on-dark">Título sobre Fundo Escuro</h1>

// Subtítulo sobre fundo escuro (Dourado)
<h2 className="bizantine-subtitle-on-dark">Subtítulo sobre Fundo Escuro</h2>

// Título sobre fundo claro (Azul Imperial)
<h1 className="bizantine-title-on-light">Título sobre Fundo Claro</h1>

// Subtítulo sobre fundo claro (Vermelho Carmim)
<h2 className="bizantine-subtitle-on-light">Subtítulo sobre Fundo Claro</h2>

// Texto primário
<p className="text-text-primary">Texto principal</p>

// Texto secundário
<p className="text-text-secondary">Texto secundário</p>
```

### **Ícones**
```jsx
// Ícone padrão (Dourado)
<Book className="w-6 h-6 bizantine-icon" />

// Ícone sobre fundo escuro (Branco)
<Book className="w-6 h-6 bizantine-icon-on-dark" />

// Ícone sobre fundo claro (Azul Imperial)
<Book className="w-6 h-6 bizantine-icon-on-light" />

// Ícone de destaque (Vermelho Carmim)
<Heart className="w-6 h-6 bizantine-icon-accent" />
```

### **Formulários**
```jsx
// Input bizantino
<input className="bizantine-input" placeholder="Digite aqui..." />

// Select bizantino
<select className="bizantine-select">
  <option>Opção 1</option>
</select>

// Textarea bizantino
<textarea className="bizantine-input min-h-[80px]" />
```

### **Navegação**
```jsx
// Item de navegação
<div className="bizantine-nav-item">Item de Menu</div>

// Item ativo
<div className="bizantine-nav-active">Item Ativo</div>

// Navegação principal
<nav className="bizantine-nav">Menu Principal</nav>
```

### **Gradientes**
```jsx
// Gradiente primário (Azul Imperial → Azul Celeste)
<div className="bizantine-gradient-primary">Conteúdo</div>

// Gradiente secundário (Dourado Ícone → Dourado Antigo)
<div className="bizantine-gradient-secondary">Conteúdo</div>

// Gradiente de destaque (Vermelho Carmim → Vermelho Escarlate)
<div className="bizantine-gradient-accent">Conteúdo</div>
```

### **Animações**
```jsx
// Efeito de brilho
<div className="bizantine-glow">Elemento com brilho</div>

// Efeito de pulso
<div className="bizantine-pulse">Elemento pulsante</div>
```

## 🎨 Como Usar nas Páginas

### **Exemplo de Página com Tema Bizantino**
```jsx
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../src/components/ui/card';
import { Button } from '../src/components/ui/button';

export default function MinhaPagina() {
  return (
    <div className="min-h-screen p-6 bg-icon-cream">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bizantine-title">
            Título da Página
          </h1>
          <p className="text-lg text-text-secondary">
            Descrição da página
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bizantine-container">
            <CardHeader>
              <CardTitle className="bizantine-subtitle">
                Card de Exemplo
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-text-primary">
                Conteúdo do card
              </p>
              <Button variant="primary" className="mt-4">
                Ação
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Botões de Ação */}
        <div className="flex gap-4 justify-center">
          <Button variant="primary">Ação Principal</Button>
          <Button variant="secondary">Ação Secundária</Button>
          <Button variant="outline">Ação Outline</Button>
        </div>
      </div>
    </div>
  );
}
```

## 🌙 Modo Noturno

O tema automaticamente se adapta ao modo noturno do sistema:
- Fundos escuros com `deep-black`
- Textos claros para contraste
- Bordas douradas mantidas para elegância

## 📱 Responsividade

Todas as classes são responsivas e se adaptam a diferentes tamanhos de tela:
- Mobile-first design
- Breakpoints automáticos
- Espaçamentos adaptativos

## ✨ Dicas de Uso

1. **Hierarquia Visual**: Use `bizantine-title` para títulos principais e `bizantine-subtitle` para secundários
2. **Contraste**: Sempre use `text-text-primary` para texto principal e `text-text-secondary` para secundário
3. **Ações**: Use `bizantine-button-primary` para ações principais e `bizantine-button-secondary` para secundárias
4. **Containers**: Use `bizantine-container` para cards e `bizantine-section` para seções destacadas
5. **Bordas**: As bordas douradas (`border-icon-gold`) são aplicadas automaticamente nos componentes
6. **Simplicidade**: Usamos apenas cores sólidas, sem sombras de texto para máxima legibilidade

## 🎨 **Regras de Contraste - IMPORTANTE!**

### **❌ NUNCA FAÇA:**
- **Duas cores escuras juntas**: Texto escuro sobre fundo escuro
- **Duas cores claras juntas**: Texto claro sobre fundo claro

### **✅ SEMPRE USE:**
- **Sobre fundos escuros** (Azul Imperial, Gradientes escuros):
  - `bizantine-title-on-dark` → Texto branco
  - `bizantine-subtitle-on-dark` → Texto dourado
  - `bizantine-icon-on-dark` → Ícones brancos

- **Sobre fundos claros** (Creme Ícone, Branco):
  - `bizantine-title-on-light` → Texto azul imperial
  - `bizantine-subtitle-on-light` → Texto vermelho carmim
  - `bizantine-icon-on-light` → Ícones azuis

### **Exemplos de Uso Correto:**
```jsx
// ✅ CORRETO: Texto claro sobre fundo escuro
<div className="bizantine-gradient-primary">
  <h1 className="bizantine-title-on-dark">Título Branco</h1>
  <p className="text-pure-white">Texto branco</p>
</div>

// ✅ CORRETO: Texto escuro sobre fundo claro
<div className="bg-icon-cream">
  <h1 className="bizantine-title-on-light">Título Azul</h1>
  <p className="text-text-primary">Texto escuro</p>
</div>

// ❌ ERRADO: Duas cores escuras juntas
<div className="bizantine-gradient-primary">
  <h1 className="bizantine-title">Título Dourado sobre Azul Escuro</h1>
</div>

// ❌ ERRADO: Duas cores claras juntas
<div className="bg-icon-cream">
  <h1 className="bizantine-title-on-dark">Título Branco sobre Creme</h1>
</div>
```

## 🎭 Exemplo de Aplicação Completa

```jsx
// Página com tema bizantino completo
<div className="min-h-screen bizantine-gradient-primary">
  <header className="bizantine-nav p-6">
    <h1 className="bizantine-title">Via Sacra Digital</h1>
  </header>
  
  <main className="p-6 bg-icon-cream">
    <div className="bizantine-container p-8">
      <h2 className="bizantine-subtitle mb-4">Bem-vindo</h2>
      <p className="text-text-primary mb-6">
        Uma experiência espiritual com design bizantino
      </p>
      <div className="flex gap-4">
        <Button variant="primary">Começar</Button>
        <Button variant="secondary">Saiba Mais</Button>
      </div>
    </div>
  </main>
</div>
```

---

**🎨 O tema bizantino está agora completamente implementado em todo o aplicativo Via Sacra Digital!**
