# Cart — E-commerce (Figma)

Pixel-perfect реализация страницы **Cart** из [E-commerce Website Template (Community)](https://www.figma.com/design/cmEE8JioSGRgfL5JJlOzEZ/E-commerce-Website-Template--Freebie---Community-?node-id=202-32).

## Стек

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- Шрифты: [Satoshi](https://www.fontshare.com/fonts/satoshi) (Fontshare), [Archivo Black](https://fonts.google.com/specimen/Archivo+Black) (Google Fonts, замена Integral CF)

## Запуск

```bash
npm install
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000).

**Адаптив:** мобильный макет 390px, двухколоночная сетка с `lg` (1024px+), плавные отступы на промежуточных ширинах.

**Интерактив:** изменение количества, удаление товара, пересчёт итогов; hover/active/focus для кнопок и поля промокода.

> **Примечание:** в пути проекта есть кириллица (`диплом`). Turbopack может падать при сборке; в скриптах используется `--webpack`.

## Структура

- `src/app/page.tsx` — страница корзины
- `src/components/cart/` — UI-компоненты
- `src/lib/cart-data.ts` — данные товаров и итогов
- `public/images/` — ассеты из Figma

## Дизайн-токены

| Токен | Значение |
|-------|----------|
| Фон | `#FFFFFF` |
| Текст | `#000000` |
| Вторичный текст | `rgba(0,0,0,0.6)` |
| Граница | `rgba(0,0,0,0.1)` |
| Фон карточки товара | `#F0EEED` |
| Фон контролов | `#F0F0F0` |
| Скидка | `#FF3333` |
