import ProtectedRoutedMyEmployee from "./ProtectedRoutedMyEmployee";
export default function RootLayout({ children }) {
  return (
    <div>
      <ProtectedRoutedMyEmployee>{children}</ProtectedRoutedMyEmployee>
    </div>
  );
}
