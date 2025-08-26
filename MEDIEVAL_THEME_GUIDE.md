# 🏰 Guia do Tema Medieval - Via Sacra Digital

> **✨ Design Medieval e Vitrais**: O tema medieval usa cores inspiradas na Idade Média, com efeitos de vitrais coloridos e tipografia elegante para uma experiência espiritual única.

## 🌟 Paleta de Cores Implementada

### **🏰 Tema Principal - Medieval**
- **Stained Glass** `#2C1810` → Marrom escuro dos vitrais, fundos principais
- **Medieval Gold** `#D4AF37` → Dourado medieval, contornos e títulos
- **Medieval Red** `#8B0000` → Vermelho sangue, botões e destaque
- **Medieval Blue** `#1E3A8A` → Azul profundo, elementos secundários
- **Medieval Green** `#166534` → Verde floresta, elementos naturais
- **Medieval Purple** `#581C87` → Roxo real, elementos nobres
- **Medieval Cream** `#FEF3C7` → Creme pergaminho, fundos de conteúdo
- **Medieval White** `#FFFFFF` → Branco puro, texto sobre fundos escuros
- **Medieval Black** `#0F0F0F` → Preto profundo, modo noturno

### **✨ Paleta Secundária - Vitrais**
- **Vitrail Amber** `#F59E0B` → Âmbar dos vitrais
- **Vitrail Emerald** `#059669` → Esmeralda
- **Vitrail Ruby** `#DC2626` → Rubi
- **Vitrail Sapphire** `#2563EB` → Safira
- **Vitrail Amethyst** `#7C3AED` → Ametista

## 🎯 Classes CSS Disponíveis

### **Botões**
```jsx
// Botão primário (Vermelho Medieval)
<Button variant="primary">Ação Principal</Button>

// Botão secundário (Azul Medieval)
<Button variant="secondary">Ação Secundária</Button>

// Botão outline (Borda Vermelho Medieval)
<Button variant="outline">Ação Outline</Button>
```

### **Cards e Containers**
```jsx
// Container medieval padrão com borda dourada
<div className="medieval-container">
  Conteúdo com bordas douradas e efeito de vitral
</div>

// Card medieval com efeito de vitral
<div className="medieval-card">
  Card com bordas douradas e linha de vitral no topo
</div>

// Seção com borda vermelha à esquerda
<div className="medieval-section">
  Seção destacada
</div>
```

### **Títulos e Textos**
```jsx
// Título principal (Dourado Medieval)
<h1 className="medieval-title">Título Principal</h1>

// Subtítulo (Vermelho Medieval)
<h2 className="medieval-subtitle">Subtítulo</h2>

// Título sobre fundo escuro (Branco)
<h1 className="medieval-title-on-dark">Título sobre Fundo Escuro</h1>

// Subtítulo sobre fundo escuro (Dourado)
<h2 className="medieval-subtitle-on-dark">Subtítulo sobre Fundo Escuro</h2>

// Título sobre fundo claro (Marrom Escuro)
<h1 className="medieval-title-on-light">Título sobre Fundo Claro</h1>

// Subtítulo sobre fundo claro (Vermelho Medieval)
<h2 className="medieval-subtitle-on-light">Subtítulo sobre Fundo Claro</h2>

// Texto primário
<p className="text-text-primary">Texto principal</p>

// Texto secundário
<p className="text-text-secondary">Texto secundário</p>
```

### **Ícones**
```jsx
// Ícone padrão (Dourado Medieval)
<Book className="w-6 h-6 medieval-icon" />

// Ícone sobre fundo escuro (Branco)
<Book className="w-6 h-6 medieval-icon-on-dark" />

// Ícone sobre fundo claro (Marrom Escuro)
<Book className="w-6 h-6 medieval-icon-on-light" />

// Ícone de destaque (Vermelho Medieval)
<Heart className="w-6 h-6 medieval-icon-accent" />
```

### **Formulários**
```jsx
// Input medieval
<input className="medieval-input" placeholder="Digite aqui..." />

// Select medieval
<select className="medieval-select">
  <option>Opção 1</option>
</select>

// Textarea medieval
<textarea className="medieval-input min-h-[80px]" />
```

