

export const metadata = {
  title: 'Admin Login | YBF',
};

export default function LoginLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
        />
        <link rel="stylesheet" href="/assets/admin/style/css/vendors_css.css" />
        <link rel="stylesheet" href="/assets/admin/style/css/style.css" />
        <link rel="stylesheet" href="/assets/admin/style/css/skin_color.css" />
      </head>
      <body className="hold-transition theme-info bg-img">
        {children}
      </body>
    </html>
  );
}
