
# Dependências Realmente Utilizadas no Projeto

## Dependências Principais em Uso:
- **react** ^18.3.1 - Framework principal
- **react-dom** ^18.3.1 - Renderização do React
- **react-router-dom** ^6.26.2 - Roteamento (usado no App.tsx)
- **@tanstack/react-query** ^5.56.2 - Gerenciamento de estado (usado no App.tsx)

## UI e Styling:
- **tailwind-merge** ^2.5.2 - Merge de classes Tailwind (usado em utils.ts)
- **clsx** ^2.1.1 - Utilitário para classes condicionais (usado em utils.ts)
- **class-variance-authority** ^0.7.1 - Variantes de componentes (usado nos componentes UI)
- **lucide-react** ^0.462.0 - Ícones (amplamente usado no Index.tsx)

## Radix UI (Componentes Base):
- **@radix-ui/react-slot** ^1.1.0 - Usado no Button component
- **@radix-ui/react-toast** ^2.1 - Sistema de toast (usado no App.tsx)
- **@radix-ui/react-tooltip** ^1.1.4 - Tooltips (usado no App.tsx)
- **@radix-ui/react-label** ^2.1.0 - Labels (componente disponível)

## Dependências NÃO Utilizadas (podem ser removidas):
- @radix-ui/react-accordion
- @radix-ui/react-alert-dialog  
- @radix-ui/react-avatar
- @radix-ui/react-checkbox
- @radix-ui/react-collapsible
- @radix-ui/react-context-menu
- @radix-ui/react-dialog
- @radix-ui/react-dropdown-menu
- @radix-ui/react-hover-card
- @radix-ui/react-menubar
- @radix-ui/react-navigation-menu
- @radix-ui/react-popover
- @radix-ui/react-progress
- @radix-ui/react-radio-group
- @radix-ui/react-scroll-area
- @radix-ui/react-select
- @radix-ui/react-separator
- @radix-ui/react-slider
- @radix-ui/react-switch
- @radix-ui/react-tabs
- @radix-ui/react-toggle
- @radix-ui/react-toggle-group
- @hookform/resolvers
- react-hook-form
- zod
- cmdk
- date-fns
- embla-carousel-react
- input-otp
- next-themes
- react-day-picker
- react-resizable-panels
- recharts
- sonner
- tailwindcss-animate
- vaul

## Para usar no VS Code:
Instale apenas as dependências realmente necessárias:
```bash
npm install react react-dom react-router-dom @tanstack/react-query tailwind-merge clsx class-variance-authority lucide-react @radix-ui/react-slot @radix-ui/react-toast @radix-ui/react-tooltip @radix-ui/react-label
```
