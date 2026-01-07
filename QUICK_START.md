# راهنمای سریع اجرای پروژه

## مراحل اجرا:

### 1. نصب Dependencies (فقط یک بار)

```bash
npm install
```

یا

```bash
yarn install
```

یا

```bash
pnpm install
```

### 2. اجرای Development Server

```bash
npm run dev
```

یا

```bash
yarn dev
```

یا

```bash
pnpm dev
```

### 3. باز کردن در مرورگر

بعد از اجرای دستور بالا، در ترمینال آدرس زیر را خواهید دید:

```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

روی آدرس `http://localhost:5173` کلیک کنید یا آن را در مرورگر باز کنید.

## مشکلات رایج:

### مشکل: `'vite' is not recognized`
**راه حل:** ابتدا `npm install` را اجرا کنید.

### مشکل: Port 5173 در حال استفاده است
**راه حل:** Vite به صورت خودکار پورت دیگری انتخاب می‌کند (مثلاً 5174)

### مشکل: خطاهای TypeScript
**راه حل:** 
```bash
npm run type-check
```

### مشکل: خطاهای ESLint
**راه حل:**
```bash
npm run lint
```

## دستورات مفید:

- `npm run dev` - اجرای development server
- `npm run build` - ساخت نسخه production
- `npm run preview` - پیش‌نمایش نسخه build شده
- `npm run lint` - بررسی کد با ESLint
- `npm run type-check` - بررسی TypeScript

## نکته مهم:

اگر بعد از `npm install` هنوز خطا می‌گیرید:
1. پوشه `node_modules` را حذف کنید
2. فایل `package-lock.json` را حذف کنید (اگر وجود دارد)
3. دوباره `npm install` را اجرا کنید

