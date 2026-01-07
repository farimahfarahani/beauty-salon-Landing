# راهنمای راه‌اندازی پروژه

## مراحل نصب و اجرا

### 1. نصب Dependencies

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

پروژه روی آدرس `http://localhost:5173` اجرا می‌شود.

### 3. Build برای Production

```bash
npm run build
```

فایل‌های build شده در پوشه `dist` قرار می‌گیرند.

### 4. پیش‌نمایش Production Build

```bash
npm run preview
```

## ساختار پروژه

- `src/` - فایل‌های اصلی پروژه
  - `components/` - کامپوننت‌های React
    - `landing/` - کامپوننت‌های صفحه لندینگ
    - `ui/` - کامپوننت‌های UI پایه (مثل Button)
  - `App.tsx` - کامپوننت اصلی App
  - `main.tsx` - نقطه ورود برنامه
  - `index.css` - استایل‌های全局

## تکنولوژی‌های استفاده شده

- **React 18** - کتابخانه UI
- **TypeScript** - زبان برنامه‌نویسی
- **Vite** - Build tool و dev server
- **Tailwind CSS** - Framework CSS
- **Framer Motion** - انیمیشن‌ها
- **Lucide React** - آیکون‌ها

## نکات مهم

1. مطمئن شوید Node.js نسخه 18 یا بالاتر نصب است
2. بعد از نصب dependencies، پروژه آماده اجرا است
3. برای تغییرات در Tailwind، فایل `tailwind.config.js` را ویرایش کنید
4. برای تغییرات در TypeScript، فایل `tsconfig.json` را ویرایش کنید