### **Navegação**
```jsx
// Item de navegação
<div className="medieval-nav-item">Item de Menu</div>

// Item ativo
<div className="medieval-nav-active">Item Ativo</div>

// Navegação principal
<nav className="medieval-nav">Menu Principal</nav>
```

### **Gradientes Medievais**
```jsx
// Gradiente primário (Marrom Escuro → Azul Profundo)
<div className="medieval-gradient-primary">Conteúdo</div>

// Gradiente secundário (Dourado Medieval → Âmbar)
<div className="medieval-gradient-secondary">Conteúdo</div>

// Gradiente de destaque (Vermelho Medieval → Rubi)
<div className="medieval-gradient-accent">Conteúdo</div>
```

### **Efeitos de Vitral**
```jsx
// Efeito de vitral animado
<div className="vitrail-effect">Vitral Colorido</div>

// Efeito de brilho medieval
<div className="medieval-glow">Elemento com brilho</div>

// Efeito de pulso medieval
<div className="medieval-pulse">Elemento pulsante</div>
```

## 🎨 Como Usar nas Páginas

### **Exemplo de Página com Tema Medieval**
```jsx
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../src/components/ui/card';
import { Button } from '../src/components/ui/button';

export default function MinhaPagina() {
  return (
    <div className="min-h-screen p-6 bg-medieval-cream">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold medieval-title">
            Título da Página
          </h1>
          <p className="text-lg text-text-secondary">
            Descrição da página
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="medieval-container">
            <CardHeader>
              <CardTitle className="medieval-subtitle-on-light">
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
- Fundos escuros com `medieval-black`
- Textos claros para contraste
- Bordas douradas mantidas para elegância

## 📱 Responsividade

Todas as classes são responsivas e se adaptam a diferentes tamanhos de tela:
- Mobile-first design
- Breakpoints automáticos
- Espaçamentos adaptativos

## ✨ Dicas de Uso

1. **Hierarquia Visual**: Use `medieval-title` para títulos principais e `medieval-subtitle` para secundários
2. **Contraste**: Sempre use `text-text-primary` para texto principal e `text-text-secondary` para secundário
3. **Ações**: Use `medieval-button-primary` para ações principais e `medieval-button-secondary` para secundárias
4. **Containers**: Use `medieval-container` para cards e `medieval-section` para seções destacadas
5. **Bordas**: As bordas douradas (`border-medieval-gold`) são aplicadas automaticamente nos componentes
6. **Vitrais**: Use `vitrail-effect` para elementos especiais com cores de vitral

## 🎭 Exemplo de Aplicação Completa

```jsx
// Página com tema medieval completo
<div className="min-h-screen medieval-gradient-primary">
  <header className="medieval-nav p-6">
    <h1 className="medieval-title-on-dark">Via Sacra Digital</h1>
  </header>
  
  <main className="p-6 bg-medieval-cream">
    <div className="medieval-container p-8">
      <h2 className="medieval-subtitle-on-light mb-4">Bem-vindo</h2>
      <p className="text-text-primary mb-6">
        Uma experiência espiritual com design medieval
      </p>
      <div className="flex gap-4">
        <Button variant="primary">Começar</Button>
        <Button variant="secondary">Saiba Mais</Button>
      </div>
    </div>
    
    {/* Efeito de vitral especial */}
    <div className="vitrail-effect p-6 rounded-lg text-white text-center">
      <h3 className="text-2xl font-bold mb-2">Vitral Sagrado</h3>
      <p>Efeito especial com cores de vitral</p>
    </div>
  </main>
</div>
```

## 🎨 Características Especiais

### **Efeitos de Vitral**
- **Linhas de Vitral**: Todos os containers têm uma linha colorida no topo simulando vitrais
- **Gradientes Animados**: Efeitos de vitral com animações suaves
- **Cores Preciosas**: Paleta inspirada em pedras preciosas dos vitrais

### **Tipografia Medieval**
- **Fonte Cinzel**: Títulos em fonte elegante e medieval
- **Times New Roman**: Texto em fonte clássica
- **Espaçamento**: Letras com espaçamento adequado para legibilidade

### **Animações Medievais**
- **Brilho Dourado**: Efeito de brilho nos elementos dourados
- **Pulso**: Animações suaves de pulso
- **Transições**: Todas as interações têm transições suaves

---

**🏰 O tema medieval com vitrais está agora completamente implementado em todo o aplicativo Via Sacra Digital!**


