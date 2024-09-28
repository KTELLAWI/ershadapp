import ProtectedRoutedMyCompany from "./ProtectedRoutedMyCompany";

export default function RootLayout({ children }) {
  return (
    <div>
      <ProtectedRoutedMyCompany>{children}</ProtectedRoutedMyCompany>
    </div>
  );
}
